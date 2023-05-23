import { cs } from "@/locales/cs/common";
import { de } from "@/locales/de/common";
import { en } from "@/locales/en/common";
import { ru } from "@/locales/ru/common";
import { useRouter } from "next/router";

// How to use:
// import { useTranslation } from "@/hooks/useTranslation";
// ...
// const t = useTranslation();
// ...
// <p>
//   {t.key.string}
// </p>

export const useTranslation = () => {
  const { locale } = useRouter();
  // const t = locale === "cs" ? cs : en;
  const t =
    locale === "cs" ? cs : locale === "en" ? en : locale === "de" ? de : ru;
  return t;
};
