/**
 * APEX UNIVERSE - Official Clan Dossier & Central Configuration
 * Active Community Record • 2026
 * 
 * Synchronized with the Official Clan Dossier & Website Overview:
 * - Brand: Apex Universe (Formerly Apex Squad)
 * - Supported Titles: Warzone, Valorant, CODM, CoD
 * - Official Email: teamapexsquads@gmail.com
 * - Official Code Repo: https://github.com/APEXUNIVERSE/APEX-WEBSITE
 */

// ==========================================
// 1. OFFICIAL COMMUNITY PORTALS & LINKS
// ==========================================
export const DISCORD_INVITE_URL = "https://discord.gg/GEAbYcaBuA";
export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/DsSMsCcONMj2TA3R8glQkv?s=sw&p=i&mlu=4&ilr=4";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@SNIPE-DOGG";
export const CONTACT_EMAIL = "teamapexsquads@gmail.com";
export const GITHUB_REPO_URL = "https://github.com/APEXUNIVERSE/APEX-WEBSITE";
export const INSTAGRAM_URL = "https://instagram.com/apexuniverse_placeholder";
export const TWITCH_URL = "https://twitch.tv/apexuniverse_placeholder";
export const TWITTER_X_URL = "https://x.com/apexuniverse_placeholder";

// Official Discord Dedicated Channels
export const DISCORD_CHANNELS = {
  metas: "https://discord.com/channels/1511457449360752690/1511758689009270785",
  clipsAndStreams: "https://discord.com/channels/1511457449360752690/1511457452481187883",
  gamerTags: "https://discord.com/channels/1511457449360752690/1512613907284365403",
};

// HQ Background Tactical Loop
export const HQ_TACTICAL_VIDEO_URL = "https://www.youtube.com/watch?v=P_G_NCD-6rE";

// ==========================================
// 2. BRAND & SEO METADATA
// ==========================================
export const SITE_CONFIG = {
  brandName: "APEX UNIVERSE",
  brandSubtitle: "Formerly Apex Squad",
  shortTagline: "Play. Compete. Dominate.",
  heroSubtitle: "Premier competitive clan for Warzone, Valorant, CODM, and Call of Duty.",
  aboutText: "Apex Universe brings together tactical gamers, creators, moderators, and competitive players in one place. Join our verified Discord and WhatsApp community to find teammates, optimize weapon metas, and level up your game.",
  bannerAnnouncement: "Meta Apex for Clips and Game Attacks ● Join the Arena",
  supportedTitles: ["Warzone", "Valorant", "CODM", "CoD"],
  copyrightYear: 2026,
  copyrightOwner: "APEX UNIVERSE",
  footerSubtext: "Active Community 2026 • Official Clan Record",
  reassuranceText: "Respect the community. Play fair. Have fun.",
  seo: {
    title: "APEX UNIVERSE | Official Clan Dossier & Competitive Esports Hub",
    description: "Official portal for Apex Universe (Formerly Apex Squad). Supported titles: Warzone, Valorant, CODM, CoD. Join the verified Discord & WhatsApp community.",
    keywords: [
      "Apex Universe",
      "Apex Squad",
      "Warzone",
      "Valorant",
      "CODM",
      "Call of Duty",
      "Gaming Discord",
      "Esports Clan",
      "Competitive Gaming",
      "Snipe Dogg"
    ],
    url: "https://apexuniverse.gg",
  },
};

// ==========================================
// 3. STATS COUNTERS
// ==========================================
export const STATS_DATA = [
  { id: "members", value: "25,000+", label: "Community Members", icon: "Users" },
  { id: "titles", value: "4 Titles", label: "Warzone, Val, CODM, CoD", icon: "Gamepad2" },
  { id: "clutches", value: "1,800+", label: "Weekly Clutches", icon: "Flame" },
  { id: "active", value: "6,500+", label: "Active Players", icon: "Video" },
];

