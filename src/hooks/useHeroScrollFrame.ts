import { RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function useHeroScrollFrame(
  heroRef: RefObject<HTMLElement>,
  reducedMotion: boolean,
) {
  useGSAP(
    () => {
      const hero = heroRef.current;
      if (!hero) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { reduceMotion, isDesktop } = context.conditions as {
            reduceMotion: boolean;
            isDesktop: boolean;
          };

          gsap.from(".hero-reveal", {
            y: reduceMotion || reducedMotion ? 12 : 44,
            autoAlpha: 0,
            duration: reduceMotion || reducedMotion ? 0.35 : 1.15,
            stagger: 0.11,
            ease: "expo.out",
          });

          if (reduceMotion || reducedMotion || !isDesktop) return;

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1.15,
            },
          });

          timeline
            .to(
              ".hero-frame",
              {
                scale: 0.94,
                borderRadius: 36,
                boxShadow:
                  "0 0 0 1px rgba(134,93,75,0.16), 0 26px 90px rgba(35,33,32,0.14)",
                ease: "none",
              },
              0,
            )
            .to(".hero-video", { yPercent: 7, scale: 1.08, ease: "none" }, 0)
            .to(".hero-copy", { yPercent: -10, ease: "none" }, 0)
            .to(".hero-trust", { yPercent: -18, ease: "none" }, 0)
            .to(".hero-dust", { xPercent: 4, yPercent: -2, ease: "none" }, 0);

          ScrollTrigger.create({
            trigger: hero,
            start: "top top",
            end: "bottom top",
            onLeave: () => hero.classList.add("hero-framed"),
            onEnterBack: () => hero.classList.remove("hero-framed"),
          });
        },
        hero,
      );

      return () => mm.revert();
    },
    { scope: heroRef, dependencies: [reducedMotion], revertOnUpdate: true },
  );
}
