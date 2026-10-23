export type Locale = 'it' | 'en' | 'fr';

export interface NavItem {
  id: string;
  label: Record<Locale, string>;
  href: string;
}

export const navItems: NavItem[] = [
  { id: 'home', label: { it: 'Home', en: 'Home', fr: 'Accueil' }, href: '#home' },
  { id: 'giovanna', label: { it: 'Giovanna', en: 'Giovanna', fr: 'Giovanna' }, href: '#giovanna' },
  { id: 'eventi', label: { it: 'Eventi', en: 'Events', fr: 'Événements' }, href: '#eventi' },
  { id: 'esperienze', label: { it: 'Esperienze', en: 'Experiences', fr: 'Expériences' }, href: '#esperienze' },
  { id: 'servizi', label: { it: 'Servizi', en: 'Services', fr: 'Services' }, href: '#servizi' },
  { id: 'contatti', label: { it: 'Contatti', en: 'Contact', fr: 'Contact' }, href: '#contatti' },
];

export const heroContent = {
  subtitle: {
    it: 'ALTA CUCINA • CATERING DI LUSSO • ARTE BIANCA',
    en: 'FINE DINING • LUXURY CATERING • SOURDOUGH ART',
    fr: 'HAUTE GASTRONOMIE • TRAITEUR DE LUXE • ART DU LEVAIN',
  },
  title: 'Giovanna De Vincentis',
  brand: 'Gio Events & More',
  role: {
    it: 'Lady Chef & Ambasciatrice Enogastronomica d’Abruzzo',
    en: 'Lady Chef & Culinary Ambassador of Abruzzo',
    fr: 'Lady Chef & Ambassadrice Culinaire des Abruzzes',
  },
  bioParagraph1: {
    it: 'Benvenuti nel mio universo gastronomico, dove l’autenticità millenaria delle radici abruzzesi incontra l’eleganza dell’alta cucina contemporanea. Nata e cresciuta tra gli uliveti storici di Tocco da Casauria, ho trasformato l’amore per la mia terra in un percorso professionale costellato di ricerca, rigore e passione instancabile.',
    en: 'Welcome to my culinary universe, where the age-old authenticity of Abruzzo heritage meets the elegance of contemporary haute cuisine. Born and raised amid the historic olive groves of Tocco da Casauria, I turned love for my homeland into a quest of technique, rigor, and heartfelt passion.',
    fr: 'Bienvenue dans mon univers gastronomique, où l’authenticité des racines des Abruzzes rencontre l’élégance de la haute gastronomie contemporaine. Née et élevée au cœur des oliveraies historiques de Tocco da Casauria, j’ai transformé l’amour de mon terroir en une quête d’excellence.',
  },
  bioParagraph2: {
    it: 'Con Gio Events and More do vita a format di alta ristorazione su misura: cene di gala diplomatiche, eventi privati esclusivi, consulenze per prestigiosi luxury brand ed esperienze sensoriali che celebrano la purezza degli oli extravergini monovarietali, le erbe spontanee della Majella e la magia dei grandi lievitati a pasta madre.',
    en: 'Through Gio Events and More, I curate bespoke dining experiences: diplomatic gala dinners, exclusive private banquets, luxury culinary consulting, and sensory journeys celebrating single-cultivar extra virgin olive oils, wild herbs of Majella, and the mastery of live sourdough.',
    fr: 'À travers Gio Events and More, je conçois des réceptions gastronomiques sur mesure : dîners de gala diplomatiques, événements privés exclusifs, conseils culinaires de prestige et voyages sensoriels sublimant les huiles d’olive extra vierges et le grand levain naturel.',
  },
  ctaPrimary: {
    it: 'Richiedi una Proposta Esclusiva',
    en: 'Request a Private Proposal',
    fr: 'Demander un Devis Privé',
  },
  ctaSecondary: {
    it: 'Esplora i Miei Valori',
    en: 'Discover My Values',
    fr: 'Découvrir Mes Valeurs',
  },
};

