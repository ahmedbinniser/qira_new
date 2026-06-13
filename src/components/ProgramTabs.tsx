import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { programs, type Language } from "@/data/content";
import { RosetteIcon, LineJarIcon, SchoolPot } from "@/components/PotteryIcons";

type ProgramTabsProps = {
  language: Language;
};

const labels = {
  configurable: { en: "Configurable program", ar: "برنامج قابل للتخصيص" },
  discuss: { en: "Discuss this program", ar: "ناقش البرنامج" },
  bestFor: { en: "Best for", ar: "الأفضل لـ" },
  rhythm: { en: "Service rhythm", ar: "نظام الخدمة" },
};

export function ProgramTabs({ language }: ProgramTabsProps) {
  const [activeId, setActiveId] = useState(programs[0].id);
  const program = programs.find((p) => p.id === activeId) || programs[0];

  return (
    <div className="w-full flex flex-col gap-9">
      {/* Hospitality Menu Selector Tabs */}
      <div className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1">
        <div className="inline-flex min-w-full md:min-w-0 md:flex w-auto md:w-full items-center bg-[#FAEDE6]/55 border border-[#865D4B]/22 rounded-[16px] p-1.5 shadow-[0_12px_35px_rgba(134,93,75,0.06)] gap-1">
          {programs.map((prog, index) => {
            const isActive = activeId === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveId(prog.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-[12px] transition-all duration-300 ease-out whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F19E38] relative ${
                  isActive
                    ? "bg-[#F19E38] text-[#231F20] shadow-[0_4px_12px_rgba(241,158,56,0.15)]"
                    : "text-[#231F20]/75 hover:bg-[#F4EADA]/70"
                }`}
              >
                {isActive && <RosetteIcon className="size-4 text-[#865D4B]" />}
                {prog.title[language]}
                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#865D4B] rounded-full" />
                )}
                {/* Vertical Divider between inactive tabs */}
                {!isActive &&
                  index < programs.length - 1 &&
                  activeId !== programs[index + 1].id && (
                    <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-[#865D4B]/18 hidden md:block" />
                  )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Card */}
      <div
        key={activeId}
        className="grid lg:grid-cols-[42%_58%] w-full min-h-[430px] rounded-[22px] overflow-hidden border border-[#865D4B]/22 bg-gradient-to-br from-[#FAEDE6] via-[#F4EADA] to-[#DEC9B2]/35 shadow-[0_24px_60px_rgba(134,93,75,0.12)] relative animate-qira-fade-in-scale"
      >
        {/* Left Image Panel */}
        <div className="relative h-64 lg:h-auto w-full overflow-hidden">
          <img
            src={program.image}
            alt={program.title[language]}
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-103"
            loading="lazy"
          />
          {/* Warm Clay Overlay */}
          <div className="absolute inset-0 bg-[#865D4B]/14 mix-blend-multiply pointer-events-none" />
        </div>

        {/* Right Content Area */}
        <div className="p-6 md:p-10 lg:p-[56px] flex flex-col justify-center relative overflow-hidden">
          {/* Faint rosette pattern background in the bottom-right corner */}
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-[0.15] pointer-events-none text-[#865D4B] rtl:hidden">
            <RosetteIcon className="size-56" />
          </div>
          <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 opacity-[0.15] pointer-events-none text-[#865D4B] hidden rtl:block">
            <RosetteIcon className="size-56" />
          </div>

          <div className="grid lg:grid-cols-[1.45fr_1fr] gap-8 w-full relative z-10">
            {/* Left Column: Configurable details */}
            <div className="flex flex-col justify-between items-start gap-6 lg:border-r lg:border-[#865D4B]/12 lg:pr-6 rtl:lg:border-r-0 rtl:lg:border-l rtl:lg:pr-0 rtl:lg:pl-6 animate-qira-fade-in-up animation-delay-70 animation-fill-both">
              <div className="space-y-4">
                {/* Small config badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#865D4B]/18 bg-[#DEC9B2]/35 px-4 py-2 text-xs font-semibold text-[#865D4B]">
                  <LineJarIcon className="size-3.5" />
                  <span>{labels.configurable[language]}</span>
                </div>
                {/* Title */}
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-[#231F20] leading-tight">
                  {program.title[language]}
                </h3>
                {/* Description */}
                <p className="text-sm lg:text-base leading-relaxed text-[#231F20]/75 max-w-md">
                  {program.description[language]}
                </p>
              </div>

              {/* Discuss button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[12px] bg-[#F19E38] text-[#231F20] px-6 py-4 text-sm font-semibold shadow-[0_10px_22px_rgba(241,158,56,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#d98522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F19E38]"
              >
                <span>{labels.discuss[language]}</span>
                <ArrowUpRight className="size-4.5 rtl:-rotate-90" />
              </a>
            </div>

            {/* Right Column: Stacked Info Boxes */}
            <div className="flex flex-col gap-4 justify-center animate-qira-fade-in-up animation-delay-140 animation-fill-both">
              {/* Box 1: Best For */}
              <div className="rounded-[16px] border border-[#865D4B]/22 bg-[#FAEDE6]/58 p-5 flex gap-4 items-start shadow-[0_4px_15px_rgba(134,93,75,0.02)]">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#865D4B]/25 text-[#865D4B]">
                  <LineJarIcon className="size-4.5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#865D4B]">
                    {labels.bestFor[language]}
                  </span>
                  <p className="text-xs lg:text-sm leading-relaxed text-[#231F20] font-medium">
                    {program.bestFor[language]}
                  </p>
                </div>
              </div>

              {/* Box 2: Service Rhythm */}
              <div className="rounded-[16px] border border-[#865D4B]/22 bg-[#FAEDE6]/58 p-5 flex gap-4 items-start shadow-[0_4px_15px_rgba(134,93,75,0.02)]">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#865D4B]/25 text-[#865D4B]">
                  <RosetteIcon className="size-4.5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#865D4B]">
                    {labels.rhythm[language]}
                  </span>
                  <p className="text-xs lg:text-sm leading-relaxed text-[#231F20] font-medium">
                    {program.benefit[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delicate bottom divider ornament */}
      <div className="mt-6 flex items-center justify-center gap-4 w-full">
        <div className="h-[1px] flex-1 bg-[#DEC9B2]/60" />
        <div className="flex items-center gap-1.5 text-[#865D4B]">
          <div className="size-1.5 rotate-45 bg-[#DEC9B2]" />
          <div className="size-2 rotate-45 bg-[#865D4B]" />
          <SchoolPot className="size-6 text-[#865D4B] mx-1" />
          <div className="size-2 rotate-45 bg-[#865D4B]" />
          <div className="size-1.5 rotate-45 bg-[#DEC9B2]" />
        </div>
        <div className="h-[1px] flex-1 bg-[#DEC9B2]/60" />
      </div>
    </div>
  );
}
