import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}

/**
 * 导航配置。当前站点尚未生成任何内容，暂为空数组——
 * 待内容类型确定后再按实际目录重建（key 需同时存在于 en.json 的 nav 命名空间）。
 */
export const NAVIGATION_CONFIG = [] as NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