export const valuesContent = {
  title: {
    it: 'I Miei Valori',
    en: 'My Values',
    fr: 'Mes Valeurs',
  },
  subtitle: {
    it: 'FILOSOFIA, ETICA E RICERCA CONTINUA',
    en: 'PHILOSOPHY, ETHICS AND CONSTANT RESEARCH',
    fr: 'PHILOSOPHIE, ÉTHIQUE ET RECHERCHE PERMANENTE',
  },
  manifesto: {
    it: 'Sono chef, pastry chef e architetto: una mente progettuale prestata all’alta gastronomia, capace di fondere rigore strutturale e istinto creativo fuori scala. Con un background radicato nell’eccellenza e una solida esperienza maturata nella brigata del ristorante stellato Villa Maiella, interpreto la cucina come un vero e proprio progetto culturale. La mia cifra stilistica è audace, contemporanea ed elegante: una firma gastronomica memorabile che trasforma ogni piatto in un’esperienza sensoriale potente, dove ricerca, territorio e innovazione si fondono con carattere e personalità.',
    en: 'I am a chef, pastry chef and architect: a design-minded creative devoted to haute gastronomy, able to blend structural rigour with an outsized creative instinct. With a background rooted in excellence and solid experience gained in the brigade of the Michelin-starred restaurant Villa Maiella, I approach cooking as a true cultural project. My style is bold, contemporary and elegant: a memorable gastronomic signature that turns every dish into a powerful sensory experience, where research, terroir and innovation merge with character and personality.',
    fr: 'Je suis cheffe, cheffe pâtissière et architecte : un esprit de conception au service de la haute gastronomie, capable de fondre rigueur structurelle et instinct créatif hors norme. Forte d’un parcours ancré dans l’excellence et d’une solide expérience acquise au sein de la brigade du restaurant étoilé Villa Maiella, j’interprète la cuisine comme un véritable projet culturel. Ma signature est audacieuse, contemporaine et élégante : une empreinte gastronomique mémorable qui transforme chaque assiette en une expérience sensorielle intense, où recherche, terroir et innovation se mêlent avec caractère et personnalité.',
  },
  pillars: [
    {
      title: { it: 'Radici & Territorio', en: 'Roots & Terroir', fr: 'Racines & Terroir' },
      desc: {
        it: 'La cultivar Casaurina e la biodiversità d’Abruzzo come fulcro di ogni ricetta.',
        en: 'The Casaurina cultivar and Abruzzo biodiversity at the core of every creation.',
        fr: 'La variété Casaurina et la biodiversité des Abruzzes au cœur de chaque assiette.',
      },
    },
    {
      title: { it: 'Cultura dell’Olio EVO', en: 'EVOO Culture', fr: 'Culture de l’Huile d’Olive' },
      desc: {
        it: 'Vincitrice del Premio Nazionale Extra Cuoca, trasformo l’olio da condimento a protagonista.',
        en: 'National Extra Cuoca laureate, elevating extra virgin olive oil to protagonist.',
        fr: 'Lauréate nationale Extra Cuoca, transformant l’huile d’olive en star du plat.',
      },
    },
    {
      title: { it: 'Eleganza & Precisione', en: 'Elegance & Precision', fr: 'Élégance & Rigueur' },
      desc: {
        it: 'Estetica minimalista luxury, rigore geometrico ed equilibrio aromatico perfetto.',
        en: 'Luxury minimal aesthetics, sculptural balance, and harmonic sensory finesse.',
        fr: 'Esthétique épurée de luxe, équilibre sculptural et justesse aromatique absolue.',
      },
    },
  ],
  dishes: [
    {
      id: 'dish-1',
      title: 'Mousse al cioccolato e namelaka di violetta con polvere di olio',
      titleEn: 'Chocolate mousse, violet namelaka & EVOO crystallised dust',
      titleFr: 'Mousse au chocolat, namelaka à la violette et poudre d’huile d’olive',
      file: 'piatti/mousse-violetta.jpg',
      category: { it: 'Alta Pasticceria Sensoriale', en: 'Sensory Haute Pastry', fr: 'Haute Pâtisserie Sensorielle' },
      description: {
        it: 'Un dialogo avanguardistico tra l’intensità del cacao monorigine criollo, la vellutata florealità della namelaka alla violetta e una setosa polvere sferificata di olio extravergine d’oliva Casaurino.',
        en: 'An avant-garde dialogue between single-origin Criollo chocolate, gentle floral violet namelaka, and a silky dust of Casaurino extra virgin olive oil.',
        fr: 'Un dialogue délicat entre l’intensité du chocolat Criollo grand cru, la douceur florale de la namelaka violette et la poudre d’huile d’olive Casaurino.',
      },
      imageFallback: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'dish-2',
      title: 'Spontaneus: erbe spontanee della Majella, stracciata e pomodorino confit',
      titleEn: 'Spontaneus: wild mountain herbs, creamy stracciata & tomato confit',
      titleFr: 'Spontaneus : herbes sauvages de la Majella, stracciata et tomate confite',
      file: 'piatti/spontaneus-stracciata.jpg',
      category: { it: 'Piatto Iconico del Territorio', en: 'Signature Terroir Course', fr: 'Plat Signature du Terroir' },
      description: {
        it: 'Un inno alla biodiversità selvatica: misticanza raccolta a mano sui pascoli montani, la freschezza lattica della stracciata pugliese-abruzzese e pomodorini confit caramellati a bassa temperatura.',
        en: 'Tribute to wild mountain flora: hand-foraged leaves, local artisanal creamy stracciata, and slow-roasted heritage cherry tomato confit.',
        fr: 'Hymne à la flore sauvage : herbes de montagne cueillies à la main, stracciata crémeuse et tomates cerises confites à basse température.',
      },
      imageFallback: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'dish-3',
      title: 'Zafferano dell’Aquila DOP, petali di rosa e liquirizia pura',
      titleEn: 'L’Aquila PDO saffron, rose petals & pure Atri licorice',
      titleFr: 'Safran de L’Aquila AOP, pétales de rose et réglisse pure d’Atri',
      file: 'piatti/zafferano-liquirizia.jpg',
      category: { it: 'Creazione d’Autore', en: 'Signature Masterpiece', fr: 'Création d’Auteur' },
      description: {
        it: 'Una creazione d’alta cucina premiata nei concorsi nazionali: l’oro rosso dell’Altopiano di Navelli incontra il profumo soave della rosa damascena e la nota balsamica della liquirizia nera abruzzese.',
        en: 'An award-winning fine dining composition marrying the red gold of Navelli saffron with delicate damask rose petals and balsam-rich pure licorice root.',
        fr: 'Composition récompensée mêlant l’or rouge du safran de Navelli, l’élégance de la rose et les notes réglissées d’Atri.',
      },
      imageFallback: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85',
    },
  ],
};