// ==========================================
// 4. ABOUT / COMMUNITY PILLARS
// ==========================================
export const ABOUT_FEATURES = [
  {
    id: "discord-metas",
    title: "Discord: METAS",
    description: "Gunsmith and loadout discussions. Real-time weapon balance analytics, attachment tuning, and predictive meta configurations.",
    icon: "Trophy",
    accentColor: "from-red-600 to-rose-700",
    badge: "Gunsmith Tuning",
    link: DISCORD_CHANNELS.metas,
  },
  {
    id: "clips-streams",
    title: "Discord: Clips & Streams",
    description: "Drop your 1v4 clutch highlights, ace plays, and sniping montages. Get featured on the official Snipe Dogg YouTube showcase.",
    icon: "Video",
    accentColor: "from-red-500 to-orange-600",
    badge: "Community Highlights",
    link: DISCORD_CHANNELS.clipsAndStreams,
  },
  {
    id: "gamer-tags",
    title: "Discord: Gamer Tags",
    description: "Squad recruitment and ID exchange across Warzone, Valorant, CODM, and CoD. Instant rank-matched LFG coordination.",
    icon: "Users2",
    accentColor: "from-rose-600 to-red-900",
    badge: "Squad Recruitment",
    link: DISCORD_CHANNELS.gamerTags,
  },
];

// ==========================================
// 5. APEX TEAM LEADERSHIP ROSTER (CORE TEAM)
// ==========================================
export interface TeamMember {
  id: string;
  name: string;
  gamerTag: string;
  role: string;
  bio: string;
  weapon3D: string;
  favoriteGame: string;
  avatarPlaceholder: string;
  rankBadge: string;
  socials: {
    discord?: string;
    youtube?: string;
    twitch?: string;
    instagram?: string;
    x?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "SNIPE-DOGG",
    gamerTag: "@indiansniper_",
    role: "Founder & Sniper Specialist",
    bio: "Visionary founder of Apex Universe. Sniper specialist & tactical community architect since 2025.",
    weapon3D: "Sniper Rifle",
    favoriteGame: "Warzone / Valorant",
    avatarPlaceholder: "cyber-sniper",
    rankBadge: "FOUNDER",
    socials: {
      discord: DISCORD_INVITE_URL,
      youtube: "https://www.youtube.com/@SNIPE-DOGG",
    },
  },
  {
    id: "member-2",
    name: "VinSoul",
    gamerTag: "@vinsole0991",
    role: "Events & Custom Matches Lead",
    bio: "Master organizer of community tournaments, custom matches, live streams, and seasonal gaming events.",
    weapon3D: "SMG",
    favoriteGame: "Warzone / CoD",
    avatarPlaceholder: "tactical-operative",
    rankBadge: "EVENTS",
    socials: {
      discord: DISCORD_INVITE_URL,
    },
  },
  {
    id: "member-3",
    name: "GhostPants",
    gamerTag: "@muniraj6268",
    role: "Head Community Guardian",
    bio: "Guardian of our Discord community. Dedicated to maintaining a safe, active space for all squad members.",
    weapon3D: "Katana",
    favoriteGame: "Valorant / CODM",
    avatarPlaceholder: "neon-samurai",
    rankBadge: "MODERATOR",
    socials: {
      discord: DISCORD_INVITE_URL,
    },
  },
  {
    id: "member-4",
    name: "Teenup",
    gamerTag: "@reaper_tourneys",
    role: "Tournaments Administrator",
    bio: "Handles tournament bracket administration, rule enforcement, and live championship score tracking.",
    weapon3D: "Tactical Shotgun",
    favoriteGame: "Call of Duty / Warzone",
    avatarPlaceholder: "cyber-sniper",
    rankBadge: "TOURNAMENTS",
    socials: {
      discord: DISCORD_INVITE_URL,
    },
  },
];

