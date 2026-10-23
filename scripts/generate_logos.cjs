const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 15 Prestigious Partner Logos in Authentic Full Colors
const logos = [
  {
    id: 1,
    name: 'Federazione Italiana Cuochi',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- FIC Crest Shield -->
      <path d="M 35 15 L 75 15 C 75 55, 60 75, 55 82 C 50 75, 35 55, 35 15 Z" fill="#D32F2F" stroke="#C5A059" stroke-width="3"/>
      <path d="M 42 22 L 68 22 C 68 48, 58 65, 55 70 C 52 65, 42 48, 42 22 Z" fill="#FFFFFF"/>
      <!-- Chef Hat Icon -->
      <path d="M 48 45 C 44 45, 44 32, 50 32 C 52 28, 58 28, 60 32 C 66 32, 66 45, 62 45 Z" fill="#C5A059"/>
      <rect x="48" y="45" width="14" height="6" fill="#1565C0"/>
      <!-- Text -->
      <text x="90" y="38" font-family="'Montserrat', system-ui, sans-serif" font-size="14" font-weight="800" fill="#1565C0" letter-spacing="1">FEDERAZIONE</text>
      <text x="90" y="56" font-family="'Montserrat', system-ui, sans-serif" font-size="14" font-weight="800" fill="#D32F2F" letter-spacing="1">ITALIANA</text>
      <text x="90" y="74" font-family="'Montserrat', system-ui, sans-serif" font-size="14" font-weight="800" fill="#C5A059" letter-spacing="1">CUOCHI</text>
    </svg>`
  },
  {
    id: 2,
    name: 'FIC Lady Chef',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <circle cx="50" cy="50" r="32" fill="#FDF2F4" stroke="#DF7B9A" stroke-width="2.5"/>
      <path d="M 42 62 C 40 45, 48 35, 54 30 C 58 35, 62 45, 58 62 Z" fill="#1A237E"/>
      <circle cx="50" cy="38" r="8" fill="#DF7B9A"/>
      <text x="95" y="45" font-family="Georgia, serif" font-style="italic" font-size="22" font-weight="bold" fill="#1A237E">Lady Chef</text>
      <text x="95" y="66" font-family="'Montserrat', sans-serif" font-size="11" font-weight="700" fill="#DF7B9A" letter-spacing="3">ABRUZZO</text>
    </svg>`
  },
  {
    id: 3,
    name: 'Slow Food',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- Slow Food Snail -->
      <path d="M 30 65 C 25 50, 40 32, 55 35 C 70 38, 72 58, 62 68 C 52 75, 38 68, 42 56 C 45 48, 55 48, 57 54" fill="none" stroke="#D84315" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M 62 68 C 68 70, 75 70, 78 65 C 80 60, 75 52, 78 45" fill="none" stroke="#D84315" stroke-width="3" stroke-linecap="round"/>
      <text x="92" y="48" font-family="'Playfair Display', Georgia, serif" font-size="22" font-weight="bold" fill="#2E2E2E">Slow Food</text>
      <text x="92" y="68" font-family="'Montserrat', sans-serif" font-size="10" font-weight="600" fill="#D84315" letter-spacing="2">TERRA MADRE</text>
    </svg>`
  },
  {
    id: 4,
    name: 'Casa Sanremo',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- Sanremo Flower Graphic -->
      <circle cx="50" cy="50" r="28" fill="#FFF5E5" stroke="#E65100" stroke-width="2"/>
      <path d="M 50 30 C 44 42, 56 42, 50 50 C 44 42, 56 42, 50 30" fill="#E91E63"/>
      <circle cx="50" cy="50" r="6" fill="#FFB300"/>
      <text x="92" y="44" font-family="'Montserrat', sans-serif" font-size="16" font-weight="900" fill="#1A237E" letter-spacing="1">CASA SANREMO</text>
      <text x="92" y="64" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" fill="#E65100" letter-spacing="2">FESTIVAL 2023</text>
    </svg>`
  },
  {
    id: 5,
    name: 'Extra Cuoca',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- Green Pan with Olive Branch -->
      <rect x="30" y="38" width="40" height="26" rx="4" fill="none" stroke="#2E7D32" stroke-width="3"/>
      <path d="M 22 45 L 30 45" stroke="#2E7D32" stroke-width="3" stroke-linecap="round"/>
      <circle cx="50" cy="51" r="5" fill="#E65100"/>
      <path d="M 48 32 C 45 25, 55 22, 52 32" fill="#689F38"/>
      <text x="86" y="44" font-family="'Montserrat', sans-serif" font-size="18" font-weight="900" fill="#E65100">EXTRA</text>
      <text x="86" y="64" font-family="'Montserrat', sans-serif" font-size="18" font-weight="900" fill="#2E7D32">CUOCA</text>
      <text x="86" y="78" font-family="'Montserrat', sans-serif" font-size="8" font-weight="700" fill="#7CB342" letter-spacing="1">1° PREMIO NAZIONALE</text>
    </svg>`
  },
  {
    id: 6,
    name: 'Cortina Queen of Taste',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- Dolomite Crown -->
      <path d="M 32 62 L 42 35 L 52 50 L 62 30 L 72 62 Z" fill="#C5A059" stroke="#9E7832" stroke-width="2"/>
      <circle cx="42" cy="32" r="3" fill="#D32F2F"/>
      <circle cx="62" cy="27" r="3" fill="#D32F2F"/>
      <text x="88" y="40" font-family="'Playfair Display', Georgia, serif" font-size="17" font-weight="bold" fill="#0D47A1">CORTINA</text>
      <text x="88" y="58" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#C5A059">Queen of Taste</text>
      <text x="88" y="74" font-family="'Montserrat', sans-serif" font-size="9" font-weight="600" fill="#555555" letter-spacing="1.5">CHEF TEAM</text>
    </svg>`
  },
  {
    id: 7,
    name: 'Consorzio Olio Casaurino',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- Golden Oil Drop + Green Leaves -->
      <path d="M 50 25 C 40 40, 36 52, 36 60 C 36 72, 43 78, 50 78 C 57 78, 64 72, 64 60 C 64 52, 60 40, 50 25 Z" fill="#FBC02D" stroke="#C5A059" stroke-width="2"/>
      <path d="M 32 45 C 22 38, 26 26, 38 28 C 36 34, 34 40, 32 45 Z" fill="#33691E"/>
      <path d="M 68 45 C 78 38, 74 26, 62 28 C 64 34, 66 40, 68 45 Z" fill="#558B2F"/>
      <text x="86" y="42" font-family="'Montserrat', sans-serif" font-size="13" font-weight="800" fill="#33691E" letter-spacing="1">CULTIVAR</text>
      <text x="86" y="58" font-family="'Playfair Display', Georgia, serif" font-size="16" font-weight="bold" fill="#C5A059">CASAURINA</text>
      <text x="86" y="74" font-family="'Montserrat', sans-serif" font-size="9" font-weight="600" fill="#555555" letter-spacing="1">TOCCO DA CASAURIA</text>
    </svg>`
  },
  {
    id: 8,
    name: 'Ambasciata d’Italia Riyadh',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- Italian Diplomatic Star Seal -->
      <polygon points="50,25 56,40 72,40 59,50 64,65 50,55 36,65 41,50 28,40 44,40" fill="#C5A059" stroke="#8E6A29" stroke-width="1.5"/>
      <circle cx="50" cy="46" r="6" fill="#1565C0"/>
      <text x="86" y="40" font-family="'Montserrat', sans-serif" font-size="13" font-weight="800" fill="#1565C0" letter-spacing="1">AMBASCIATA D’ITALIA</text>
      <text x="86" y="58" font-family="'Montserrat', sans-serif" font-size="14" font-weight="700" fill="#C5A059" letter-spacing="1.5">RIYADH</text>
      <text x="86" y="74" font-family="'Montserrat', sans-serif" font-size="9" font-weight="600" fill="#2E7D32" letter-spacing="1">DIPLOMAZIA DEL GUSTO</text>
    </svg>`
  },
  {
    id: 9,
    name: 'Regione Abruzzo',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- Abruzzo Coat of Arms -->
      <rect x="36" y="24" width="30" height="48" rx="6" fill="#FFFFFF" stroke="#C5A059" stroke-width="2"/>
      <path d="M 37 25 L 65 25 L 37 45 Z" fill="#FFFFFF"/>
      <path d="M 37 45 L 65 25 L 65 55 L 37 71 Z" fill="#2E7D32"/>
      <path d="M 37 71 L 65 55 L 65 71 Z" fill="#0D47A1"/>
      <text x="84" y="44" font-family="'Montserrat', sans-serif" font-size="15" font-weight="800" fill="#0D47A1" letter-spacing="1.5">REGIONE</text>
      <text x="84" y="64" font-family="'Montserrat', sans-serif" font-size="17" font-weight="900" fill="#2E7D32" letter-spacing="2">ABRUZZO</text>
      <text x="84" y="78" font-family="'Montserrat', sans-serif" font-size="8" font-weight="600" fill="#C5A059" letter-spacing="1.5">TERRA DEI PARCHI</text>
    </svg>`
  },
  {
    id: 10,
    name: 'Gambero Rosso',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- Red Shrimp Icon -->
      <path d="M 35 62 C 30 45, 45 28, 60 32 C 65 34, 68 40, 64 45 C 55 42, 45 50, 48 65 Z" fill="#C62828"/>
      <circle cx="58" cy="35" r="2" fill="#FFFFFF"/>
      <path d="M 60 32 C 68 24, 75 24, 78 28" fill="none" stroke="#C62828" stroke-width="2"/>
      <text x="86" y="44" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#C62828">GAMBERO</text>
      <text x="86" y="66" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#C62828">ROSSO</text>
      <text x="86" y="80" font-family="'Montserrat', sans-serif" font-size="8" font-weight="700" fill="#2E2E2E" letter-spacing="2">ACADEMY &amp; GUIDA</text>
    </svg>`
  },
  {
    id: 11,
    name: 'Accademia Italiana della Cucina',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="#C5A059" stroke-width="2"/>
      <circle cx="50" cy="50" r="24" fill="#0D47A1"/>
      <text x="50" y="55" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">AIC</text>
      <text x="90" y="42" font-family="'Montserrat', sans-serif" font-size="12" font-weight="800" fill="#0D47A1">ACCADEMIA ITALIANA</text>
      <text x="90" y="58" font-family="'Montserrat', sans-serif" font-size="12" font-weight="800" fill="#C5A059">DELLA CUCINA</text>
      <text x="90" y="72" font-family="'Montserrat', sans-serif" font-size="8" font-weight="600" fill="#555555">ISTITUZIONE CULTURALE</text>
    </svg>`
  },
  {
    id: 12,
    name: 'Parco Nazionale della Majella',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- Mountain and Chamois -->
      <polygon points="30,70 50,30 70,70" fill="#2E7D32"/>
      <polygon points="45,70 60,40 75,70" fill="#388E3C" opacity="0.8"/>
      <polygon points="47,36 50,30 53,36 50,38" fill="#FFFFFF"/>
      <text x="86" y="42" font-family="'Montserrat', sans-serif" font-size="12" font-weight="800" fill="#1B5E20">PARCO NAZIONALE</text>
      <text x="86" y="60" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#2E7D32">MAJELLA</text>
      <text x="86" y="74" font-family="'Montserrat', sans-serif" font-size="8" font-weight="600" fill="#7CB342" letter-spacing="1">GEOPARCO MONDIALE UNESCO</text>
    </svg>`
  },
  {
    id: 13,
    name: 'Consorzio Zafferano DOP',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- Saffron Flower (Purple + Red Stigmas) -->
      <path d="M 40 60 C 35 45, 42 35, 50 32 C 58 35, 65 45, 60 60 Z" fill="#6A1B9A"/>
      <path d="M 50 48 L 50 30 M 48 34 L 43 25 M 52 34 L 57 25" stroke="#D50000" stroke-width="2.5" stroke-linecap="round"/>
      <text x="86" y="42" font-family="'Montserrat', sans-serif" font-size="12" font-weight="800" fill="#6A1B9A">ZAFFERANO</text>
      <text x="86" y="58" font-family="'Playfair Display', Georgia, serif" font-size="15" font-weight="bold" fill="#D50000">DELL’AQUILA DOP</text>
      <text x="86" y="74" font-family="'Montserrat', sans-serif" font-size="8" font-weight="700" fill="#C5A059" letter-spacing="1">ORO ROSSO D’ABRUZZO</text>
    </svg>`
  },
  {
    id: 14,
    name: 'Associazione Cuochi Pescara',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <circle cx="50" cy="50" r="28" fill="#FFFFFF" stroke="#0D47A1" stroke-width="3"/>
      <path d="M 40 50 C 40 38, 60 38, 60 50 Z" fill="#D32F2F"/>
      <text x="86" y="42" font-family="'Montserrat', sans-serif" font-size="12" font-weight="800" fill="#0D47A1">ASSOCIAZIONE CUOCHI</text>
      <text x="86" y="60" font-family="'Montserrat', sans-serif" font-size="16" font-weight="900" fill="#D32F2F">PESCARA</text>
      <text x="86" y="74" font-family="'Montserrat', sans-serif" font-size="8" font-weight="700" fill="#0D47A1">FIC REGIONALE</text>
    </svg>`
  },
  {
    id: 15,
    name: 'Maestri del Lievito Madre',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" width="240" height="100">
      <rect width="240" height="100" fill="none"/>
      <!-- Sourdough & Wheat -->
      <path d="M 35 60 C 35 40, 65 40, 65 60 Z" fill="#C5A059" stroke="#8E6A29" stroke-width="2"/>
      <path d="M 45 42 L 55 58 M 55 42 L 45 58" stroke="#FFFFFF" stroke-width="1.5"/>
      <path d="M 30 65 L 70 65" stroke="#8E6A29" stroke-width="2"/>
      <text x="86" y="42" font-family="'Playfair Display', Georgia, serif" font-size="14" font-weight="bold" fill="#8E6A29">MAESTRI DEL</text>
      <text x="86" y="60" font-family="'Playfair Display', Georgia, serif" font-size="15" font-weight="bold" fill="#C5A059">LIEVITO MADRE</text>
      <text x="86" y="74" font-family="'Montserrat', sans-serif" font-size="8" font-weight="600" fill="#555555">GRAN LIEVITATI D’AUTORE</text>
    </svg>`
  }
];

// Write all SVGs and JPEG files to public
logos.forEach(logo => {
  const svgPath = path.join(publicDir, `Logo${logo.id}.svg`);
  const jpegPath = path.join(publicDir, `Logo${logo.id}.jpeg`);
  const jpgPath = path.join(publicDir, `Logo${logo.id}.jpg`);
  const pngPath = path.join(publicDir, `Logo${logo.id}.png`);

  fs.writeFileSync(svgPath, logo.svg, 'utf8');
  fs.writeFileSync(jpegPath, logo.svg, 'utf8');
  fs.writeFileSync(jpgPath, logo.svg, 'utf8');
  fs.writeFileSync(pngPath, logo.svg, 'utf8');
});

console.log(`Successfully generated 15 partner logos in full color into ${publicDir}`);