export const internationalEventsContent = {
  title: {
    it: 'Eventi Internazionali',
    en: 'International Events',
    fr: 'Événements Internationaux',
  },
  subtitle: {
    it: 'LA GASTRONOMIA ITALIANA NEL MONDO',
    en: 'ITALIAN HAUTE CUISINE WORLDWIDE',
    fr: 'LA GASTRONOMIE ITALIENNE À TRAVERS LE MONDE',
  },
  intro: {
    it: 'Dalle cene di gala ufficiali per le Ambasciate d’Italia a Riyadh e in Medio Oriente, ai grandi palcoscenici di Slow Food Terra Madre e alle edizioni esclusive di Queen of Taste a Cortina d’Ampezzo. Portare la cultura culinaria italiana ai massimi livelli diplomatici e culturali è una missione che vivo con orgoglio, rigore e un profondo senso di rappresentanza.',
    en: 'From official diplomatic gala banquets for the Italian Embassy in Riyadh and the Middle East, to the international stages of Slow Food Terra Madre and Cortina Queen of Taste. Championing Italian culinary heritage across diplomatic circles is a mission embraced with pride, rigor, and unmatched elegance.',
    fr: 'Des dîners de gala officiels pour l’Ambassade d’Italie à Riyad jusqu’aux scènes internationales de Slow Food Terra Madre et Cortina Queen of Taste. Porter l’art culinaire italien au plus haut sommet diplomatique avec excellence et fierté.',
  },
  items: [
    {
      id: 'event-1',
      file: 'images/Riad/riad-01.jpg',
    },
    {
      id: 'event-2',
      file: 'images/Riad/riad-02.jpg',
    },
    {
      id: 'event-3',
      file: 'images/Riad/riad-03.jpg',
    },
    {
      id: 'event-4',
      file: 'images/Riad/riad-04.jpg',
    },
    {
      id: 'event-5',
      file: 'images/Riad/riad-05.jpg',
    },
    {
      id: 'event-6',
      file: 'images/Riad/riad-06.jpg',
    },
    {
      id: 'event-7',
      file: 'images/Riad/riad-07.jpg',
    },
    {
      id: 'event-8',
      file: 'images/Riad/riad-08.jpg',
    },
    {
      id: 'event-9',
      file: 'images/Riad/riad-09.jpg',
    },
  ],
};

