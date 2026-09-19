export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  officialSiteUrl?: string;
  heroVideoId?: string;
  social?: {
    youtube?: string;
    reddit?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Apocalypse Rising 2 Wiki",
  shortName: "AR2 Wiki",
  logoText: "A",
  tagline: "Roblox Zombie Survival Shooter",
  description: "Complete Apocalypse Rising 2 Wiki covering weapons, maps, survival guides, codes, updates, gameplay tips and everything Roblox players need to survive.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://apocalypserising-2.top",
  supportEmail: "support@apocalypserising-2.top",
  gameUrl: "https://www.roblox.com/games/863266079/Apocalypse-Rising-2", // verified: page title "Apocalypse Rising 2 | Play on Roblox"
  officialSiteUrl: "https://www.gusmanak.com/",
  heroVideoId: "952xVTWVGKU", // "The ULTIMATE Guide to Apocalypse Rising 2" (Amarauzz) — guide/gameplay, maxresdefault 1280x720 verified
  social: {
    // No official Apocalypse Rising 2 Discord invite is published by the developer,
    // so we deliberately link only to stable community/official-media entry points.
    youtube: "https://www.youtube.com/results?search_query=Apocalypse+Rising+2+Roblox+Trailer",
    reddit: "https://www.reddit.com/search/?q=Apocalypse%20Rising%202",
  },
  // 语言集合的唯一真相源在 src/i18n/routing.ts，此处必须与其保持一致
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
