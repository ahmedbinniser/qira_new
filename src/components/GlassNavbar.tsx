import { Menu } from "lucide-react";
import { navItems, type Language } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LiquidButton } from "@/components/LiquidButton";

type GlassNavbarProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  reducedMotion: boolean;
};

export function GlassNavbar({
  language,
  onLanguageChange,
  reducedMotion,
}: GlassNavbarProps) {
  const nextLanguage = language === "en" ? "ar" : "en";

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-3 md:px-4">
      <nav className="glass-nav relative mx-auto flex max-w-7xl items-center justify-between gap-2 overflow-hidden rounded-full border px-3 py-3 text-[var(--text-primary)] md:gap-4 md:px-5">
        <span className="liquid-nav liquid-lens" aria-hidden="true" />
        <div className="relative z-10 flex min-w-0 flex-1 items-center justify-between gap-2 md:gap-4">
        <a href="#" className="flex min-w-0 items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:gap-3">
          <span className="brand-logo-mark flex h-11 w-24 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 md:w-28">
            {/* Extracted from the 2025 Qira brand guide PDF; replace in public/logos when the master logo changes. */}
            <img src="/logos/qira-wordmark-ink.png" alt="Qira" className="brand-wordmark" />
          </span>
          <span className="brand-copy flex min-w-0 items-center leading-tight">
            <span className="brand-subtitle block text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
              Catering
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--primary-soft)] hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label[language]}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="border border-[var(--border)] bg-[var(--surface)]"
            onClick={() => onLanguageChange(nextLanguage)}
            aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            {language === "en" ? "العربية" : "English"}
          </Button>
          <LiquidButton href="#contact" reducedMotion={reducedMotion} className="h-10 px-5 text-sm">
            {language === "ar" ? "اطلب عرض توريد" : "Request proposal"}
          </LiquidButton>
        </div>

        <div className="mobile-actions ms-auto flex shrink-0 items-center gap-1 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="mobile-menu-button size-9"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side={language === "ar" ? "left" : "right"}>
              <SheetHeader>
                <SheetTitle>Qira</SheetTitle>
                <SheetDescription>
                  {language === "ar"
                    ? "تموين مدرسي ومؤسسي بروح الضيافة العربية."
                    : "School meals and B2B catering with Arabic hospitality."}
                </SheetDescription>
              </SheetHeader>
              <Separator className="my-6 bg-[var(--border)]" />
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-3 text-base font-medium text-[var(--text-primary)] hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
                  >
                    {item.label[language]}
                  </a>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="w-full">
                  <a href="#contact">
                    {language === "ar" ? "اطلب عرض توريد" : "Request a catering proposal"}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <Button
            variant="ghost"
            size="sm"
            className="mobile-lang-button h-9 border border-[var(--border)] bg-[var(--surface)] px-2"
            onClick={() => onLanguageChange(nextLanguage)}
            aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            {language === "en" ? "AR" : "EN"}
          </Button>
        </div>
        </div>
      </nav>
    </header>
  );
}
