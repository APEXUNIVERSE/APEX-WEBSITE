import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const teamDir = path.join(publicDir, 'team');
if (!fs.existsSync(teamDir)) fs.mkdirSync(teamDir, { recursive: true });

// Read logo as base64
const logoPath = path.join(publicDir, 'apex-wolf-logo.png');
const logoB64 = fs.existsSync(logoPath) ? fs.readFileSync(logoPath).toString('base64') : '';
const logoDataUrl = `data:image/png;base64,${logoB64}`;

const members = [
  {
    filename: 'apex-ram.svg',
    name: 'APEX RAM',
    tag: 'RAM_VORTEX',
    role: 'FOUNDER &amp; COMMUNITY LEAD',
    squad: 'ALPHA LEADER',
    rank: 'MASTER',
    rankColor: '#ff2d4a',
    game: 'Apex Legends / Valorant',
    stat1: '25K+ MEMBERS',
    stat2: 'EST. 2024',
    stat3: 'CORE VISION',
    isFounder: true,
    iconType: 'wolf',
  },
  {
    filename: 'member-content.svg',
    name: '[MEMBER NAME]',
    tag: 'SHADOW_PHANTOM',
    role: 'HEAD CONTENT CREATOR',
    squad: 'CINEMATICS',
    rank: 'IMMORTAL',
    rankColor: '#ff3b5c',
    game: 'Counter-Strike 2',
    stat1: '350+ CLIPS',
    stat2: '4K EDIT',
    stat3: 'WEEKLY REELS',
    isFounder: false,
    iconType: 'crosshair',
  },
  {
    filename: 'member-pro.svg',
    name: '[MEMBER NAME]',
    tag: 'NEON_VIPER',
    role: 'COMPETITIVE IGL',
    squad: 'TIER 1 PRO',
    rank: 'RADIANT',
    rankColor: '#ff4d6d',
    game: 'Valorant',
    stat1: 'TOURNAMENT FINALIST',
    stat2: 'HIGH-IQ CLUTCH',
    stat3: 'TIER 1 IGL',
    isFounder: false,
    iconType: 'flame',
  },
  {
    filename: 'member-events.svg',
    name: '[MEMBER NAME]',
    tag: 'TITAN_CHRONO',
    role: 'EVENT MANAGER',
    squad: 'OPERATIONS',
    rank: 'CHALLENGER',
    rankColor: '#ff2a4b',
    game: 'Call of Duty: Warzone',
    stat1: 'WEEKLY CUSTOMS',
    stat2: 'PRIZE POOLS',
    stat3: 'BRACKET OPS',
    isFounder: false,
    iconType: 'trophy',
  },
  {
    filename: 'apex-squad.svg',
    name: 'APEX UNIVERSE',
    tag: 'ALLIANCE // SQUAD',
    role: 'JOIN THE CORE ROSTER',
    squad: 'WOLF PACK',
    rank: 'ALLIANCE',
    rankColor: '#ff1f3d',
    game: 'Multi-Title Esports',
    stat1: 'VERIFIED DISCORD',
    stat2: 'CUSTOM LOBBIES',
    stat3: 'PRO SCRIMS',
    isFounder: true,
    iconType: 'wolf',
  },
];

