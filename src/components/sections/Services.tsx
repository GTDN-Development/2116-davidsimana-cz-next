import SwiperCore, { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Container from "../Container";
import Heading from "../Heading";
import Reveal from "../Reveal";

const services = [
  {
    title: "Hypotéka pro podnikatele:",
    description:
      "Nevíte, kolik vám banka půjčí? Optimalizujete daňové přiznání nebo máte firmu, ze které si vyplácíte minimálně? Pomohu s celým procesem hypotečního případu, od předkonzultace, až po čerpání a následné podmínky.",
  },
  {
    title: "Rodinné a osobní finance:",
    description:
      "Získejte srozumitelný plán pro splnění strategických cílů, jako jsou bydlení, rekonstrukce, rozjezd podnikání nebo prostředky na studia dětí. Přemýšlejte o svém majetku dlouhodobě - co kdyby vás živily vaše peníze, až to nebudete chtít dělat sami? ",
  },
  {
    title: "Hypotéka pro pendlery:",
    description:
      "Získáte výhodnější hypotéku s nízkými sazbami v eurozóně, pokud vám mzda chodí v eurech. Pracujete v zahraničí a jste občanem České republiky? Nevadí! I při práci v zahraničí nebo příjmu v EUR, USD, GBP nebo CHF můžete získat hypotéku.",
  },
  {
    title: "Firemní a podnikatelské casestudy:",
    description:
      "Stojím na straně firem a podnikatelů. Nechte vymýšlení logiky celého procesu na mně. Sestavím business plán včetně podnikatelského záměru. Pomáhám s realizací a dohledem na financování strategických cílů.",
  },
  {
    title: "Firemní a podnikatelské úvěry:",
    description:
      "Mám zkušenosti s developerskými projekty na prodej i pronájem. Řeším jakékoli typy financování: investiční úvěry, provozní a projektové financování, leasingy, bankovní záruky, faktoring.",
  },
  {
    title: "Finanční plánování:",
    description:
      "Mít finanční plán znamená přemýšlet o svých penězích a rozhodnout se, co chceme. Držet se plánu nám pomáhá dosahovat našich cílů. Sestavuji finanční a majetkové plány. Zjistěte, co již dnes děláte dobře při správě svých peněz a kde případně přicházíte o peníze.",
  },
  {
    title: "Zajištění rizik:",
    description:
      "Chráním a zajišťuji skutečná rizika pro klidné spaní za jakéhokoli počasí. Přemýšleli jste nad tím, jaká rizika vás mohou v životě potkat? Z finančního hlediska je mým posláním zajistit vaše finanční cíle a majetek. O metodice EFPA jste již slyšeli?",
  },
  {
    title: "Investiční poradenství:",
    description:
      "Vytvářím investiční strategie na míru od pravidelné investice 25 000 Kč měsíčně a 1 mil. CZK jednorázově. Sestavím pro vás investiční plán, který váš majetek ochrání před vnějšími riziky, na základě písemně formulované strategie.",
  },
  {
    title: "Firemní výhody:",
    description:
      "Využijte možnosti zaměstnaneckých benefitů pro vaše spolupracovníky. Příspěvky na penze nebo obnova vozového parku mohou být daňově výhodné. Vše představím formou workshopu finanční gramotnosti ve vaší firmě. Motivujte své okolí k lepším výsledkům.",
  },
];

function Carousel() {
  SwiperCore.use([Pagination, Autoplay, A11y]);

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="h-auto items-center"
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
      }}
    >
      {services.map((service) => (
        <SwiperSlide
          key={service.title}
          className="mb-12 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gray-200/50 px-6 py-10 text-center"
        >
          <Heading level={"none"} size="sm" hasMarginBottom>
            {service.title}
          </Heading>
          <p>{service.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function Services() {
  return (
    <section id="reference">
      <Container py="lg">
        <Reveal>
          <Heading
            level={"none"}
            size="md"
            hasMarginBottom
            color="primary"
            className="mx-auto text-center"
          >
            S čím pomáhám klientům nejčastěji:
          </Heading>
        </Reveal>

        <Reveal className="pt-20">
          <Carousel />
        </Reveal>
      </Container>
    </section>
  );
}