export const territoryContent = {
  title: {
    it: 'Valorizzazione del Territorio',
    en: 'Championing the Terroir',
    fr: 'Valorisation du Terroir',
  },
  subtitle: {
    it: 'DALLA TERRA DI TOCCO DA CASAURIA AI PALCOSCENICI NAZIONALI',
    en: 'FROM TOCCO DA CASAURIA TO PRESTIGIOUS NATIONAL ARENAS',
    fr: 'DE LA TERRE DE TOCCO DA CASAURIA AUX SCÈNES NATIONALES',
  },
  narrative: {
    it: 'Tocco da Casauria, adagiata tra la Maiella e il Morrone, è una terra benedetta da un microclima unico e da una millenaria vocazione olivicola. Qui nasce la cultivar Casaurina, un tesoro botanico che esprime note erbacee vibranti, mandorla verde e un equilibrio polifenolico straordinario.\n\nIl mio impegno per il territorio è una dichiarazione d’amore quotidiana: dalla vittoria al prestigioso premio nazionale "Extra Cuoca" alla partecipazione nella brigata ufficiale di Casa Sanremo durante il Festival della Canzone Italiana, porto in ogni piatto il profumo autentico delle nostre valli, la fierezza dei nostri produttori e la raffinatezza di una terra da scoprire.',
    en: 'Tocco da Casauria, cradled between Mount Majella and Morrone, is blessed with a unique microclimate and millenary olive tradition. Here flourishes the Casaurina cultivar, delivering vibrant herbaceous notes, green almond, and exquisite polyphenol balance.\n\nMy dedication is a daily act of love: from winning the national "Extra Cuoca" award to cooking in the official Casa Sanremo brigade during the Sanremo Music Festival, I infuse every dish with the proud soul of Abruzzo.',
    fr: 'Tocco da Casauria, nichée entre le mont Majella et le Morrone, bénéficie d’un microclimat exceptionnel propice à la variété Casaurina. De mon trophée national "Extra Cuoca" à la brigade officielle de Casa Sanremo, j’honore l’âme authentique et raffinée de mon terroir natal.',
  },
  items: [
    {
      id: 'terr-1',
      title: 'La Cultivar Casaurina e gli Uliveti di Tocco',
      caption: 'L’albero madre e la salvaguardia delle piante monumentali secolari d’Abruzzo.',
      file: 'images/Territorio/Casa_San_Remo.jpeg',
      badge: 'Patrimonio Botanico',
      fallback: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 'terr-2',
      title: 'L’Oro Verde & Il Premio Nazionale Extra Cuoca',
      caption: 'Il riconoscimento nazionale alle migliori cuoche italiane per l’uso sublime dell’olio EVO DOP e IGP.',
      file: 'images/Territorio/sanremo-festival.jpg',
      badge: 'Primo Premio Nazionale',
      fallback: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 'terr-3',
      title: 'Lady Chef a Casa Sanremo',
      caption: 'L’alta cucina abruzzese protagonista nella brigata d’onore del Festival della Canzone Italiana.',
      file: 'images/Territorio/sanremo_de vincentis_casa sanremo.jpeg',
      badge: 'Festival di Sanremo',
      fallback: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=85',
    },
  ],
};

