export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://apocalypserising-2.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/863266079/Apocalypse-Rising-2",
  heroVideoId: "952xVTWVGKU", // "The ULTIMATE Guide to Apocalypse Rising 2" (Amarauzz) — guide/gameplay, 1280x720 cover verified
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
