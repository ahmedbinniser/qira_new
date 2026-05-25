import type html2canvas from "html2canvas";

declare global {
  interface Window {
    html2canvas?: typeof html2canvas;
    liquidGL?: LiquidGLFactory;
    __liquidGLRenderer__?: {
      _rafId?: number | null;
      useExternalTicker?: boolean;
      render?: () => void;
      captureSnapshot?: () => void;
    };
    __qiraLiquidGLInit?: boolean;
    __qiraLiquidTicker?: (time: number) => void;
    __qiraWebGLPaused?: boolean;
    gsap?: unknown;
  }

  type LiquidGLInstance = {
    renderer?: Window["__liquidGLRenderer__"];
  };

  type LiquidGLFactory = {
    (options?: Record<string, unknown>): LiquidGLInstance | LiquidGLInstance[] | undefined;
    registerDynamic?: (elements: string | Element[] | NodeListOf<Element>) => void;
    syncWith?: (config?: Record<string, unknown>) => unknown;
  };
}

export {};
