import { useRef } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LiquidButton } from "@/components/LiquidButton";
import { SandParticleCanvas } from "@/components/SandParticleCanvas";
import { trustBullets, heroCopy, type Language } from "@/data/content";
import { useHeroScrollFrame } from "@/hooks/useHeroScrollFrame";

type HeroCinematicProps = {
  language: Language;
  reducedMotion: boolean;
};

export function HeroCinematic({ language, reducedMotion }: HeroCinematicProps) {
  const heroRef = useRef<HTMLElement>(null);
  useHeroScrollFrame(heroRef, reducedMotion);

  const titleLines =
    language === "ar"
      ? ["وجبات بروح الضيافة العربية", "مصممة للمدارس والشركات"]
      : ["Meals Rooted in Heritage,", "Built for Modern Operations"];

  return (
    <section ref={heroRef} className="hero-section relative min-h-svh overflow-hidden" aria-label="Qira catering hero">
      <div className="hero-frame absolute inset-0 overflow-hidden">
        {/* Hero video source: replace /public/videos/hero-qira-catering.mp4 with a compressed final production cut when ready. */}
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          poster="/images/hero-qira-catering-poster.svg"
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/hero-qira-catering.mp4" type="video/mp4" />
        </video>
        <div className="hero-gradient absolute inset-0" aria-hidden="true" />
        {/* TODO: Swap this CSS dust layer for /public/images/sand-dust-overlay.webp if a final texture is added. */}
        <div className="hero-dust absolute inset-0" aria-hidden="true" />
        <SandParticleCanvas
          reducedMotion={reducedMotion}
          className="absolute inset-0 z-[2] h-full w-full opacity-70"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl items-center px-5 pb-16 pt-32 md:px-8">
        <div className="hero-copy max-w-4xl">
          <Badge variant="warm" className="hero-reveal mb-7">
            {heroCopy.badge[language]}
          </Badge>
          <h1 className="hero-reveal font-display text-[clamp(3rem,8vw,8.7rem)] leading-[0.91] tracking-normal text-[var(--text-primary)] rtl:leading-[1.18]">
            {titleLines.map((line, index) => (
              <span key={line} className="editorial-mask block overflow-hidden pb-2">
                <span className={index === 1 ? "editorial-line hero-headline-accent block" : "editorial-line block"}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="hero-reveal mt-7 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            {heroCopy.subtitle[language]}
          </p>
          <div className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <LiquidButton href="#contact" reducedMotion={reducedMotion}>
              {heroCopy.primaryCta[language]}
            </LiquidButton>
            <LiquidButton href="#programs" variant="secondary" reducedMotion={reducedMotion}>
              {heroCopy.secondaryCta[language]}
            </LiquidButton>
          </div>
        </div>

        <aside className="hero-trust glass-panel absolute bottom-16 end-8 hidden w-80 overflow-hidden rounded-lg border border-[var(--border)] bg-[rgba(255,249,240,0.76)] p-5 text-[var(--text-primary)] shadow-glass backdrop-blur-2xl md:block">
          <span className="liquid-panel liquid-lens" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
              <CheckCircle2 className="size-5" />
            </div>
            <h2 className="font-semibold">
              {language === "ar" ? "برامج وجبات موثوقة" : "Trusted Meal Programs"}
            </h2>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
            {trustBullets.map((bullet) => {
              const Icon = bullet.icon;
              return (
                <li key={bullet.label.en} className="flex items-center gap-3">
                  <Icon className="size-4 text-[var(--accent)]" />
                  <span>{bullet.label[language]}</span>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>

      <a
        href="#serve"
        className="absolute bottom-6 left-1/2 z-20 inline-flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.26em] text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rtl:tracking-normal"
      >
        {language === "ar" ? "مرر" : "Scroll"}
        <ChevronDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
