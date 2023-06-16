import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Contact from "@/components/sections/Contact";
import Ebook from "@/components/sections/Ebook";
import Message from "@/components/sections/Message";
import Testimonials from "@/components/sections/Testimonials";

const mortgageTestimonials = [
  {
    name: "Beatrice Fictum",
    position: "Design ve stavebnictví",
    content:
      "Naprosto výjimečný přístup a profesionální jednání. V mem případě se jednalo o zahraniční úvěr bez dokládání příjmu… opravdu složitý a zdlouhavý proces, kterým se David “prokousal” ke zdárnému a úspěšnému konci. Vše vyřídil, se vším pomohl, poradil a skvěle to zorganizoval a vymyslel. Děkuji za to!!!",
  },
  {
    name: "David Hrách",
    position: "OSVČ Stavební činnost",
    content:
      "S Davidem jsme řešili hypotéku bez prokazování příjmu. Měli jsme pár schůzek, ve kterých mi mimo jiné řekl co krok za krokem udělat, aby mi ji banka dala. Asi cca po 4 měsících mi schválili přesně tolik, kolik bylo třeba. Za to jsem mu vděčný. Řešili jsme nějaké spoření na které stát přispívá a i ukládání peněz, aby neztratili svou hodnotu. Schůzky jsou vždy velmi příjemné a domluvené tak, aby čas vyhovoval vždy mně. Celkově jsem velmi spokojený klient.",
  },
  {
    name: "Ondřej Langmajer",
    position: "MAVY Monolity s.r.o.",
    content:
      "Na pana Šimanu jsme narazili náhodou a to reklamou na sociálních sítích. V tu dobu jsme aktivně řešili provozní úvěr pro naši společnost, ale bez úspěchu. Až pan Šimana nám s tímto problémem pomohl, navrhl konstruktivní řešení a celou věc dotáhl až do zdárného konce. Vyřešením jednoho problému ale pro p. Šimanu neskončila a proaktivně nabízel další možnosti, jak pomoci naší společnosti. Moc děkujeme za jeho služby, které budeme i nadále rádi využívat.",
  },
  {
    name: "Ondřej Nádvorník, MBA",
    position: "jednatel FINLEY AGENCY s.r.o.",
    content:
      "Díky Davidu Šimanovi se nám podařilo pro náš projekt získat firemní financování od renomované banky. David byl profesionální, proaktivní a právě díky jenom zkušenostem a kontaktů se vše podařilo dohodnout a zrealizovat ve velmi krátkém čase. Davidovi tímto děkuji a rád se na něj obrátím i v budoucnu v dalších případech, kdy půjde o naše finanční plánování.",
  },
  {
    name: "Petroff Teodor",
    position: "Vedoucí pracovník v automotive",
    content:
      "David vyřídil i to nemožné ! Co se tyče financování, refinancovani i sloučení více úvěru do jednoho snad nejlepší volba. Rychle spolehlivé a na jedno zavolání vše vyřízené! Velice doporučuji!!!",
  },
];

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Hypotéky"
        description="Již nemusíte odkládat své vysněné bydlení. Napište mi prostřednictvím formuláře a získejte jasné informace o svých možnostech!"
      />

      {/* Hero */}
      <Container
        as={"section"}
        className="flex flex-col items-center justify-center text-center"
        py="xl"
      >
        <Heading level={1} size="xl" color="primary" hasMarginBottom>
          David Šimana, PFP - Firemní & rodinné finance
        </Heading>
        <p className="mx-auto max-w-prose text-lg">
          Již nemusíte odkládat své vysněné bydlení. Napište mi prostřednictvím
          formuláře a získejte jasné informace o svých možnostech!
        </p>
        <div className="w-full pt-28">
          <div className="aspect-[16/9] w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/J3ewX7bO4pY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="aspect-[16/9] h-full w-full bg-gray-600 object-cover"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>

      {/* Message */}
      <Message message="Specializuji se na podnikatele, majitele firem, freelancery, manažery, lékaře a IT specialisty." />

      {/* E-book */}
      <Ebook
        src="/img/e-book-hypoteky.png"
        templateId="template_vjpin0c"
        title="Chcete se dozvědět více o hypotékách?"
        description="Připravil jsem pro Vás krátký e-book, 10 nejčastějších otázek před sjednáním hypotéky, kde naleznete vše potřebné před tím než budete řešit hypotéku."
      />

      {/* Testimonials */}
      <Testimonials testimonials={mortgageTestimonials} />

      {/* Contact */}
      <Contact />
    </Layout>
  );
}
