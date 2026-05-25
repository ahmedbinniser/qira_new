import {
  Apple,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChefHat,
  ClipboardCheck,
  Coffee,
  Construction,
  GraduationCap,
  Handshake,
  Hotel,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Utensils,
} from "lucide-react";

export type Language = "en" | "ar";

export type LocalizedText = Record<Language, string>;

export type ServiceAudience = {
  title: LocalizedText;
  body: LocalizedText;
  image: string;
  icon: typeof GraduationCap;
};

export type Program = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  bestFor: LocalizedText;
  benefit: LocalizedText;
};

export const navItems = [
  { href: "#serve", label: { en: "Who We Serve", ar: "من نخدم" } },
  { href: "#programs", label: { en: "Programs", ar: "البرامج" } },
  { href: "#process", label: { en: "Operations", ar: "التشغيل" } },
  { href: "#menu", label: { en: "Menu", ar: "القائمة" } },
  { href: "#contact", label: { en: "Contact", ar: "تواصل" } },
];

export const heroCopy = {
  badge: {
    en: "School Meals • Corporate Catering • Events",
    ar: "وجبات المدارس • تموين الشركات • المناسبات",
  },
  title: {
    en: "Meals Rooted in Heritage, Built for Modern Operations",
    ar: "وجبات بروح الضيافة العربية مصممة للمدارس والشركات",
  },
  subtitle: {
    en: "Qira delivers reliable school meals, corporate catering, and event food programs inspired by Arabic hospitality and designed for daily operations.",
    ar: "تقدّم قِرى برامج وجبات موثوقة للمدارس والشركات والمناسبات، مستلهمة من كرم الضيافة العربية ومصممة للتشغيل اليومي.",
  },
  primaryCta: { en: "Request a Catering Proposal", ar: "اطلب عرض توريد" },
  secondaryCta: { en: "Explore Programs", ar: "استكشف البرامج" },
};

export const trustBullets = [
  { icon: PackageCheck, label: { en: "School-ready packaging", ar: "تغليف مناسب للمدارس" } },
  { icon: Truck, label: { en: "Bulk delivery", ar: "توريد للكميات الكبيرة" } },
  { icon: ClipboardCheck, label: { en: "Custom menus", ar: "قوائم مرنة بطابع محلي" } },
];

export const stats = [
  { value: 6, label: { en: "Service sectors", ar: "قطاعات نخدمها" } },
  { value: 5, label: { en: "Program formats", ar: "أنواع البرامج" } },
  { value: 4, label: { en: "Process checkpoints", ar: "مراحل التشغيل" } },
  { value: 6, label: { en: "Meal categories", ar: "فئات الوجبات" } },
];

export const audiences: ServiceAudience[] = [
  {
    title: { en: "Schools", ar: "المدارس" },
    body: {
      en: "Daily meal programs with student-friendly portions, practical packaging, and menu flexibility for different age groups.",
      ar: "برامج وجبات يومية بحصص مناسبة للطلاب وتغليف عملي ومرونة في القوائم لمختلف الأعمار.",
    },
    image: "/images/serve-schools.webp",
    icon: GraduationCap,
  },
  {
    title: { en: "Hotels", ar: "الفنادق" },
    body: {
      en: "Back-of-house support, staff meals, and hospitality-aligned catering that respects guest expectations.",
      ar: "دعم تشغيلي ووجبات للموظفين وتموين ينسجم مع معايير الضيافة وتوقعات الضيوف.",
    },
    image: "/images/serve-hotels.webp",
    icon: Hotel,
  },
  {
    title: { en: "Events & Conferences", ar: "المناسبات والمؤتمرات" },
    body: {
      en: "Buffet trays, packaged service, and culturally rooted menus built for punctual event flow.",
      ar: "بوفيهات ووجبات مغلفة وقوائم بطابع ثقافي مصممة لسير المناسبات بدقة.",
    },
    image: "/images/serve-events.webp",
    icon: CalendarDays,
  },
  {
    title: { en: "Construction Companies", ar: "شركات المقاولات" },
    body: {
      en: "Reliable staff meal plans for field teams that need consistency, speed, and clear delivery routines.",
      ar: "خطط وجبات موثوقة لفرق العمل الميدانية التي تحتاج للاتساق والسرعة وروتين توصيل واضح.",
    },
    image: "/images/serve-construction.webp",
    icon: Construction,
  },
  {
    title: { en: "Security Companies", ar: "شركات الأمن" },
    body: {
      en: "Shift-aware meal support for distributed teams, with simple packaging and dependable coordination.",
      ar: "دعم وجبات يناسب الورديات والفرق الموزعة مع تغليف بسيط وتنسيق يعتمد عليه.",
    },
    image: "/images/serve-security.webp",
    icon: ShieldCheck,
  },
  {
    title: { en: "Corporate Offices", ar: "مكاتب الشركات" },
    body: {
      en: "Workplace catering that keeps teams fed without turning lunch into an operational burden.",
      ar: "تموين للمكاتب يحافظ على راحة الفرق دون تحويل الغداء إلى عبء تشغيلي.",
    },
    image: "/images/serve-corporate.webp",
    icon: Building2,
  },
];

