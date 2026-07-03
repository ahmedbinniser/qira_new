import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, FileText, Download } from "lucide-react";
import type { Language, ServiceAudience } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { LiquidButton } from "@/components/LiquidButton";

type AudiencePageProps = {
  audience: ServiceAudience;
  audiences: ServiceAudience[];
  language: Language;
  reducedMotion: boolean;
};

const copy = {
  back: { en: "Back to audiences", ar: "العودة إلى الفئات" },
  badge: { en: "Service Audience", ar: "فئة الخدمة" },
  primaryCta: { en: "Request a Proposal", ar: "اطلب عرض توريد" },
  secondaryCta: { en: "View all audiences", ar: "عرض كل الفئات" },
  overview: { en: "Overview", ar: "نظرة عامة" },
  includes: { en: "What we provide", ar: "ما نقدمه" },
  highlights: { en: "Highlights", ar: "نقاط مهمة" },
  examples: { en: "Program examples", ar: "أمثلة للبرامج" },
  related: { en: "Explore other audiences", ar: "استكشف فئات أخرى" },
  downloadsBtn: { en: "Program Materials", ar: "حقيبة ونماذج البرنامج" },
  downloadsSectionTitle: { en: "Detailed Guides & Samples", ar: "كتيبات ونماذج البرنامج" },
  downloadsSectionBadge: { en: "Program Kit", ar: "حقيبة البرنامج" },
  downloadText: { en: "Download", ar: "تحميل" },
};

