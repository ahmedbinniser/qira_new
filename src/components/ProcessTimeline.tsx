import { processSteps, type Language } from "@/data/content";
import { LineJarIcon, RosetteIcon } from "@/components/PotteryIcons";

type ProcessTimelineProps = {
  language: Language;
};

export function ProcessTimeline({ language }: ProcessTimelineProps) {
  return (
    <div className="process-pin relative w-full mt-4">
      {/* Mobile Vertical Timeline Base Line */}
      <div className="absolute left-[48px] top-8 bottom-8 w-[2px] bg-[#865D4B]/18 md:hidden pointer-events-none" />

      {/* Steps Grid */}
      <div className="process-steps relative z-10 grid gap-6 md:grid-cols-4 w-full">
        {processSteps.map((step, index) => (
          <article
            key={step.title.en}
            className="process-step reveal relative overflow-hidden group pl-[76px] pr-6 py-7 md:p-[28px]"
            data-active={index === 0 ? true : undefined}
          >
            {/* Clay Seal Number Circle */}
            <span className="process-index absolute left-6 top-7 md:relative md:left-auto md:top-auto mb-6 shrink-0 select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            
            {/* Content */}
            <h3 className="text-xl md:text-[23px] font-display font-bold text-[#231F20] leading-snug tracking-tight mt-0 md:mt-2">
              {step.title[language]}
            </h3>
            
            <p className="mt-3 text-sm md:text-[15px] leading-[1.7] text-[#231F20]/68 transition-colors duration-400 group-data-[active]:text-[#231F20]/78">
              {step.body[language]}
            </p>

            {/* Faint watermark inside each card */}
            <div className="absolute bottom-[-15px] right-[-15px] w-24 h-24 opacity-[0.06] text-[#865D4B] pointer-events-none transition-all duration-500 group-hover:scale-110">
              {index % 2 === 0 ? (
                <LineJarIcon className="w-full h-full" />
              ) : (
                <RosetteIcon className="w-full h-full" />
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Desktop SVG Timeline Path & Markers */}
      <svg
        className="process-svg pointer-events-none absolute inset-x-0 top-1/2 z-0 hidden h-40 -translate-y-1/2 md:block"
        viewBox="0 0 1200 180"
        fill="none"
        aria-hidden="true"
      >
        {/* Static Base Path (rgba(134, 93, 75, 0.18)) */}
        <path
          d="M80 92 C230 22 320 158 470 92 C620 26 700 154 850 92 C990 30 1060 130 1120 92"
          stroke="rgba(134, 93, 75, 0.18)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Animated Progress Path (#F19E38) */}
        <path
          className="process-path"
          d="M80 92 C230 22 320 158 470 92 C620 26 700 154 850 92 C990 30 1060 130 1120 92"
          stroke="#F19E38"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Diamond Markers aligned with card centers */}
        <g className="process-marker transition-all duration-300" data-step="0" transform="translate(150, 68)">
          <polygon points="0,-6 6,0 0,6 -6,0" className="marker-shape" />
        </g>
        <g className="process-marker transition-all duration-300" data-step="1" transform="translate(450, 102)">
          <polygon points="0,-6 6,0 0,6 -6,0" className="marker-shape" />
        </g>
        <g className="process-marker transition-all duration-300" data-step="2" transform="translate(750, 100)">
          <polygon points="0,-6 6,0 0,6 -6,0" className="marker-shape" />
        </g>
        <g className="process-marker transition-all duration-300" data-step="3" transform="translate(1050, 88)">
          <polygon points="0,-6 6,0 0,6 -6,0" className="marker-shape" />
        </g>
      </svg>
    </div>
  );
}
