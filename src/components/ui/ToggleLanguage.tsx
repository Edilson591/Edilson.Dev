import { useTranslation } from "@/context/Transalation/TranslationContext";
import { cn } from "@/utils/cn";
// import { useLanguage } from '@/hooks/useLanguage';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { toggleLanguage, lang } = useTranslation();

  const isPT = lang === "pt";


  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "relative px-2 py-1 rounded-lg transition-all duration-300",
        "hover:bg-bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary",
        className,
      )}
      aria-label={isPT ? "Switch to English" : "Mudar para português"}
    >
      <div className="relative w-10 h-5 flex items-center justify-center text-sm font-medium">
        <span
          className={cn(
            "absolute transition-all duration-300",
            isPT ? "opacity-100 scale-100" : "opacity-0 scale-75",
          )}
        >
          PT
        </span>

        <span
          className={cn(
            "absolute transition-all duration-300",
            isPT ? "opacity-0 scale-75" : "opacity-100 scale-100",
          )}
        >
          EN
        </span>
      </div>
    </button>
  );
}
