import emailjs from "@emailjs/browser";
import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import Alert from "../Alert";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import Link from "../Link";
import Checkbox from "../inputs/Checkbox";
import Hnypot from "../inputs/Hnypot";
import TextInput from "../inputs/TextInput";

function EbookForm({
  templateId = "template_r6hfne2",
  className = "",
}: {
  templateId?: string;
  className: string;
}) {
  // Email
  const [isMailSent, setIsMailSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Ref
  const formRef = useRef<HTMLFormElement>(null);

  // Honeypot ref (antispam protection)
  const hnyNameRef = useRef<HTMLInputElement>(null);

  // Form submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formRef.current) return;

    const hnyName = hnyNameRef.current?.value;

    if (hnyName === "" || hnyName === undefined) {
      emailjs
        .sendForm(
          "service_e8iymks",
          templateId,
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
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={clsx(
          "flex flex-col items-center justify-center gap-6",
          className
        )}
      >
        {/* ---- Honey start - antispam ochrana ---- */}
        <Hnypot ref={hnyNameRef} type="text" id="hny-name" label="name" />
        {/* ---- Honey end - antispam ochrana ---- */}
        <TextInput
          id="email"
          name="email"
          label="Váš e-mail"
          isRequired
          className="w-full"
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
        <Button type="submit" size="lg" isFullWidth isLoading={isLoading}>
          Zaslat e-book
        </Button>
      </form>
      <div className="mx-auto flex max-w-lg flex-col gap-5 py-5 text-left">
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
      </div>
    </>
  );
}

type Props = {
  templateId?: string;
  src: string;
  title: string;
  description: string;
};

export default function Ebook({ templateId, src, title, description }: Props) {
  return (
    <Container
      py="lg"
      className="flex flex-col items-center justify-center text-center"
    >
      <Heading level={2} size="md" color="primary" hasMarginBottom>
        {title}
      </Heading>
      <p className="mx-auto max-w-prose">{description}</p>
      <div className="w-full pt-12">
        <Image
          src={src}
          alt="Cover knížky"
          width={1500}
          height={1500}
          className="mx-auto w-full max-w-3xl"
        />
      </div>
      <EbookForm templateId={templateId} className="w-full max-w-lg pt-12" />
    </Container>
  );
}
