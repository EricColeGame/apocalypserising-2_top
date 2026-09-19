import { defineRouting } from "next-intl/routing";

/**
 * 语言集合的唯一真相源。
 * 修改此处时必须同步以下三处，否则当前 Part 的语言门禁不通过：
 *   - src/i18n/request.ts 的 messagesMap
 *   - src/components/language-switcher.tsx 的 localeLabels
 *   - src/locales/*.json 的文件名集合
 */
export const routing = defineRouting({
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
