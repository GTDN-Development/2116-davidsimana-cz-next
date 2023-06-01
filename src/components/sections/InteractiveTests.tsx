import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";

const tests = [
  {
    title: "Finanční zdraví",
    href: "/testy/financni-zdravi",
    src: "/images/test-financni-zdravi.jpg",
  },
  {
    title: "Pracovní příležitosti",
    href: "/testy/pracovni-prilezitosti",
    src: "/images/test-pracovni-prilezitosti.jpg",
  },
  {
    title: "Investice",
    href: "/testy/investice",
    src: "/images/test-investice.jpg",
  },
  {
    title: "Hypotéka nebo nájem?",
    href: "/testy/hypoteka-najem",
    src: "/images/test-hypoteky.jpg",
  },
];

export default function InteractiveTests() {
  return (
    <Container as={"section"} py="md" id="finance">
      <Heading
        level={2}
        size="md"
        className="mx-auto w-full text-center"
        color="primary"
        hasMarginBottom
      >
        Vyzkoušejte si naše interaktivní testy
      </Heading>
      <p className="mx-auto w-full max-w-3xl pb-12 text-center">
        V rámci finančního gramotnosti jsem pro Vás připravil několik testů, kde
        si můžete ověřit Vaše znalosti v různých kategoriích napříč financemi.
        Po každém testu od nás dostanete finanční doporučení. Pokud se budete
        chtít dozvědět o financích více můžete vyzkoušet můj podcast nebo si
        stáhnout e-book.
      </p>

      {/* Testy */}
      <div className="flex w-full flex-col gap-10">
        {tests.map((test, i) => (
          <div
            key={i}
            className="relative h-44 w-full overflow-hidden rounded-2xl bg-primary-950 shadow-xl"
          >
            <Image
              src={test.src}
              width={1920}
              height={1080}
              alt="Interaktivní test"
              className="absolute inset-0 z-0 aspect-video h-full w-full object-cover opacity-50"
              loading="lazy"
            />

            <div className="z-1 absolute inset-0 flex h-full w-full flex-col items-center justify-between p-8 sm:flex-row">
              <span className="mb-0 text-xl font-bold text-white lg:text-2xl 2xl:text-4xl">
                {test.title}
              </span>
              <Button size="lg" href={test.href}>
                Spustit test
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
