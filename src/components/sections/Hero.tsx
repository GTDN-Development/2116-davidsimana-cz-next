import Image from "next/image";
import { useState } from "react";
import { HiPlay } from "react-icons/hi";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import Modal from "../Modal";
import Reveal from "../Reveal";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      id="domu"
      className="relative w-screen overflow-hidden sm:h-screen lg:min-h-[640px]"
    >
      <Container className="grid h-full grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5">
        <Reveal className="col-span-1 flex flex-col items-start justify-center gap-5 pb-20 pt-36 lg:gap-8 lg:py-0 2xl:col-span-3">
          <Heading level={1} size="xl" color="primary">
            David Šimana, PFP - Firemní & rodinné finance
          </Heading>
          <p className="max-w-prose text-lg lg:text-xl">
            Jsem poradce finančního plánování a pomohu Vám s realizací velkých
            finančních cílů.
          </p>

          <Button
            size="xl"
            leftIcon={<HiPlay />}
            onClick={() => setIsOpen(true)}
          >
            Přehrát video
          </Button>

          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            width="lg"
            videoSrc="https://www.youtube.com/embed/W--jj1K00Yk"
          />
        </Reveal>

        <div className="col-span-1 flex items-end justify-center pt-16 2xl:col-span-2">
          <Image
            src="/img-old/portrait.png"
            width={1000}
            height={1332}
            alt="Portrét David Šimana"
            className="w-full max-w-md object-contain lg:max-w-none 2xl:scale-[1.4]"
            loading="eager"
            priority
          />
        </div>
      </Container>
    </header>
  );
}
