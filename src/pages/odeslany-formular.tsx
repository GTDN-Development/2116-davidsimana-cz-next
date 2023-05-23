import Button from "@/components/Button";
import Seo from "@/components/Seo";
import { useTranslation } from "@/hooks/useTranslation";
import { HiHome } from "react-icons/hi2";

export default function SuccessForm() {
  const t = useTranslation();
  return (
    <>
      <Seo
        title={t.index.seo.title}
        description={t.index.seo.description}
        noFollow
        noIndex
      />
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col items-start justify-start gap-6 rounded-2xl bg-primary-100 p-4 sm:p-10">
          <h1 className="text-xl font-bold sm:text-3xl">
            {t.index.contect.form.successAlert.heading}
          </h1>
          <p>{t.index.contect.form.successAlert.text}</p>
          <Button href="/" size="lg" leftIcon={<HiHome />}>
            {t.index.contect.form.successAlert.backToHomePage}
          </Button>
        </div>
      </div>
    </>
  );
}