export const programs: Program[] = [
  {
    id: "school",
    title: { en: "School Meal Programs", ar: "برامج الوجبات المدرسية" },
    description: {
      en: "Daily breakfast, lunch, and snack programs built around student routines and school logistics.",
      ar: "برامج إفطار وغداء ووجبات خفيفة يومية مبنية حول روتين الطلاب ولوجستيات المدارس.",
    },
    bestFor: { en: "Private schools, academies, and nurseries", ar: "المدارس الخاصة والأكاديميات والحضانات" },
    benefit: { en: "Predictable portions, packaging, and delivery windows", ar: "حصص وتغليف ونوافذ توصيل قابلة للتوقع" },
  },
  {
    id: "corporate",
    title: { en: "Corporate Catering", ar: "تموين الشركات" },
    description: {
      en: "Meeting platters, staff lunches, and executive service with a warm Saudi hospitality sensibility.",
      ar: "أطباق اجتماعات وغداء موظفين وخدمة تنفيذية بروح ضيافة سعودية دافئة.",
    },
    bestFor: { en: "Offices, boardrooms, and training days", ar: "المكاتب وقاعات الاجتماعات وأيام التدريب" },
    benefit: { en: "Professional presentation with low admin overhead", ar: "تقديم احترافي مع عبء إداري منخفض" },
  },
  {
    id: "events",
    title: { en: "Event Buffets", ar: "بوفيهات المناسبات" },
    description: {
      en: "Buffet trays and service formats designed for conferences, receptions, and cultural gatherings.",
      ar: "صواني بوفيه وأنماط خدمة مصممة للمؤتمرات والاستقبالات واللقاءات الثقافية.",
    },
    bestFor: { en: "Conferences, ceremonies, and hospitality events", ar: "المؤتمرات والحفلات وفعاليات الضيافة" },
    benefit: { en: "Coordinated service flow and flexible menu scale", ar: "تدفق خدمة منسق ومرونة في حجم القائمة" },
  },
  {
    id: "staff",
    title: { en: "Staff Meal Plans", ar: "خطط وجبات الموظفين" },
    description: {
      en: "Bulk meal programs for teams working on shifts, sites, and operational schedules.",
      ar: "برامج وجبات بالكميات للفرق العاملة على الورديات والمواقع والجداول التشغيلية.",
    },
    bestFor: { en: "Construction, security, hospitality, and operations teams", ar: "فرق المقاولات والأمن والضيافة والتشغيل" },
    benefit: { en: "Consistent supply planning and clear delivery support", ar: "تخطيط توريد ثابت ودعم توصيل واضح" },
  },
  {
    id: "cultural",
    title: { en: "Custom Cultural Menus", ar: "قوائم ثقافية مخصصة" },
    description: {
      en: "Arabic-inspired menus adapted for age group, event type, dietary preferences, and service format.",
      ar: "قوائم مستلهمة من المطبخ العربي ومتكيفة مع العمر ونوع المناسبة والتفضيلات الغذائية ونمط الخدمة.",
    },
    bestFor: { en: "Schools, VIP gatherings, and brand events", ar: "المدارس واللقاءات الخاصة وفعاليات العلامات" },
    benefit: { en: "Cultural fit without losing operational clarity", ar: "ملاءمة ثقافية دون فقدان الوضوح التشغيلي" },
  },
];

export const experiencePanels = [
  {
    image: "/images/experience-panel-01.webp",
    title: { en: "Morning prep, calm rhythm", ar: "تحضير صباحي بإيقاع هادئ" },
  },
  {
    image: "/images/experience-panel-02.webp",
    title: { en: "Service that feels hosted", ar: "خدمة تشعر معها بالضيافة" },
  },
  {
    image: "/images/experience-panel-03.webp",
    title: { en: "Menus built for movement", ar: "قوائم مصممة للحركة" },
  },
  {
    image: "/images/experience-panel-04.webp",
    title: { en: "Warm details, practical finish", ar: "تفاصيل دافئة وإنجاز عملي" },
  },
];

