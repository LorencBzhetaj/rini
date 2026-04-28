# Mr. Cartongesso — Next.js Website

Sito professionale per Mr. Cartongesso, specialisti in controsoffitti LED.
Built with **Next.js 16 + TypeScript + App Router**.

---

## Mappa delle immagini → public/images/

| File originale | Rinominare in | Utilizzo |
|---|---|---|
| 1777255375128_image.png | hero-bg.jpg | Hero background (colonna destra) |
| 1777255404802_image.png | why-bg.jpg | Why Us background |
| 1777255375128_image.png | proj1-cover.jpg | Progetto 1 cover |
| 1777255380872_image.png | proj2-cover.jpg | Progetto 2 foto 1 |
| 1777255385297_image.png | proj2-b.jpg | Progetto 2 foto 2 |
| 1777255390725_image.png | proj3-cover.jpg | Progetto 3 cover |
| 1777255395029_image.png | proj4-cover.jpg | Progetto 4 cover |
| 1777255399171_image.png | proj5-cover.jpg | Progetto 5 foto 1 |
| 1777255432055_image.png | proj5-b.jpg | Progetto 5 foto 2 |
| 1777255438800_image.png | proj6-wip.jpg | Progetto 6 (in posa) |
| 1777255404802_image.png | proj6-cover.jpg | Progetto 6 (finito) |
| 1777255493864_image.png | logo.png | Logo navbar |
| qualsiasi 16:9 bella | og-image.jpg | Social sharing 1200x630 |

### Services images → public/images/
| File | Rinominare in |
|---|---|
| 1777255375128_image.png | service-controsoffitti.jpg |
| 1777255399171_image.png | service-frame.jpg |
| 1777255395029_image.png | service-pareti.jpg |
| 1777255380872_image.png | service-residenziale.jpg |
| 1777255390725_image.png | service-lineare.jpg |
| 1777255432055_image.png | service-commerciale.jpg |

### Videos → public/videos/
| File originale | Rinominare in |
|---|---|
| WhatsApp_Video_2026-04-26_at_9_09_31_PM.mp4 | video1.mp4 |
| WhatsApp_Video_2026-04-26_at_9_12_19_PM.mp4 | video2.mp4 |

---

## Setup

npm install
npm run dev    # http://localhost:3000
npm run build  # build di produzione

## Deployment su Vercel (consigliato)
npx vercel

## Aggiorna il dominio
Cambia https://www.mrcartongesso.it con il tuo dominio in:
- src/app/layout.tsx
- src/app/sitemap.ts
- src/app/robots.ts
