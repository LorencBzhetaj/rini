export type Lang = "it" | "en";

export interface Project {
  id: number;
  slug: string;
  catIT: string;
  catEN: string;
  titleIT: string;
  titleEN: string;
  descIT: string;
  descEN: string;
  coverImage: string;
  media: Array<{ type: "img" | "video"; src: string; alt?: string }>;
}

export interface Service {
  icon: string;
  titleIT: string;
  titleEN: string;
  descIT: string;
  descEN: string;
  items: Array<{ it: string; en: string }>;
  image: string;
  imageAlt: string;
  galleryProjectIds: number[];
}

export const PHONE = "+39 388 999 5326";
export const WHATSAPP_URL = "https://wa.me/393889995326";

export const projects: Project[] = [
  {
    id: 1,
    slug: "soffitto-led-incrociato",
    catIT: "Residenziale — 2025",
    catEN: "Residential — 2025",
    titleIT: "Soffitto LED Incrociato",
    titleEN: "Crossed LED Ceiling",
    descIT: "Controsoffitto elegante con profili LED che si intersecano al centro e cornice luminosa perimetrale. Un effetto scenografico di grande impatto per ambienti residenziali moderni.",
    descEN: "Elegant drop ceiling with intersecting LED profiles at the center and perimeter luminous cornice. A high-impact scenic effect for modern residential environments.",
    coverImage: "/images/proj1-cover.jpg",
    media: [{ type: "img", src: "/images/proj1-cover.jpg", alt: "Soffitto LED Incrociato" }],
  },
  {
    id: 2,
    slug: "soggiorno-pannelli-led",
    catIT: "Residenziale — 2025",
    catEN: "Residential — 2025",
    titleIT: "Soggiorno con Pannelli & LED",
    titleEN: "Living Room — Panels & LED",
    descIT: "Intervento completo in soggiorno: pannelli decorativi in legno, profili LED a incasso nel controsoffitto e parete TV in cartongesso con retroilluminazione RGB.",
    descEN: "Complete living room renovation: decorative wood panels, recessed LED profiles in the drop ceiling, and drywall TV wall with blue RGB backlighting.",
    coverImage: "/images/proj2-cover.jpg",
    media: [
      { type: "img", src: "/images/proj2-cover.jpg", alt: "Soggiorno con pannelli legno e LED" },
      { type: "img", src: "/images/proj2-b.jpg", alt: "Parete TV con retroilluminazione RGB" },
      { type: "video", src: "/videos/video1.mp4" },
      { type: "video", src: "/videos/video2.mp4" },
    ],
  },
  {
    id: 3,
    slug: "soggiorno-led-pennello",
    catIT: "Residenziale — 2025",
    catEN: "Residential — 2025",
    titleIT: "Soggiorno LED a Pennello",
    titleEN: "Living Room — Streak LED",
    descIT: "Controsoffitto a doppio livello con profili LED diagonali che creano linee dinamiche. Luce perimetrale e parete TV attrezzata in cartongesso inclusi nel progetto.",
    descEN: "Double-level drop ceiling with diagonal LED profiles creating dynamic lines. Perimeter light and feature TV wall in drywall included in the project.",
    coverImage: "/images/proj3-cover.jpg",
    media: [{ type: "img", src: "/images/proj3-cover.jpg", alt: "Soggiorno LED a pennello diagonale" }],
  },
  {
    id: 4,
    slug: "parete-tv-led-indiretto",
    catIT: "Soggiorno — 2025",
    catEN: "Living Room — 2025",
    titleIT: "Parete TV con LED Indiretto",
    titleEN: "TV Wall with Indirect LED",
    descIT: "Pannello in cartongesso con incasso per TV e illuminazione LED indiretta perimetrale. L'effetto alone crea una scenografia sofisticata e discreta.",
    descEN: "Drywall panel with TV recess and perimeter indirect LED lighting. The halo effect creates a sophisticated and discreet ambiance.",
    coverImage: "/images/proj4-cover.jpg",
    media: [{ type: "img", src: "/images/proj4-cover.jpg", alt: "Parete TV con LED indiretto" }],
  },
  {
    id: 5,
    slug: "frame-led-geometrici",
    catIT: "Showroom — 2025",
    catEN: "Showroom — 2025",
    titleIT: "Frame LED Geometrici",
    titleEN: "Geometric LED Frames",
    descIT: "Composizione geometrica con cornici LED di grande formato sovrapposte e inclinate. Progetto per spazio commerciale di alto livello.",
    descEN: "Geometric composition with overlapping and angled large-format LED frames. Project for a high-end commercial space.",
    coverImage: "/images/proj5-cover.jpg",
    media: [
      { type: "img", src: "/images/proj5-cover.jpg", alt: "Frame LED geometrici showroom" },
      { type: "img", src: "/images/proj5-b.jpg", alt: "Cornici LED sovrapposte" },
    ],
  },
  {
    id: 6,
    slug: "cucina-soffitto-cassettoni",
    catIT: "Cucina — 2025",
    catEN: "Kitchen — 2025",
    titleIT: "Cucina — Soffitto a Cassettoni LED",
    titleEN: "Kitchen — LED Coffered Ceiling",
    descIT: "Soffitto strutturato a cassettoni con profili LED integrati lungo i bordi degli incassi. La prima foto mostra la struttura durante la posa, la seconda il risultato finale con LED accesi.",
    descEN: "Structured coffered ceiling with LED profiles integrated along the recess edges. The first photo shows the structure during installation, the second the final result with LEDs on.",
    coverImage: "/images/proj6-cover.jpg",
    media: [
      { type: "img", src: "/images/proj6-wip.jpg", alt: "Struttura cartongesso in posa" },
      { type: "img", src: "/images/proj6-cover.jpg", alt: "Cucina con soffitto LED finito" },
    ],
  },
];

