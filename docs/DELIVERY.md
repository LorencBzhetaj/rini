# Preview dhe dorëzimi

Ndryshimet janë përgatitur mbi projektin ekzistues Next.js 16 / React / TypeScript. Më 18 tetor 2026 përdoruesi autorizoi push-in dhe publikimin në production të gjithë paketës. Repository lokal: `C:/Users/Public/Cartongesso/project`.

Production: https://www.mbcartongesso.com/. Deployment-i menaxhohet nga projekti ekzistues `rini` në Vercel, i lidhur me `LorencBzhetaj/rini`, dega `main`.

Shtesa e fundit: logo transparente pa sfond të bardhë, përmasë më e lexueshme në header dhe Google Analytics `G-RD2N0DV1T9` me `next/script` dhe CSP të përshtatshme. Logoja origjinale ruhet; vetëm kopja `public/images/logo-transparent.png` përdoret në header dhe schema.

Preview production lokal: **http://127.0.0.1:3001/**.

Nëse serveri është ndalur, nisja nga dosja e projektit:

```powershell
npm ci
npm run build
npm run start -- --hostname 127.0.0.1 --port 3001
```

Kontrollet HTTP mund të përsëriten me `node scripts/check-site.mjs` ndërsa serveri punon. Nuk kryejnë dërgime formularësh.

## Çfarë ndryshoi

- Pamje e çelët, tekst i errët, thekse kafe dhe tipografi më e lexueshme. Logoja dhe skedarët origjinalë të fotografive/video-ve nuk janë ndryshuar.
- Hero i dukshëm menjëherë, me foto reale dhe video origjinale sipas kërkesës.
- Punimet vijnë pas hero-s; 6 koleksione në vend të 22 kartave me tituj të përsëritur. Fotografitë shtesë hapen brenda albumit.
- Dialoget kanë kontrolle me tastierë, Escape, kthim fokusi dhe navigim mobile; galeria ka fallback HTML kur skriptet mungojnë.
- Shërbime me lidhje të indeksueshme drejt 5 URL-ve ekzistuese; navigim i saktë nga shërbimet te seksionet e homepage-it.
- Formulari dhe kontaktet ruhen; validim native dhe fallback HTML për Formspree. Gjuha e dokumentit ndjek zgjedhjen IT/EN.
- Robots, title, metadata sociale, schema e biznesit dhe gjeografia janë korrigjuar. Të gjitha URL-të ekzistuese ruhen.

## Audit dhe prova

[Audit SEO, kufijtë e verifikimit dhe veprimet e mbetura](SEO-AUDIT.md).

Screenshot-et:

- [Desktop, homepage](screenshots/desktop.jpg)
- [Mobile, homepage](screenshots/mobile.jpg)
- [Desktop, galeria](screenshots/desktop-gallery.jpg)
- [Mobile, albumi](screenshots/mobile-album.jpg)
- [Desktop, faqe shërbimi](screenshots/service-desktop.jpg)
- [Galeria me skriptet të bllokuara](screenshots/no-scripts.jpg)

Build-i dhe kontrollet HTTP kaluan. Formulari u kontrollua për validim dhe ruajtje të integrimit; nuk u dërgua mesazh real. PageSpeed API ktheu 429, ndaj nuk ka metrika të matura të performancës. Search Console dhe Google Business Profile kërkojnë të dhënat/aksesin përkatës. Redirect-i publik non-www 307 duhet kontrolluar në Vercel; konfigurimi ekzistues në kod dhe testi lokal japin 308.

Raporti SEO ruan gjetjet e auditit përpara publikimit. Të dhënat në Search Console dhe në panelin Google Analytics kërkojnë aksesin përkatës; ngarkimi i tag-ut në faqe nuk është verifikim i raporteve brenda llogarisë.
