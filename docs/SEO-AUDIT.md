# M.B Cartongesso — audit SEO dhe korrigjimet lokale

**Audit i fazës së preview-t, 18 tetor 2026, përpara publikimit.** Më pas përdoruesi autorizoi publikimin e paketës, pastrimin e logos dhe shtimin e Google Analytics. Gjetjet dhe statuset e mëposhtme përshkruajnë momentin e auditit fillestar; shih `DELIVERY.md` për kontekstin e versionit të përgatitur për production.

Faqja publike: https://www.mbcartongesso.com/. Kodi: https://github.com/LorencBzhetaj/rini, bazuar në commit `5499e2ef6c9e2c2a1ec61e3c563170e4be64ad01`. Ndryshimet janë lokale në degën `visual-seo-preview`.

Auditimi përdor përgjigjet HTTP, HTML-në fillestare të gjashtë faqeve publike, kodin dhe kontrollet në build-in production lokal. Provat HTTP dhe rezultati i kontrolleve janë në `docs/evidence/`; screenshot-et në `docs/screenshots/`. Raporti paraprak jashtë repository-t ruhet te `C:/Users/Public/Cartongesso/audit/`.

Nuk ka eksport ose akses Search Console, të dhëna analitike ose akses të verifikuar në Google Business Profile. Prandaj problemet e gjetura nuk paraqiten si shkaqe të provuara të klikimeve të ulëta.

## 1. Zbulimi dhe indeksimi

| Prioritet / problem | Provë | Ndikim i mundshëm | Zgjidhje | Status |
|---|---|---|---|---|
| P1 — assets të bllokuara për crawler | `robots.txt` publik ka `Disallow: /_next/`; CSS/JS janë në `/_next/static/` | Mund të pengojë renderimin nga crawler-at | Hiq bllokimin e assets, ruaj `/api/` | Zbatuar dhe kontrolluar lokalisht; kërkon publikim të autorizuar më vonë |
| P1 — homepage pa lidhje HTML drejt shërbimeve | HTML publik kishte anchors dhe kontakte, pa href për pesë shërbimet | Zbulim dhe navigim i dobët i brendshëm | Titujt dhe imazhet e shërbimeve kanë lidhje drejt URL-ve ekzistuese | Zbatuar; të pesë lidhjet verifikohen në HTML fillestar |
| P1 — preloader varet nga JS | `LoadingScreen.tsx` renderonte mbulesë fikse `zIndex:9999`, hiqej vetëm nga `useEffect` | Script failure mund të bllokojë përdorimin | Hiq preloader-in nga homepage; hero pa opacity fillestare 0 | Zbatuar; test me `script-src 'none'` kaloi për përmbajtjen dhe albumet |
| P2 — redirect publik non-www është i përkohshëm | HTTPS non-www → **307** → www; `next.config.ts` ekzistues deklaron `permanent:true` | Sinjal i papërshtatshëm nëse zhvendosja është e përhershme | Kontrollo redirect-in e domain-it në Vercel; kodi ekzistues lokal jep **308**, edhe me path shërbimi | Diferenca publik/host konfirmuar; kërkon konfigurim hosti, pa ndryshim production nga kjo punë |
| Kontroll HTTPS | HTTP www → **308** → HTTPS www → **200** | Konsolidim i saktë për root-in e testuar | Ruaj konfigurimin | Kaloi për mostrën publike |
| Kontroll sitemap/canonical | Sitemap publik ka homepage + 5 URL; të gjashta japin 200 dhe canonical përkatës | Nuk u gjet problem i drejtpërdrejtë në këtë mostër | Ruaj të gjitha URL-të dhe sitemap-in | Kaloi publikisht dhe lokalisht |
| Kontroll noindex | Homepage publik: `index, follow`; pa `X-Robots-Tag: noindex` në përgjigjet e kapura | Nuk u gjet noindex aksidental në mostrën e kontrolluar | Kontrollo indeksimin real me URL Inspection | Kaloi kontrolli i përgjigjeve; indeksimi real i panjohur |
| Kontroll 404 | `/audit-missing-page-20261018` jep HTTP 404 | Mostra nuk sillet si soft 404 | Ruaj trajtimin | Kaloi publikisht dhe lokalisht; nuk është crawl shterues i çdo URL-je të mundshme |

