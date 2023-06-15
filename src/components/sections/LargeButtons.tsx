import { socials } from "@/configs/navigation";
import clsx from "clsx";
import Image from "next/image";
import Container from "../Container";
import Heading from "../Heading";
import Reveal from "../Reveal";
import SmartLink from "../SmartLink";

export default function LargeButtons() {
  const socialsToDisplay = socials.slice(socials.length - 2, socials.length);
  return (
    <>
      <Container pt="sm" pb="lg">
        <Heading
          level={2}
          size="md"
          color="primary"
          className="mx-auto mb-16 text-center"
        >
          Poslechněte si můj podcast
        </Heading>

        <div className="grid gap-10 sm:grid-cols-2">
          {socialsToDisplay.map((social, i) => (
            <SmartLink key={i} href={social.href}>
              <Reveal>
                <div
                  className={clsx(
                    "group relative aspect-[3/2] overflow-hidden rounded-2xl p-5 text-white shadow-lg transition duration-500 hover:scale-95 hover:shadow-none sm:hover:scale-[0.97]",
                    social.classNames
                  )}
                >
                  {social.src && (
                    <Image
                      src={social.src}
                      alt="David Šimana podcast"
                      width={1024}
                      height={1024}
                      className="absolute right-0 top-[60%] z-10 w-1/2 -translate-y-1/2 translate-x-1/4 rotate-12 scale-110 rounded-xl shadow-xl transition duration-500 group-hover:scale-[1.2]"
                    />
                  )}
                  <div className="relative z-20 flex flex-col items-start justify-start gap-5">
                    <social.icon className="h-9 w-9" aria-hidden="true" />
                    <Heading
                      level={"none"}
                      size="md"
                      color="white"
                      className="ml-2"
                    >
                      {social.label}
                    </Heading>
                    <p>Podcast nejen o financích</p>
                  </div>
                </div>
              </Reveal>
            </SmartLink>
          ))}
        </div>
      </Container>
    </>
  );
}
