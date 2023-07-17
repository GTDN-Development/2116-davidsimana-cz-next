import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Collaboration from "@/components/sections/Collaboration";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import InteractiveTests from "@/components/sections/InteractiveTests";
import LargeButtons from "@/components/sections/LargeButtons";
import Message from "@/components/sections/Message";
import ParallaxPhoto from "@/components/sections/ParallaxPhoto";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

const homePageTestimonials = [
  {
    name: "Mgr. Ondřej Mach",
    position: "Firemní právník",
    content:
      "Pan Šimana dokáže vždy najít optimální řešení a přizpůsobit se i klientovi, který občas řeší věci ze dne na den. Navíc zná i takové způsoby financování a investování, které mnoho jiných finančních poradců a bankéřů pokládá za neexistující. Pana Šimanu tedy lze jedině doporučit.",
  },
  {
    name: "Zdeněk Dolejší",
    position: "Provozovatel restaurací",
    content:
      "Davide, chtěl bych Vám poděkovat za perfektní osobní přístup, lidské jednání, profesionalitu a zajištění těch nejlepších podmínek - vše v rekordním čase a bez zbytečného papírování. Vašich služeb využiji i v budoucnu a budu Vás upřímně rád doporučovat. DĚKUJI 👌💸 Zdeněk Dolejší",
  },
  {
    name: "Ondřej Nádvorník, MBA",
    position: "jednatel FINLEY AGENCY s.r.o.",
    content:
      "Díky Davidu Šimanovi se nám podařilo pro náš projekt získat firemní financování od renomované banky. David byl profesionální, proaktivní a právě díky jenom zkušenostem a kontaktů se vše podařilo dohodnout a zrealizovat ve velmi krátkém čase. Davidovi tímto děkuji a rád se na něj obrátím i v budoucnu v dalších případech, kdy půjde o naše finanční plánování.",
  },
  {
    name: "Ondřej Langmajer",
    position: "MAVY Monolity s.r.o.",
    content:
      "Na pana Šimanu jsme narazili náhodou a to reklamou na sociálních sítích. V tu dobu jsme aktivně řešili provozní úvěr pro naši společnost, ale bez úspěchu. Až pan Šimana nám s tímto problémem pomohl, navrhl konstruktivní řešení a celou věc dotáhl až do zdárného konce. Vyřešením jednoho problému ale pro p. Šimanu neskončila a proaktivně nabízel další možnosti, jak pomoci naší společnosti. Moc děkujeme za jeho služby, které budeme i nadále rádi využívat.",
  },
  {
    name: "Veronika Vencová",
    position: "OSVČ freelencer",
    content:
      "Nevěřila jsem. Nečekala jsem nic. David Šimana je pro mně jednorožec. Opravdu dělal vše pro to, aby pomohl a nenechal se odradit ani tím, že jsem nebyla úplně nejpříjemnější klient. Jakmile se trochu srovnáme, svěříme Davidovi i naše finance a nejen úvěr. Ze srdce díky.",
  },
  {
    name: "Beatrice Fictum",
    position: "Design ve stavebnictví",
    content:
      "Naprosto výjimečný přístup a profesionální jednání. V mem případě se jednalo o zahraniční úvěr bez dokládání příjmu… opravdu složitý a zdlouhavý proces, kterým se David “prokousal” ke zdárnému a úspěšnému konci. Vše vyřídil, se vším pomohl, poradil a skvěle to zorganizoval a vymyslel. Děkuji za to!!!",
  },
];

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Finanční plánování"
        description="Specializuji se na podnikatele, majitele firem, freelancery, manažery, lékaře a IT specialisty."
      />

      <Hero />

      <Message message="Specializuji se na podnikatele, majitele firem, freelancery, manažery, lékaře a IT specialisty." />

      <Services />

      <ParallaxPhoto />
      <Collaboration />
      <InteractiveTests />
      <LargeButtons />
      <Testimonials testimonials={homePageTestimonials} />

      <Contact />
    </Layout>
  );
}