export const pastryContent = {
  title: {
    it: 'Arte Bianca e Pasticceria',
    en: 'Sourdough Art & Fine Pastry',
    fr: 'Art du Levain & Haute Pâtisserie',
  },
  subtitle: {
    it: 'TEMPO, PASTA MADRE VIVA E RIGORE SCIENTIFICO',
    en: 'TIME, LIVE SOURDOUGH AND SCIENTIFIC DISCIPLINE',
    fr: 'LE TEMPS, LE LEVAIN NATUREL ET LA RIGUEUR SCIENTIFIQUE',
  },
  text: {
    it: 'L’arte bianca è per me una vera meditazione sensoriale. Richiede silenzio, pazienza infinita e rispetto per la vita microscopica della pasta madre viva, tramandata e rinfrescata quotidianamente con farine macinate a pietra di grani storici selezionati.\n\nDai panettoni artigianali a 48 ore di lenta lievitazione alle colombe profumate con agrumi canditi a mano, fino ai dessert al piatto di moderna architettura con infusioni di erbe alpine e gocce di olio extravergine: ogni creazione è un’opera d’arte soffice, profumata e perfettamente digeribile.',
    en: 'The art of baking and pastry is a sensory meditation. It demands stillness, patience, and absolute respect for live sourdough, nurtured daily with heirloom stone-ground flours.\n\nFrom artisanal panettoni slowly leavened over 48 hours to hand-candied citrus colombe and modern architectural plated desserts infused with alpine botanicals and extra virgin olive oil.',
    fr: 'L’art du levain est une véritable méditation. Il exige patience et écoute de la pâte mère vivante, entretenue chaque jour avec des farines de meule d’antan.\n\nDes panettones artisanaux à 48 heures de fermentation aux desserts à l’assiette aux infusions d’herbes et huile d’olive, chaque bouchée est un voyage de pure légèreté.',
  },
  cards: [
    {
      id: 'pastry-1',
      title: 'I Grandi Lievitati delle Feste',
      subtitle: 'Panettone Tradizionale a Lievitazione Naturale 48h',
      description: 'Burro di centrifuga d’alpeggio, bacche di vaniglia Bourbon del Madagascar, arancia e cedro canditi secondo metodo artigianale francese, alveolatura soffice e dorata.',
      file: 'https://images.unsplash.com/photo-1762304888447-a7ae6d48837d?auto=format&fit=crop&w=1200&q=80',
      badge: '48h Fermentazione Naturale',
      fallback: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 'pastry-2',
      title: 'Pasticceria Contemporanea al Piatto',
      subtitle: 'Geometrie Dolci & Monoporzioni Glacé',
      description: 'Architetture moderne che combinano glasse a specchio al caramello biondo, mousse ariose alla camomilla selvatica e croccanti biscottati alle mandorle di Casauria.',
      file: 'https://images.unsplash.com/photo-1577963451552-9a14e445e050?auto=format&fit=crop&w=1200&q=80',
      badge: 'Alta Pasticceria',
      fallback: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 'pastry-3',
      title: 'Focacce & Lievitati Salati Gourmet',
      subtitle: 'Idratazione al 90% & Olio Monovarietale',
      description: 'Impasti ad altissima digeribilità con farine di tipo 1, sale dolce di Cervia e profumata emulsione di olio extravergine Casaurino con rosmarino di montagna.',
      file: 'https://images.unsplash.com/photo-1767065886275-2a8ff2eaa13a?auto=format&fit=crop&w=1200&q=80',
      badge: 'Pasta Madre Viva',
      fallback: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1000&q=85',
    },
  ],
};

export interface PressItem {
  id: string;
  category: 'press' | 'video' | 'social';
  categoryLabel: { it: string; en: string; fr: string };
  source: string;
  title: string;
  date: string;
  excerpt: string;
  url: string;
  actionText: { it: string; en: string; fr: string };
  badgeColor?: string;
  imageFallback: string;
}

