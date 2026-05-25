import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { programs, type Language } from "@/data/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

type ProgramTabsProps = {
  language: Language;
};

export function ProgramTabs({ language }: ProgramTabsProps) {
  return (
    <Tabs defaultValue={programs[0].id} className="reveal">
      <div className="program-tabs-scroll">
        <TabsList>
          {programs.map((program) => (
            <TabsTrigger key={program.id} value={program.id}>
              {program.title[language]}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {programs.map((program) => (
        <TabsContent key={program.id} value={program.id}>
          <LiquidGlassCard className="grid gap-8 border-[var(--border)] bg-[rgba(255,255,255,0.72)] p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
            <div>
              <Badge variant="warm" className="mb-5">
                {language === "ar" ? "برنامج قابل للتخصيص" : "Configurable program"}
              </Badge>
              <h3 className="font-display text-4xl leading-tight text-[var(--text-primary)] md:text-5xl">
                {program.title[language]}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                {program.description[language]}
              </p>
              <Button asChild variant="secondary" className="mt-7">
                <a href="#contact">
                  {language === "ar" ? "ناقش البرنامج" : "Discuss this program"}
                  <ArrowUpRight className="rtl:-rotate-90" />
                </a>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                  <CheckCircle2 className="size-4" />
                  {language === "ar" ? "الأفضل لـ" : "Best for"}
                </div>
                <p className="leading-7 text-[var(--text-secondary)]">{program.bestFor[language]}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                  <CheckCircle2 className="size-4" />
                  {language === "ar" ? "الفائدة التشغيلية" : "Operational benefit"}
                </div>
                <p className="leading-7 text-[var(--text-secondary)]">{program.benefit[language]}</p>
              </div>
            </div>
          </LiquidGlassCard>
        </TabsContent>
      ))}
    </Tabs>
  );
}
