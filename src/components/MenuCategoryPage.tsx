import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import type { Language, MenuCategory } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { LiquidButton } from "@/components/LiquidButton";

type MenuCategoryPageProps = {
  category: MenuCategory;
  categories: MenuCategory[];
  language: Language;
  reducedMotion: boolean;
};

const copy = {
  back: { en: "Back to categories", ar: "العودة إلى الفئات" },
  badge: { en: "Meal category", ar: "فئة وجبات" },
  primaryCta: { en: "Request this category", ar: "اطلب هذه الفئة" },
  secondaryCta: { en: "View all categories", ar: "عرض كل الفئات" },
  overview: { en: "Overview", ar: "نظرة عامة" },
  includes: { en: "What this category covers", ar: "ما الذي تغطيه هذه الفئة" },
  bestFor: { en: "Best for", ar: "الأفضل لـ" },
  highlights: { en: "Highlights", ar: "نقاط مهمة" },
  examples: { en: "Sample directions", ar: "أفكار مقترحة" },
  related: { en: "Explore other categories", ar: "استكشف فئات أخرى" },
};

export function MenuCategoryPage({
  category,
  categories,
  language,
  reducedMotion,
}: MenuCategoryPageProps) {
  const Icon = category.icon;
  const relatedCategories = categories
    .filter((item) => item.id !== category.id)
    .slice(0, 3);

  return (
    <div className="category-page bg-[var(--background)] pt-28 text-[var(--text-primary)]">
      <section className="px-5 pb-16 pt-8 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <a
            href="#menu"
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
                  <span className="editorial-line block">{category.title[language]}</span>
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                {category.summary[language]}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LiquidButton href="#contact" reducedMotion={reducedMotion}>
                  {copy.primaryCta[language]}
                </LiquidButton>
                <LiquidButton
                  href="#menu"
                  variant="secondary"
                  reducedMotion={reducedMotion}
                >
                  {copy.secondaryCta[language]}
                </LiquidButton>
              </div>
            </div>

            <figure className="category-hero-media reveal">
              <img src={category.image} alt={category.title[language]} />
              <figcaption>
                <span className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--primary-soft)] text-[var(--primary)]">
                  <Icon className="size-5" />
                </span>
                <span>{category.bestFor[language]}</span>
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
              {category.story[language]}
            </p>
          </div>

          <div className="grid gap-4">
            <article className="category-info-card reveal">
              <Sparkles className="mb-5 size-6 text-[var(--accent)]" />
              <h3>{copy.bestFor[language]}</h3>
              <p>{category.bestFor[language]}</p>
            </article>
            <article className="category-info-card reveal">
              <CheckCircle2 className="mb-5 size-6 text-[var(--olive-dark)]" />
              <h3>{copy.highlights[language]}</h3>
              <ul className="mt-5 space-y-3">
                {category.highlights.map((highlight) => (
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

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <Badge variant="warm" className="mb-5">
              {copy.examples[language]}
            </Badge>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              {category.title[language]}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {category.examples.map((example, index) => (
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
              href="#menu"
              variant="secondary"
              reducedMotion={reducedMotion}
              className="w-fit"
            >
              {copy.secondaryCta[language]}
            </LiquidButton>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedCategories.map((item) => {
              const RelatedIcon = item.icon;

              return (
                <a
                  key={item.id}
                  href={`#/menu/${item.id}`}
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
