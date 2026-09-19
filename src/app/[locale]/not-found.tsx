"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { routing, type Locale } from "@/i18n/routing";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import pt from "@/locales/pt.json";
import de from "@/locales/de.json";

/**
 * not-found 边界拿不到 params，且可能渲染在 [locale]/layout.tsx 之外
 * （layout 自身抛 notFound 时 Provider 不存在），因此这里从 pathname 推导语言，
 * 并自建 NextIntlClientProvider 兜底，保证 404 页面在任何渲染路径下都能本地化。
 */
const notFoundMessages: Record<Locale, { notFound: (typeof en)["notFound"] }> = {
  en: { notFound: en.notFound },
  es: { notFound: es.notFound },
  pt: { notFound: pt.notFound },
  de: { notFound: de.notFound },
};

function localeFromPathname(pathname: string | null): Locale {
  const segment = (pathname ?? "").split("/")[1];
  return routing.locales.includes(segment as Locale) ? (segment as Locale) : (routing.defaultLocale as Locale);
}

export default function NotFoundPage() {
  const locale = localeFromPathname(usePathname());

  return (
    <NextIntlClientProvider locale={locale} messages={notFoundMessages[locale]}>
      <NotFoundContent locale={locale} />
    </NextIntlClientProvider>
  );
}

function NotFoundContent({ locale }: { locale: Locale }) {
  const t = useTranslations("notFound");

  return (
    <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-border bg-card/70 p-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{t("title")}</h1>
        <p className="mt-4 text-muted-foreground">{t("description")}</p>
        <Button asChild className="mt-6">
          <Link href={`/${locale}/guide`}>{t("browseGuides")}</Link>
        </Button>
      </div>
    </main>
  );
}