function getCenterGraphic(m) {
  if (m.iconType === 'wolf') {
    return `
      <g transform="translate(190, 160)">
        <circle cx="110" cy="110" r="105" fill="#120205" stroke="#ff1f3d" stroke-width="2.5" opacity="0.9"/>
        <circle cx="110" cy="110" r="120" fill="none" stroke="#ff1f3d" stroke-dasharray="8 6" stroke-width="1.5" opacity="0.4"/>
        <image href="${logoDataUrl}" x="15" y="15" width="190" height="190"/>
      </g>
    `;
  } else if (m.iconType === 'crosshair') {
    return `
      <g transform="translate(190, 160)">
        <circle cx="110" cy="110" r="105" fill="#120205" stroke="#ff3b5c" stroke-width="2.5" opacity="0.9"/>
        <circle cx="110" cy="110" r="120" fill="none" stroke="#ff3b5c" stroke-dasharray="8 6" stroke-width="1.5" opacity="0.4"/>
        <!-- Sniper Reticle Vector -->
        <circle cx="110" cy="110" r="65" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>
        <circle cx="110" cy="110" r="30" fill="none" stroke="#ff3b5c" stroke-width="2"/>
        <circle cx="110" cy="110" r="6" fill="#ff1f3d"/>
        <line x1="110" y1="25" x2="110" y2="195" stroke="#ff3b5c" stroke-width="2" opacity="0.7"/>
        <line x1="25" y1="110" x2="195" y2="110" stroke="#ff3b5c" stroke-width="2" opacity="0.7"/>
        <rect x="75" y="75" width="70" height="70" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.5"/>
      </g>
    `;
  } else if (m.iconType === 'flame') {
    return `
      <g transform="translate(190, 160)">
        <circle cx="110" cy="110" r="105" fill="#120205" stroke="#ff4d6d" stroke-width="2.5" opacity="0.9"/>
        <circle cx="110" cy="110" r="120" fill="none" stroke="#ff4d6d" stroke-dasharray="8 6" stroke-width="1.5" opacity="0.4"/>
        <!-- Radiant Flame / Apex Crown Vector -->
        <path d="M110 40 L135 95 L180 80 L150 135 L170 175 L110 160 L50 175 L70 135 L40 80 L85 95 Z" fill="#ff1f3d" fill-opacity="0.3" stroke="#ffffff" stroke-width="3"/>
        <circle cx="110" cy="120" r="24" fill="#120205" stroke="#ff4d6d" stroke-width="2"/>
        <polygon points="110,105 122,125 98,125" fill="#ffffff"/>
      </g>
    `;
  } else {
    return `
      <g transform="translate(190, 160)">
        <circle cx="110" cy="110" r="105" fill="#120205" stroke="#ff2a4b" stroke-width="2.5" opacity="0.9"/>
        <circle cx="110" cy="110" r="120" fill="none" stroke="#ff2a4b" stroke-dasharray="8 6" stroke-width="1.5" opacity="0.4"/>
        <!-- Trophy / Chrono Vector -->
        <path d="M70 70 L150 70 L140 120 C135 145 125 155 110 155 C95 155 85 145 80 120 Z" fill="#ff1f3d" fill-opacity="0.3" stroke="#ffffff" stroke-width="2.5"/>
        <path d="M70 80 C50 80 50 110 75 110" fill="none" stroke="#ff2a4b" stroke-width="3"/>
        <path d="M150 80 C170 80 170 110 145 110" fill="none" stroke="#ff2a4b" stroke-width="3"/>
        <rect x="95" y="155" width="30" height="20" fill="#ffffff" opacity="0.8"/>
        <rect x="80" y="175" width="60" height="12" rx="3" fill="#ff2a4b"/>
      </g>
    `;
  }
}

