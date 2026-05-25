import { RefObject, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const liquidSelector = ".liquid-btn, .liquid-card, .liquid-nav, .liquid-panel";

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (window.liquidGL) resolve();
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export function useWebGLThrottle(
  rootRef: RefObject<HTMLElement>,
  reducedMotion: boolean,
) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const lowEnd =
      navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4;

    // To disable heavy effects for low-end devices later, extend this guard with
    // device-memory checks or a persisted user setting before liquidGL initializes.
    if (reducedMotion || isMobile || lowEnd || window.__qiraLiquidGLInit) return;

    let cancelled = false;
    let ticker: ((time: number) => void) | null = null;

    const init = async () => {
      const { default: html2canvas } = await import("html2canvas");
      window.html2canvas = html2canvas;
      await loadScript("/scripts/liquidGL.js");
      if (cancelled || !window.liquidGL || !document.querySelector(liquidSelector)) return;

      window.__qiraLiquidGLInit = true;
      document.documentElement.classList.add('webgl-active');

      // liquidGL tuning: reduce resolution/frost/refraction here if visual load
      // feels too high, or increase bevelDepth slightly for stronger glass rims.
      window.liquidGL({
        target: liquidSelector,
        snapshot: ".site-shell",
        resolution: 1.35,
        refraction: 0.01,
        bevelDepth: 0.06,
        bevelWidth: 0.14,
        frost: 0.85,
        shadow: true,
        specular: true,
        tilt: true,
        tiltFactor: 4,
        magnify: 1,
      });

      if (window.liquidGL.registerDynamic) {
        window.liquidGL.registerDynamic(".editorial-line");
      }

      const renderer = window.__liquidGLRenderer__;
      if (renderer?._rafId) {
        window.cancelAnimationFrame(renderer._rafId);
        renderer._rafId = null;
      }
      if (renderer) renderer.useExternalTicker = true;

      ticker = () => {
        if (!document.hidden && !window.__qiraWebGLPaused) {
          renderer?.render?.();
        }
      };
      window.__qiraLiquidTicker = ticker;
      gsap.ticker.add(ticker);
    };

    const onVisibility = () => {
      window.__qiraWebGLPaused = document.hidden;
      if (!document.hidden) {
        window.__liquidGLRenderer__?.captureSnapshot?.();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.setTimeout(init, 350);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisibility);
      if (ticker) gsap.ticker.remove(ticker);
    };
  }, [reducedMotion, rootRef]);
}
