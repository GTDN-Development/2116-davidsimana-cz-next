import { socials } from "@/configs/navigation";
import clsx from "clsx";
import Container from "../Container";
import Heading from "../Heading";
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
          Sledujte mě na sociálních sítích
        </Heading>

        <div className="grid gap-10 sm:grid-cols-2">
          {socialsToDisplay.map((social, i) => (
            <SmartLink
              key={i}
              href={social.href}
              className={clsx(
                "relative flex aspect-[3/2] flex-col items-start justify-start gap-5 overflow-hidden rounded-xl p-5 text-white",
                social.classNames
              )}
            >
              <social.icon className="h-8 w-8" aria-hidden="true" />
              <Heading level={"none"} size="md" color="white" className="ml-2">
                {social.label}
              </Heading>
            </SmartLink>
          ))}
        </div>
      </Container>
    </>
  );
}
