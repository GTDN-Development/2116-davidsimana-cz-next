import { contact } from "@/configs/navigation";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Alert from "../Alert";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import Link from "../Link";
import Reveal from "../Reveal";
import Checkbox from "../inputs/Checkbox";
import Hnypot from "../inputs/Hnypot";
import TextArea from "../inputs/TextArea";
import TextInput from "../inputs/TextInput";
import { NewsletterManual } from "./Newsletter";

function ContactForm({ className = "" }: { className?: string }) {
  const [isMailSent, setIsMailSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  // Honeypot refs
  const hnyNameRef = useRef<HTMLInputElement>(null);
  const hnySurnameRef = useRef<HTMLInputElement>(null);
  const hnyTelRef = useRef<HTMLInputElement>(null);
  const hnyEmailRef = useRef<HTMLInputElement>(null);

  // Submit handler
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formRef.current) return;

    const hnyName = hnyNameRef.current?.value;
    const hnySurname = hnySurnameRef.current?.value;
    const hnyTel = hnyTelRef.current?.value;
    const hnyEmail = hnyEmailRef.current?.value;

    if (
      (hnyName === "" || hnyName === undefined) &&
      (hnySurname === "" || hnySurname === undefined) &&
      (hnyTel === "" || hnyTel === undefined) &&
      (hnyEmail === "" || hnyEmail === undefined)
    ) {
      emailjs
        .sendForm(
          "service_e8iymks",
          "template_w6pnfko",
          e.target,
          "user_2tNsUaIQSULo6wFXKZVCs"
        )
        .then(
          // Success
          () => {
            setIsMailSent(true);
            e.target.reset();
            setIsLoading(false);
          },
          // Error
          () => {
            setFormError(true);
            setIsLoading(false);
          }
        );
    } else {
      setIsMailSent(true);
      e.target.reset();
      setIsLoading(false);
    }
  };
  return (
    <div className={`${className}`}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`space-y-8`}
        aria-label="Kontaktní formulář"
      >
        {/* ---- Honey start - antispam ochrana ---- */}
        <Hnypot ref={hnyNameRef} type="text" id="hny-name" label="name" />
        <Hnypot
          ref={hnySurnameRef}
          type="text"
          id="hny-surname"
          label="surname"
        />
        <Hnypot
          ref={hnyTelRef}
          type="tel"
          id="hny-phone"
          label="phone number"
        />
        <Hnypot ref={hnyEmailRef} type="email" id="hny-email" label="E-mail" />
        {/* ---- Honey end - antispam ochrana ---- */}

        <TextInput
          type="text"
          id="name"
          name="name"
          label={"Jméno a příjmení"}
          isRequired
        />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <TextInput
            type="email"
            name="email"
            label={"E-mail"}
            isRequired
            className="col-span-1"
          />
          <TextInput
            type="tel"
            id="tel"
            name="tel"
            label={"Telefon"}
            isRequired
            className="col-span-1"
          />
        </div>
        <TextArea
          id="message"
          name="message"
          label={"Vaše zpráva"}
          isRequired
        />
        <Checkbox
          id="gdpr"
          name="gdpr"
          isRequired
          label={
            <span>
              {"Souhlasím s podmínkami"}{" "}
              <Link
                href="/gdpr"
                hoverEffect="scale-up"
                className="text-primary-500"
              >
                {"ochrany osobních údajů."}
              </Link>
            </span>
          }
        />
        <Button size="lg" type="submit" isLoading={isLoading}>
          Odeslat
        </Button>
        {isMailSent && (
          <Alert intent="success" title={"Formulář byl úspěšně odeslán"}>
            Děkujeme za vyplnění formuláře. Ozveme se vám co nejdříve to půjde.
          </Alert>
        )}
        {formError && (
          <Alert intent="error" title={"Něco se nepovedlo"}>
            Formulář se nepodařilo odeslat, zkuste to později, nebo využijte
            jiný způsob kontaktu.
          </Alert>
        )}
      </form>
    </div>
  );
}

export default function Contact() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  return (
    <>
      <Container
        as="section"
        id="kontakt"
        pt="md"
        pb="lg"
        className="grid gap-x-12 gap-y-16 lg:grid-cols-2"
      >
        <Reveal className="col-span-1 flex flex-col gap-5">
          <Heading level={"none"} size="lg" color="primary" hasMarginBottom>
            Kontakt
          </Heading>
          <Reveal>
            <p>
              Ke každé nezávazné schůzce ode mě dostanete ebook{" "}
              <span className="font-semibold">
                7 oblastí pro zdravé finance
              </span>
              , kde se dozvíte spoustu zajímavých rad, které Vám pomůžou na
              cestě za finanční svobodou.
            </p>
          </Reveal>
          <Reveal className="mt-5 flex flex-col items-start justify-start gap-3 lg:gap-6">
            <Link
              href={contact[0].href}
              hoverEffect="scale-down"
              color="primary"
              className="text-lg font-semibold sm:text-xl lg:text-2xl"
            >
              {contact[0].label}
            </Link>
            <Link
              href={contact[1].href}
              hoverEffect="scale-down"
              color="primary"
              className="text-lg font-semibold sm:text-xl lg:text-2xl"
            >
              {contact[1].label}
            </Link>
            <Link
              as={"button"}
              hoverEffect="scale-down"
              color="primary"
              onClick={() => setIsNewsletterOpen(true)}
              className="text-lg font-semibold sm:text-xl lg:text-2xl"
            >
              Odebírej novinky
            </Link>
          </Reveal>
        </Reveal>

        <Reveal className="col-span-1">
          <Heading level={"none"} size="sm" color="primary" hasMarginBottom>
            Máte dotaz?
          </Heading>
          <Reveal>
            <ContactForm />
          </Reveal>
        </Reveal>
      </Container>

      {/* Newsletter */}
      <NewsletterManual
        isOpen={isNewsletterOpen}
        setIsOpen={setIsNewsletterOpen}
      />
    </>
  );
}