export const pressItems: PressItem[] = [
  {
    id: 'press-1',
    category: 'press',
    categoryLabel: { it: 'Intervista Esclusiva', en: 'Exclusive Interview', fr: 'Interview Exclusive' },
    source: 'Extra Cuoca',
    title: 'Le cuoche si raccontano: l’estro e la terra di Giovanna De Vincentis',
    date: 'Ottobre 2023',
    excerpt: 'Un ritratto intimo della Lady Chef abruzzese tra passione per l’olio extravergine, premi nazionali e l’arte del gusto identitario.',
    url: 'https://extracuoca.it/le-cuoche-si-raccontano-giovanna-de-vincentis/',
    actionText: { it: 'Leggi l’articolo', en: 'Read Article', fr: 'Lire l’article' },
    imageFallback: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'press-2',
    category: 'press',
    categoryLabel: { it: 'Rassegna Stampa', en: 'Press Review', fr: 'Revue de Presse' },
    source: 'Il Pescara',
    title: 'Giovanna De Vincentis chef di Tocco a Cortina Queen of Taste',
    date: 'Settembre 2023',
    excerpt: 'La Lady Chef porta i profumi d’Abruzzo tra le Dolomiti ampezzane, incantando i critici culinari con le sue creazioni all’olio EVO.',
    url: 'https://www.ilpescara.it/attualita/giovanna-de-vincentis-chef-tocco-casauria-cortina-queen-taste-2023.html',
    actionText: { it: 'Leggi l’articolo', en: 'Read Article', fr: 'Lire l’article' },
    imageFallback: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'press-3',
    category: 'press',
    categoryLabel: { it: 'Festival & Grandi Eventi', en: 'Festivals & Events', fr: 'Festivals & Événements' },
    source: 'Virtù Quotidiane',
    title: 'Da Tocco da Casauria a Sanremo: Lady Chef nella brigata del Festival',
    date: 'Febbraio 2023',
    excerpt: 'L’approdo ufficiale a Casa Sanremo: piatti d’eccellenza serviti ad artisti, cantanti e giornalisti del Festival di Sanremo.',
    url: 'https://www.virtuquotidiane.it/cronaca/da-tocco-casauria-a-sanremo-lady-chef-giovanna-de-vincentis-nella-brigata-del-festival.html',
    actionText: { it: 'Leggi l’articolo', en: 'Read Article', fr: 'Lire l’article' },
    imageFallback: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'press-4',
    category: 'press',
    categoryLabel: { it: 'Guida Gastronomica', en: 'Gourmet Guide', fr: 'Guide Gastronomique' },
    source: 'Gambero Rosso',
    title: 'Bus Ristorante Abruzzo: l’innovativa formula gourmet itinerante',
    date: 'Maggio 2022',
    excerpt: 'Gambero Rosso celebra il progetto pioniere firmato dalla Chef: un raffinato ristorante viaggiante tra panorami mozzafiato e gusto stellato.',
    url: 'https://www.gamberorosso.it/attualita/bus-ristorante-abruzzo/',
    actionText: { it: 'Leggi su Gambero Rosso', en: 'Read on Gambero Rosso', fr: 'Lire sur Gambero Rosso' },
    imageFallback: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'press-5',
    category: 'press',
    categoryLabel: { it: 'Premio Nazionale', en: 'National Award', fr: 'Prix National' },
    source: 'Il Pescara',
    title: 'Trionfo al Premio Nazionale Extra Cuoca: l’Abruzzo sul gradino più alto',
    date: 'Dicembre 2021',
    excerpt: 'Giovanna De Vincentis conquista il primo premio nazionale celebrando la purezza dell’olio extravergine in un dessert memorabile.',
    url: 'https://www.ilpescara.it/social/giovanna-de-vincentis-cuoca-abruzzese-extra-cuoca-2021.html',
    actionText: { it: 'Leggi l’articolo', en: 'Read Article', fr: 'Lire l’article' },
    imageFallback: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'press-6',
    category: 'press',
    categoryLabel: { it: 'Federazione Italiana Cuochi', en: 'Italian Chefs Fed.', fr: 'Féd. Italienne des Chefs' },
    source: 'Virtù Quotidiane',
    title: 'Lady Chef Pescara: Giovanna De Vincentis confermata coordinatrice provinciale',
    date: 'Marzo 2024',
    excerpt: 'Rinnovo unanime alla guida delle cuoche professioniste pescaresi per portare avanti progetti formativi di rilievo nazionale.',
    url: 'https://www.virtuquotidiane.it/cronaca/lady-chef-pescara-giovanna-de-vincentis-confermata-coordinatrice-provinciale.html',
    actionText: { it: 'Leggi l’articolo', en: 'Read Article', fr: 'Lire l’article' },
    imageFallback: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'press-7',
    category: 'video',
    categoryLabel: { it: 'Video & Reportage', en: 'Video & Reportage', fr: 'Vidéo & Reportage' },
    source: 'YouTube',
    title: 'Intervista ufficiale: la filosofia culinaria di Giovanna De Vincentis',
    date: '2023',
    excerpt: 'Un percorso filmato tra il laboratorio di Tocco da Casauria, i segreti della lievitazione e la nascita dei suoi piatti iconici.',
    url: 'https://www.youtube.com/watch?v=lTbzASTD8rY',
    actionText: { it: 'Guarda su YouTube', en: 'Watch on YouTube', fr: 'Regarder sur YouTube' },
    imageFallback: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'press-8',
    category: 'video',
    categoryLabel: { it: 'Intervista TV', en: 'TV Interview', fr: 'Interview TV' },
    source: 'Facebook Watch',
    title: 'Speciale Enogastronomia: showcooking e sapori identitari',
    date: '2023',
    excerpt: 'Servizio televisivo dedicato alla brigata di Giovanna De Vincentis e alla valorizzazione dell’olio Casaurino.',
    url: 'https://www.facebook.com/watch/?v=537924237804843',
    actionText: { it: 'Guarda il video', en: 'Watch Video', fr: 'Regarder la vidéo' },
    imageFallback: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'press-9',
    category: 'social',
    categoryLabel: { it: 'Instagram Reel', en: 'Instagram Reel', fr: 'Reel Instagram' },
    source: 'Gusta l’Abruzzo',
    title: 'Viaggio tra le erbe spontanee della Majella con la Lady Chef',
    date: 'Social Media',
    excerpt: 'Reel virale alla scoperta delle erbe selvatiche montane impiegate nel piatto signature Spontaneus.',
    url: 'https://www.instagram.com/gustalabruzzo/reel/DcYJQrmKHYq/?hl=ar',
    actionText: { it: 'Guarda su Instagram', en: 'Watch Reel', fr: 'Voir sur Instagram' },
    imageFallback: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'press-10',
    category: 'social',
    categoryLabel: { it: 'Social Reel', en: 'Social Reel', fr: 'Reel Social' },
    source: 'Instagram',
    title: 'L’alchimia del panettone artigianale e i rinfreschi di pasta madre',
    date: 'Social Media',
    excerpt: 'Dietro le quinte del laboratorio durante la preparazione dei grandi lievitati natalizi.',
    url: 'https://www.instagram.com/reels/DcVl8-noe9-/',
    actionText: { it: 'Guarda su Instagram', en: 'Watch Reel', fr: 'Voir sur Instagram' },
    imageFallback: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'press-11',
    category: 'social',
    categoryLabel: { it: 'Social Reel', en: 'Social Reel', fr: 'Reel Social' },
    source: 'Instagram',
    title: 'Masterclass esclusiva di pasticceria moderna e impiattamento',
    date: 'Social Media',
    excerpt: 'Momenti salienti della masterclass con i corsisti internazionali sui dettagli di servizio.',
    url: 'https://www.instagram.com/reels/B_LYQnplcM8/',
    actionText: { it: 'Guarda su Instagram', en: 'Watch Reel', fr: 'Voir sur Instagram' },
    imageFallback: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'press-12',
    category: 'social',
    categoryLabel: { it: 'Facebook Reel', en: 'Facebook Reel', fr: 'Reel Facebook' },
    source: 'Facebook Reel',
    title: 'Il backstage della cena di gala diplomatica',
    date: 'Social Media',
    excerpt: 'Dettagli di sala, mise en place raffinata e coordinamento brigata per eventi istituzionali.',
    url: 'https://www.facebook.com/reel/1094146949807822',
    actionText: { it: 'Guarda Reel', en: 'Watch Reel', fr: 'Voir le Reel' },
    imageFallback: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
  },
];

