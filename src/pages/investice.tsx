import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Contact from "@/components/sections/Contact";
import Ebook from "@/components/sections/Ebook";
import Message from "@/components/sections/Message";
import Testimonials from "@/components/sections/Testimonials";

const investmentTestimonials = [
  {
    name: "Mgr. Ondřej Mach",
    position: "Firemní právník",
    content:
      "Pan Šimana dokáže vždy najít optimální řešení a přizpůsobit se i klientovi, který občas řeší věci ze dne na den. Navíc zná i takové způsoby financování a investování, které mnoho jiných finančních poradců a bankéřů pokládá za neexistující. Pana Šimanu tedy lze jedině doporučit.",
  },
  {
    name: "Nhat Long Dinh",
    position: "OSVČ montáž fotovolatiky",
    content:
      "Za mě super člověk se kterým se velice dobře mluví a velice rád Vám pomůže s vysvětlením ohledně financí nebo investování a pojištění.",
  },
  {
    name: "David Hrubý",
    position: "OSVČ Pendler",
    content:
      "David je velmi příjemný, spolehlivý a ochotný poradce. Už po první schůzce mi bylo jasné, že jsem zde správně. Veškeré mé dotazy zodpověděl a se vším ochotně poradil. Poprvé jsem za Davidem šel pro radu ohledně pojistky na vozidlo, sedli jsme si a David mi ukázal veškeré služby které nabízí. Jeho práce se mi velmi líbí a jsem spokojený. Určitě doporučuji!",
  },
  {
    name: "Jindřich Zachrla",
    position: "Vládní zaměstnanec (Armáda ČR)",
    content:
      "David je člověk, který se všestranně stará o mé finance. Není to tak dlouho co jsem zjistil, že tuhle část bych rád přenechal odborníkovi, kterým David bezpochyby je. Spravuje mé investice, pomohl mi refinancovat půjčky a v neposlední řadě pro mě zajištuje hypotéku za účelem rozjezdu podnikání. Několikrát mě přesvědčil, že mé finance jsou pod jeho správou v bezpečí a zachází s nimi jak nejlépe umí (a že to umí ). Mimo jeho schopnosti oceňuji také jeho ochotu pomoct a poradit kdykoli potřebuji. S čistým svědomím mohu říct, že Davida doporučuji ať už hledáte cokoli ohledně financí, nebo prostě jen chcete finančního poradce s přátelským přístupem a skvělými dovednostmi.",
  },
  {
    name: "Filip Zimanzl",
    position: "OSVČ – Obchodní zástupce",
    content:
      "David je nejen skvělý investiční poradce, ale také skvělý člověk, co vždy rad pomůže a vyhoví vašim potřebám! pokud potřebujete ve světě financí poradit, David je člověk číslo jedna na koho se obrátit! ",
  },
];

export default function Investice() {
  return (
    <Layout>
      <Seo
        title="Investice"
        description="Přemýšlejte o svém majetku dlouhodobě - co kdyby vás živily vaše peníze, až to nebudete chtít dělat sami?"
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
          Přemýšlejte o svém majetku dlouhodobě - co kdyby vás živily vaše
          peníze, až to nebudete chtít dělat sami?
        </p>
        <div className="w-full pt-28">
          <div className="aspect-[16/9] w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xWmm5U_2Yf0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="aspect-[16/9] h-full w-full bg-gray-600 object-cover"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>

      {/* Message */}
      <Message message="Specializuji se na majetkové poradenství pro OSVČ a majitele firem. Sestavuji investiční portfolia od 1 milionu korun." />

      {/* E-book */}
      <Ebook
        src="/img/e-book-investice.png"
        templateId="template_crjo9xw"
        title="Chcete se dozvědět více o investování?"
        description="Připravil jsem pro Vás krátký  e-book, 10 nejčastějších otázek ohledně investování, kde naleznete cenné informace."
      />

      {/* Testimonials */}
      <Testimonials testimonials={investmentTestimonials} />

      {/* Contact */}
      <Contact />
    </Layout>
  );
}
