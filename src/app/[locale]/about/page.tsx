import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";
import { routing, type Locale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.about" });
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `/${l}/about`]));
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: `/${locale}/about`, languages },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.about" });

  return (
    <LegalPage title={t("title")}>
      <p>{t("p1", { site: siteConfig.name })}</p>
      <p>{t("p2")}</p>
      <p>{t("p3", { email: siteConfig.supportEmail })}</p>
    </LegalPage>
  );
}
