import { PropsWithChildren, useEffect, useRef } from "react";
import type { Language } from "@/data/content";
import { useLanguageTransition } from "@/hooks/useLanguageTransition";

type BilingualTransitionWrapperProps = PropsWithChildren<{
  language: Language;
  reducedMotion: boolean;
  className?: string;
}>;

export function BilingualTransitionWrapper({
  language,
  reducedMotion,
  className,
  children,
}: BilingualTransitionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  useLanguageTransition(ref, language, reducedMotion);

  useEffect(() => {
    document.documentElement.lang = language === "ar" ? "ar" : "en";
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <div ref={ref} className={className} dir={language === "ar" ? "rtl" : "ltr"}>
      {children}
    </div>
  );
}