// ==========================================
// 6. MODERATORS & LEADERSHIP ROSTER (9 MEMBERS)
// ==========================================
export interface Moderator {
  id: string;
  name: string;
  discordTag: string;
  role: string;
  responsibility: string;
  weapon3D: string;
  discordLink: string;
  badge: string;
  youtubeUrl?: string;
}

export const MODERATORS_DATA: Moderator[] = [
  {
    id: "mod-1",
    name: "SNIPE-DOGG",
    discordTag: "@indiansniper_",
    role: "Founder",
    responsibility: "Visionary founder of Apex Universe. Sniper specialist & tactical community architect since 2025.",
    weapon3D: "Sniper Rifle",
    discordLink: DISCORD_INVITE_URL,
    badge: "FOUNDER",
    youtubeUrl: "https://www.youtube.com/@SNIPE-DOGG",
  },
  {
    id: "mod-2",
    name: "VinSoul",
    discordTag: "@vinsole0991",
    role: "Events",
    responsibility: "Master organizer of community tournaments, custom matches, live streams, and seasonal gaming events.",
    weapon3D: "SMG",
    discordLink: DISCORD_INVITE_URL,
    badge: "EVENTS",
  },
  {
    id: "mod-3",
    name: "GhostPants",
    discordTag: "@muniraj6268",
    role: "Moderator",
    responsibility: "Guardian of our Discord community. Dedicated to maintaining a safe, active space for all squad members.",
    weapon3D: "Katana",
    discordLink: DISCORD_INVITE_URL,
    badge: "MODERATOR",
  },
  {
    id: "mod-4",
    name: "Hammer Singh",
    discordTag: "@vortex_apex",
    role: "Coach",
    responsibility: "Close-quarters combat specialist, map rotations lead, and community Apex Predator coach.",
    weapon3D: "Cyber Hammer",
    discordLink: DISCORD_INVITE_URL,
    badge: "COACH",
    youtubeUrl: "https://www.youtube.com/@HammerSinghCOD",
  },
  {
    id: "mod-5",
    name: "Pingos Gaming",
    discordTag: "@specter_scrims",
    role: "Scrims",
    responsibility: "Coordinates daily competitive scrims and lobbies, ensuring fair play and high-tier competition.",
    weapon3D: "Tactical Pistol",
    discordLink: DISCORD_INVITE_URL,
    badge: "SCRIMS",
    youtubeUrl: "https://www.youtube.com/@Pingosgaming1",
  },
  {
    id: "mod-6",
    name: "Teenup",
    discordTag: "@reaper_tourneys",
    role: "Tournaments",
    responsibility: "Handles tournament bracket administration, rule enforcement, and live championship score tracking.",
    weapon3D: "Tactical Shotgun",
    discordLink: DISCORD_INVITE_URL,
    badge: "TOURNAMENTS",
  },
  {
    id: "mod-7",
    name: "Rocket",
    discordTag: "@rocket_squad",
    role: "Analyst",
    responsibility: "Predictive meta analytics, loadout optimizations, and live squad competitive performance feedback.",
    weapon3D: "Rocket Launcher",
    discordLink: DISCORD_INVITE_URL,
    badge: "ANALYST",
  },
  {
    id: "mod-8",
    name: "Zoro",
    discordTag: "@zoro_blade",
    role: "Duelist",
    responsibility: "Frontline master swordsman with reflex timing. Specializes in rapid team-wipes and aggressive offenses.",
    weapon3D: "Dual Swords",
    discordLink: DISCORD_INVITE_URL,
    badge: "DUELIST",
  },
  {
    id: "mod-9",
    name: "Ryvoric",
    discordTag: "@ryvoric_warden",
    role: "Warden",
    responsibility: "The shield of Apex Universe. Frontline defender and guardian standing against any enemy squad onslaught.",
    weapon3D: "Shield & Broadsword",
    discordLink: DISCORD_INVITE_URL,
    badge: "WARDEN",
    youtubeUrl: "https://www.youtube.com/@Ryvoric",
  },
];

