import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ClipboardCheck,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
} from "lucide-react";
import {
  audiences,
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
import { AudiencePage } from "@/components/AudiencePage";
import { MenuCategoryPage } from "@/components/MenuCategoryPage";
import { ProgramTabs } from "@/components/ProgramTabs";
import { LineJarIcon, RosetteIcon } from "@/components/PotteryIcons";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { FinalCTA } from "@/components/FinalCTA";
import { BranchLocation } from "@/components/BranchLocation";
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
const audienceRoutePrefix = "#/serve/";

const statsSectionCopy = {
  en: {
    badge: "At a glance",
    title: "A Clear Service Structure",
    accent: "From categories to operations",
    body: "Qira organizes daily hospitality through clear meal categories, program formats, operating stages, and service sectors.",
  },
  ar: {
    badge: "نظرة سريعة",
    title: "هيكل خدمات واضح",
    accent: "من الفئات إلى التشغيل",
    body: "تنظّم قرى الضيافة اليومية من خلال فئات وجبات واضحة، وصيغ برامج محددة، ومراحل تشغيل، وقطاعات خدمة.",
  },
};

const faqItems = [
  {
    question: {
      en: "Is the program only for schools?",
      ar: "هل يناسب البرنامج المدارس فقط؟",
    },
    answer: {
      en: "No. Qira supports schools, hotels, and events, with formats shaped around each setting.",
      ar: "لا. تدعم قرى المدارس، والفنادق، والفعاليات، مع تصميم أسلوب الخدمة والوجبات ليناسب كل بيئة.",
    },
  },
  {
    question: {
      en: "Can menus be customized?",
      ar: "هل يمكن تخصيص القوائم والوجبات؟",
    },
    answer: {
      en: "Yes. Menus can be adjusted by group, schedule, dietary need, cultural preference, and packaging format.",
      ar: "نعم. يمكن تعديل القوائم والخيارات حسب الفئة المستهدفة، والجدول الزمني، والاحتياج الغذائي، والتفضيل الثقافي، وشكل التغليف.",
    },
  },
  {
    question: {
      en: "How are meals packaged?",
      ar: "كيف يتم تعبئة وتغليف الوجبات؟",
    },
    answer: {
      en: "Packaging is chosen for daily school meals, hotel hospitality, or shared event service.",
      ar: "يتم اختيار التغليف بما يناسب الوجبات المدرسية اليومية، أو ضيافة الفنادق، أو بوفيهات الفعاليات المشتركة.",
    },
  },
  {
    question: {
      en: "Do you support recurring meal programs?",
      ar: "هل تدعمون برامج الوجبات المتكررة؟",
    },
    answer: {
      en: "Yes. Qira can help structure ongoing meal programs with repeatable portions, delivery rhythm, and service consistency.",
      ar: "نعم. يمكن لقرى تنظيم برامج وجبات مستمرة بمواصفات ثابتة للحصص، ومواعيد توصيل منتظمة، واتساق دائم في الخدمة.",
    },
  },
];

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
  const [language, setLanguage] = useState<Language>("ar");
  const [hash, setHash] = useState(() => window.location.hash);
  const [activeQualityIndex, setActiveQualityIndex] = useState<number>(0);
  const [activeMenuFilter, setActiveMenuFilter] = useState<string>("all");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const activeMenuCategory = hash.startsWith(menuRoutePrefix)
    ? menuCategories.find((category) => category.id === hash.slice(menuRoutePrefix.length)) ?? null
    : null;
  const activeAudienceCategory = hash.startsWith(audienceRoutePrefix)
    ? audiences.find((audience) => audience.id === hash.slice(audienceRoutePrefix.length)) ?? null
    : null;

  useGSAPAnimations(rootRef, reducedMotion);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (activeMenuCategory || activeAudienceCategory) {
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
  }, [activeMenuCategory, activeAudienceCategory, hash, reducedMotion]);

  return (
    <div ref={rootRef} className="site-shell min-h-screen bg-[var(--background-soft)] text-[var(--text-primary)]">
      <BilingualTransitionWrapper language={language} reducedMotion={reducedMotion}>
        <GlassNavbar
          language={language}
          onLanguageChange={setLanguage}
          reducedMotion={reducedMotion}
        />
        <main>
          {activeAudienceCategory ? (
            <AudiencePage
              audience={activeAudienceCategory}
              audiences={audiences}
              language={language}
              reducedMotion={reducedMotion}
            />
          ) : activeMenuCategory ? (
            <MenuCategoryPage
              category={activeMenuCategory}
              categories={menuCategories}
              language={language}
              reducedMotion={reducedMotion}
            />
          ) : (
            <>
              <HeroCinematic language={language} reducedMotion={reducedMotion} />

          <section
            className="stats-overview section-band relative z-10 overflow-hidden px-5 py-20 md:px-8 md:py-24"
            aria-labelledby="service-structure-title"
          >
            <div className="stats-palm-shadow" aria-hidden="true" />
            <div className="stats-corner-motif stats-corner-motif-start" aria-hidden="true" />
            <div className="stats-corner-motif stats-corner-motif-end" aria-hidden="true" />
            <LineJarIcon className="stats-side-jar" aria-hidden="true" />
            <RosetteIcon className="stats-side-rosette" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="stats-overview-copy reveal max-w-3xl text-left rtl:text-right">
                <span className="stats-badge">{statsSectionCopy[language].badge}</span>
                <h2 id="service-structure-title" className="stats-heading">
                  {statsSectionCopy[language].title}
                </h2>
                <p className="stats-accent-line">{statsSectionCopy[language].accent}</p>
                <p className="stats-subtitle">
                  {statsSectionCopy[language].body}
                </p>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <AnimatedStatCounter
                    key={stat.label.en}
                    value={stat.value}
                    title={stat.label[language]}
                    motif={stat.motif}
                    reducedMotion={reducedMotion}
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="serve" className="section-band bg-[var(--background-soft)] px-5 pt-24 pb-32 md:px-8">
            <div className="mx-auto max-w-[1240px] w-full">
              <SectionHeading
                eyebrow={language === "ar" ? "من نخدم" : "Who We Serve"}
                title={
                  language === "ar"
                    ? "ضيافة تُحضّر لكل مجلس"
                    : "Hospitality Prepared for Every Table"
                }
                body={
                  language === "ar"
                    ? "تقدم قرى وجبات يومية، وصواني مشاركة، وضيافة دافئة للمدارس والفنادق والفعاليات — تُحضّر بعناية، وتُورّد باتساق."
                    : "Qira serves daily meals, sharing trays, and warm hospitality for schools, hotels, and events — prepared with care and delivered with consistency."
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
                  {language === "ar" ? "برامج ضيافة تُرتّب حول يومكم" : "Hospitality programs arranged around your day"}
                </p>

                {/* Subtitle */}
                <p className="mt-4 max-w-[620px] text-base md:text-lg leading-relaxed text-[#231F20]/75">
                  {language === "ar"
                    ? "اختر إيقاع الخدمة الذي يناسب طلابك أو تجمعاتك — ودع قرى تتكفل بتحضير الوجبات، وتغليفها، وتوصيلها بكل عناية."
                    : "Choose the service rhythm that fits your students or gatherings — then let Qira shape the meals, packaging, and delivery with care."}
                </p>
              </div>

              {/* Stateful Tabs & Card */}
              <div className="mt-12 w-full">
                <ProgramTabs language={language} />
              </div>
            </div>
          </section>

          <section
            id="process"
            className="section-band relative overflow-hidden px-5 pt-28 pb-32 md:px-8"
            style={{
              backgroundColor: "#F4EADA",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E")`,
            }}
          >
            {/* Very soft palm shadow in top-left */}
            <div className="absolute left-[-120px] top-[-60px] w-[380px] h-[380px] pointer-events-none opacity-[0.08] blur-[16px] text-[#865D4B] rtl:hidden">
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
            <div className="absolute right-[-120px] top-[-60px] w-[380px] h-[380px] pointer-events-none opacity-[0.08] blur-[16px] text-[#865D4B] hidden rtl:block">
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
            <div className="absolute right-10 top-12 w-48 h-48 pointer-events-none opacity-[0.10] text-[#865D4B] rtl:hidden">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-full h-full">
                <path d="M35 15h30v5H35z" />
                <path d="M38 20v5c0 5-8 8-8 18v25c0 8 6 14 14 14h12c8 0 14-6 14-14V43c0-10-8-13-8-18v-5" />
                <path d="M30 45h40" strokeDasharray="2 3" />
                <path d="M35 65h30" />
                <path d="M30 30c-5 0-8 4-8 10s3 10 8 10" />
                <path d="M70 30c5 0 8 4 8 10s-3 10-8 10" />
              </svg>
            </div>
            <div className="absolute left-10 top-12 w-48 h-48 pointer-events-none opacity-[0.10] text-[#865D4B] hidden rtl:block">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-full h-full">
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
              className="absolute left-4 top-0 bottom-0 w-6 pointer-events-none opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />
            <div
              className="absolute right-4 top-0 bottom-0 w-6 pointer-events-none opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />

            <div className="mx-auto max-w-[1240px] w-full relative z-10">
              <div className="reveal text-left rtl:text-right max-w-[760px] w-full relative z-10">
                <Badge variant="warm" className="mb-5">
                  {language === "ar" ? "كيف نعمل" : "How it works"}
                </Badge>
                <h2
                  className="font-display font-bold text-[#231F20] tracking-tight leading-[1.05]"
                  style={{ fontSize: "clamp(34px, 5.2vw, 72px)", letterSpacing: "-0.02em" }}
                >
                  {language === "ar" ? "من الحاجة إلى ضيافة يومية" : "From Need to Daily Hospitality"}
                </h2>
                {/* Arabic Accent Line */}
                <p className="font-display text-[#865D4B] text-lg md:text-xl mt-3.5 font-medium">
                  {language === "ar" ? "من الحاجة إلى ضيافة يومية" : "From need to daily hospitality"}
                </p>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-[#231F20]/75">
                  {language === "ar"
                    ? "مسار بسيط يبدأ بفهم ضيوفكم وينتهي بتقديم برنامج ضيافة متكامل يعمل بكفاءة كل يوم."
                    : "A simple path from understanding your guests to delivering a program that works every day."}
                </p>
              </div>
              <div className="mt-12">
                <ProcessTimeline language={language} />
              </div>
            </div>
          </section>

          <section
            id="quality"
            className="section-band relative overflow-hidden px-5 py-28 md:px-8"
            style={{
              backgroundColor: "#F4EADA",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E")`,
            }}
          >
            {/* Very soft palm shadow in top-left */}
            <div className="absolute left-[-120px] top-[-60px] w-[380px] h-[380px] pointer-events-none opacity-[0.08] blur-[16px] text-[#865D4B] rtl:hidden">
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
            <div className="absolute right-[-120px] top-[-60px] w-[380px] h-[380px] pointer-events-none opacity-[0.08] blur-[16px] text-[#865D4B] hidden rtl:block">
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
            <div className="absolute right-10 top-12 w-48 h-48 pointer-events-none opacity-[0.10] text-[#865D4B] rtl:hidden">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-full h-full">
                <path d="M35 15h30v5H35z" />
                <path d="M38 20v5c0 5-8 8-8 18v25c0 8 6 14 14 14h12c8 0 14-6 14-14V43c0-10-8-13-8-18v-5" />
                <path d="M30 45h40" strokeDasharray="2 3" />
                <path d="M35 65h30" />
                <path d="M30 30c-5 0-8 4-8 10s3 10 8 10" />
                <path d="M70 30c5 0 8 4 8 10s-3 10-8 10" />
              </svg>
            </div>
            <div className="absolute left-10 top-12 w-48 h-48 pointer-events-none opacity-[0.10] text-[#865D4B] hidden rtl:block">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-full h-full">
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
              className="absolute left-4 top-0 bottom-0 w-6 pointer-events-none opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />
            <div
              className="absolute right-4 top-0 bottom-0 w-6 pointer-events-none opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />

            <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.85fr_1.15fr] relative z-10 w-full">
              {/* Left Column: Heading and intro */}
              <div className="reveal flex flex-col justify-start items-start text-left rtl:text-right w-full">
                <Badge variant="warm" className="mb-5">
                  {language === "ar" ? "الجودة والتشغيل" : "Quality & operations"}
                </Badge>
                <h2
                  className="font-display font-bold text-[#231F20] tracking-tight leading-[1.05]"
                  style={{ fontSize: "clamp(34px, 4.5vw, 60px)", letterSpacing: "-0.02em" }}
                >
                  {language === "ar" ? "ثقة تُبنى في كل تفصيلة" : "Trust in Every Detail of Service"}
                </h2>
                {/* Arabic Accent Line */}
                <p className="font-display text-[#865D4B] text-xl md:text-2xl mt-4 font-semibold">
                  {language === "ar" ? "ثقة تُبنى في كل تفصيلة" : "Trust built in every detail"}
                </p>

                {/* Delicate Divider Ornament */}
                <div className="my-6 flex items-center gap-3 w-40">
                  <div className="h-[1px] flex-1 bg-[#DEC9B2]/60" />
                  <div className="size-1.5 rotate-45 bg-[#865D4B]" />
                  <div className="h-[1px] flex-1 bg-[#DEC9B2]/60" />
                </div>

                <p className="max-w-[420px] text-base leading-relaxed text-[#231F20]/75">
                  {language === "ar"
                    ? "يحتاج مشتري الخدمات المؤسسية لمعايير واضحة للمكونات والتغليف والتوصيل والمرونة والملاءمة الثقافية — لنضمن وصول كل وجبة بعناية واتساق."
                    : "B2B buyers need clear standards for ingredients, packaging, delivery, flexibility, and cultural fit — so every meal arrives with care and consistency."}
                </p>
              </div>

              {/* Right Column: Cards Grid */}
              <div
                className="grid gap-5 sm:grid-cols-2 w-full"
                onMouseLeave={() => setActiveQualityIndex(0)}
              >
                {qualityPoints.map((point, index) => {
                  const Icon = point.icon;
                  const isActive = activeQualityIndex === index;
                  return (
                    <article
                      key={point.title.en}
                      onMouseEnter={() => setActiveQualityIndex(index)}
                      className="reveal group relative overflow-hidden rounded-[20px] border border-[#865D4B]/22 bg-gradient-to-br from-[#FAEDE6]/92 to-[#F4EADA]/78 p-[28px] min-h-[190px] shadow-[0_18px_45px_rgba(134,93,75,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#F19E38]/55 hover:shadow-[0_24px_65px_rgba(134,93,75,0.14)]"
                    >
                      {/* Top Orange Outline */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-[3px] bg-[#F19E38] transition-all duration-300 ease-out origin-center ${
                          isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        }`}
                      />

                      {/* Icon wrapper inside clay-seal circle */}
                      <div className="relative mb-5 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300">
                        {/* Non-featured base (solid sand color) */}
                        <div
                          className={`absolute inset-0 bg-[#DEC9B2] border border-[rgba(134,93,75,0.28)] rounded-full transition-opacity duration-300 ${
                            isActive ? "opacity-0" : "opacity-100"
                          }`}
                        />
                        {/* Featured active layer (clay seal gradient) */}
                        <div
                          className="absolute inset-0 rounded-full border border-[rgba(111,75,59,0.35)] transition-opacity duration-300"
                          style={{
                            background: "linear-gradient(145deg, #C98A61, #A86543)",
                            boxShadow: "0 8px 18px rgba(134, 93, 75, 0.18)",
                            opacity: isActive ? 1 : 0,
                          }}
                        />
                        {/* Icon */}
                        <div className="relative z-10 flex items-center justify-center">
                          <Icon
                            className={`w-[21px] h-[21px] transition-colors duration-300 ${
                              isActive ? "text-[#FFF8F1]" : "text-[#865D4B]"
                            }`}
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      <h3 className="font-display text-lg md:text-xl font-bold text-[#231F20] leading-snug">
                        {point.title[language]}
                      </h3>

                      <p className="mt-3 text-[15px] leading-[1.7] text-[#231F20]/68">
                        {point.body[language]}
                      </p>

                      {/* Watermark inside card */}
                      <div className="absolute bottom-[-10px] right-[-10px] w-20 h-20 opacity-[0.06] text-[#865D4B] pointer-events-none transition-all duration-500 group-hover:scale-110">
                        {index % 2 === 0 ? (
                          <LineJarIcon className="w-full h-full" />
                        ) : (
                          <RosetteIcon className="w-full h-full" />
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="menu" className="relative bg-[#F4EADA] px-5 py-24 md:px-8 overflow-hidden">
            {/* Faint plaster paper texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.035]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Faint palm shadow top-left */}
            <div className="absolute left-[-10%] top-[-10%] w-[45%] h-[45%] pointer-events-none opacity-[0.08] text-[#865D4B] mix-blend-multiply rotate-[-12deg] rtl:left-auto rtl:right-[-10%] rtl:rotate-[12deg]">
              <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
                <path d="M10,90 C50,85 100,50 145,70 C120,95 105,130 90,175 C85,130 50,105 10,90 Z" />
                <path d="M40,60 C80,55 120,20 155,50 C130,75 120,110 115,155 C110,110 80,85 40,60 Z" />
                <path d="M145,70 Q155,140 105,180 Q120,140 145,70 Z" />
              </svg>
            </div>

            {/* Faint Dallah line-art in bottom-left */}
            <div className="absolute left-6 bottom-12 w-44 h-44 pointer-events-none opacity-[0.08] text-[#865D4B] rtl:left-auto rtl:right-6">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-full h-full">
                <path d="M50 20 L53 10 L47 10 Z M45 10 L55 10" />
                <path d="M46 20 C46 20 42 35 44 45 L56 45 C58 35 54 20 54 20" />
                <path d="M44 45 C42 48 35 52 35 57 C35 65 40 85 50 85 C60 85 65 65 65 57 C65 52 58 48 56 45" />
                <path d="M35 57 L65 57" strokeDasharray="1 3" />
                <path d="M40 70 L60 70" />
                <path d="M45 40 C45 40 40 32 30 35 C33 42 44 45 44 45" />
                <path d="M56 25 C68 25 72 45 60 75" />
              </svg>
            </div>

            {/* Subtle Hijazi-inspired vertical border pattern left/right */}
            <div
              className="absolute left-4 top-0 bottom-0 w-6 pointer-events-none opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />
            <div
              className="absolute right-4 top-0 bottom-0 w-6 pointer-events-none opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />

            <div className="mx-auto max-w-7xl relative z-10">
              {/* Center Title Block */}
              <div className="mx-auto max-w-3xl text-center reveal flex flex-col items-center mb-10">
                <Badge variant="warm" className="mb-5">
                  {language === "ar" ? "فئات الوجبات" : "Meal categories"}
                </Badge>
                <h2
                  className="font-display font-bold text-[#231F20] tracking-tight leading-[1.05]"
                  style={{ fontSize: "clamp(34px, 4.5vw, 54px)", letterSpacing: "-0.02em" }}
                >
                  {language === "ar" ? "قائمة طعام لروتين يومكم" : "A Menu Built for Daily Rhythm"}
                </h2>
                {/* Arabic Accent Line */}
                <p className="font-display text-[#865D4B] text-xl md:text-2xl mt-4 font-semibold">
                  {language === "ar" ? "قائمة عملية تتكيّف مع يومكم" : "A practical menu that adapts to your day"}
                </p>

                {/* Centered Delicate Divider Ornament */}
                <div className="my-6 flex items-center justify-center gap-3 w-40">
                  <div className="h-[1px] flex-1 bg-[#DEC9B2]/60" />
                  <div className="size-1.5 rotate-45 bg-[#865D4B]" />
                  <div className="h-[1px] flex-1 bg-[#DEC9B2]/60" />
                </div>

                <p className="max-w-2xl text-base leading-relaxed text-[#231F20]/75 md:text-lg">
                  {language === "ar"
                    ? "اختر الشكل والنوع أولاً، ثم دع قرى تُشكل النكهة، والحصص، والتغليف حول المستفيدين."
                    : "Choose the format first, then let Qira shape flavor, portions, and packaging around the people being served."}
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
                {[
                  { id: "all", en: "All", ar: "الكل" },
                  { id: "daily", en: "Daily meals", ar: "وجبات يومية" },
                  { id: "events", en: "Events", ar: "مناسبات" },
                  { id: "beverages", en: "Beverages", ar: "مشروبات" },
                  { id: "packed", en: "Packed options", ar: "خيارات مغلفة" },
                ].map((filter) => {
                  const isSelected = activeMenuFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveMenuFilter(filter.id)}
                      className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border transition-all duration-300 ease-out ${
                        isSelected
                          ? "bg-[#865D4B] border-[#865D4B] text-[#FFF8F1] shadow-[0_6px_15px_rgba(134,93,75,0.18)] scale-[1.02]"
                          : "bg-transparent border-[#DEC9B2] text-[#865D4B] hover:bg-[#FAEDE6] hover:border-[#865D4B]/40"
                      }`}
                    >
                      {language === "ar" ? filter.ar : filter.en}
                    </button>
                  );
                })}
              </div>

              {/* Cards Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {menuCategories
                  .filter((category) => {
                    if (activeMenuFilter === "all") return true;
                    if (activeMenuFilter === "daily") return ["breakfast-boxes", "lunch-meals", "healthy-snacks"].includes(category.id);
                    if (activeMenuFilter === "events") return ["buffet-trays", "custom-packages"].includes(category.id);
                    if (activeMenuFilter === "beverages") return ["beverages"].includes(category.id);
                    if (activeMenuFilter === "packed") return ["breakfast-boxes", "healthy-snacks", "custom-packages"].includes(category.id);
                    return true;
                  })
                  .map((category) => {
                    const Icon = category.icon;
                    return (
                      <div
                        key={category.id}
                        className="reveal group relative overflow-hidden rounded-[24px] border border-[#865D4B]/22 bg-gradient-to-br from-[#FAEDE6]/92 to-[#F4EADA]/78 shadow-[0_18px_45px_rgba(134,93,75,0.08)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#F19E38]/55 hover:shadow-[0_24px_65px_rgba(134,93,75,0.14)] h-[340px]"
                      >
                        {/* Optional Daily Staple Tag */}
                        {category.id === "lunch-meals" && (
                          <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-20 rounded-full bg-[#F19E38] px-3.5 py-1 text-[11px] font-bold tracking-wider uppercase text-white shadow-[0_4px_10px_rgba(241,158,56,0.3)]">
                            {language === "ar" ? "الأساس اليومي" : "Daily staple"}
                          </div>
                        )}

                        <div className="absolute inset-0 w-full h-full">
                          <img
                            src={category.image}
                            alt={category.title[language]}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            style={{ filter: "sepia(0.12) contrast(1.02) brightness(0.98)" }}
                            loading="lazy"
                          />
                          {/* Soft overlay gradient on top of the image to ensure text contrast is high */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                        </div>

                        <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-[16px] border border-[#865D4B]/24 bg-[#FAEDE6] bg-opacity-95 p-4 shadow-[0_8px_20px_rgba(134,93,75,0.08)] backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_12px_28px_rgba(134,93,75,0.14)] z-10">
                          {/* Icon circle (clay-seal style) */}
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C98A61] to-[#A86543] border border-[rgba(111,75,59,0.3)] text-[#FFF8F1] shadow-[0_3px_8px_rgba(134,93,75,0.12)]">
                            <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                          </div>
                          {/* Title & Subtitle */}
                          <div className="flex-1 min-w-0 text-left rtl:text-right">
                            <h3 className="font-display text-base font-bold text-[#231F20] leading-tight truncate">
                              {category.title[language]}
                            </h3>
                            <p className="text-[12px] text-[#865D4B] font-medium leading-normal mt-0.5 opacity-90 truncate">
                              {category.subtitle?.[language] || category.summary[language]}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>

          <section className="relative bg-[#F4EADA] px-5 py-24 md:px-8 overflow-hidden border-t border-[#865D4B]/15">
            {/* Faint plaster paper texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.035]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Faint palm shadow top-left */}
            <div className="absolute left-[-10%] top-[-10%] w-[45%] h-[45%] pointer-events-none opacity-[0.08] text-[#865D4B] mix-blend-multiply rotate-[-12deg] rtl:left-auto rtl:right-[-10%] rtl:rotate-[12deg]">
              <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
                <path d="M10,90 C50,85 100,50 145,70 C120,95 105,130 90,175 C85,130 50,105 10,90 Z" />
                <path d="M40,60 C80,55 120,20 155,50 C130,75 120,110 115,155 C110,110 80,85 40,60 Z" />
                <path d="M145,70 Q155,140 105,180 Q120,140 145,70 Z" />
              </svg>
            </div>

            {/* Faint pottery jar line-art in top-right */}
            <div className="absolute right-10 top-12 w-48 h-48 pointer-events-none opacity-[0.10] text-[#865D4B] rtl:right-auto rtl:left-10">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-full h-full">
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
              className="absolute left-4 top-0 bottom-0 w-6 pointer-events-none opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />
            <div
              className="absolute right-4 top-0 bottom-0 w-6 pointer-events-none opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />

            <div className="mx-auto max-w-7xl relative z-10">
              {/* Centered Heading */}
              <div className="mx-auto max-w-3xl text-center reveal flex flex-col items-center mb-10">
                <Badge variant="warm" className="mb-5">
                  {language === "ar" ? "التزامات الخدمة" : "Service commitments"}
                </Badge>
                <h2
                  className="font-display font-bold text-[#231F20] tracking-tight leading-[1.05]"
                  style={{ fontSize: "clamp(34px, 4.5vw, 54px)", letterSpacing: "-0.02em" }}
                >
                  {language === "ar" ? "معايير واضحة قبل كل شيء" : "Clear Standards Before Claims"}
                </h2>
                {/* Arabic Accent Line */}
                <p className="font-display text-[#865D4B] text-xl md:text-2xl mt-4 font-semibold">
                  {language === "ar" ? "معايير واضحة قبل كل شيء" : "Clear standards above all else"}
                </p>

                {/* Centered Divider Ornament */}
                <div className="my-6 flex items-center justify-center gap-3 w-40">
                  <div className="h-[1px] flex-1 bg-[#DEC9B2]/60" />
                  <div className="size-1.5 rotate-45 bg-[#865D4B]" />
                  <div className="h-[1px] flex-1 bg-[#DEC9B2]/60" />
                </div>

                <p className="max-w-2xl text-base leading-relaxed text-[#231F20]/75 md:text-lg">
                  {language === "ar"
                    ? "قبل أن تصلنا تقييمات العملاء، تبني قرى الثقة من خلال معايير ملموسة: قوائم طعام واضحة، وتغليف موثوق، وإيقاع توصيل منتظم، وخدمة دقيقة."
                    : "Before testimonials come in, Qira builds trust through visible standards: clear menus, reliable packaging, delivery rhythm, and careful service."}
                </p>
              </div>

              {/* Two-card layout */}
              <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto mt-12">
                {/* Card 1: Built for repeat service */}
                <article className="reveal group relative overflow-hidden rounded-[24px] border border-[#865D4B]/22 bg-gradient-to-br from-[#FAEDE6]/92 to-[#F4EADA]/78 p-8 shadow-[0_18px_45px_rgba(134,93,75,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#F19E38]/55 hover:shadow-[0_24px_65px_rgba(134,93,75,0.12)] min-h-[260px] text-left rtl:text-right">
                  {/* Small clay-seal icon circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C98A61] to-[#A86543] border border-[rgba(111,75,59,0.35)] shadow-[0_6px_15px_rgba(134,93,75,0.15)] flex items-center justify-center text-[#FFF8F1] mb-6">
                    <ClipboardCheck className="w-[22px] h-[22px]" strokeWidth={2} />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-[#DEC9B2]/40 text-[#865D4B] text-[11px] font-bold tracking-wide uppercase mb-3">
                    {language === "ar" ? "وضوح تشغيلي" : "Operational clarity"}
                  </span>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-[#231F20] leading-snug">
                    {language === "ar" ? "مخصصة للخدمة المستمرة" : "Built for repeat service"}
                  </h3>

                  <p className="mt-3 text-[15px] md:text-base leading-[1.7] text-[#231F20]/72">
                    {language === "ar"
                      ? "تُخطط البرامج اليومية بعناية لتراعي الحصص، والتوقيت، والتغليف، ونوافذ الاستلام — لتعرف الفرق والجهات ما يمكن توقعه."
                      : "Daily programs are planned around portions, timing, packaging, and receiving windows — so teams know what to expect."}
                  </p>

                  {/* Rosette Watermark */}
                  <div className="absolute bottom-[-10px] right-[-10px] rtl:right-auto rtl:left-[-10px] w-24 h-24 opacity-[0.05] text-[#865D4B] pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    <RosetteIcon className="w-full h-full" />
                  </div>
                </article>

                {/* Card 2: Prepared with care */}
                <article className="reveal group relative overflow-hidden rounded-[24px] border border-[#865D4B]/22 bg-gradient-to-br from-[#FAEDE6]/92 to-[#F4EADA]/78 p-8 shadow-[0_18px_45px_rgba(134,93,75,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#F19E38]/55 hover:shadow-[0_24px_65px_rgba(134,93,75,0.12)] min-h-[260px] text-left rtl:text-right">
                  {/* Small clay-seal icon circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C98A61] to-[#A86543] border border-[rgba(111,75,59,0.35)] shadow-[0_6px_15px_rgba(134,93,75,0.15)] flex items-center justify-center text-[#FFF8F1] mb-6">
                    <HeartHandshake className="w-[22px] h-[22px]" strokeWidth={2} />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-[#DEC9B2]/40 text-[#865D4B] text-[11px] font-bold tracking-wide uppercase mb-3">
                    {language === "ar" ? "معيار الضيافة" : "Hospitality standard"}
                  </span>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-[#231F20] leading-snug">
                    {language === "ar" ? "مُحضّرة بكل عناية" : "Prepared with care"}
                  </h3>

                  <p className="mt-3 text-[15px] md:text-base leading-[1.7] text-[#231F20]/72">
                    {language === "ar"
                      ? "تُعبأ الوجبات، وتُصنف، وتُرتب بعناية لتناسب المدارس والفنادق والفعاليات دون أن تفقد دفئها وجودتها."
                      : "Meals are packed, labeled, and arranged to suit schools, hotels, and events without losing warmth."}
                  </p>

                  {/* Jar Watermark */}
                  <div className="absolute bottom-[-10px] right-[-10px] rtl:right-auto rtl:left-[-10px] w-24 h-24 opacity-[0.05] text-[#865D4B] pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    <LineJarIcon className="w-full h-full" />
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="faq" className="relative bg-[#F4EADA] px-5 py-24 md:px-8 overflow-hidden border-t border-[#865D4B]/15">
            {/* Faint plaster paper texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.035]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Faint palm shadow top-left */}
            <div className="absolute left-[-10%] top-[-10%] w-[45%] h-[45%] pointer-events-none opacity-[0.08] text-[#865D4B] mix-blend-multiply rotate-[-12deg] rtl:left-auto rtl:right-[-10%] rtl:rotate-[12deg]">
              <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
                <path d="M10,90 C50,85 100,50 145,70 C120,95 105,130 90,175 C85,130 50,105 10,90 Z" />
                <path d="M40,60 C80,55 120,20 155,50 C130,75 120,110 115,155 C110,110 80,85 40,60 Z" />
                <path d="M145,70 Q155,140 105,180 Q120,140 145,70 Z" />
              </svg>
            </div>

            {/* Faint pottery jar line-art in top-right */}
            <div className="absolute right-10 top-12 w-48 h-48 pointer-events-none opacity-[0.09] text-[#865D4B] rtl:right-auto rtl:left-10">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-full h-full">
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
              className="absolute left-4 top-0 bottom-0 w-6 pointer-events-none opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />
            <div
              className="absolute right-4 top-0 bottom-0 w-6 pointer-events-none opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L10 8L6 14L2 8Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "12px 24px",
              }}
            />

            <div className="mx-auto max-w-[1100px] relative z-10">
              {/* Centered Heading */}
              <div className="mx-auto max-w-3xl text-center reveal flex flex-col items-center mb-10">
                <Badge variant="warm" className="mb-5">
                  {language === "ar" ? "أسئلة" : "Questions"}
                </Badge>
                <h2
                  className="font-display font-bold text-[#231F20] tracking-tight leading-[1.05]"
                  style={{ fontSize: "clamp(34px, 4.5vw, 54px)", letterSpacing: "-0.02em" }}
                >
                  {language === "ar" ? "إجابات واضحة قبل القرار" : "Clear Answers Before You Decide"}
                </h2>
                {/* Arabic Accent Line */}
                <p className="font-display text-[#865D4B] text-xl md:text-2xl mt-4 font-semibold">
                  {language === "ar" ? "إجابات واضحة قبل القرار" : "Clear answers before deciding"}
                </p>

                {/* Centered Divider Ornament */}
                <div className="my-6 flex items-center justify-center gap-3 w-40">
                  <div className="h-[1px] flex-1 bg-[#DEC9B2]/60" />
                  <div className="size-1.5 rotate-45 bg-[#865D4B]" />
                  <div className="h-[1px] flex-1 bg-[#DEC9B2]/60" />
                </div>

                <p className="max-w-2xl text-base leading-relaxed text-[#231F20]/75 md:text-lg">
                  {language === "ar"
                    ? "من البرامج المدرسية إلى ضيافة الفنادق والفعاليات، إليك إجابات عن بعض الأسئلة الشائعة حول القوائم، والتخصيص، ونوع الخدمة."
                    : "From school programs to hotel hospitality and events, here are a few common questions about menus, customization, and service format."}
                </p>
              </div>

              {/* Accordion FAQ Grid */}
              <div className="mx-auto max-w-[860px] flex flex-col gap-4">
                {faqItems.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className={`overflow-hidden rounded-[20px] border transition-all duration-300 ease-out ${
                        isOpen
                          ? "bg-[#FAEDE6] border-[#F19E38]/50 shadow-[0_12px_28px_rgba(134,93,75,0.08)]"
                          : "bg-[#FAEDE6]/60 border-[#865D4B]/18 hover:border-[#865D4B]/35 shadow-[0_6px_18px_rgba(134,93,75,0.03)]"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left rtl:text-right focus:outline-none"
                      >
                        <span className="font-display text-base md:text-lg font-bold text-[#231F20] pr-4 rtl:pr-0 rtl:pl-4">
                          {item.question[language]}
                        </span>
                        {/* Plus/Minus Clay Seal Circle */}
                        <div
                          className={`size-8 shrink-0 flex items-center justify-center rounded-full transition-all duration-300 border ${
                            isOpen
                              ? "bg-gradient-to-br from-[#C98A61] to-[#A86543] border-[rgba(111,75,59,0.35)] shadow-[0_3px_8px_rgba(134,93,75,0.12)] text-[#FFF8F1]"
                              : "bg-[#DEC9B2] border-[rgba(134,93,75,0.2)] text-[#865D4B]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
                          ) : (
                            <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                          )}
                        </div>
                      </button>

                      {/* Collapsible Answer using CSS Grid Rows trick for smooth height animation */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 pb-6 text-[15px] md:text-base leading-relaxed text-[#231F20]/72 border-t border-[#865D4B]/10 pt-4">
                            {item.answer[language]}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Small CTA below Accordion */}
              <div className="mx-auto max-w-[620px] text-center mt-12 p-6 rounded-[20px] border border-[#865D4B]/18 bg-[#FAEDE6]/50 shadow-[0_6px_18px_rgba(134,93,75,0.02)]">
                <h3 className="font-display text-lg md:text-xl font-bold text-[#231F20]">
                  {language === "ar" ? "هل لديك سؤال آخر؟" : "Still have a question?"}
                </h3>
                <p className="text-sm text-[#231F20]/70 mt-2 mb-4">
                  {language === "ar"
                    ? "دعنا نساعدك في تصميم البرنامج المناسب لمدرستك، أو فندقك، أو فعاليتك."
                    : "Let us help shape the right program for your school, hotel, or event."}
                </p>
                <LiquidButton href="#contact" reducedMotion={reducedMotion} className="h-10 px-6 text-sm mx-auto">
                  {language === "ar" ? "ناقش احتياجاتك" : "Discuss your needs"}
                </LiquidButton>
              </div>
            </div>
          </section>

              <BranchLocation language={language} reducedMotion={reducedMotion} />
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
                  ? "وجبات مدرسية وضيافة للفنادق والفعاليات بروح عربية ووضوح تشغيلي."
                  : "School meals, hotel hospitality, and event catering rooted in Arabic warmth and operational clarity."}
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-[var(--accent)]">
                  {language === "ar" ? "الخدمات" : "Services"}
                </h3>
                <ul className="space-y-3 text-sm text-qira-cream/64">
                  <li>{language === "ar" ? "وجبات المدارس" : "School meals"}</li>
                  <li>{language === "ar" ? "ضيافة الفنادق" : "Hotel hospitality"}</li>
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
                    <a
                      href="https://maps.app.goo.gl/KCSV4X1LWn4Vvom39?g_st=ic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {language === "ar" ? "جدة - حي الروضة - شارع الكيال" : "Jeddah - Ar Rawdah - Al Kayal St."}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="size-4 text-[var(--accent)]" />
                    <a href="tel:+966560718939" className="hover:text-[var(--accent)] transition-colors" dir="ltr">
                      +966 56 071 8939
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="size-4 text-[var(--accent)]" />
                    <a href="mailto:deliqira@gmail.com" className="hover:text-[var(--accent)] transition-colors">
                      deliqira@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="size-4 text-[var(--accent)]" />
                    <a
                      href="https://www.instagram.com/qira_deli?igsh=MWtlMHU0eGJ6c3A3Zg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      @qira_deli
                    </a>
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
