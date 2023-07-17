import GdprPolicy from "@/components/GdprPolicy";
import Layout from "@/components/Layout";
import Prose from "@/components/Prose";
import Seo from "@/components/Seo";

const globalSettings = {
  launchDate: "21. 8. 2022",
  client: {
    fullName: "David Šimana",
    ico: "05673887",
    phone: "+420 722 214 141",
    email: "info@davidsimana.cz",
    adress: "Osvobozených politických vězňů 1070, 330 23 Nýřany",
  },
};

export default function Gdpr() {
  return (
    <Layout>
      <Seo title="GDPR" description="Lorem ipsum dolor" />

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
