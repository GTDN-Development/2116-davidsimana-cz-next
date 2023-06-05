import clsx from "clsx";
import Container from "../Container";
import Heading from "../Heading";
import Reveal from "../Reveal";

const content = [
  {
    number: "1",
    content:
      "Kontaktujte mě přes kontaktní formulář níže na webu. Můžete mě také kontaktovat telefonicky nebo e-mailem. Časová náročnost pro Vás je přibližně 2 minuty.",
  },
  {
    number: "2",
    content:
      "Prověřím Vaše požadavky, uskutečníme strukturovaný rozhovor a shromáždíme potřebná data. Setkání může být osobní nebo online. Časová náročnost je 45 minut.",
  },
  {
    number: "3",
    content:
      "Představím Vám písemné řešení a strategii pro dosažení finančních cílů. Setkání může být osobní nebo online. Časová náročnost je 60 minut.",
  },
  {
    number: "4",
    content:
      "Realizaci cílů a následný klientský servis (doporučení, analýzy, výpis majetku, průběžné konzultace) probíhá telefonicky, osobně nebo e-mailem, průběžně po celý život naší spolupráce.",
  },
];

export default function Collaboration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section id="jak-fungujeme" className={clsx("", className)}>
      <Container py="md">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center justify-center">
          <Heading
            level={2}
            size="md"
            color="primary"
            className="mx-auto text-center"
            hasMarginBottom
          >
            Jak probíhá naše spolupráce a jaká je časová náročnost?
          </Heading>
          <p className="text-center text-lg">
            Mám pouze jeden diář a omezený počet klientů. Spolupracuji efektivně
            s mým týmem a asistentkou, abychom Vám poskytli co nejlepší služby.
          </p>
        </Reveal>
        <div className="mx-auto grid w-full gap-10 py-12 sm:pt-16 lg:max-w-5xl lg:grid-cols-2 lg:pt-24">
          {content.map((item) => (
            <Reveal
              key={item.number}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-50">
                {item.number}
              </div>
              <p className="pt-5 text-center">{item.content}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
