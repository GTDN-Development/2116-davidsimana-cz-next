import { useTranslation } from "@/hooks/useTranslation";
import Container from "./Container";
import Link from "./Link";

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
  const t = useTranslation();
  return (
    <footer className="w-screen bg-gray-900">
      <Container
        size="fluid"
        py="sm"
        className="flex flex-col items-center justify-between space-y-6 py-10 text-center lg:flex-row lg:space-y-0"
      >
        <span className="block text-white lg:mr-auto">
          Copyright © {new Date().getFullYear()} drive4people.cz
        </span>
        <ul className="flex list-none flex-col space-y-4 lg:mr-8 lg:flex-row lg:space-x-6 lg:space-y-0 xl:mr-16 xl:space-x-10">
          {t.common.footer.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                hoverEffect="scale-up"
                className="font-normal text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <RevealMark />
      </Container>
    </footer>
  );
}
