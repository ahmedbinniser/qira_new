import type { ServiceAudience, Language } from "@/data/content";

type ServiceCardProps = {
  service: ServiceAudience;
  language: Language;
};

export function ServiceCard({ service, language }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <a
      href={`#/serve/${service.id}`}
      className="reveal group relative overflow-hidden rounded-[12px] border border-[#865D4B]/30 bg-[#FAEDE6] text-[#232120] shadow-[0_8px_24px_rgba(134,93,75,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(134,93,75,0.12)] block"
    >
      {/* Subtle Qira repeating diamond pattern background */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2 L30 16 L16 30 L2 16 Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Image Container with sepia overlay */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={service.image}
          alt=""
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
          style={{
            filter: "sepia(0.35) contrast(1.02) brightness(0.95) saturate(1.05)",
          }}
          loading="lazy"
        />
        {/* Warm clay gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#865D4B]/30 to-transparent mix-blend-multiply opacity-80" />
      </div>

      {/* Card Body */}
      <div className="relative z-10 p-6">
        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full border border-[#865D4B]/20 bg-[#F4EADA] text-[#865D4B]">
          <Icon className="size-6" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-[#232120]">{service.title[language]}</h3>
        <p className="mt-3 text-sm leading-7 text-[#5E4A40]">{service.body[language]}</p>
      </div>
    </a>
  );
}