export function AudiencePage({
  audience,
  audiences,
  language,
  reducedMotion,
}: AudiencePageProps) {
  const Icon = audience.icon;
  const contentCollection = audience.contentCollection;
  const relatedAudiences = audiences
    .filter((item) => item.id !== audience.id)
    .slice(0, 3);

  return (
    <div className="category-page bg-[var(--background)] pt-28 text-[var(--text-primary)]">
      <section className="px-5 pb-16 pt-8 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <a
            href="#serve"
            className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-4 rtl:rotate-180" />
            {copy.back[language]}
          </a>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="reveal max-w-3xl">
              <Badge variant="warm" className="mb-5">
                {copy.badge[language]}
              </Badge>
              <h1 className="max-w-full break-words font-display text-5xl leading-tight text-[var(--text-primary)] sm:text-6xl md:text-8xl">
                <span className="editorial-mask block overflow-hidden">
                  <span className="editorial-line block">{audience.title[language]}</span>
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                {audience.summary[language]}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LiquidButton href="#contact" reducedMotion={reducedMotion}>
                  {copy.primaryCta[language]}
                </LiquidButton>
                {audience.downloads && audience.downloads.length > 0 ? (
                  <LiquidButton
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("downloads-section")?.scrollIntoView({
                        behavior: reducedMotion ? "auto" : "smooth",
                        block: "start"
                      });
                    }}
                    variant="secondary"
                    reducedMotion={reducedMotion}
                    showArrow={false}
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                      {copy.downloadsBtn[language]}
                    </span>
                  </LiquidButton>
                ) : (
                  <LiquidButton
                    href="#serve"
                    variant="secondary"
                    reducedMotion={reducedMotion}
                  >
                    {copy.secondaryCta[language]}
                  </LiquidButton>
                )}
              </div>
            </div>

            <figure className="category-hero-media reveal">
              <img src={audience.image} alt={audience.title[language]} />
              <figcaption>
                <span className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--primary-soft)] text-[var(--primary)]">
                  <Icon className="size-5" />
                </span>
                <span>{audience.title[language]}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="category-copy-panel reveal">
            <Badge variant="outline" className="mb-5">
              {copy.overview[language]}
            </Badge>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              {copy.includes[language]}
            </h2>
            <p className="mt-6 text-lg leading-9 text-[var(--text-secondary)]">
              {audience.story[language]}
            </p>
          </div>

          <div className="grid gap-4">
            <article className="category-info-card reveal h-full flex flex-col justify-center">
              <CheckCircle2 className="mb-5 size-6 text-[var(--olive-dark)]" />
              <h3>{copy.highlights[language]}</h3>
              <ul className="mt-5 space-y-3">
                {audience.highlights.map((highlight) => (
                  <li key={highlight.en} className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-[var(--primary)]" />
                    <span>{highlight[language]}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {contentCollection ? (
        <section className="relative overflow-hidden bg-[var(--background-soft)] px-5 py-16 md:px-8 md:py-24">
          <div
            className="pointer-events-none absolute -right-24 top-8 size-72 rounded-full bg-[var(--primary-soft)] opacity-60 blur-3xl"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl">
            <div className="reveal max-w-3xl">
              <Badge variant="outline" className="mb-5">
                {contentCollection.badge[language]}
              </Badge>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">
                {contentCollection.title[language]}
              </h2>
              <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] md:text-lg md:leading-9">
                {contentCollection.intro[language]}
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {contentCollection.items.map((item, index) => (
                <article
                  key={`${audience.id}-${item.title.en}`}
                  className="reveal flex h-full flex-col rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_60px_rgba(77,48,32,0.06)] md:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                      {contentCollection.itemLabel[language]}
                    </span>
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--primary-soft)] font-display text-sm font-semibold text-[var(--primary)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl leading-tight text-[var(--text-primary)] md:text-3xl">
                    {item.title[language]}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.description[language]}
                  </p>
                  {item.details ? (
                    <ul
                      className="mt-6 grid gap-2 border-t border-[var(--border)] pt-5 sm:grid-cols-2"
                      aria-label={item.title[language]}
                    >
                      {item.details.map((detail) => (
                        <li key={detail.en} className="flex gap-2 text-sm leading-6 text-[var(--text-secondary)]">
                          <Sparkles className="mt-1 size-3.5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                          <span>{detail[language]}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {audience.downloads && audience.downloads.length > 0 ? (
        <section id="downloads-section" className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] px-5 py-16 md:px-8 md:py-24">
          <div
            className="pointer-events-none absolute -left-24 top-8 size-72 rounded-full bg-[var(--primary-soft)] opacity-40 blur-3xl"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl">
            <div className="reveal max-w-2xl mb-12">
              <Badge variant="outline" className="mb-5">
                {copy.downloadsSectionBadge[language]}
              </Badge>
              <h2 className="font-display text-4xl leading-tight md:text-6xl text-[var(--text-primary)]">
                {copy.downloadsSectionTitle[language]}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {audience.downloads.map((pdf) => (
                <div
                  key={pdf.url}
                  className="reveal flex flex-col justify-between rounded-[2rem] border border-[var(--border)] bg-[var(--surface-card)] p-8 shadow-[0_8px_30px_rgba(77,48,32,0.03)] transition-all duration-300 hover:translate-y-[-4px] hover:border-[var(--border-strong)] hover:shadow-[0_16px_40px_rgba(134,93,75,0.08)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-[var(--primary-soft)] text-[var(--primary)] transition-all duration-300">
                      <FileText className="size-7" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[var(--text-primary)] md:text-2xl leading-snug">
                        {pdf.title[language]}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--text-muted)] flex items-center gap-2 font-medium">
                        <span className="uppercase text-[var(--primary)] text-xs font-bold tracking-wider">PDF</span>
                        <span className="text-[var(--border-strong)]">•</span>
                        <span>{pdf.size || "1.5 MB"}</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <LiquidButton
                      href={pdf.url}
                      download={pdf.filename}
                      reducedMotion={reducedMotion}
                      showArrow={false}
                      className="w-full sm:w-auto"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Download className="size-4" />
                        <span>
                          {pdf.buttonText ? pdf.buttonText[language] : copy.downloadText[language]}
                        </span>
                      </span>
                    </LiquidButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <Badge variant="warm" className="mb-5">
              {copy.examples[language]}
            </Badge>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              {audience.title[language]}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {audience.examples.map((example, index) => (
              <article key={example.en} className="category-example-card reveal">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{example[language]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--background-soft)] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Badge variant="outline" className="mb-5">
                {copy.related[language]}
              </Badge>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">
                {copy.related[language]}
              </h2>
            </div>
            <LiquidButton
              href="#serve"
              variant="secondary"
              reducedMotion={reducedMotion}
              className="w-fit"
            >
              {copy.secondaryCta[language]}
            </LiquidButton>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedAudiences.map((item) => {
              const RelatedIcon = item.icon;

              return (
                <a
                  key={item.id}
                  href={`#/serve/${item.id}`}
                  className="related-category-card reveal group"
                >
                  <img src={item.image} alt={item.title[language]} loading="lazy" />
                  <div>
                    <RelatedIcon className="size-5 text-[var(--primary)]" />
                    <h3>{item.title[language]}</h3>
                    <ArrowUpRight className="size-4 text-[var(--accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-rotate-90" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