Përmbajtja kryesore ekzistonte në HTML publik, por H1 i homepage-it kishte `opacity:0` deri në animacion. Versioni i ri ka tekst, foto hero, lidhje shërbimesh dhe formular në HTML fillestar. Albumet përdorin `<details>` me lidhje fotografish si fallback kur skriptet bllokohen; me JS hapet dialogu. Formulari ruan `useForm("xrejwpvl")` dhe ka edhe `action="https://formspree.io/f/xrejwpvl" method="POST"`. Ky është modeli HTML i dokumentuar nga [Formspree](https://formspree.io/html/); dorëzimi real i një mesazhi nuk është testuar.

Google shpjegon rëndësinë e renderimit dhe burimeve të aksesueshme në [dokumentimin për JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics). Përmirësimet këtu krijojnë kushte më të mira teknike; nuk provojnë që Google i kishte përjashtuar faqet.

### IT/EN

Gjuhët ekzistuese ndërrohen në të njëjtën URL përmes React context. Nuk ka variante reale `/en/...`, ndaj nuk u krijua hreflang i dyfishtë drejt të njëjtës URL. U ruajt ky mekanizëm dhe `html.lang` tani ndjek gjuhën e zgjedhur. Gjuha ruhet gjatë navigimit me Next Link mes shërbimeve dhe homepage-it; ngarkimi i ri i drejtpërdrejtë vazhdon të fillojë në italisht si më parë. Metadata e indeksueshme mbetet italisht.

## 2. Pozicionimi dhe përputhja me kërkimet

| Prioritet / problem | Provë | Ndikim | Zgjidhje | Status |
|---|---|---|---|---|
| P2 — brand i dyfishuar në title | Të pesë titujt publikë mbaronin `M.B Cartongesso \| M.B Cartongesso` | Tituj të gjatë dhe më pak të qartë | Layout-et japin titullin e shërbimit; template shton brand-in një herë | Zbatuar; tituj unikë për të gjashta faqet |
| P2 — metadata sociale e trashëguar nga homepage | Root metadata përdorej edhe në shërbime | Preview social jo specifik për faqen | Metadata e përbashkët për shërbimet me titull, përshkrim, canonical dhe og:url të saktë | Zbatuar; helper `src/lib/serviceMetadata.ts` |
| P2 — pasaktësi gjeografike | Tekste te Contact dhe dy shërbime: `provincia di Piemonte` | Informacion gjeografik i pasaktë | `provincia di Cuneo, in Piemonte` | Korrigjuar; pa shtuar zona të reja |
| P2 — përparësi e dobët e punimeve reale | Homepage: hero → shërbime → përparësi → galeri me një kartë për çdo foto | Përsëritje dhe orientim më i vështirë | Hero → punime/koleksione → shërbime → prezantim → kontakt | Zbatuar, desktop/mobile |
| P2 — tituj të përsëritur në galeri | Kodi `projects.flatMap(project.media)` krijonte 22 karta për 6 rekorde | Fotot shfaqeshin si karta të veçanta me të njëjtin titull | Një kopertinë për rekord dhe fotografitë brenda albumit | Zbatuar; 6 albume, 22 foto të ruajtura |
| Kontroll alt text | Imazhet ekzistuese kanë alt; disa përshkrime janë të përgjithshme dhe me numra | Përshkrim jo maksimalisht i dobishëm | Hero ka alt për pamjen reale; alt-et ekzistuese të albumeve ruhen; imazhet e dyta të lidhjeve të shërbimeve janë dekorative | Pjesërisht përmirësuar; përshkrimi editorial foto për foto mbetet mundësi e ardhshme |

H1/H2/H3: një H1 për faqe, seksionet e homepage-it kanë H2 dhe shërbimet H3. Titujt dhe meta descriptions e gjashtë URL-ve janë të dallueshme. U hoq lista e gjatë `meta keywords`; nuk llogaritet si përfitim i matur renditjeje.

### Struktura e përmbajtjes dhe URL-të

Faqet e shërbimeve **ekzistojnë tashmë** dhe u ruajtën:

| Kërkim / nevojë reale | URL e përshtatshme | Përmirësimi konkret |
|---|---|---|
| Cartongesso Busca / Cuneo; prezantim i ofertës | `/` | Shërbimi dhe zona janë të dukshme, punime reale dhe lidhje shërbimesh |
| Controsoffitti LED | `/controsoffitti-led` | Titull i saktë, galeri reale dhe lidhje nga homepage |
| Pareti attrezzate in cartongesso | `/pareti-attrezzate` | Faqe specifike me tekstin dhe fotografitë ekzistuese |
| Frame LED geometrici | `/frame-led-geometrici` | Ruaj përmbajtjen specifike; mos e dubliko si faqe qytetesh |
| Pareti/contropareti dhe punime residenziali | `/cartongesso-residenziale` | Korrigjim gjeografie dhe lidhje të brendshme |
| Illuminazione lineare LED | `/illuminazione-lineare` | Ruaj shpjegimet dhe shembujt e lidhur me shërbimin |

Nuk u krijuan faqe qytetesh ose blogje të përgjithshme. `#work`, `#services`, `#why`, `#contact` janë seksione të homepage-it, jo faqe më vete për indeksim. Nuk ka ndryshime URL-je dhe nuk nevojiten redirect-e për rrugë të reja.

Dy rekordet e para të galerisë janë koleksione kategorish (9 dhe 7 foto), jo projekte individuale të konfirmuara. Kodi i gruponte paraprakisht, por pamjet dhe përshkrimet nuk japin identitet pune për çdo fotografi. UI i etiketon si **raccolta lavori** dhe përshkrimi sqaron se tregojnë zgjidhje të ndryshme. Katër rekordet e tjera ruhen nga burimi ekzistues. Për albume për çdo kantier duhet lista e pronarit: cilat foto janë i njëjti punim, çfarë është realizuar dhe cilat informacione mund të publikohen. Nuk u shtuan vende, vite, projekte ose recensione të reja.

Me informacion të ardhshëm të konfirmuar, një case study mund të ketë: nevojën e klientit → zgjidhjen reale → materiale të dokumentuara → foto para/gjatë/pas → kufizime dhe kontakt. Nuk u krijua një faqe e tillë me të dhëna të supozuara.

## 3. Impressions, CTR dhe klikimet

**Të panjohura pa Search Console:** sa URL janë të indeksuara, çfarë queries sjellin impressions, CTR, pozicionet, si kanë ndryshuar në kohë dhe cilat faqe nuk shfaqen. Dizajni i ri nuk mund të merret si shpjegimi i vetëm për klikimet e ulëta.

Pas një publikimi të autorizuar, kontrollo menjëherë:

1. Property-n e domain-it; sitemap-in dhe statusin e leximit.
2. URL Inspection për të gjashta URL-të: indexability, canonical i zgjedhur nga Google, burimet e renderimit dhe data e crawl-it.
3. Page indexing: përjashtimet reale, `Crawled/Discovered — currently not indexed`, duplicate/canonical dhe server errors. Mos supozo që këto ekzistojnë pa raportin.

Për analizën e performancës organike, eksporto dy periudha të krahasueshme prej 28 ditësh me të dhëna të plota, si edhe krahasim vit më vit kur është i disponueshëm. Nda branded (M.B/Mr Cartongesso dhe variantet e emrit) nga non-branded. Krahaso queries, pages, clicks, impressions, CTR dhe position; segmentoji sipas pajisjes dhe vendit.

- **Impressions pa klikime:** shiko së bashku pozicionin, synimin e query-t dhe titullin/snippet-in; CTR i ulët nuk është automatikisht problem copywriting-u.
- **Pak impressions:** kontrollo indeksimin, përputhjen e shërbimit, konkurrencën dhe kërkesën reale.
- **Pozicione në përmirësim, CTR i pandryshuar:** krahaso të njëjtat queries/pages; mesatarja e përgjithshme mund të ndryshojë nga përzierja e kërkimeve.
- Shëno datën reale të publikimit për krahasimin. Mos nxirr përfundime nga pak ditë ose nga një ndryshim i vetëm.

## 4. SEO lokale dhe konkurrenca

| Problem | Provë | Ndikim | Zgjidhje | Status |
|---|---|---|---|---|
| Dy identitete të biznesit | Root schema `mbcartongesso.com/#business`; footer schema `mrcartongesso.it/#business` | Identitet i paqartë | Hiq schema-n e dytë; mbaj një entitet `HomeAndConstructionBusiness` | Zbatuar; JSON-LD parse dhe @id kontrolluar në 6 faqe |
| Të dhëna tepër specifike të padukshme | Root përmbante `streetAddress:Busca`, koordinata, orare, çmime/mënyra pagese | Pretendime që nuk mbështeten nga përmbajtja e dukshme | Hiq fushat; ruaj qytetin/rajonin, telefonin dhe ofertën ekzistuese | Zbatuar; nuk u shpik adresë rruge |
| FAQ e padukshme | Root kishte FAQPage pa seksion FAQ në përmbajtjen e dukshme | Mospërputhje schema/përmbajtje | Hiq FAQPage | Zbatuar |
| Telefon dhe kontakte | `+393889995326` në schema, tel dhe WhatsApp | Konsistencë në kanalet kryesore | Ruaj numrin dhe profilet ekzistuese | Target-et verifikuar; nuk u nis telefonatë/mesazh |

Schema është kontrolluar për JSON të vlefshëm dhe përputhjen e fushave kryesore, jo me një test të jashtëm të rich results mbi preview-n lokal. Nuk u pretendua adresë e plotë për të plotësuar një test. Përputhshmëria me schema.org dhe pranueshmëria për një veçori të Google janë çështje të ndryshme; shih [LocalBusiness, Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/local-business). Shtimi/korrigjimi i schema-s nuk premton rezultat të pasur.

### Mostra e konkurrencës, 18 tetor 2026

U kërkua publikisht “cartongesso Busca Cuneo controsoffitti LED”. U inspektuan faqet zyrtare [MEI Controsoffitti](https://meicontrosoffitti.it/) dhe [Mondino Isolamenti](https://www.mondinoisolamenti.it/). MEI paraqet shërbime të ndara, galeri dhe kontakte në Borgo San Dalmazzo; Mondino ka lidhje të veçanta për controsoffitti, pareti dhe isolamento dhe informacion biznesi të dukshëm. Kjo është një mostër e ofertës konkurrente, jo matje pozicioni në Google Maps ose renditje nga Busca. Nuk u verifikuan profilet e tyre GBP, backlink-et ose trafiku.

Për M.B, avantazhi editorial i mundshëm është dokumentimi i punimeve reale me LED dhe zgjidhjeve të tyre konkrete. Ky është një **interpretim nga mostra**, jo provë e kërkesës ose e një avantazhi renditjeje. Nuk u kopjuan statistika, pretendime ose tekste konkurrentësh.

### Jashtë kodit, sipas prioritetit

1. **P1 — Search Console:** merr baseline-in dhe verifiko indeksimin/canonical përpara interpretimit të klikimeve.
2. **P1 — Vercel:** kontrollo redirect-in non-www në nivel domain-i; kodi lokal jep 308, production ende jep 307. Pas aprovimit të publikimit, verifiko root dhe path-et në HTTP/HTTPS, www/non-www.
3. **P1 — informacioni i biznesit:** konfirmo emrin zyrtar/alternate name, zonën reale të shërbimit, profilin Instagram, oraret dhe kushtet ekzistuese të ofertës. Kontrollo deklaratat ekzistuese për materiale të certifikuara dhe përgjigje brenda 24 orësh me pronarin; nuk janë certifikuar nga ky audit.
4. **P2 — Google Business Profile:** kontrollo verifikimin, kategorinë që përputhet me aktivitetin, telefonin, website, oraret reale dhe zonën e shërbimit; përdor foto reale. Mos paraqit adresë pritjeje klientësh nëse biznesi nuk funksionon në atë mënyrë. Rekomandimet bazohen në [udhëzimet zyrtare të Google për dukshmërinë lokale](https://support.google.com/business/answer/7091). Nuk është pretenduar se profili mungon ose ka gabime.
5. **P2 — reputacioni dhe prania lokale:** mbaj NAP të njëjtë në profilet zyrtare dhe listimet reale; kërko feedback të sinqertë nga klientët dhe përgjigju recensioneve. Mos shto vlerësime të sajuara në faqe ose schema.
6. **P2 — albumet:** konfirmo lidhjen foto/punim, lejet e publikimit dhe përshkrime specifike për çdo foto përpara ndarjes në case studies.
7. **P2 — verifikimi i formularit:** konfirmo pronësinë, aktivizimin dhe kufizimet e domain-it në Formspree; bëj një dërgim real të kontrolluar kur të jetë autorizuar. Ky audit nuk dërgoi mesazhe.

## 5. Performanca dhe qëndrueshmëria

| Gjetje | Ndryshim | Verifikim / kufi |
|---|---|---|
| Video hero nisej automatikisht | Fotografia reale është hero i menjëhershëm; videoja origjinale 2,199,886 bytes montohet vetëm pas klikimit | HTML fillestar nuk përmban video; test UI: readyState 4, error null, playback aktiv |
| Hero si background CSS + animacione të fshehta | Next Image me `preload`, `sizes`, hapësirë të rezervuar, pa lazy loading për hero | Kontroll HTML dhe screenshot; LCP nuk është matur |
| 22 karta në galeri | 6 kopertina; vetëm fotografia aktive e albumit montohet pas hapjes | Kontroll UI: numëruesit 9/7/1/1/2/2; pa thumbnails që shkarkojnë gjithë albumin |
| Font CSS me `@import` nga Google | `next/font` me fontet ekzistuese, self-hosting dhe `display:swap` | Build kaloi; fonts në assets lokale të Next |
| Foto kontakti që mungon | U hoq referenca `/images/contact-bg.jpg`; seksion i çelët | Asset-i mungonte në repository; 29 assets aktuale të referuara kontrollohen |
| Motion dhe mobile | Reduced motion CSS, touch targets, modal native, foto me dimensione të rezervuara | UI desktop/mobile; pa të dhëna reale CLS/INP |

Tentativa për PageSpeed Insights mobile të faqes publike ktheu **HTTP 429, quota exceeded**; prova në `docs/evidence/pagespeed-mobile.json`. Nuk ka rezultat Lighthouse ose CrUX të marrë në këtë punë dhe nuk raportohen numra LCP, CLS ose INP. Matjet laboratorike të preview-t dhe të dhënat e përdoruesve të production duhen mbajtur të ndara. Pas publikimit të autorizuar, përdor PSI/Lighthouse për laboratorin dhe CrUX/Search Console Core Web Vitals kur ka volum të mjaftueshëm.

## 6. Rezultatet e kontrolleve

- `npm ci --no-audit --no-fund`: kaloi; stack-u dhe lockfile u ruajtën.
- `npm run build`: kaloi, përfshirë TypeScript dhe prerenderimin e route-ve.
- `node scripts/check-site.mjs`: kaloi për 6 faqe, metadata unike, një H1, canonical, schema, kontakte/formular, HTML fillestar, 29 assets, robots, sitemap, 404 dhe redirect 308 lokal me path të ruajtur. Log në `docs/evidence/local-checks.txt`.
- `git diff --check`: kaloi. Repository nuk kishte suite testesh ose script `test`; nuk pretendohet një suite që nuk ekziston.
- Browser UI: desktop 1440px; mobile 390px dhe 320px. Të pesë shërbimet u kontrolluan për dalje horizontale të titujve/tekstit/kontejnerëve në 320px dhe 1440px; nuk u gjetën. Rezultatet në `docs/evidence/responsive-checks.json`.
- Galeria: të gjashtë albumet hapen me numëruesin fillestar të saktë; Next, shigjeta e tastierës, Escape dhe kthimi i fokusit u verifikuan. Tab nga mbyllja kalon te navigimi i albumit. Swipe është implementuar, por nuk u verifikua në pajisje fizike me prekje.
- IT/EN: teksti dhe `html.lang` ndërrohen; navigimi shërbim → homepage ruan gjuhën; menuja mobile mbyllet pas zgjedhjes.
- Formulari: fusha dhe endpoint-i u ruajtën; dërgimi bosh bllokohet nga validimi native dhe fokuson emrin. Nuk u dërgua formular i plotësuar, prandaj dorëzimi në inbox dhe gjendjet e rrjetit/suksesit nuk quhen të testuara end-to-end.
- WhatsApp/telefon/Instagram: target-et u kontrolluan në markup; nuk u dërgua mesazh ose telefonatë.
- Skripte të bllokuara: test lokal me CSP `script-src 'none'`; H1 opacity 1, pa preloader bllokues, albumi native hap 9 lidhjet e fotografive, formulari ka action/method HTML. Screenshot `no-scripts.jpg`.

Nuk ka premtim për pozicion të parë, rich results ose rritje të garantuar klikimesh. Matja e ndikimit kërkon publikimin e autorizuar, recrawl dhe të dhëna të krahasueshme në kohë.
