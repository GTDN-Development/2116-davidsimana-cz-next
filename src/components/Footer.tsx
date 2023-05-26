import { siteConfig } from "@/configs/site-config";
import { useTranslation } from "@/hooks/useTranslation";
import Container from "./Container";
import Heading from "./Heading";
import Link from "./Link";
import Logo from "./Logo";
import Socials from "./Socials";

function RevealMark({ className = "" }: { className?: string }) {
  const t = useTranslation();
  return (
    <a
      href="https://reveal.cz"
      target="_blank"
      rel="noreferrer author external"
      className={`duration-default focus-visible:a11y-primary my-2 min-w-[161px] self-center rounded-md bg-black px-5 py-3 text-xs font-bold tracking-wider text-white transition-shadow ${className}`}
    >
      <img
        src="/svg/reveal-logo-signature.svg"
        alt="Logo autora webu"
        width="10"
        height="10"
        className="mr-3 inline -translate-y-0.5"
      />
      <span>{t.common.footer.revealSignature}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer w-screen bg-gray-950 text-white">
      <Container className="flex flex-col items-center justify-between gap-10 py-10 text-center lg:flex-row lg:items-stretch lg:py-16 lg:text-left">
        <div className="flex flex-col items-center gap-y-8 lg:items-start">
          <div className="dark h-12 w-28">
            <Logo isWhite />
          </div>
          <div>
            <Heading
              level={"none"}
              size="sm"
              hasMarginBottom
              className="text-white"
            >
              David Šimana
            </Heading>
            <ul>
              <li>IČ: 05673887</li>
              <li>
                Tel:{" "}
                <Link
                  href="tel:+420722214141"
                  hoverEffect="scale-up"
                  className="font-normal text-white"
                >
                  +420 722 21 41 41
                </Link>
              </li>
              <li>
                E-mail:{" "}
                <Link
                  href="mailto:info@davidsimana.cz"
                  hoverEffect="scale-up"
                  className="font-normal text-white"
                >
                  info@davidsimana.cz
                </Link>
              </li>
              <li>Prešovská 194/15, 301 00 Plzeň 3 Vnitřní Město</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:items-end">
          <Socials className="mb-6 text-white" />

          <ul className="mt-auto flex list-none flex-col space-y-4 lg:flex-row lg:space-x-10 lg:space-y-0">
            <li>
              <Link
                href="/gdpr"
                hoverEffect="scale-up"
                className="font-normal text-white"
              >
                Zpracování osobních údajů
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="w-screen bg-gray-900/85">
        <Container className="flex flex-col items-center justify-between gap-10 py-10 text-center lg:flex-row lg:text-left">
          <span className="block lg:mr-auto">
            Copyright © {new Date().getFullYear()} {siteConfig.seo.shortUrl}
          </span>
          <RevealMark />
        </Container>
      </div>
    </footer>
  );
}
