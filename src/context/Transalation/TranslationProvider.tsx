import { TranslationContext } from "./TranslationContext";
import { ReactNode, useEffect, useState } from "react";
import { translations } from "./translations";

type Props = {
  children: ReactNode;
};

export const TranslationProvider = ({ children }: Props) => {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  const toggleLanguage = () => {
    setLang((prev) => {
      const newLang = prev === "pt" ? "en" : "pt";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang === "pt" || storedLang === "en") setLang(storedLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);


  const value = {
    lang,
    t: translations[lang],
    toggleLanguage,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
