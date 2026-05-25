import { RefObject, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useMagneticCTA(
  ref: RefObject<HTMLElement>,
  disabled = false,
) {
  useEffect(() => {
    const element = ref.current;
    if (!element || disabled || window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(element, "x", { duration: 0.42, ease: "power3.out" });
    const yTo = gsap.quickTo(element, "y", { duration: 0.42, ease: "power3.out" });
    const highlightX = gsap.quickTo(element, "--mx", {
      duration: 0.35,
      ease: "power3.out",
    });
    const highlightY = gsap.quickTo(element, "--my", {
      duration: 0.35,
      ease: "power3.out",
    });

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;
      const distanceX = localX - rect.width / 2;
      const distanceY = localY - rect.height / 2;
      xTo(distanceX * 0.12);
      yTo(distanceY * 0.16);
      highlightX(localX);
      highlightY(localY);
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
      highlightX(element.offsetWidth / 2);
      highlightY(element.offsetHeight / 2);
    };

    element.addEventListener("pointermove", onMove);
    element.addEventListener("pointerleave", onLeave);

    return () => {
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(element);
    };
  }, [disabled, ref]);
}
