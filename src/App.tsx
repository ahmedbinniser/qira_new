import { useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  audiences,
  experiencePanels,
  menuCategories,
  qualityPoints,
  stats,
  testimonials,
  type Language,
} from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { BilingualTransitionWrapper } from "@/components/BilingualTransitionWrapper";
import { GlassNavbar } from "@/components/GlassNavbar";
import { HeroCinematic } from "@/components/HeroCinematic";
import { AnimatedStatCounter } from "@/components/AnimatedStatCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { ProgramTabs } from "@/components/ProgramTabs";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { FinalCTA } from "@/components/FinalCTA";
import { LiquidButton } from "@/components/LiquidButton";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="section-heading reveal">
      <Badge variant="outline" className="mb-5">
        {eyebrow}
      </Badge>
      <h2 className="font-display text-5xl leading-tight text-[var(--text-primary)] md:text-7xl">
        <span className="editorial-mask block overflow-hidden">
          <span className="editorial-line block">{title}</span>
        </span>
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">{body}</p>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAPAnimations(rootRef, reducedMotion);

  return (
    <div ref={rootRef} className="site-shell min-h-screen bg-[var(--background-soft)] text-[var(--text-primary)]">
      <BilingualTransitionWrapper language={language} reducedMotion={reducedMotion}>
        <GlassNavbar
          language={language}
          onLanguageChange={setLanguage}
          reducedMotion={reducedMotion}
        />
        <main>
          <HeroCinematic language={language} reducedMotion={reducedMotion} />

          <section className="relative z-10 bg-[var(--surface)] px-5 py-8 md:px-8">
            <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <AnimatedStatCounter
                  key={stat.label.en}
                  value={stat.value}
                  label={stat.label[language]}
                  reducedMotion={reducedMotion}
                />
              ))}
            </div>
          </section>

          <section id="serve" className="section-band bg-[var(--background-soft)] px-5 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow={language === "ar" ? "من نخدم" : "Who we serve"}
                title={
                  language === "ar"
                    ? "تموين مؤسسي دافئ ومنظم"
                    : "Warm Catering for Serious Operations"
                }
                body={
                  language === "ar"
                    ? "قيرة مصممة للجهات التي تحتاج وجبات موثوقة ومتكررة دون فقدان الطابع الإنساني والضيافة."
                    : "Qira is built for buyers who need dependable, repeatable food service without losing warmth, culture, or care."
                }
              />
              <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {audiences.map((service) => (
                  <ServiceCard key={service.title.en} service={service} language={language} />
                ))}
              </div>
            </div>
          </section>

          <section id="programs" className="section-band bg-[var(--surface)] px-5 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="section-heading reveal text-[var(--text-primary)]">
                <Badge variant="warm" className="mb-5">
                  {language === "ar" ? "البرامج" : "Programs"}
                </Badge>
                <h2 className="font-display text-5xl leading-tight md:text-7xl">
                  <span className="editorial-mask block overflow-hidden">
                    <span className="editorial-line block">
                      {language === "ar"
                        ? "برامج تناسب جدولك وحجمك"
                        : "Programs Built Around Your Schedule"}
                    </span>
                  </span>
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                  {language === "ar"
                    ? "اختر نقطة البداية، ثم اضبط القائمة والتغليف والإيقاع التشغيلي حسب احتياجك."
                    : "Start with the right service format, then tune menu, packaging, and operating rhythm around your audience."}
                </p>
              </div>
              <div className="mt-10">
                <ProgramTabs language={language} />
              </div>
            </div>
          </section>

          <section className="section-band experience-section bg-[var(--background)] px-5 py-24 text-[var(--text-primary)] md:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div className="section-heading reveal">
                  <Badge variant="warm" className="mb-5">
                    {language === "ar" ? "التجربة" : "Experience"}
                  </Badge>
                  <h2 className="font-display text-5xl leading-tight md:text-7xl">
                    <span className="editorial-mask block overflow-hidden">
                      <span className="editorial-line block">
                        {language === "ar" ? "ضيافة تشعر بها في التفاصيل" : "Hospitality You Can See in the Details"}
                      </span>
                    </span>
                  </h2>
                </div>
                <p className="reveal max-w-xl leading-8 text-[var(--text-secondary)]">
                  {language === "ar"
                    ? "صور محلية من مجلد المشروع فقط، مع طبقات زجاجية وحركة خفيفة تحافظ على وضوح المحتوى."
                    : "Local project images only, layered with restrained glass overlays and slow parallax so the content stays readable."}
                </p>
              </div>
              <div className="mt-12 grid gap-5 md:grid-cols-4">
                {experiencePanels.map((panel, index) => (
                  <figure
                    key={panel.image}
                    className={`parallax-panel reveal experience-panel ${index === 0 || index === 3 ? "md:mt-12" : ""}`}
                  >
                    <img src={panel.image} alt="" loading="lazy" />
                    <figcaption>{panel.title[language]}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="section-band bg-[var(--surface)] px-5 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="section-heading reveal text-[var(--text-primary)]">
                <Badge variant="warm" className="mb-5">
                  {language === "ar" ? "كيف نعمل" : "How it works"}
                </Badge>
                <h2 className="font-display text-5xl leading-tight md:text-7xl">
                  <span className="editorial-mask block overflow-hidden">
                    <span className="editorial-line block">
                      {language === "ar" ? "مسار واضح من الاحتياج إلى الدعم" : "A Clear Path from Need to Support"}
                    </span>
                  </span>
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                  {language === "ar"
                    ? "أربع مراحل تساعد صناع القرار على رؤية البرنامج كتشغيل يومي، وليس مجرد طلب طعام."
                    : "Four steps help decision-makers see the program as a daily operating system, not just a food order."}
                </p>
              </div>
              <div className="mt-12">
                <ProcessTimeline language={language} />
              </div>
            </div>
          </section>

          <section className="section-band bg-[var(--background-soft)] px-5 py-24 md:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <SectionHeading
                eyebrow={language === "ar" ? "الجودة والتشغيل" : "Quality and operations"}
                title={language === "ar" ? "ثقة في كل نقطة تشغيل" : "Trust at Every Operating Point"}
                body={
                  language === "ar"
                    ? "المشتري المؤسسي يحتاج وضوحا في المكونات والتغليف والتوصيل والمرونة، لا وعودا عامة."
                    : "B2B buyers need clarity on ingredients, packaging, delivery, flexibility, and cultural fit, not vague promises."
                }
              />
              <div className="grid gap-4 md:grid-cols-2">
                {qualityPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <Card key={point.title.en} className="reveal border-[var(--border)] bg-[var(--surface-card)] shadow-sm">
                      <CardContent className="p-5">
                        <Icon className="mb-5 size-6 text-[var(--primary)]" />
                        <h3 className="text-lg font-semibold">{point.title[language]}</h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{point.body[language]}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="menu" className="section-band bg-[var(--background)] px-5 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow={language === "ar" ? "فئات الوجبات" : "Meal categories"}
                title={language === "ar" ? "قائمة عملية وقابلة للتوسع" : "A Practical Menu That Can Scale"}
                body={
                  language === "ar"
                    ? "ابدأ من فئة واضحة ثم خصص النكهة والحصة والتغليف حسب الجمهور."
                    : "Start with clear categories, then tune flavor, portion, and packaging by audience."
                }
              />
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {menuCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <article key={category.title.en} className="menu-card reveal">
                      <img src={category.image} alt="" loading="lazy" />
                      <div className="menu-card-overlay">
                        <Icon className="size-5" />
                        <h3>{category.title[language]}</h3>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section-band bg-[var(--background-soft)] px-5 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow={language === "ar" ? "الثقة" : "Social proof"}
                title={language === "ar" ? "مساحة لشهادات حقيقية" : "A Place for Real Proof"}
                body={
                  language === "ar"
                    ? "لا نعرض ادعاءات غير معتمدة. هذه البطاقات مؤقتة بوضوح حتى تضاف شهادات حقيقية."
                    : "No unapproved claims are presented as final. These cards are clearly replaceable until real testimonials are approved."
                }
              />
              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <LiquidGlassCard key={testimonial.name.en} className="border-[var(--border)] bg-[var(--surface-card)] p-6">
                    <ShieldCheck className="mb-5 size-6 text-[var(--accent)]" />
                    <blockquote className="text-lg leading-8 text-[var(--text-secondary)]">
                      {testimonial.quote[language]}
                    </blockquote>
                    <p className="mt-6 text-sm font-semibold text-[var(--primary)]">
                      {testimonial.name[language]}
                    </p>
                  </LiquidGlassCard>
                ))}
              </div>
            </div>
          </section>

          <section className="section-band bg-[var(--surface)] px-5 py-20 md:px-8">
            <div className="mx-auto max-w-4xl">
              <Accordion type="single" collapsible className="reveal rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.64)] px-5 shadow-sm">
                <AccordionItem value="school">
                  <AccordionTrigger>
                    {language === "ar" ? "هل يناسب البرنامج المدارس فقط؟" : "Is the program only for schools?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {language === "ar"
                      ? "لا. يبدأ الموقع من منطق الوجبات المدرسية، لكنه مصمم أيضا للشركات والفنادق والمناسبات والمواقع التشغيلية."
                      : "No. The structure starts with school-meal logic, but it also supports companies, hotels, events, and operational sites."}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="custom">
                  <AccordionTrigger>
                    {language === "ar" ? "هل يمكن تخصيص القائمة؟" : "Can menus be customized?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {language === "ar"
                      ? "نعم، يمكن تخصيص القوائم حسب الجمهور والحصة والثقافة ونمط الخدمة."
                      : "Yes. Menus can be shaped by audience, portion, cultural fit, and service format."}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <FinalCTA language={language} reducedMotion={reducedMotion} />
        </main>

        <footer className="bg-[var(--tea)] px-5 py-12 text-qira-cream md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <img
                src="/logos/qira-wordmark-cream.png"
                alt="Qira"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
              <p className="mt-4 max-w-sm leading-7 text-qira-cream/64">
                {language === "ar"
                  ? "وجبات مدرسية وتموين مؤسسي بروح الضيافة العربية ووضوح التشغيل."
                  : "School meals and B2B catering rooted in Arabic hospitality and operational clarity."}
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-[var(--accent)]">
                  {language === "ar" ? "الخدمات" : "Services"}
                </h3>
                <ul className="space-y-3 text-sm text-qira-cream/64">
                  <li>{language === "ar" ? "وجبات المدارس" : "School meals"}</li>
                  <li>{language === "ar" ? "تموين الشركات" : "Corporate catering"}</li>
                  <li>{language === "ar" ? "بوفيهات المناسبات" : "Event buffets"}</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold text-[var(--accent)]">
                  {language === "ar" ? "التواصل" : "Contact"}
                </h3>
                <ul className="space-y-3 text-sm text-qira-cream/64">
                  <li className="flex items-center gap-2">
                    <MapPin className="size-4 text-[var(--accent)]" />
                    Jeddah, Saudi Arabia
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="size-4 text-[var(--accent)]" />
                    hello@qira.example
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="size-4 text-[var(--accent)]" />
                    +966 00 000 0000
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold text-[var(--accent)]">
                  {language === "ar" ? "ابدأ" : "Start"}
                </h3>
                <LiquidButton href="#contact" reducedMotion={reducedMotion} className="h-11 px-5 text-sm">
                  {language === "ar" ? "اطلب عرض توريد" : "Request proposal"}
                </LiquidButton>
              </div>
            </div>
          </div>
          <Separator className="mx-auto my-8 max-w-7xl bg-white/10" />
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-qira-cream/48 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Qira Catering</span>
            <a href="#top" className="inline-flex items-center gap-1 hover:text-[var(--accent)]">
              {language === "ar" ? "العودة للأعلى" : "Back to top"}
              <ArrowUpRight className="size-3 rtl:-rotate-90" />
            </a>
          </div>
        </footer>
      </BilingualTransitionWrapper>
    </div>
  );
}