export const contactContent = {
  title: {
    it: 'Contatti',
    en: 'Contact',
    fr: 'Contact',
  },
  subtitle: {
    it: 'CREIAMO INSIEME IL TUO PROSSIMO EVENTO MEMORABILE',
    en: 'LET’S CRAFT YOUR NEXT MEMORABLE EVENT TOGETHER',
    fr: 'CONCEVONS ENSEMBLE VOTRE PROCHAIN ÉVÉNEMENT MÉMORABLE',
  },
  welcomeQuote: {
    it: '«Vuoi saperne di più? Vieni a trovarmi presso il mio laboratorio e parliamone. Lasciami i tuoi dati e ti ricontatterò al più presto.»',
    en: '“Want to discover more? Visit me at my culinary atelier and let’s discuss your vision. Leave your contact details and I will get back to you promptly.”',
    fr: '«Vous souhaitez en savoir plus ? Venez me rendre visite à mon atelier culinaire et échangeons. Laissez-moi vos coordonnées et je vous recontacterai très rapidement.»',
  },
  atelierDetails: {
    address: 'Via Casauria, Tocco da Casauria (PE) - Abruzzo, Italia',
    phone: '085 76567',
    whatsapp: '+39 328 6623025',
    email: 'gioeventsandmore@gmail.com',
    hours: 'Su appuntamento riservato (Lunedì - Sabato)',
  },
};

export interface PartnerLogo {
  id: string;
  name: string;
  filename: string;
  subtitle: string;
}