// ==========================================
// 7. OFFICIAL COLLABORATORS & CREATORS (4 CREATORS)
// ==========================================
export interface Collaborator {
  id: string;
  name: string;
  type: "YouTuber" | "Coach" | "Founder" | "Warden";
  description: string;
  testimonial: string;
  buttonLabel: string;
  url: string;
  channelHandle: string;
}

export const COLLABORATORS_DATA: Collaborator[] = [
  {
    id: "collab-1",
    name: "Hammer Singh",
    type: "Coach",
    description: "Close-quarters combat specialist, map rotations lead, and COD/Warzone content creator.",
    testimonial: "The absolute best gaming clan out there. Non-stop action, incredible teammates, and unmatched vibes!",
    buttonLabel: "Visit Channel",
    url: "https://www.youtube.com/@HammerSinghCOD",
    channelHandle: "@HammerSinghCOD",
  },
  {
    id: "collab-2",
    name: "Pingos Gaming",
    type: "YouTuber",
    description: "Daily competitive scrims, custom lobbies, and high-octane FPS clutch reels.",
    testimonial: "Joined since day one. The events are insanely coordinated, and the community is like a second family.",
    buttonLabel: "Visit Channel",
    url: "https://www.youtube.com/@Pingosgaming1",
    channelHandle: "@Pingosgaming1",
  },
  {
    id: "collab-3",
    name: "Snipe Dogg",
    type: "Founder",
    description: "Official YouTube channel of Snipe Dogg. Tactical sniper montages and tournament streams.",
    testimonial: "If you are serious about Warzone and Valorant, this is the squad you want to be running with. Elite class.",
    buttonLabel: "Watch Snipe Dogg",
    url: "https://www.youtube.com/@SNIPE-DOGG",
    channelHandle: "@SNIPE-DOGG",
  },
  {
    id: "collab-4",
    name: "Ryvoric",
    type: "Warden",
    description: "Frontline clan defender, tactical squad gameplay, and community tourney broadcasts.",
    testimonial: "Absolutely premier gaming events and tactical squad coordination. The community's energy and passion is unrivaled!",
    buttonLabel: "Visit Channel",
    url: "https://www.youtube.com/@Ryvoric",
    channelHandle: "@Ryvoric",
  },
];

// ==========================================
// 8. VIDEO OF THE WEEK (FEATURED STREAM SHOWCASE)
// ==========================================
export const VIDEO_OF_THE_WEEK = {
  title: "Featured Stream Showcase — Meta Apex",
  subtitle: "Snipe Dogg Official Live Broadcast Showcase",
  description: "Witness the premier stream showcase from Snipe Dogg. Tactical sniper precision, squad rotations, and intense overtime clutches.",
  creatorName: "Snipe Dogg",
  dateUploaded: "Official Broadcast",
  viewCount: "Featured Stream",
  youtubeUrl: "https://www.youtube.com/live/cSf8s4fKds0?si=z68MD5esvbotfz0M",
  embedVideoId: "cSf8s4fKds0", // Live broadcast ID from the official clan dossier
  duration: "LIVE SHOWCASE",
  gameBadge: "WARZONE & VALORANT",
  whyFeatured: [
    {
      title: "Sniper Specialist Precision",
      desc: "Tactical long-range picks and sub-second target acquisition by Snipe Dogg.",
    },
    {
      title: "Official Clan Broadcast",
      desc: "Featured in the official Apex Universe community dossier and live showcase.",
    },
    {
      title: "Tactical Squad Coordination",
      desc: "Flawless communication, rotation calls, and competitive meta execution.",
    },
  ],
};

// ==========================================
// 9. LATEST UPLOADS & CLUTCHES
// ==========================================
export interface VideoItem {
  id: string;
  title: string;
  category: "Clutch" | "Gameplay" | "Shorts" | "Funny Moments" | "Tournament" | "Highlights";
  creator: string;
  uploadDate: string;
  viewCount: string;
  duration: string;
  thumbnailPlaceholderColor: string;
  youtubeUrl: string;
  embedVideoId?: string;
  featuredTag?: string;
}

