import GdprPolicy from "@/components/GdprPolicy";
import Layout from "@/components/Layout";
import Prose from "@/components/Prose";
import Seo from "@/components/Seo";

import { useTranslation } from "@/hooks/useTranslation";

const globalSettings = {
  launchDate: "14. 2. 2022",
  client: {
    fullName: "Lukáš Jiránek",
    ico: "05564867",
    phone: "+420 773 997 434",
    email: "info@drive4people.cz",
    adress: "Hornická 223, 33 022 Zbůch",
  },
};

export default function Gdpr() {
  const t = useTranslation();
  return (
    <Layout>
      <Seo title={"GDPR"} description={t.index.seo.description} />

      <header className="flex h-[512px] w-screen items-center justify-center bg-primary-900 text-primary-100">
        <h1 className="text-2xl font-bold sm:text-4xl xl:text-7xl">GDPR</h1>
      </header>

      <Prose className="py-36">
        <GdprPolicy
          ownerName={globalSettings.client.fullName}
          adress={globalSettings.client.adress}
          email={globalSettings.client.email}
          phone={globalSettings.client.phone}
          ico={globalSettings.client.ico}
          takesEffectDate={globalSettings.launchDate}
        />
      </Prose>
    </Layout>
  );
}