export const partners: PartnerLogo[] = [
  { id: '1', name: 'Federazione Italiana Cuochi', filename: 'Logo1.jpg', subtitle: 'FIC Istituzionale' },
  { id: '2', name: 'FIC Lady Chef Italia', filename: 'Logo2.webp', subtitle: 'Coordinamento Provinciale' },
  { id: '3', name: 'Slow Food Terra Madre', filename: 'Logo3.jpeg', subtitle: 'Salone del Gusto' },
  { id: '4', name: 'Casa Sanremo', filename: 'Logo4.jpg', subtitle: 'Brigata Ufficiale Festival' },
  { id: '5', name: 'Extra Cuoca Nazionale', filename: 'Logo5.png', subtitle: '1° Premio Nazionale' },
  { id: '6', name: 'Cortina Queen of Taste', filename: 'Logo6.jpg', subtitle: 'Kermesse Gourmet' },
  { id: '7', name: 'Consorzio Tutela Olio Casaurino', filename: 'Logo7.webp', subtitle: 'Cultivar Casaurina' },
  { id: '8', name: 'Ambasciata d’Italia Riyadh', filename: 'Logo8.jpg', subtitle: 'Cene di Gala Diplomatiche' },
  { id: '9', name: 'Regione Abruzzo', filename: 'Logo9.jpeg', subtitle: 'Promozione Territoriale' },
  { id: '10', name: 'Gambero Rosso Academy', filename: 'Logo10.png', subtitle: 'Bus Ristorante Abruzzo' },
  { id: '11', name: 'Accademia della Cucina', filename: 'Logo11.svg.webp', subtitle: 'Patrimonio Enogastronomico' },
  { id: '12', name: 'Parco Nazionale della Majella', filename: 'Logo12.png', subtitle: 'Biodiversità & Erbe' },
  { id: '13', name: 'Consorzio Zafferano DOP', filename: 'Logo13.jpg', subtitle: 'Zafferano dell’Aquila' },
  { id: '14', name: 'Associazione Cuochi Pescara', filename: 'Logo14.png', subtitle: 'Federazione Territoriale' },
  { id: '15', name: 'Maestri del Lievito Madre', filename: 'Logo15.jpeg', subtitle: 'Arte Bianca & Pasticceria' },
];

export const footerContent = {
  about: {
    it: 'Gio Events & More è il marchio esclusivo di alta ristorazione, luxury catering e consulenza enogastronomica guidato dalla Lady Chef Giovanna De Vincentis.',
    en: 'Gio Events & More is the bespoke fine dining, luxury catering, and culinary consultancy brand created by Lady Chef Giovanna De Vincentis.',
    fr: 'Gio Events & More est la marque de haute gastronomie, traiteur de luxe et conseil culinaire dirigée par la Lady Chef Giovanna De Vincentis.',
  },
  quickLinks: [
    { label: { it: 'Home', en: 'Home', fr: 'Accueil' }, href: '#home' },
    { label: { it: 'Giovanna', en: 'Giovanna', fr: 'Giovanna' }, href: '#giovanna' },
    { label: { it: 'I Miei Valori', en: 'My Values', fr: 'Mes Valeurs' }, href: '#valori' },
    { label: { it: 'Eventi Internazionali', en: 'Events', fr: 'Événements' }, href: '#eventi' },
    { label: { it: 'Territorio & Olio EVO', en: 'Terroir & EVOO', fr: 'Terroir & Huile' }, href: '#territorio' },
    { label: { it: 'Arte Bianca & Pasticceria', en: 'Pastry & Sourdough', fr: 'Pâtisserie & Levain' }, href: '#arte-bianca' },
    { label: { it: 'Dicono di Me', en: 'Press & Media', fr: 'Presse & Médias' }, href: '#dicono-di-me' },
    { label: { it: 'Contatti', en: 'Contact', fr: 'Contact' }, href: '#contatti' },
  ],
  socials: [
    { name: 'Instagram', href: 'https://www.instagram.com/gustalabruzzo/reel/DcYJQrmKHYq/?hl=ar', icon: 'instagram' },
    { name: 'Facebook', href: 'https://www.facebook.com/watch/?v=537924237804843', icon: 'facebook' },
    { name: 'YouTube', href: 'https://www.youtube.com/watch?v=lTbzASTD8rY', icon: 'youtube' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  ],
  contacts: {
    phone: '085 76567',
    whatsapp: '+39 328 6623025',
    email: 'gioeventsandmore@gmail.com',
    location: 'Tocco da Casauria (PE), Abruzzo - Italia',
  },
  legal: 'Copyright © 2026 Gio Events and More | P.IVA 02194820684 | Tutti i diritti riservati | Privacy Policy | Cookie Policy | GDPR Compliance',
};
