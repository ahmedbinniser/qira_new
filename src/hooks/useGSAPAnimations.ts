import { RefObject, useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function useGSAPAnimations(
  rootRef: RefObject<HTMLElement>,
  reducedMotion: boolean,
) {
  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      syncTouch: false,
    });

    const raf = (time: number) => {
      if (!document.hidden) {
        lenis.raf(time * 1000);
      }
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onVisibility = () => {
      if (document.hidden) {
        lenis.stop();
      } else {
        lenis.start();
        ScrollTrigger.refresh();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [reducedMotion]);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isDesktop: "(min-width: 900px)",
          isMobile: "(max-width: 899px)",
        },
        (context) => {
          const { reduceMotion, isDesktop } = context.conditions as {
            reduceMotion: boolean;
            isDesktop: boolean;
          };

          gsap.set(".reveal", { autoAlpha: 1 });

          if (reduceMotion || reducedMotion) {
            gsap.from(".reveal", {
              autoAlpha: 0,
              duration: 0.35,
              stagger: 0.04,
              scrollTrigger: {
                trigger: ".site-shell",
                start: "top 85%",
              },
            });
            return;
          }

          gsap.utils.toArray<HTMLElement>(".editorial-line").forEach((line) => {
            gsap.from(line, {
              yPercent: 105,
              autoAlpha: 0,
              duration: 1.1,
              ease: "expo.out",
              scrollTrigger: {
                trigger: line,
                start: "top 86%",
                once: true,
              },
            });
          });

          ScrollTrigger.batch(".reveal", {
            interval: 0.08,
            batchMax: 8,
            start: "top 86%",
            onEnter: (batch) => {
              gsap.fromTo(
                batch,
                { y: 38, autoAlpha: 0 },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.9,
                  stagger: 0.08,
                  ease: "power4.out",
                  overwrite: true,
                },
              );
            },
          });

          ScrollTrigger.batch(".glass-card, .glass-panel", {
            start: "top 82%",
            onEnter: (batch) => {
              batch.forEach((el) => {
                el.classList.add("glass-glint");
                window.setTimeout(() => el.classList.remove("glass-glint"), 900);
              });
            },
          });

          gsap.utils.toArray<HTMLElement>(".parallax-panel").forEach((panel, index) => {
            gsap.to(panel, {
              y: index % 2 === 0 ? -36 : -22,
              scale: 1.035,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            });
          });

          if (isDesktop) {
            const processSection = root.querySelector<HTMLElement>(".process-pin");
            const path = root.querySelector<SVGPathElement>(".process-path");
            const steps = gsap.utils.toArray<HTMLElement>(".process-step");

            if (processSection && path && steps.length > 0) {
              const length = path.getTotalLength();
              gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
              });

              const processTl = gsap.timeline({
                scrollTrigger: {
                  trigger: processSection,
                  start: "top 85%",
                  end: "bottom 30%",
                  scrub: 0.8,
                  onUpdate: (self) => {
                    const activeIndex = Math.min(
                      steps.length - 1,
                      Math.floor(self.progress * steps.length),
                    );
                    const markers = root.querySelectorAll(".process-marker");
                    steps.forEach((step, stepIndex) => {
                      const isActive = stepIndex === activeIndex;
                      const isCompleted = stepIndex < activeIndex;
                      step.toggleAttribute("data-active", isActive);
                      step.toggleAttribute("data-completed", isCompleted);
                      
                      if (markers[stepIndex]) {
                        markers[stepIndex].toggleAttribute("data-active", isActive);
                        markers[stepIndex].toggleAttribute("data-completed", isCompleted);
                      }

                      gsap.to(step, {
                        scale: isActive ? 1.02 : (isCompleted ? 1.0 : 0.98),
                        y: isActive ? -10 : 0,
                        autoAlpha: isActive ? 1 : (isCompleted ? 0.88 : 0.65),
                        duration: 0.28,
                        overwrite: true,
                      });
                    });
                  },
                },
              });

              processTl.to(path, { strokeDashoffset: 0, ease: "none" }, 0);
            }
          } else {
            gsap.from(".process-step", {
              y: 28,
              autoAlpha: 0,
              stagger: 0.12,
              duration: 0.75,
              scrollTrigger: {
                trigger: ".process-steps",
                start: "top 82%",
              },
            });
          }

          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh);
          document.fonts?.ready.then(refresh).catch(() => undefined);

          return () => {
            window.removeEventListener("load", refresh);
          };
        },
        root,
      );

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [reducedMotion], revertOnUpdate: true },
  );
}
