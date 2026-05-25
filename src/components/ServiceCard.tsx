import { PointerEvent } from "react";
import type { ServiceAudience, Language } from "@/data/content";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

type ServiceCardProps = {
  service: ServiceAudience;
  language: Language;
};

export function ServiceCard({ service, language }: ServiceCardProps) {
  const Icon = service.icon;

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--shimmer-x", `${x}px`);
    event.currentTarget.style.setProperty("--shimmer-y", `${y}px`);
  };

  return (
    <LiquidGlassCard
      interactive
      className="service-card reveal group"
      onPointerMove={onPointerMove}
    >
      <img
        src={service.image}
        alt=""
        className="h-56 w-full object-cover opacity-92 transition duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="service-card-body">
        <div className="mb-4 inline-flex size-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--primary-soft)] text-[var(--primary)]">
          <Icon className="size-5" />
        </div>
        <h3 className="text-2xl font-semibold">{service.title[language]}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{service.body[language]}</p>
      </div>
    </LiquidGlassCard>
  );
}
