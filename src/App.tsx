import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
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
import { MenuCategoryPage } from "@/components/MenuCategoryPage";
import { ProgramTabs } from "@/components/ProgramTabs";
import { LineJarIcon } from "@/components/PotteryIcons";
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

const menuRoutePrefix = "#/menu/";

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
  const [hash, setHash] = useState(() => window.location.hash);
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const activeMenuCategory = hash.startsWith(menuRoutePrefix)
    ? menuCategories.find((category) => category.id === hash.slice(menuRoutePrefix.length)) ?? null
    : null;

  useGSAPAnimations(rootRef, reducedMotion);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (activeMenuCategory) {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
      return;
    }

    if (!hash || hash === "#") {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
      return;
    }

    const targetId = hash.slice(1);
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [activeMenuCategory, hash, reducedMotion]);

  return (
    <div ref={rootRef} className="site-shell min-h-screen bg-[var(--background-soft)] text-[var(--text-primary)]">
      <BilingualTransitionWrapper language={language} reducedMotion={reducedMotion}>
        <GlassNavbar
          language={language}
          onLanguageChange={setLanguage}
          reducedMotion={reducedMotion}
        />
        <main>
          {activeMenuCategory ? (
            <MenuCategoryPage
              category={activeMenuCategory}
              categories={menuCategories}
              language={language}
              reducedMotion={reducedMotion}
            />
          ) : (
            <>
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

          <section id="serve" className="section-band bg-[var(--background-soft)] px-5 pt-24 pb-32 md:px-8">
            <div className="mx-auto max-w-[1240px] w-full">
              <SectionHeading
                eyebrow="من نخدم"
                title={
                  language === "ar"
                    ? "ضيافة تُحضّر لكل مجلس"
                    : "Hospitality Prepared for Every Table"
                }
                body={
                  language === "ar"
                    ? "تقدم قيرة وجبات يومية، وصواني مشاركة، وضيافة دافئة بطابع الـ«دلي» للمدارس، والمكاتب، والفنادق، والفعاليات، وفرق العمل — تُحضّر بعناية، وتُورّد باتساق."
                    : "Qira serves daily meals, trays, and warm deli-style hospitality for schools, offices, hotels, events, and working teams — prepared with care, delivered with consistency."
                }
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
                {audiences.map((service) => (
                  <ServiceCard key={service.title.en} service={service} language={language} />
                ))}
              </div>
            </div>
          </section>

          <section
            id="programs"
            className="section-band relative overflow-hidden px-5 py-28 md:px-8"
            style={{
              backgroundColor: "#F4EADA",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E")`,
            }}
          >
            {/* Very soft palm shadow in top-left */}
            <div className="absolute left-[-120px] top-[-60px] w-[380px] h-[380px] pointer-events-none opacity-[0.15] blur-[16px] text-[#865D4B] rtl:hidden">
              <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
                <path d="M10,10 Q60,90 190,190" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M40,35 Q100,25 150,45 Q100,55 40,35 Z" />
                <path d="M55,50 Q125,40 175,65 Q125,75 55,50 Z" />
                <path d="M70,65 Q150,55 195,85 Q150,95 70,65 Z" />
                <path d="M25,20 Q15,70 45,120 Q40,70 25,20 Z" />
                <path d="M40,45 Q30,105 70,150 Q60,105 40,45 Z" />
                <path d="M55,70 Q45,140 95,180 Q80,140 55,70 Z" />
              </svg>
            </div>
            <div className="absolute right-[-120px] top-[-60px] w-[380px] h-[380px] pointer-events-none opacity-[0.15] blur-[16px] text-[#865D4B] hidden rtl:block">
              <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
                <path d="M190,10 Q140,90 10,190" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M160,35 Q100,25 50,45 Q100,55 160,35 Z" />
                <path d="M145,50 Q75,40 25,65 Q75,75 145,50 Z" />
                <path d="M130,65 Q50,55 5,85 Q50,95 130,65 Z" />
                <path d="M175,20 Q185,70 155,120 Q160,70 175,20 Z" />
                <path d="M160,45 Q170,105 130,150 Q140,105 160,45 Z" />
                <path d="M145,70 Q155,140 105,180 Q120,140 145,70 Z" />
              </svg>
            </div>

            {/* Faint pottery jar line-art in top-right */}
            <div className="absolute right-10 top-12 w-48 h-48 pointer-events-none opacity-[0.24] text-[#865D4B] rtl:hidden">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                <path d="M35 15h30v5H35z" />
                <path d="M38 20v5c0 5-8 8-8 18v25c0 8 6 14 14 14h12c8 0 14-6 14-14V43c0-10-8-13-8-18v-5" />
                <path d="M30 45h40" strokeDasharray="2 3" />
                <path d="M35 65h30" />
                <path d="M30 30c-5 0-8 4-8 10s3 10 8 10" />
                <path d="M70 30c5 0 8 4 8 10s-3 10-8 10" />
              </svg>
            </div>
            <div className="absolute left-10 top-12 w-48 h-48 pointer-events-none opacity-[0.24] text-[#865D4B] hidden rtl:block">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                <path d="M35 15h30v5H35z" />
                <path d="M38 20v5c0 5-8 8-8 18v25c0 8 6 14 14 14h12c8 0 14-6 14-14V43c0-10-8-13-8-18v-5" />
                <path d="M30 45h40" strokeDasharray="2 3" />
                <path d="M35 65h30" />
                <path d="M30 30c-5 0-8 4-8 10s3 10 8 10" />
                <path d="M70 30c5 0 8 4 8 10s-3 10-8 10" />
              </svg>
            </div>

            {/* Subtle Hijazi-inspired vertical border pattern left/right */}
            <div
              className="absolute left-4 top-0 bottom-0 w-6 pointer-events-none opacity-55"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />
            <div
              className="absolute right-4 top-0 bottom-0 w-6 pointer-events-none opacity-55"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />

            <div className="mx-auto max-w-[1240px] w-full relative z-10 flex flex-col items-center">
              <div className="reveal flex flex-col items-center text-center w-full">
                {/* Custom Pill Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#865D4B]/18 bg-[#DEC9B2]/35 px-[18px] py-2 text-xs font-semibold text-[#865D4B] mb-6 shadow-sm">
                  <LineJarIcon className="size-3.5" />
                  <span>{language === "ar" ? "البرامج" : "Programs"}</span>
                </div>

                {/* Main Heading */}
                <h2
                  className="font-display font-bold text-[#231F20] tracking-tight leading-[1.02] max-w-[860px]"
                  style={{
                    fontSize: "clamp(38px, 5.8vw, 82px)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {language === "ar" ? (
                    <span>برامج وجبات يومية،<br />تُحضّر لتناسب طاولتكم</span>
                  ) : (
                    <span>Meal Programs,<br />Prepared Around Your Day</span>
                  )}
                </h2>

                {/* Arabic Accent Line */}
                <p className="font-display text-[#865D4B] text-xl md:text-2xl mt-4.5 font-medium">
                  برامج ضيافة تُرتّب حول يومكم
                </p>

                {/* Subtitle */}
                <p className="mt-4 max-w-[620px] text-base md:text-lg leading-relaxed text-[#231F20]/75">
                  {language === "ar"
                    ? "اختر إيقاع الخدمة الذي يناسب ضيوفك، طلابك، فرق عملك، أو تجمعاتك — ودع قيرة تتكفل بتحضير الوجبات، وتغليفها، وتوصيلها بكل عناية."
                    : "Choose the service rhythm that fits your guests, students, teams, or gatherings — then let Qira shape the meals, packaging, and delivery with care."}
                </p>
              </div>

              {/* Stateful Tabs & Card */}
              <div className="mt-12 w-full">
                <ProgramTabs language={language} />
              </div>
            </div>
          </section>

          <section
            className="section-band experience-section relative overflow-hidden px-5 py-28 md:px-8"
            style={{
              backgroundColor: "#F4EADA",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E")`,
            }}
          >
            {/* Very soft palm shadow in top-left */}
            <div className="absolute left-[-120px] top-[-60px] w-[380px] h-[380px] pointer-events-none opacity-[0.15] blur-[16px] text-[#865D4B] rtl:hidden">
              <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
                <path d="M10,10 Q60,90 190,190" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M40,35 Q100,25 150,45 Q100,55 40,35 Z" />
                <path d="M55,50 Q125,40 175,65 Q125,75 55,50 Z" />
                <path d="M70,65 Q150,55 195,85 Q150,95 70,65 Z" />
                <path d="M25,20 Q15,70 45,120 Q40,70 25,20 Z" />
                <path d="M40,45 Q30,105 70,150 Q60,105 40,45 Z" />
                <path d="M55,70 Q45,140 95,180 Q80,140 55,70 Z" />
              </svg>
            </div>
            <div className="absolute right-[-120px] top-[-60px] w-[380px] h-[380px] pointer-events-none opacity-[0.15] blur-[16px] text-[#865D4B] hidden rtl:block">
              <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
                <path d="M190,10 Q140,90 10,190" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M160,35 Q100,25 50,45 Q100,55 160,35 Z" />
                <path d="M145,50 Q75,40 25,65 Q75,75 145,50 Z" />
                <path d="M130,65 Q50,55 5,85 Q50,95 130,65 Z" />
                <path d="M175,20 Q185,70 155,120 Q160,70 175,20 Z" />
                <path d="M160,45 Q170,105 130,150 Q140,105 160,45 Z" />
                <path d="M145,70 Q155,140 105,180 Q120,140 145,70 Z" />
              </svg>
            </div>

            {/* Faint pottery jar line-art in top-right */}
            <div className="absolute right-10 top-12 w-48 h-48 pointer-events-none opacity-[0.24] text-[#865D4B] rtl:hidden">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                <path d="M35 15h30v5H35z" />
                <path d="M38 20v5c0 5-8 8-8 18v25c0 8 6 14 14 14h12c8 0 14-6 14-14V43c0-10-8-13-8-18v-5" />
                <path d="M30 45h40" strokeDasharray="2 3" />
                <path d="M35 65h30" />
                <path d="M30 30c-5 0-8 4-8 10s3 10 8 10" />
                <path d="M70 30c5 0 8 4 8 10s-3 10-8 10" />
              </svg>
            </div>
            <div className="absolute left-10 top-12 w-48 h-48 pointer-events-none opacity-[0.24] text-[#865D4B] hidden rtl:block">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                <path d="M35 15h30v5H35z" />
                <path d="M38 20v5c0 5-8 8-8 18v25c0 8 6 14 14 14h12c8 0 14-6 14-14V43c0-10-8-13-8-18v-5" />
                <path d="M30 45h40" strokeDasharray="2 3" />
                <path d="M35 65h30" />
                <path d="M30 30c-5 0-8 4-8 10s3 10 8 10" />
                <path d="M70 30c5 0 8 4 8 10s-3 10-8 10" />
              </svg>
            </div>

            {/* Subtle Hijazi-inspired vertical border pattern left/right */}
            <div
              className="absolute left-4 top-0 bottom-0 w-6 pointer-events-none opacity-55"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />
            <div
              className="absolute right-4 top-0 bottom-0 w-6 pointer-events-none opacity-55"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />

            <div className="mx-auto max-w-[1240px] w-full relative z-10">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end w-full">
                <div className="max-w-2xl reveal">
                  {/* Badge */}
                  <Badge variant="warm" className="mb-5">
                    {language === "ar" ? "التجربة" : "Experience"}
                  </Badge>
                  {/* Heading */}
                  <h2
                    className="font-display font-bold text-[#231F20] tracking-tight leading-[1.05]"
                    style={{ fontSize: "clamp(34px, 5vw, 68px)", letterSpacing: "-0.02em" }}
                  >
                    {language === "ar" ? "كل تفصيلة تحمل معنى الضيافة" : "Every Detail Carries the Welcome"}
                  </h2>
                  {/* Arabic Accent Line */}
                  <p className="font-display text-[#865D4B] text-lg md:text-xl mt-3.5 font-medium">
                    كل تفصيلة تحمل معنى الضيافة
                  </p>
                </div>
                {/* Subtitle */}
                <p className="reveal max-w-xl text-base md:text-lg leading-relaxed text-[#231F20]/75">
                  {language === "ar"
                    ? "من التحضير إلى التغليف، تُصيغ قيرة كل خطوة بحفاوة وعناية، وبإيقاع يناسب الأشخاص الذين نخدمهم."
                    : "From preparation to packaging, Qira shapes each step with warmth, care, and a rhythm that fits the people being served."}
                </p>
              </div>

              {/* Preservation of current 4-card gallery design */}
              <div className="mt-12 grid gap-5 md:grid-cols-4">
                {experiencePanels.map((panel, index) => (
                  <figure
                    key={panel.image}
                    className={`parallax-panel reveal experience-panel ${index === 0 || index === 3 ? "md:mt-12" : ""}`}
                  >
                    <img src={panel.image} alt="" loading="lazy" />
                    <figcaption className="flex items-center gap-2">
                      <LineJarIcon className="size-4 shrink-0 text-[#865D4B]" />
                      <span className="font-medium text-sm text-[#231F20]">{panel.title[language]}</span>
                    </figcaption>
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
                    <a
                      key={category.id}
                      href={`#/menu/${category.id}`}
                      className="menu-card reveal group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={
                        language === "ar"
                          ? `افتح صفحة ${category.title[language]}`
                          : `Open ${category.title[language]} category page`
                      }
                    >
                      <img src={category.image} alt="" loading="lazy" />
                      <div className="menu-card-overlay">
                        <Icon className="size-5" />
                        <h3>{category.title[language]}</h3>
                        <ArrowUpRight className="ms-auto size-4 text-[var(--accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-rotate-90" />
                      </div>
                    </a>
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
            </>
          )}
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
