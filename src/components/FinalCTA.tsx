import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, ClipboardList } from "lucide-react";
import { ctaCopy, type Language } from "@/data/content";
import { SandstormBackground } from "@/components/SandstormBackground";
import { LiquidButton } from "@/components/LiquidButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type FinalCTAProps = {
  language: Language;
  reducedMotion: boolean;
};

export function FinalCTA({ language, reducedMotion }: FinalCTAProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const required = ["name", "email", "organization", "message"];
    const missing = required.some((field) => !String(formData.get(field) ?? "").trim());

    if (missing) {
      setError(language === "ar" ? "يرجى إكمال الحقول الأساسية." : "Please complete the essential fields.");
      return;
    }

    setError("");
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--secondary-soft)] px-5 py-24 md:px-8">
      <SandstormBackground
        reducedMotion={reducedMotion}
        className="mx-auto max-w-7xl rounded-lg border border-[var(--border)]"
      >
        <div className="grid gap-10 px-5 py-14 md:grid-cols-[0.95fr_1.05fr] md:px-10 lg:px-14">
          <div className="cta-copy-panel reveal flex flex-col justify-center">
            <div className="mb-6 inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-[rgba(255,249,240,0.12)] text-[var(--accent)]">
              <ClipboardList className="size-6" />
            </div>
            <h2 className="font-display text-5xl leading-tight text-qira-cream md:text-7xl">
              <span className="editorial-mask block overflow-hidden">
                <span className="editorial-line block">{ctaCopy.title[language]}</span>
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-qira-cream/72">
              {ctaCopy.body[language]}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LiquidButton href="#proposal-form" reducedMotion={reducedMotion}>
                {ctaCopy.button[language]}
              </LiquidButton>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary">
                    {language === "ar" ? "ماذا يحدث بعد الطلب؟" : "What happens next?"}
                    <ArrowUpRight className="rtl:-rotate-90" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      {language === "ar" ? "خطوات المتابعة" : "Proposal follow-up"}
                    </DialogTitle>
                    <DialogDescription>
                      {language === "ar"
                        ? "هذا النموذج ثابت حاليا. عند ربطه لاحقا، يمكن تحويل البيانات إلى فريق المبيعات أو نظام إدارة العملاء."
                        : "This form is static for now. When wired later, submissions can route to sales or a CRM."}
                    </DialogDescription>
                  </DialogHeader>
                  <ul className="space-y-3 text-sm leading-6">
                    {[
                      language === "ar" ? "مراجعة الحجم والجمهور والجدول." : "Review audience, volume, and schedule.",
                      language === "ar" ? "اقتراح برنامج وقائمة مبدئية." : "Suggest a program and starter menu.",
                      language === "ar" ? "تحديد نوافذ التوصيل والدعم." : "Confirm delivery windows and support rhythm.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 size-4 text-[var(--primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <form
            id="proposal-form"
            onSubmit={onSubmit}
            className="cta-form-panel glass-panel reveal relative isolate overflow-hidden rounded-lg p-5 backdrop-blur-2xl md:p-7"
          >
            <span className="liquid-panel liquid-lens" aria-hidden="true" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[var(--text-primary)]">
                {language === "ar" ? "الاسم" : "Name"}
                <Input name="name" autoComplete="name" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--text-primary)]">
                {language === "ar" ? "البريد الإلكتروني" : "Email"}
                <Input name="email" type="email" autoComplete="email" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--text-primary)] sm:col-span-2">
                {language === "ar" ? "الجهة أو المدرسة" : "Organization or school"}
                <Input name="organization" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--text-primary)] sm:col-span-2">
                {language === "ar" ? "ما الذي تحتاجه؟" : "What do you need?"}
                <Textarea
                  name="message"
                  placeholder={
                    language === "ar"
                      ? "عدد الوجبات، نوع الجمهور، المدينة، وتكرار الخدمة..."
                      : "Meal count, audience type, city, service frequency..."
                  }
                  required
                />
              </label>
            </div>
            {error ? <p className="mt-4 text-sm text-[var(--rose)]">{error}</p> : null}
            {submitted ? (
              <p className="mt-4 rounded-md border border-[rgba(69,107,52,0.24)] bg-[rgba(141,173,115,0.18)] p-3 text-sm text-[var(--text-primary)]">
                {language === "ar"
                  ? "تم تسجيل الطلب محليا. اربط النموذج لاحقا بنظام الإرسال المناسب."
                  : "Request captured locally. Wire this form to your preferred submission flow next."}
              </p>
            ) : null}
            <div className="mt-6">
              <LiquidButton type="submit" reducedMotion={reducedMotion}>
                {language === "ar" ? "إرسال الطلب" : "Send request"}
              </LiquidButton>
            </div>
          </form>
        </div>
      </SandstormBackground>
    </section>
  );
}