export const processSteps = [
  {
    title: { en: "Discover needs", ar: "فهم الاحتياج" },
    body: { en: "We map audience, schedule, volume, dietary needs, and delivery constraints.", ar: "نحدد الجمهور والجدول والحجم والاحتياجات الغذائية وقيود التوصيل." },
  },
  {
    title: { en: "Build menu/program", ar: "بناء القائمة والبرنامج" },
    body: { en: "Menus are shaped around service format, cultural fit, and repeatable operations.", ar: "تصمم القوائم حول نمط الخدمة والملاءمة الثقافية وقابلية التشغيل المتكرر." },
  },
  {
    title: { en: "Prepare and package", ar: "التحضير والتغليف" },
    body: { en: "Meals are prepared, portioned, labeled, and packaged for the receiving environment.", ar: "تحضر الوجبات وتقسم وتوسم وتغلف بما يناسب بيئة الاستلام." },
  },
  {
    title: { en: "Deliver and support", ar: "التوصيل والدعم" },
    body: { en: "Delivery routines, feedback, and adjustments keep the program reliable over time.", ar: "تحافظ إجراءات التوصيل والملاحظات والتعديلات على موثوقية البرنامج بمرور الوقت." },
  },
];

export const qualityPoints = [
  { icon: Apple, title: { en: "Ingredient quality", ar: "جودة المكونات" }, body: { en: "Practical menus start with dependable ingredients and steady preparation standards.", ar: "تبدأ القوائم العملية بمكونات موثوقة ومعايير تحضير ثابتة." } },
  { icon: PackageCheck, title: { en: "Packaging", ar: "التغليف" }, body: { en: "Packaging is chosen for schools, offices, events, and field teams.", ar: "يختار التغليف بما يناسب المدارس والمكاتب والمناسبات والفرق الميدانية." } },
  { icon: Truck, title: { en: "Delivery reliability", ar: "موثوقية التوصيل" }, body: { en: "Programs are planned around repeatable receiving windows and site coordination.", ar: "تخطط البرامج حول نوافذ استلام متكررة وتنسيق موقعي واضح." } },
  { icon: ChefHat, title: { en: "Menu flexibility", ar: "مرونة القوائم" }, body: { en: "Menus adapt by group, schedule, dietary need, and cultural preference.", ar: "تتكيف القوائم حسب المجموعة والجدول والاحتياج الغذائي والتفضيل الثقافي." } },
  { icon: Handshake, title: { en: "Cultural fit", ar: "ملاءمة ثقافية" }, body: { en: "Arabic hospitality appears in flavor, presentation, and service manners.", ar: "تظهر الضيافة العربية في النكهة والتقديم وأسلوب الخدمة." } },
  { icon: Users, title: { en: "School-friendly portions", ar: "حصص مناسبة للمدارس" }, body: { en: "Portions can be shaped for student age groups and daily routines.", ar: "يمكن ضبط الحصص وفق أعمار الطلاب وروتينهم اليومي." } },
];

export const menuCategories = [
  { image: "/images/menu-breakfast.webp", title: { en: "Breakfast boxes", ar: "صناديق الإفطار" }, icon: Coffee },
  { image: "/images/menu-lunch.webp", title: { en: "Lunch meals", ar: "وجبات الغداء" }, icon: Utensils },
  { image: "/images/menu-snacks.webp", title: { en: "Healthy snacks", ar: "وجبات خفيفة صحية" }, icon: Apple },
  { image: "/images/menu-buffet.webp", title: { en: "Buffet trays", ar: "صواني البوفيه" }, icon: ChefHat },
  { image: "/images/menu-beverages.webp", title: { en: "Beverages", ar: "المشروبات" }, icon: Sparkles },
  { image: "/images/menu-custom.webp", title: { en: "Custom packages", ar: "باقات مخصصة" }, icon: BriefcaseBusiness },
];

// Replace these placeholders with approved real client quotes before production.
export const testimonials = [
  {
    quote: {
      en: "Placeholder buyer note: replace with an approved testimonial from a school or corporate client.",
      ar: "ملاحظة مؤقتة: يستبدل هذا النص بشهادة معتمدة من مدرسة أو عميل مؤسسي.",
    },
    name: { en: "Replaceable client quote", ar: "شهادة عميل قابلة للاستبدال" },
  },
  {
    quote: {
      en: "Placeholder operations note: replace with a real comment about delivery reliability or menu support.",
      ar: "ملاحظة تشغيلية مؤقتة: تستبدل بتعليق حقيقي حول موثوقية التوصيل أو دعم القوائم.",
    },
    name: { en: "Replaceable operations quote", ar: "شهادة تشغيل قابلة للاستبدال" },
  },
];

export const ctaCopy = {
  title: {
    en: "Ready to Build a Reliable Meal Program?",
    ar: "هل أنت مستعد لبناء برنامج وجبات موثوق؟",
  },
  body: {
    en: "Tell us about your audience, volume, and service setting. Qira will help shape a practical catering proposal around your operations.",
    ar: "أخبرنا عن جمهورك وحجم الطلب وبيئة الخدمة. ستساعدك قيرة في تشكيل عرض تموين عملي يناسب تشغيلك.",
  },
  button: { en: "Start Your B2B Catering Request", ar: "ابدأ طلب التموين المؤسسي" },
};
