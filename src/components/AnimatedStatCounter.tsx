import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { LineJarIcon, RosetteIcon } from "@/components/PotteryIcons";

type AnimatedStatCounterProps = {
  value: number;
  title: string;
  arabicLabel: string;
  motif?: string;
  reducedMotion: boolean;
};

export function AnimatedStatCounter({
  value,
  title,
  arabicLabel,
  motif = "rosette",
  reducedMotion,
}: AnimatedStatCounterProps) {
  const ref = useRef<HTMLElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const MotifIcon = motif === "jar" ? LineJarIcon : RosetteIcon;

  useGSAP(
    () => {
      const node = valueRef.current;
      if (!node) return;

      if (reducedMotion) {
        node.textContent = `${value}`;
        return;
      }

      const state = { current: 0 };
      const tween = gsap.to(state, {
        current: value,
        duration: 1.45,
        ease: "expo.out",
        paused: true,
        onUpdate: () => {
          node.textContent = `${Math.round(state.current)}`;
        },
      });

      const trigger = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 82%",
        once: true,
        onEnter: () => tween.play(0),
      });

      return () => {
        trigger.kill();
        tween.kill();
      };
    },
    { scope: ref, dependencies: [value, reducedMotion], revertOnUpdate: true },
  );

  return (
    <article ref={ref} className="stat-card reveal relative isolate overflow-hidden">
      <span className="stat-card-seal" aria-hidden="true">
        <MotifIcon className="size-4" />
      </span>
      <MotifIcon className="stat-card-watermark" aria-hidden="true" />
      <span ref={valueRef} className="stat-value">
        0
      </span>
      <span className="stat-title">{title}</span>
      <span className="stat-arabic">{arabicLabel}</span>
    </article>
  );
}