export const services: Service[] = [
  {
    icon: "✦",
    titleIT: "Controsoffitti LED",
    titleEN: "LED Drop Ceilings",
    descIT: "Soffitti in cartongesso a uno o più livelli con strip LED integrate. Luce indiretta, cornici luminose, profili lineari incassati.",
    descEN: "Single or multi-level drywall ceilings with integrated LED strips. Indirect light, luminous frames, recessed linear profiles.",
    items: [
      { it: "Luce indiretta perimetrale", en: "Perimeter indirect light" },
      { it: "Profili LED lineari a incasso", en: "Recessed linear LED profiles" },
      { it: "Soffitti multi-livello", en: "Multi-level ceilings" },
      { it: "RGB / CCT / Dimmer", en: "RGB / CCT / Dimmer" },
    ],
    image: "/images/service-controsoffitti.jpg",
    imageAlt: "Controsoffitto LED con luce perimetrale",
    galleryProjectIds: [1, 3],
  },
  {
    icon: "◈",
    titleIT: "Frame LED Geometrici",
    titleEN: "Geometric LED Frames",
    descIT: "Cornici e forme geometriche a LED fissate a soffitto o a parete. Design su misura per showroom, uffici e spazi residenziali di lusso.",
    descEN: "LED frames and geometric shapes mounted to ceiling or wall. Custom design for showrooms, offices, and luxury residential spaces.",
    items: [
      { it: "Rettangolari, trapezi, liberi", en: "Rectangular, trapezoidal, freeform" },
      { it: "Cornici sovrapposte", en: "Overlapping frames" },
      { it: "Grande formato", en: "Large format" },
    ],
    image: "/images/service-frame.jpg",
    imageAlt: "Frame LED geometrici showroom",
    galleryProjectIds: [5],
  },
  {
    icon: "▣",
    titleIT: "Pareti Attrezzate",
    titleEN: "Feature Walls",
    descIT: "Pareti TV, librerie in cartongesso, pannelli rivestimento con illuminazione LED integrata. Materiali pregiati, finiture impeccabili.",
    descEN: "TV walls, drywall shelving, cladding panels with integrated LED lighting. Premium materials, impeccable finishes.",
    items: [
      { it: "Pareti TV con retroilluminazione", en: "TV walls with backlighting" },
      { it: "Pannelli in legno + LED", en: "Wood panels + LED" },
      { it: "Nicchie e mensole", en: "Niches and shelves" },
    ],
    image: "/images/service-pareti.jpg",
    imageAlt: "Parete TV con pannelli legno e LED",
    galleryProjectIds: [2, 4],
  },
  {
    icon: "⬡",
    titleIT: "Cartongesso Residenziale",
    titleEN: "Residential Drywall",
    descIT: "Partizioni interne, contropareti, coibentazione acustica e termica. Rifinitura e stucco a regola d'arte.",
    descEN: "Interior partitions, counter-walls, acoustic and thermal insulation. Professional plastering and finishing.",
    items: [
      { it: "Pareti divisorie", en: "Dividing walls" },
      { it: "Isolamento acustico", en: "Sound insulation" },
      { it: "Stucco e verniciatura", en: "Plaster & painting" },
    ],
    image: "/images/service-residenziale.jpg",
    imageAlt: "Lavori in cartongesso residenziale",
    galleryProjectIds: [2, 3],
  },
  {
    icon: "◐",
    titleIT: "Illuminazione Lineare",
    titleEN: "Linear Lighting",
    descIT: "Installazione di profili LED a incasso su soffitti piatti, inclinati o strutturati. Linee pulite, effetto premium.",
    descEN: "Installation of recessed LED profiles on flat, sloped or structured ceilings. Clean lines, premium effect.",
    items: [
      { it: "Profili flush a incasso", en: "Flush recessed profiles" },
      { it: "Soffitti inclinati", en: "Sloped ceilings" },
      { it: "Linee diagonali e incrociate", en: "Diagonal & crossed lines" },
    ],
    image: "/images/service-lineare.jpg",
    imageAlt: "Profili LED lineari incassati nel soffitto",
    galleryProjectIds: [1, 3],
  },
];

