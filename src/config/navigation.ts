export interface NavigationItem {
  /** 翻译键，需同时存在于 en.json 的 nav 命名空间 */
  key: string;
  /** URL 路径（始终以 / 开头），与 content/<locale>/ 下的分类目录同名 */
  path: `/${string}`;
  /** 是否为内容类型：决定是否生成分类列表页、sitemap 条目与侧边栏分组 */
  isContentType: boolean;
}

/**
 * 导航配置。分类 slug 与 content/<locale>/ 下的文章子目录一一对应，
 * 即 /home/ubuntu/Documents/GameProjects/0_meta/apocalypserising-2_top/关键词.json
 * 的 categories 数组。
 *
 * 约束（三处必须一致，否则导航链接会 404 或渲染空白）：
 *   - key  → en.json 的 nav 命名空间，以及 isContentType 为 true 时的顶级
 *            overviewTitle / overviewDescription 键
 *   - path → content/<locale>/<slug>/ 目录，以及 src/lib/content.ts 的 GROUP_ORDER
 *   - satisfies 保证 path 以 / 开头，缺字段时 TypeScript 直接报错
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "maps", path: "/maps", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
