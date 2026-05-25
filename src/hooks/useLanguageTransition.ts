import { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import type { Language } from "@/data/content";

export function useLanguageTransition(
  ref: RefObject<HTMLElement>,
  language: Language,
  reducedMotion: boolean,
) {
  useGSAP(
    () => {
      const node = ref.current;
      if (!node) return;

      gsap.fromTo(
        node,
        {
          autoAlpha: reducedMotion ? 0.8 : 0,
          y: reducedMotion ? 0 : language === "ar" ? 8 : -8,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: reducedMotion ? 0.18 : 0.45,
          ease: "power3.out",
          overwrite: true,
        },
      );
    },
    { scope: ref, dependencies: [language, reducedMotion], revertOnUpdate: true },
  );
}
