import { createContext, useContext } from "react";
import { translations } from "./translations";

type TranslationContextType = {
  lang: "pt" | "en";
  t: (typeof translations)["pt"];
  toggleLanguage: () => void;
};

export const TranslationContext = createContext<TranslationContextType | null>(null);

export const useTranslation = () => {
  const ctx = useContext(TranslationContext);
  if (!ctx)
    throw new Error("useTheme deve ser usado dentro de <ThemeProvider>");
  return ctx;
};
