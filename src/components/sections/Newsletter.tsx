import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import Alert from "../Alert";
import Button from "../Button";
import Link from "../Link";
import Modal from "../Modal";
import Checkbox from "../inputs/Checkbox";
import Hnypot from "../inputs/Hnypot";
import TextInput from "../inputs/TextInput";

function Newsletter({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
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
          "template_r6hfne2",
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
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      width="md"
      title="Odebírejte novinky!"
    >
      <div className="flex h-full flex-col items-center justify-center py-10">
        <p className="mb-6 text-center text-lg">
          Pokud se chcete dozvídat o novinkách z oblasti financí, investic a
          podnikání, přihlaste se k odběru mého newsletteru.
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-stretch justify-center gap-5"
        >
          {/* ---- Honey start - antispam ochrana ---- */}
          <Hnypot ref={hnyNameRef} type="text" id="hny-name" label="name" />
          {/* ---- Honey end - antispam ochrana ---- */}
          <TextInput id="email" name="email" label="Váš e-mail" isRequired />
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
            Odebírat
          </Button>
        </form>
        <div className="flex flex-col gap-5 py-5">
          {isMailSent && (
            <Alert intent="success" title={"Formulář byl úspěšně odeslán"}>
              Děkujeme za vyplnění formuláře. Ozveme se vám co nejdříve to
              půjde.
            </Alert>
          )}
          {formError && (
            <Alert intent="error" title={"Něco se nepovedlo"}>
              Formulář se nepodařilo odeslat, zkuste to později, nebo využijte
              jiný způsob kontaktu.
            </Alert>
          )}
        </div>
      </div>
    </Modal>
  );
}

function NewsletterAutomatic() {
  const [isOpen, setIsOpen] = useState(false);

  // Open newsletter after 20 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timeout);
  }, []);

  return <Newsletter isOpen={isOpen} setIsOpen={setIsOpen} />;
}

function NewsletterManual({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return <Newsletter isOpen={isOpen} setIsOpen={setIsOpen} />;
}

export { NewsletterAutomatic, NewsletterManual };
