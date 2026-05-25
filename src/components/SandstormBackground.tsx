import { PropsWithChildren, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type SandstormBackgroundProps = PropsWithChildren<{
  reducedMotion: boolean;
  className?: string;
}>;

export function SandstormBackground({
  reducedMotion,
  className,
  children,
}: SandstormBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    if (!node || reducedMotion || mobile) return;

    let effect: { destroy: () => void; resize?: () => void } | null = null;
    let cancelled = false;

    const init = async () => {
      const [{ default: FOG }, THREE] = await Promise.all([
        import("vanta/dist/vanta.fog.min"),
        import("three"),
      ]);
      if (cancelled || !ref.current) return;

      effect = FOG({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xf4eada,
        midtoneColor: 0xf19e38,
        lowlightColor: 0x865d4b,
        baseColor: 0xfff9f0,
        blurFactor: 0.65,
        speed: 0.8,
        zoom: 0.8,
      });
    };

    const onVisibility = () => {
      if (!document.hidden) effect?.resize?.();
    };

    init().catch(() => undefined);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisibility);
      effect?.destroy();
    };
  }, [reducedMotion]);

  return (
    <div ref={ref} className={cn("sandstorm-bg relative overflow-hidden", className)}>
      <div className="sandstorm-fallback" aria-hidden="true" />
      <div className="dust-gradient" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
