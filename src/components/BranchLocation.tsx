import { MapPin, Phone, Instagram, ArrowUpRight, MessageCircle, Mail } from "lucide-react";
import { type Language } from "@/data/content";
import { LiquidButton } from "@/components/LiquidButton";
import { Badge } from "@/components/ui/badge";

type BranchLocationProps = {
  language: Language;
  reducedMotion: boolean;
};

export function BranchLocation({ language, reducedMotion }: BranchLocationProps) {
  const mapLink = "https://maps.app.goo.gl/KCSV4X1LWn4Vvom39?g_st=ic";
  const whatsappLink = "https://wa.me/966560718939";
  const instagramLink = "https://www.instagram.com/qira_deli?igsh=MWtlMHU0eGJ6c3A3Zg==";
  const tiktokLink = "https://www.tiktok.com/@qira_deli?_r=1&_t=ZS-972xrwtJKUb";

  return (
    <section id="location" className="relative overflow-hidden bg-[var(--surface)] px-5 py-24 md:px-8">
      {/* Decorative blurry lens */}
      <div
        className="pointer-events-none absolute -right-24 top-1/4 size-96 rounded-full bg-[var(--primary-soft)] opacity-30 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Text block */}
          <div className="reveal">
            <Badge variant="warm" className="mb-5">
              {language === "ar" ? "فرعنا الرئيسي" : "Our Main Branch"}
            </Badge>
            <h2 className="font-display text-5xl leading-tight text-[var(--text-primary)] md:text-7xl">
              <span className="editorial-mask block overflow-hidden">
                <span className="editorial-line block">
                  {language === "ar" ? "تفضلوا بزيارتنا في فرعنا" : "Visit Us in Our Branch"}
                </span>
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] md:text-lg md:leading-9">
              {language === "ar"
                ? "يسعدنا ويشرفنا استقبالكم في فرعنا الرئيسي بجدة لمناقشة متطلبات التموين والضيافة الراقية لمدارسكم، فنادقكم، أو فعالياتكم الخاصة عن قرب."
                : "We are delighted to welcome you at our main branch in Jeddah. Stop by to discuss your premium catering and hospitality needs, view menu samples, and discuss custom programs."}
            </p>

            {/* Quick Cards Grid */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-5 shadow-[0_6px_20px_rgba(77,48,32,0.02)] transition-all hover:translate-y-[-2px] hover:border-[var(--border-strong)] hover:shadow-[0_12px_28px_rgba(134,93,75,0.06)]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)]">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-[var(--text-primary)]">
                    {language === "ar" ? "العنوان" : "Address"}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                    {language === "ar" ? "جدة - حي الروضة - شارع الكيال" : "Jeddah - Ar Rawdah - Al Kayal St."}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] transition-all group-hover:text-[var(--primary-hover)]">
                    {language === "ar" ? "عرض على الخريطة" : "View on Google Maps"}
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-5 shadow-[0_6px_20px_rgba(77,48,32,0.02)] transition-all hover:translate-y-[-2px] hover:border-[var(--border-strong)] hover:shadow-[0_12px_28px_rgba(134,93,75,0.06)]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)]">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-[var(--text-primary)]">
                    {language === "ar" ? "الهاتف والواتساب" : "Phone & WhatsApp"}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]" dir="ltr">
                    +966 56 071 8939
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] transition-all group-hover:text-[var(--primary-hover)]">
                    {language === "ar" ? "تواصل معنا مباشرة" : "Chat on WhatsApp"}
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Styled Map/Info Card */}
          <div className="reveal relative flex items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--surface-card)] p-6 shadow-[0_12px_36px_rgba(77,48,32,0.04)] lg:p-8">
            <div
              className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none rounded-3xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2 L30 16 L16 30 L2 16 Z' stroke='%23865D4B' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: "32px 32px",
              }}
            />
            
            <div className="relative z-10 w-full text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                <MapPin className="size-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                {language === "ar" ? "تفضلوا بزيارة فرعنا" : "Visit Our Branch Office"}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {language === "ar"
                  ? "جدة، حي الروضة، شارع الكيال"
                  : "Jeddah, Ar Rawdah District, Al Kayal St."}
              </p>
              
              <div className="mt-6 flex flex-col gap-3 items-center justify-center">
                <div className="flex gap-4">
                  <a
                    href="mailto:deliqira@gmail.com"
                    className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    title="Email"
                  >
                    <Mail className="size-5" />
                  </a>
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    title="Instagram"
                  >
                    <Instagram className="size-5" />
                  </a>
                  <a
                    href={tiktokLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    title="TikTok"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    title="WhatsApp"
                  >
                    <MessageCircle className="size-5" />
                  </a>
                </div>
              </div>

              <div className="mt-8 border-t border-[var(--border)] pt-8">
                <a 
                  href={mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
                >
                  {language === "ar" ? "الاتجاهات في خرائط جوجل" : "Directions on Google Maps"}
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
