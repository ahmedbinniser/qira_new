import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type AnimatedStatCounterProps = {
  value: number;
  label: string;
  reducedMotion: boolean;
};

export function AnimatedStatCounter({
  value,
  label,
  reducedMotion,
}: AnimatedStatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);

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
    <div ref={ref} className="glass-card stat-card reveal relative isolate overflow-hidden">
      <span className="liquid-card liquid-lens" aria-hidden="true" />
      <span ref={valueRef} className="stat-value font-display text-5xl text-[var(--text-primary)]">
        0
      </span>
      <span className="mt-2 block text-sm text-[var(--text-secondary)]">{label}</span>
    </div>
  );
}