export const stats = [
  { num: "200+", labelIT: "Progetti Realizzati", labelEN: "Projects Delivered" },
  { num: "10+", labelIT: "Anni di Esperienza", labelEN: "Years of Experience" },
  { num: "100%", labelIT: "Soddisfazione Cliente", labelEN: "Client Satisfaction" },
];

export const whyCards = [
  {
    num: "i",
    titleIT: "Design che Trasforma",
    titleEN: "Design That Transforms",
    descIT: "Ogni millimetro, ogni curva serve uno scopo. Soffitti e pareti bellissimi che valorizzano lo spazio e migliorano la qualità della vita.",
    descEN: "Every millimetre, every curve serves a purpose. Beautiful ceilings and walls that enhance the space and improve quality of life.",
  },
  {
    num: "ii",
    titleIT: "LED Integrato su Misura",
    titleEN: "Custom Integrated LED",
    descIT: "Progettiamo sistemi LED nascosti nel cartongesso. Luce indiretta, profili lineari, cornici luminose: ogni effetto scenografico è possibile.",
    descEN: "We design LED systems hidden in drywall. Indirect light, linear profiles, luminous frames: every scenic effect is possible.",
  },
  {
    num: "iii",
    titleIT: "Materiali Premium",
    titleEN: "Premium Materials",
    descIT: "Solo lastre certificate, profili in acciaio galvanizzato e strip LED di alta qualità. Resistenza al fuoco, all'umidità e all'usura garantita.",
    descEN: "Only certified boards, galvanized steel profiles and high-quality LED strips. Fire, moisture and wear resistance guaranteed.",
  },
  {
    num: "iv",
    titleIT: "Preventivo Trasparente",
    titleEN: "Full Transparency",
    descIT: "Preventivo dettagliato e gratuito. Nessun costo nascosto, nessuna sorpresa. Comunicazione diretta e onesta in ogni fase.",
    descEN: "Detailed and free quote. No hidden costs, no surprises. Direct and honest communication at every stage.",
  },
  {
    num: "v",
    titleIT: "Orientati al Risultato",
    titleEN: "Result-Oriented",
    descIT: "Misuriamo il successo dalla tua soddisfazione. Ogni decisione è presa pensando al risultato finale del tuo spazio.",
    descEN: "We measure success by your satisfaction. Every decision is made with the final result of your space in mind.",
  },
];