export const LATEST_VIDEOS: VideoItem[] = [
  {
    id: "vid-1",
    title: "Snipe Dogg Tactical Warzone Clutch",
    category: "Clutch",
    creator: "Snipe Dogg",
    uploadDate: "3 days ago",
    viewCount: "32.4K views",
    duration: "04:15",
    thumbnailPlaceholderColor: "from-red-950 via-zinc-950 to-black",
    youtubeUrl: "https://www.youtube.com/@SNIPE-DOGG",
    embedVideoId: "cSf8s4fKds0",
    featuredTag: "FEATURED #1",
  },
  {
    id: "vid-2",
    title: "Hammer Singh Close-Quarters Masterclass",
    category: "Gameplay",
    creator: "Hammer Singh",
    uploadDate: "5 days ago",
    viewCount: "19.8K views",
    duration: "06:30",
    thumbnailPlaceholderColor: "from-rose-950 via-neutral-950 to-black",
    youtubeUrl: "https://www.youtube.com/@HammerSinghCOD",
    featuredTag: "COACH PICK",
  },
  {
    id: "vid-3",
    title: "Pingos Gaming Scrim Lobby Highlights",
    category: "Highlights",
    creator: "Pingos Gaming",
    uploadDate: "1 week ago",
    viewCount: "48.1K views",
    duration: "08:12",
    thumbnailPlaceholderColor: "from-neutral-900 via-red-950 to-black",
    youtubeUrl: "https://www.youtube.com/@Pingosgaming1",
  },
  {
    id: "vid-4",
    title: "Ryvoric Shield & Broadsword Defense",
    category: "Tournament",
    creator: "Ryvoric",
    uploadDate: "1 week ago",
    viewCount: "14.2K views",
    duration: "05:45",
    thumbnailPlaceholderColor: "from-red-900 via-stone-950 to-black",
    youtubeUrl: "https://www.youtube.com/@Ryvoric",
    featuredTag: "WARDEN HIGHLIGHT",
  },
  {
    id: "vid-5",
    title: "Meta Apex for Clips and Game Attacks",
    category: "Clutch",
    creator: "Apex Universe",
    uploadDate: "2 weeks ago",
    viewCount: "76.5K views",
    duration: "12:10",
    thumbnailPlaceholderColor: "from-crimson-950 via-red-950 to-black",
    youtubeUrl: "https://www.youtube.com/watch?v=P_G_NCD-6rE",
    featuredTag: "COMMUNITY ARENA",
  },
  {
    id: "vid-6",
    title: "Snipe Dogg 1v4 Sniper Flick Montage",
    category: "Shorts",
    creator: "Snipe Dogg",
    uploadDate: "2 weeks ago",
    viewCount: "92.3K views",
    duration: "00:59",
    thumbnailPlaceholderColor: "from-rose-900 via-zinc-950 to-black",
    youtubeUrl: "https://www.youtube.com/@SNIPE-DOGG",
    featuredTag: "VIRAL",
  },
];

