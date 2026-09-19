import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing, type Locale } from "./routing";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import pt from "@/locales/pt.json";
import de from "@/locales/de.json";

type Messages = typeof en;

/**
 * 语言 → 翻译文件映射。
 * 必须与 routing.locales 完全一致：缺失的语言会静默回退到英文，
 * 多余的语言则会在类型检查阶段报错。
 */
const messagesMap: Record<Locale, Partial<Messages>> = {
  "en": en,
  "es": es,
  "pt": pt,
  "de": de,
};

function deepMerge<T>(base: T, override: Partial<T>): T {
  if (
    typeof base !== "object" ||
    base === null ||
    typeof override !== "object" ||
    override === null
  ) {
    return (override as T) ?? base;
  }

  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };

  for (const key of Object.keys(override as Record<string, unknown>)) {
    const baseValue = (base as Record<string, unknown>)[key];
    const overrideValue = (override as Record<string, unknown>)[key];
    if (overrideValue === undefined) continue;
    result[key] = deepMerge(baseValue as never, overrideValue as never);
  }

  return result as T;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? (requested as Locale)
    : (routing.defaultLocale as Locale);

  // 以英文文案为底，当前语言文案覆盖；非英文 JSON 尚未翻译时自动回退到英文
  const localeMessages = messagesMap[locale] || {};

  const messages = deepMerge(en, localeMessages);
  return { locale, messages };
});
