import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import Reveal from "../Reveal";

const tests = [
  {
    title: "Finanční zdraví",
    href: "/testy/financni-zdravi",
    src: "/img/test-financni-zdravi.jpg",
  },
  {
    title: "Pracovní příležitosti",
    href: "/testy/pracovni-prilezitosti",
    src: "/img/test-pracovni-prilezitosti.jpg",
  },
  {
    title: "Investice",
    href: "/testy/investice",
    src: "/img/test-investice.jpg",
  },
  {
    title: "Hypotéka nebo nájem?",
    href: "/testy/hypoteka-najem",
    src: "/img/test-hypoteky.jpg",
  },
];

export default function InteractiveTests() {
  return (
    <Container as={"section"} py="md" id="o-financich">
      <Reveal>
        <Heading
          level={2}
          size="md"
          className="mx-auto w-full text-center"
          color="primary"
          hasMarginBottom
        >
          Vyzkoušejte si naše interaktivní testy
        </Heading>
      </Reveal>
      <Reveal>
        <p className="mx-auto w-full max-w-3xl pb-20 text-center">
          V rámci finančního gramotnosti jsem pro Vás připravil několik testů,
          kde si můžete ověřit Vaše znalosti v různých kategoriích napříč
          financemi. Po každém testu od nás dostanete finanční doporučení. Pokud
          se budete chtít dozvědět o financích více můžete vyzkoušet můj podcast
          nebo si stáhnout e-book.
        </p>
      </Reveal>

      {/* Testy */}
      <div className="flex w-full flex-col gap-14">
        {tests.map((test, i) => (
          <Link href={test.href} key={i} className="h-48 w-full md:h-64">
            <Reveal className="h-full w-full">
              <div className="group relative  h-full w-full overflow-hidden rounded-2xl bg-primary-950 shadow-xl transition duration-500 hover:scale-95 hover:shadow-none sm:hover:scale-[0.97]">
                <Image
                  src={test.src}
                  width={1920}
                  height={1080}
                  alt="Interaktivní test"
                  className="absolute inset-0 z-0 aspect-video h-full w-full object-cover opacity-50 transition duration-500 ease-in-out group-hover:scale-[1.118]"
                  loading="lazy"
                />

                <div className="z-1 absolute inset-0 flex h-full w-full flex-col items-center justify-between p-8 sm:flex-row">
                  <span className="mb-0 text-xl font-bold text-white lg:text-2xl 2xl:text-4xl">
                    {test.title}
                  </span>
                  <Button size="xl" isFocusable={false}>
                    Spustit test
                  </Button>
                </div>
              </div>
            </Reveal>
          </Link>
        ))}
      </div>
    </Container>
  );
}
