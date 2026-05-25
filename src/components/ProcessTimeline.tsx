import { processSteps, type Language } from "@/data/content";

type ProcessTimelineProps = {
  language: Language;
};

export function ProcessTimeline({ language }: ProcessTimelineProps) {
  return (
    <div className="process-pin relative">
      <div className="process-steps relative z-10 grid gap-4 md:grid-cols-4">
        {processSteps.map((step, index) => (
          <article
            key={step.title.en}
            className="process-step glass-card reveal relative isolate overflow-hidden"
            data-active={index === 0 ? true : undefined}
          >
            <span className="liquid-card liquid-lens" aria-hidden="true" />
            <span className="process-index">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 text-2xl font-semibold text-[var(--text-primary)]">
              {step.title[language]}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{step.body[language]}</p>
          </article>
        ))}
      </div>
      <svg
        className="process-svg pointer-events-none absolute inset-x-0 top-1/2 z-0 hidden h-40 -translate-y-1/2 md:block"
        viewBox="0 0 1200 180"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="process-path"
          d="M80 92 C230 22 320 158 470 92 C620 26 700 154 850 92 C990 30 1060 130 1120 92"
          stroke="var(--accent)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
