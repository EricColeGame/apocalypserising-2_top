import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";
import { routing, type Locale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.privacy" });
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `/${l}/privacy-policy`]));
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: `/${locale}/privacy-policy`, languages },
  };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.privacy" });

  return (
    <LegalPage title={t("title")}>
      <p>{t("p1", { url: siteConfig.url })}</p>
      <p>{t("p2")}</p>
      <p>{t("p3")}</p>
    </LegalPage>
  );
}