for (const m of members) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="850" viewBox="0 0 600 850">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#2a050b" stop-opacity="0.9"/>
      <stop offset="60%" stop-color="#0a0b12" stop-opacity="1"/>
      <stop offset="100%" stop-color="#040407" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="cyberRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff1f3d"/>
      <stop offset="50%" stop-color="#2a070f"/>
      <stop offset="100%" stop-color="#ff3b5c"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="0.75" stroke-opacity="0.04"/>
    </pattern>
  </defs>

  <!-- Card Background -->
  <rect width="600" height="850" rx="32" fill="url(#bgGlow)"/>
  <rect width="600" height="850" rx="32" fill="url(#grid)"/>

  <!-- Cyber Edge Bevel -->
  <rect x="12" y="12" width="576" height="826" rx="24" fill="none" stroke="url(#cyberRim)" stroke-width="2" opacity="0.85"/>
  <rect x="20" y="20" width="560" height="810" rx="20" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.12"/>

  <!-- Top Corner Cyber Accents -->
  <path d="M 12 50 L 12 12 L 50 12" fill="none" stroke="#ff1f3d" stroke-width="4"/>
  <path d="M 588 50 L 588 12 L 550 12" fill="none" stroke="#ff1f3d" stroke-width="4"/>
  <path d="M 12 800 L 12 838 L 50 838" fill="none" stroke="#ff1f3d" stroke-width="4"/>
  <path d="M 588 800 L 588 838 L 550 838" fill="none" stroke="#ff1f3d" stroke-width="4"/>

  <!-- Top Header Bar -->
  <g transform="translate(40, 48)">
    <!-- Wolf Squad Insignia -->
    <rect x="0" y="0" width="180" height="34" rx="8" fill="#140306" stroke="#ff1f3d" stroke-width="1.5"/>
    <text x="90" y="22" fill="#ff4d6d" font-family="monospace, sans-serif" font-size="12" font-weight="900" letter-spacing="2" text-anchor="middle">[${m.squad}]</text>

    <!-- Rank Badge -->
    <rect x="360" y="0" width="160" height="34" rx="8" fill="#140306" stroke="${m.rankColor}" stroke-width="1.5"/>
    <text x="440" y="22" fill="#ffffff" font-family="monospace, sans-serif" font-size="13" font-weight="900" letter-spacing="2" text-anchor="middle">${m.rank}</text>
  </g>

  <!-- Card Center Graphic / Avatar -->
  ${getCenterGraphic(m)}

  <!-- Gamer Tag & Divider -->
  <g transform="translate(300, 465)">
    <text x="0" y="0" fill="#ff4d6d" font-family="monospace, sans-serif" font-size="13" font-weight="bold" letter-spacing="3" text-anchor="middle">// ${m.tag} //</text>
    <line x1="-220" y1="20" x2="220" y2="20" stroke="#ff1f3d" stroke-width="1.5" stroke-opacity="0.3"/>
    <polygon points="0,15 8,20 0,25 -8,20" fill="#ff1f3d"/>
  </g>

  <!-- Player Name & Role -->
  <g transform="translate(300, 535)">
    <text x="0" y="0" fill="#ffffff" font-family="'Impact', 'Arial Black', sans-serif" font-size="38" font-weight="900" letter-spacing="2" text-anchor="middle">${m.name}</text>
    <rect x="-190" y="16" width="380" height="32" rx="6" fill="#180307" stroke="#ff1f3d" stroke-width="1.2"/>
    <text x="0" y="38" fill="#ff3b5c" font-family="monospace, sans-serif" font-size="13" font-weight="800" letter-spacing="2" text-anchor="middle">${m.role}</text>
  </g>

  <!-- Stats Grid -->
  <g transform="translate(60, 620)">
    <rect x="0" y="0" width="150" height="60" rx="10" fill="#0d0e17" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>
    <text x="75" y="24" fill="#a0a5b5" font-family="monospace, sans-serif" font-size="10" font-weight="bold" letter-spacing="1" text-anchor="middle">SPEC 01</text>
    <text x="75" y="46" fill="#ffffff" font-family="monospace, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">${m.stat1}</text>

    <rect x="165" y="0" width="150" height="60" rx="10" fill="#0d0e17" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>
    <text x="240" y="24" fill="#a0a5b5" font-family="monospace, sans-serif" font-size="10" font-weight="bold" letter-spacing="1" text-anchor="middle">SPEC 02</text>
    <text x="240" y="46" fill="#ffffff" font-family="monospace, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">${m.stat2}</text>

    <rect x="330" y="0" width="150" height="60" rx="10" fill="#0d0e17" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>
    <text x="405" y="24" fill="#a0a5b5" font-family="monospace, sans-serif" font-size="10" font-weight="bold" letter-spacing="1" text-anchor="middle">SPEC 03</text>
    <text x="405" y="46" fill="#ffffff" font-family="monospace, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">${m.stat3}</text>
  </g>

  <!-- Bottom Game / Discord Bar -->
  <g transform="translate(60, 715)">
    <rect x="0" y="0" width="480" height="50" rx="12" fill="#100306" stroke="#ff1f3d" stroke-width="1.5"/>
    <circle cx="28" cy="25" r="5" fill="#00ff66"/>
    <text x="44" y="29" fill="#00ff66" font-family="monospace, sans-serif" font-size="11" font-weight="bold" letter-spacing="1">VERIFIED SQUAD MEMBER</text>
    <text x="456" y="29" fill="#ffffff" font-family="monospace, sans-serif" font-size="11" font-weight="bold" text-anchor="end">FAV: ${m.game}</text>
  </g>

  <!-- Bottom Tech Footer -->
  <text x="300" y="805" fill="#707588" font-family="monospace, sans-serif" font-size="10" letter-spacing="3" text-anchor="middle">APEX UNIVERSE // CORE ROSTER EDITION</text>
</svg>
  `.trim();

  fs.writeFileSync(path.join(teamDir, m.filename), svg);
  console.log(`Generated: ${m.filename}`);
}

console.log('All team cards generated successfully!');