// ==========================================
// 10. NAVIGATION LINKS
// ==========================================
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Mods & Collabs", href: "#moderators" },
  { label: "Videos", href: "#videos" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

// ==========================================
// 11. CONTACT FORM OPTIONS & UPLOAD SPECS
// ==========================================
export const CONTACT_SUBJECT_OPTIONS = [
  "Collaboration & Creator Partnership",
  "Join Leadership / Mod Team",
  "Competitive Scrims & Tournament Entry",
  "Clutch Clip Submission",
  "General Community Inquiry",
];

export const TECHNICAL_INFRASTRUCTURE = {
  backendVideoEndpoint: "/api/upload-drive",
  backendDescription: "Multipart Resumable Google Drive",
  supportedUploadSpecs: "MP4, MOV, WEBM (Up to 250 MB)",
  frontendStack: "React 19, TypeScript, Vite/Next.js, TailwindCSS, Three.js",
  officialRepo: "https://github.com/APEXUNIVERSE/APEX-WEBSITE",
};

// ==========================================
// 12. DISCORD COMMUNITY STREAM MEMBERS (FLOW BANNER)
// ==========================================
export interface DiscordStreamMember {
  name: string;
  discordUsername: string;
  joinedYear: string;
}

export const DISCORD_STREAM_MEMBERS: DiscordStreamMember[] = [
  { name: "BOOGEYMAN", discordUsername: "@akshatupadhyay7323", joinedYear: "JOINED 2026" },
  { name: "Overlord", discordUsername: "@overlord022316", joinedYear: "JOINED 2026" },
  { name: "RagnarNaughty", discordUsername: "@ragnarnaughty.", joinedYear: "JOINED 2026" },
  { name: "teenup13", discordUsername: "@teenup13", joinedYear: "JOINED 2026" },
  { name: "Im_fayaad 🇧🇩", discordUsername: "@im_fayaad_", joinedYear: "JOINED 2026" },
  { name: "Pouty_cave13", discordUsername: "@pouty_cave13_94903", joinedYear: "JOINED 2026" },
  { name: "senpai", discordUsername: "@senpai093587", joinedYear: "JOINED 2026" },
  { name: "VINSOLE", discordUsername: "@vinsole0991", joinedYear: "JOINED 2026" },
  { name: "$inister", discordUsername: "@tamacti_ju", joinedYear: "JOINED 2026" },
  { name: "chacha kancha", discordUsername: "@chachakancha1210", joinedYear: "JOINED 2026" },
  { name: "DR.GHOST", discordUsername: "@deba5683", joinedYear: "JOINED 2026" },
  { name: "Ethan Hunt", discordUsername: "@elsicario28", joinedYear: "JOINED 2026" },
  { name: "ghost reaper o57", discordUsername: "@cosmofreak0526", joinedYear: "JOINED 2026" },
  { name: "JackSprrw", discordUsername: "@jacksprrw_", joinedYear: "JOINED 2026" },
  { name: "𝓟𝓻𝓪𝓷𝓳𝓪𝔂", discordUsername: "@shivapranjay", joinedYear: "JOINED 2026" },
  { name: "gitgat / NaZtY", discordUsername: "@0xgitgat", joinedYear: "JOINED 2026" },
  { name: "IHateBots", discordUsername: "@zerphyzoner", joinedYear: "JOINED 2026" },
  { name: "keensolid50", discordUsername: "@keensolid50", joinedYear: "JOINED 2026" },
  { name: "Sam.Wonderland", discordUsername: "@sam.wonderland", joinedYear: "JOINED 2026" },
  { name: "vishwa", discordUsername: "@vishwa00011", joinedYear: "JOINED 2026" },
  { name: "HELLHOUND", discordUsername: "@nimeshgyanchandanii", joinedYear: "JOINED 2026" },
  { name: "Abhimanyu", discordUsername: "@abhimanyu31321", joinedYear: "JOINED 2026" },
  { name: "AJA®", discordUsername: "@aja_9991r", joinedYear: "JOINED 2026" },
  { name: "Akarshan Nagpal", discordUsername: "@akarshan99928", joinedYear: "JOINED 2026" },
  { name: "Arjun", discordUsername: "@arjunsheokand31", joinedYear: "JOINED 2026" },
  { name: "Bharru", discordUsername: "@bharru5373", joinedYear: "JOINED 2026" },
  { name: "BIKRUM MAJITHIA", discordUsername: "@bikrum_majithia", joinedYear: "JOINED 2026" },
  { name: "Burger", discordUsername: "@neerrajkumaar", joinedYear: "JOINED 2026" },
  { name: "Chervin Rodrigues", discordUsername: "@chervinrodrigues8332", joinedYear: "JOINED 2026" },
  { name: "COMMANDER RABBIT", discordUsername: "@commander_rabbit00", joinedYear: "JOINED 2026" },
  { name: "Crysis", discordUsername: "@crysis_force", joinedYear: "JOINED 2026" },
  { name: "Damodhar21", discordUsername: "@damodhar21", joinedYear: "JOINED 2026" },
  { name: "darshan s patil", discordUsername: "@darshanspatil6509", joinedYear: "JOINED 2026" },
  { name: "FadedMoose", discordUsername: "@fadedmoose9333", joinedYear: "JOINED 2026" },
  { name: "FATIH007", discordUsername: "@fatih0070233", joinedYear: "JOINED 2026" },
  { name: "GHOST PANTS", discordUsername: "@muniraj6268", joinedYear: "JOINED 2026" },
  { name: "Gops On Duty (GG)", discordUsername: "@gopsonduty", joinedYear: "JOINED 2026" },
  { name: "Gurnawaz Sandhu", discordUsername: "@cyberpulse0001", joinedYear: "JOINED 2026" },
  { name: "Hunter_Evolved", discordUsername: "@hunter_evolved", joinedYear: "JOINED 2026" },
  { name: "KillerCrown12", discordUsername: "@killercrown12", joinedYear: "JOINED 2026" },
  { name: "Mr keshIND", discordUsername: "@8635550913", joinedYear: "JOINED 2026" },
  { name: "Mr. Cobra_Bubbles", discordUsername: "@bill016028", joinedYear: "JOINED 2026" },
  { name: "needful_pacer4", discordUsername: "@needful_pacer4", joinedYear: "JOINED 2026" },
  { name: "Pingo's _", discordUsername: "@pingosslife", joinedYear: "JOINED 2026" },
  { name: "Pinguss", discordUsername: "@skulduggerycam", joinedYear: "JOINED 2026" },
  { name: "POTUS", discordUsername: "@._potus_.", joinedYear: "JOINED 2026" },
  { name: "pranav singh", discordUsername: "@pranavsingh6820", joinedYear: "JOINED 2026" },
  { name: "Rickey Martin", discordUsername: "@curly.x.98_45264", joinedYear: "JOINED 2026" },
  { name: "sachinwonderland", discordUsername: "@sachinwonderland", joinedYear: "JOINED 2026" },
  { name: "Sajin", discordUsername: "@sajinnnnnn", joinedYear: "JOINED 2026" },
  { name: "Shadow", discordUsername: "@shodow_777", joinedYear: "JOINED 2026" },
  { name: "Sheikh Hafeez", discordUsername: "@de_chamiya", joinedYear: "JOINED 2026" },
  { name: "SHÏÑKÜ ÑØ TSŪKĪ", discordUsername: "@shinku_no_tsuki", joinedYear: "JOINED 2026" },
  { name: "Snipe Dogg", discordUsername: "@indiansniper_", joinedYear: "JOINED 2026" },
  { name: "Suezie Lucien", discordUsername: "@suezielucien911", joinedYear: "JOINED 2026" },
  { name: "Taiz WOWIE 👑", discordUsername: "@egoistic777", joinedYear: "JOINED 2026" },
  { name: "Tath1986", discordUsername: "@tath1986", joinedYear: "JOINED 2026" },
  { name: "TejaReddy", discordUsername: "@demon_47668", joinedYear: "JOINED 2026" },
  { name: "TheElderElf", discordUsername: "@theelderelf", joinedYear: "JOINED 2026" },
  { name: "TheRealSlimShady", discordUsername: "@naman21097", joinedYear: "JOINED 2026" },
  { name: "ThreePrince", discordUsername: "@threeprince", joinedYear: "JOINED 2026" },
  { name: "titomorham", discordUsername: "@titomorham", joinedYear: "JOINED 2026" },
  { name: "Winter", discordUsername: "@carlz29", joinedYear: "JOINED 2026" },
  { name: "ZORO", discordUsername: "@loh_crazy", joinedYear: "JOINED 2026" },
];
