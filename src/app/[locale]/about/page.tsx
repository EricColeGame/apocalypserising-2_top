import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>{`${siteConfig.name} is an independent fan-built guide hub covering weapons, maps, loot routes, survival tactics, and essential game knowledge for new and veteran Apocalypse Rising 2 survivors alike.`}</p>
      <p>Apocalypse Rising 2 is an open-world zombie survival shooter on Roblox developed by Dualpoint Interactive. Players explore a zombie-filled island, collect weapons, fight other players, manage resources, and try to stay alive.</p>
      <p>{`All guides on this site are written and maintained by the community. We are not affiliated with Roblox Corporation or the developers of Apocalypse Rising 2. Questions or corrections can be sent to ${siteConfig.supportEmail}.`}</p>
    </LegalPage>
  );
}
