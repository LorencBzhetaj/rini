import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { request as httpRequest } from 'node:http';
import { request as httpsRequest } from 'node:https';

// HTTP regression checks against a running production preview; no messages are sent.
const base = process.argv[2] || 'http://127.0.0.1:3001';
const canonicalBase = 'https://www.mbcartongesso.com';
const paths = ['', '/controsoffitti-led', '/pareti-attrezzate', '/frame-led-geometrici', '/cartongesso-residenziale', '/illuminazione-lineare'];
const titles = new Set();
const descriptions = new Set();
const assets = new Set();
for (const path of paths) {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, `${path || '/'} status`);
  assert(response.headers.get('content-security-policy')?.includes('https://www.googletagmanager.com'), 'Google tag allowed by CSP');
  assert(!response.headers.get('x-robots-tag')?.includes('noindex'));
  const html = await response.text();
  assert(html.includes('G-RD2N0DV1T9'), 'Google Analytics tag is included');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert(title && description, 'metadata present');
  assert(!titles.has(title), 'unique title');
  assert(!descriptions.has(description), 'unique description');
  titles.add(title); descriptions.add(description);
  assert.equal((title.match(/M\.B Cartongesso/g) || []).length, 1, 'brand appears once in title');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'one H1');
  assert(html.includes(`<link rel="canonical" href="${canonicalBase}${path}"`), 'preserved canonical');
  assert(html.includes('name="robots" content="index, follow"'), 'indexable metadata');
  assert(!html.includes('mrcartongesso.it'), 'no conflicting domain');
  assert(!html.includes('provincia di Piemonte'), 'geography corrected');
  assert(!html.includes('FAQPage'), 'no invisible FAQ schema');
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match=>JSON.parse(match[1]));
  const business = schemas.filter(schema=>schema['@type']==='HomeAndConstructionBusiness');
  assert.equal(business.length, 1, 'single business identity');
  assert.equal(business[0]['@id'], `${canonicalBase}/#business`);
  assert(!business[0].address.streetAddress, 'no fabricated street');
  assert.equal(business[0].telephone, '+393889995326');
  assert(html.includes('tel:+393889995326') && html.includes('https://wa.me/393889995326'), 'contact targets');
  assert(html.includes('name="name"') && html.includes('name="email"') && html.includes('name="message"'), 'form preserved');
  assert(html.includes('action="https://formspree.io/f/xrejwpvl"') && html.includes('method="POST"'), 'native form fallback');
  for(const match of html.matchAll(/(?:src|href)="([^"<>]+)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if(url.startsWith('/_next/image?')) {const file=new URL(url, base).searchParams.get('url');if(file?.startsWith('/'))assets.add(file);}
    else if(/^\/(images|uploads|videos)\//.test(url))assets.add(url);
  }
  if(!path) {
    for(const service of paths.slice(1)) assert(html.includes(`href="${service}"`), 'discoverable service link');
    assert(html.includes('Lo spazio prende') && html.includes('Cartongesso e illuminazione LED su misura'), 'core content in initial HTML');
    assert(!/<h1[^>]*opacity:0/.test(html), 'H1 visible before hydration');
    assert(!html.includes('z-index:9999'), 'no blocking loader');
    assert(!html.includes('<video'), 'video not fetched until user requests it');
    assert.equal((html.match(/<details>/g) || []).length, 6, 'native album fallback without JavaScript');
    assert(html.includes('href="/uploads/controfisi8.png"'), 'additional photos have native fallback links');
    const hero = [...html.matchAll(/<img[^>]+>/g)].map(m=>m[0]).find(img=>img.includes('%2Fimages%2Fhero-bg.jpg'));
    assert(hero && !hero.includes('loading="lazy"'), 'hero not lazy loaded');
  }
  console.log(`PASS ${path || '/'} — HTTP, metadata, H1, schema, contacts, initial HTML`);
}
for(const match of readFileSync('src/lib/data.ts','utf8').matchAll(/"(\/(?:images|uploads|videos)\/[^"\n]+)"/g)) assets.add(match[1]);
assets.add('/videos/hero.mp4');
for(const asset of assets) assert(existsSync(join(process.cwd(), 'public', asset.split('?')[0])), `missing local asset ${asset}`);
console.log(`PASS ${assets.size} referenced public image assets exist`);
const robots = await (await fetch(`${base}/robots.txt`)).text();
assert(!robots.includes('Disallow: /_next/'), 'crawler assets allowed');
assert(robots.includes(`Sitemap: ${canonicalBase}/sitemap.xml`));
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
for(const path of paths) assert(sitemap.includes(`<loc>${canonicalBase}${path}</loc>`));
assert.equal((await fetch(`${base}/audit-missing-page-20261018`)).status, 404);
// fetch ignores a custom Host in some runtimes; use HTTP directly for this host rule.
const redirect = await new Promise((resolve, reject) => {
  const request = base.startsWith('https:') ? httpsRequest : httpRequest;
  const req = request(`${base}/controsoffitti-led`, {headers:{Host:'mbcartongesso.com'}}, response => {
    response.resume(); resolve({status: response.statusCode, location: response.headers.location});
  });
  req.on('error', reject); req.end();
});
assert.equal(redirect.status, 308);
assert.equal(redirect.location, `${canonicalBase}/controsoffitti-led`);
console.log('PASS robots, sitemap, genuine 404 and permanent non-www redirect preserving path');
