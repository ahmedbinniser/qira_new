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
  type LucideIcon,
} from "lucide-react";
import {
  SchoolPot,
  HotelDallah,
  EventBowl,
  WorksiteJar,
  ShiftTagine,
  OfficeFinjan,
} from "@/components/PotteryIcons";
import * as React from "react";

export type Language = "en" | "ar";

export type LocalizedText = Record<Language, string>;

export type ServiceAudience = {
  title: LocalizedText;
  body: LocalizedText;
  image: string;
  icon: React.ComponentType<any>;
};

export type Program = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  bestFor: LocalizedText;
  benefit: LocalizedText;
  image: string;
};

export type MenuCategory = {
  id: string;
  image: string;
  title: LocalizedText;
  summary: LocalizedText;
  story: LocalizedText;
  bestFor: LocalizedText;
  highlights: LocalizedText[];
  examples: LocalizedText[];
  icon: LucideIcon;
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
    title: { en: "School Meals", ar: "وجبات المدارس" },
    body: {
      en: "Nourishing daily meals prepared with fresh ingredients, portioned carefully for children, and served with warmth.",
      ar: "وجبات يومية مغذية تُحضّر بمكونات طازجة وحصص مدروسة بعناية تناسب الصغار، وتُقدم بكل حب.",
    },
    image: "/images/serve-schools.webp",
    icon: SchoolPot,
  },
  {
    title: { en: "Hotel Hospitality", ar: "ضيافة الفنادق" },
    body: {
      en: "Consistent staff dining and back-of-house meal programs that match the hospitality standard of your brand.",
      ar: "وجبات موظفين وخدمات مساندة تُحضّر بنفس مستوى الضيافة والاهتمام الذي تقدمونه لضيوفكم.",
    },
    image: "/images/serve-hotels.webp",
    icon: HotelDallah,
  },
  {
    title: { en: "Gatherings & Events", ar: "اللقاءات والفعاليات" },
    body: {
      en: "Beautifully presented sharing trays, warm buffet spreads, and bespoke catering designed to elevate every gathering.",
      ar: "صواني مشاركة منسقة بعناية، وبوفيهات دافئة، وتموين مخصص يُعد ليزيد لقاءاتكم بهجة وحفاوة.",
    },
    image: "/images/serve-events.webp",
    icon: EventBowl,
  },
  {
    title: { en: "Worksite Meals", ar: "وجبات مواقع العمل" },
    body: {
      en: "Hearty, reliable meals delivered to field teams, keeping them sustained and valued throughout the day.",
      ar: "وجبات مشبعة وموثوقة تصل إلى طواقم العمل الميدانية، لتبقيهم في كامل نشاطهم وتشعرهم بالتقدير.",
    },
    image: "/images/serve-construction.webp",
    icon: WorksiteJar,
  },
  {
    title: { en: "Shift Meals", ar: "وجبات الورديات" },
    body: {
      en: "Comforting, warm meals timed perfectly for teams on rotating schedules, ensuring good food is always ready.",
      ar: "وجبات دافئة ومريحة تصل بدقة متناهية لتناسب جداول الورديات المختلفة، لتكون اللقمة الطيبة حاضرة دائماً.",
    },
    image: "/images/serve-security.webp",
    icon: ShiftTagine,
  },
  {
    title: { en: "Office Tables", ar: "موائد المكاتب" },
    body: {
      en: "Daily lunch tables and meeting platters that bring colleagues together over shared plates and genuine hospitality.",
      ar: "موائد غداء يومية وأطباق اجتماعات تجمع الزملاء حول لقمة تشاركية طيبة وضيافة أصيلة.",
    },
    image: "/images/serve-corporate.webp",
    icon: OfficeFinjan,
  },
];

export const programs: Program[] = [
  {
    id: "school",
    title: { en: "School Meal Programs", ar: "برامج الوجبات المدرسية" },
    description: {
      en: "Daily breakfast, lunch, and snack programs prepared with care for student routines and school logistics.",
      ar: "برامج إفطار وغداء ووجبات خفيفة يومية تُحضّر بعناية لتناسب روتين الطلاب ولوجستيات المدارس.",
    },
    bestFor: { en: "Private schools, academies, and nurseries", ar: "المدارس الخاصة، والأكاديميات، والحضانات" },
    benefit: { en: "Predictable portions, neat packaging, and reliable delivery windows", ar: "حصص مدروسة، وتغليف أنيق، ونوافذ توصيل موثوقة" },
    image: "/images/serve-schools.webp",
  },
  {
    id: "corporate",
    title: { en: "Corporate Catering", ar: "تموين الشركات" },
    description: {
      en: "Executive lunches, meeting platters, and training day spreads served with local warmth and care.",
      ar: "وجبات غداء تنفيذية، وأطباق لقاءات، وموائد أيام التدريب تُقدّم بحفاوة محلية واهتمام بالغ.",
    },
    bestFor: { en: "Corporate headquarters, business gatherings, and boardrooms", ar: "المقار الرئيسية للشركات، واللقاءات المهنية، وقاعات الاجتماعات" },
    benefit: { en: "Sophisticated styling, discrete service, and simplified scheduling", ar: "تقديم راقٍ، وخدمة لبقة، وجداول تشغيل مبسطة ومريحة" },
    image: "/images/serve-corporate.webp",
  },
  {
    id: "events",
    title: { en: "Event Buffets", ar: "بوفيهات المناسبات" },
    description: {
      en: "Artisanal buffet trays, curated presentation styles, and hospitable setups designed for gatherings.",
      ar: "صواني بوفيه ذات طابع فني، وأساليب تقديم منسقة، وتجهيزات مضيافة صُممت خصيصاً للقاءاتكم.",
    },
    bestFor: { en: "Cultural receptions, large gatherings, and conferences", ar: "الاستقبالات الثقافية، واللقاءات الكبرى، والمؤتمرات" },
    benefit: { en: "Beautiful presentation, coordinated setup, and scalable menus", ar: "تقديم وحضور بهي، وتجهيز متكامل منسق، وقوائم مرنة تتسع للجميع" },
    image: "/images/serve-events.webp",
  },
  {
    id: "staff",
    title: { en: "Staff Meal Plans", ar: "خطط وجبات الموظفين" },
    description: {
      en: "Dependable bulk meal schedules for field operations, rotating shifts, and active teams.",
      ar: "جداول وجبات جماعية يعتمد عليها للعمليات الميدانية، والورديات المتعاقبة، والفرق النشطة.",
    },
    bestFor: { en: "On-site operations, remote projects, and busy field teams", ar: "العمليات الميدانية، والمشاريع عن بُعد، وفرق العمل النشطة" },
    benefit: { en: "Consistent daily catering, robust containers, and punctual logistics", ar: "إمداد يومي متسق، وتغليف عملي متين، ولوجستيات توصيل دقيقة" },
    image: "/images/serve-construction.webp",
  },
  {
    id: "cultural",
    title: { en: "Custom Cultural Menus", ar: "قوائم ثقافية مخصصة" },
    description: {
      en: "Handcrafted Saudi and Hijazi themed dining menus customized for unique brand hospitality occasions.",
      ar: "قوائم طعام مستلهمة من المطبخ السعودي والحجازي تُصاغ خصيصاً لمناسبات ضيافة العلامات التجارية الفريدة.",
    },
    bestFor: { en: "Themed gatherings, brand milestones, and VIP hospitality", ar: "اللقاءات ذات الطابع الخاص، وفعاليات العلامات التجارية، وضيافة كبار الشخصيات" },
    benefit: { en: "Tailored Hijazi flavor profiles, artisanal layout, and custom detailing", ar: "نكهات حجازية أصيلة، وتنسيق يعكس الفن المحلي، وتفاصيل مخصصة لكل مناسبة" },
    image: "/images/menu-custom.webp",
  },
];

export const experiencePanels = [
  {
    image: "/images/experience-panel-01.webp",
    title: { en: "Prepared with calm", ar: "تحضير صباحي هادئ" },
  },
  {
    image: "/images/experience-panel-02.webp",
    title: { en: "Packed with care", ar: "تغليف تشاركي أنيق" },
  },
  {
    image: "/images/experience-panel-03.webp",
    title: { en: "Served like a guest", ar: "ضيافة تشعر بحفاوتها" },
  },
  {
    image: "/images/experience-panel-04.webp",
    title: { en: "Made for the day’s rhythm", ar: "ملائمة لإيقاع يومك" },
  },
];

export const processSteps = [
  {
    title: { en: "Discover needs", ar: "فهم الاحتياج" },
    body: {
      en: "We understand your audience, schedule, volume, dietary needs, and delivery rhythm.",
      ar: "نفهم طبيعة ضيوفكم، والجدول، والكميات، والاحتياجات الغذائية الخاصة، وإيقاع التوصيل.",
    },
  },
  {
    title: { en: "Shape the program", ar: "تصميم البرنامج" },
    body: {
      en: "Menus are arranged around service format, cultural fit, portions, and repeatable operations.",
      ar: "تُرتب القوائم والبرامج حول طريقة الخدمة والملاءمة الثقافية وتحديد الحصص وقابلية التشغيل المتكرر.",
    },
  },
  {
    title: { en: "Prepare and package", ar: "التحضير والتغليف" },
    body: {
      en: "Meals are prepared, portioned, labeled, and packed with care for the receiving environment.",
      ar: "تُحضّر الوجبات، وتُقسّم، وتوضع الملصقات، وتُغلّف بكل عناية بما يناسب بيئة الاستلام التشغيلية.",
    },
  },
  {
    title: { en: "Deliver and support", ar: "التوصيل والدعم" },
    body: {
      en: "Delivery routines, feedback, and adjustments keep the program reliable over time.",
      ar: "تضمن مسارات التوصيل اليومية وجمع الملاحظات والضبط المستمر استمرار موثوقية البرنامج التشغيلي بمرور الوقت.",
    },
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

export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast-boxes",
    image: "/images/menu-breakfast.webp",
    title: { en: "Breakfast boxes", ar: "صناديق الإفطار" },
    summary: {
      en: "Balanced morning boxes for schools, offices, training days, and early-shift teams.",
      ar: "صناديق صباحية متوازنة للمدارس والمكاتب وأيام التدريب وفرق الورديات المبكرة.",
    },
    story: {
      en: "Breakfast boxes are planned for easy handoff, quick distribution, and a warm first meal of the day. Portions, packaging, and combinations can be tuned for students, staff, or guests.",
      ar: "تُصمم صناديق الإفطار لتسهيل التسليم والتوزيع السريع وتقديم بداية يوم دافئة. يمكن ضبط الحصص والتغليف والمكونات حسب الطلاب أو الموظفين أو الضيوف.",
    },
    bestFor: {
      en: "Morning school routines, early meetings, training rooms, and site teams starting shifts.",
      ar: "روتين المدارس الصباحي والاجتماعات المبكرة وقاعات التدريب وفرق المواقع في بداية الوردية.",
    },
    highlights: [
      { en: "Compact packaging that travels cleanly", ar: "تغليف عملي يحافظ على ترتيب الوجبة" },
      { en: "Age-aware or shift-aware portions", ar: "حصص مناسبة للأعمار أو طبيعة الوردية" },
      { en: "Pairs well with fruit, dairy, dates, and juice", ar: "يتكامل مع الفاكهة والألبان والتمر والعصائر" },
    ],
    examples: [
      { en: "Mini manakish with fruit and juice", ar: "مناقيش صغيرة مع فاكهة وعصير" },
      { en: "Labneh wrap with dates", ar: "راب لبنة مع تمر" },
      { en: "Croissant box with yogurt", ar: "صندوق كرواسون مع زبادي" },
    ],
    icon: Coffee,
  },
  {
    id: "lunch-meals",
    image: "/images/menu-lunch.webp",
    title: { en: "Lunch meals", ar: "وجبات الغداء" },
    summary: {
      en: "Dependable lunch programs with clear portions, practical service flow, and flexible menu rotation.",
      ar: "برامج غداء موثوقة بحصص واضحة وتدفق خدمة عملي وتدوير مرن للقوائم.",
    },
    story: {
      en: "Lunch meals form the backbone of many daily programs. Qira can shape the menu around repeat delivery windows, dietary needs, and receiving conditions so lunch stays calm and consistent.",
      ar: "تشكل وجبات الغداء أساس كثير من البرامج اليومية. يمكن لقيرة تشكيل القائمة حول مواعيد تسليم متكررة واحتياجات غذائية وبيئة استلام واضحة حتى يبقى الغداء منظمًا وثابتًا.",
    },
    bestFor: {
      en: "Schools, corporate staff lunches, long workdays, and recurring operational meal plans.",
      ar: "المدارس وغداء الموظفين وأيام العمل الطويلة وبرامج الوجبات التشغيلية المتكررة.",
    },
    highlights: [
      { en: "Hot or chilled formats depending on setup", ar: "خيارات ساخنة أو مبردة حسب التجهيز" },
      { en: "Menus can rotate weekly or monthly", ar: "إمكانية تدوير القائمة أسبوعيًا أو شهريًا" },
      { en: "Built around repeatable delivery routines", ar: "مصممة حول روتين توصيل قابل للتكرار" },
    ],
    examples: [
      { en: "Rice bowls with grilled protein", ar: "أطباق أرز مع بروتين مشوي" },
      { en: "Pasta or baked mains with salad", ar: "باستا أو أطباق مخبوزة مع سلطة" },
      { en: "Student-friendly lunch trays", ar: "صواني غداء مناسبة للطلاب" },
    ],
    icon: Utensils,
  },
  {
    id: "healthy-snacks",
    image: "/images/menu-snacks.webp",
    title: { en: "Healthy snacks", ar: "وجبات خفيفة صحية" },
    summary: {
      en: "Snack options for breaks, school days, meetings, and teams that need light fuel.",
      ar: "خيارات خفيفة للفسح وأيام المدرسة والاجتماعات والفرق التي تحتاج إلى طاقة بسيطة.",
    },
    story: {
      en: "Healthy snacks keep the day moving without heavy service requirements. They can be packed individually, grouped for break stations, or added to larger breakfast and lunch programs.",
      ar: "تساعد الوجبات الخفيفة الصحية على استمرار اليوم دون متطلبات خدمة معقدة. يمكن تغليفها فرديًا أو ترتيبها لمحطات الاستراحة أو إضافتها إلى برامج الإفطار والغداء.",
    },
    bestFor: {
      en: "School breaks, meeting intervals, wellness days, and quick team refreshments.",
      ar: "فسح المدارس وفواصل الاجتماعات وأيام العافية والضيافة السريعة للفرق.",
    },
    highlights: [
      { en: "Simple grab-and-go distribution", ar: "توزيع سهل وسريع" },
      { en: "Can support lighter daily routines", ar: "مناسبة للروتين اليومي الخفيف" },
      { en: "Works as an add-on to larger programs", ar: "تعمل كإضافة للبرامج الأكبر" },
    ],
    examples: [
      { en: "Fruit cups and granola bites", ar: "أكواب فواكه ولقيمات جرانولا" },
      { en: "Mini sandwiches or wraps", ar: "ساندويتشات صغيرة أو راب" },
      { en: "Yogurt, dates, and nut mixes", ar: "زبادي وتمر وخلطات مكسرات" },
    ],
    icon: Apple,
  },
  {
    id: "buffet-trays",
    image: "/images/menu-buffet.webp",
    title: { en: "Buffet trays", ar: "صواني البوفيه" },
    summary: {
      en: "Generous trays for events, conferences, hosted meetings, and shared workplace meals.",
      ar: "صواني وفيرة للمناسبات والمؤتمرات والاجتماعات المستضافة ووجبات العمل المشتركة.",
    },
    story: {
      en: "Buffet trays bring hospitality to a room while keeping service organized. The format can support reception-style gatherings, seated meetings, or larger conference breaks.",
      ar: "تضيف صواني البوفيه روح الضيافة إلى المكان مع الحفاظ على تنظيم الخدمة. يناسب هذا النمط الاستقبالات والاجتماعات والجلسات الكبيرة في المؤتمرات.",
    },
    bestFor: {
      en: "Receptions, conference breaks, ceremonies, boardrooms, and hosted office meals.",
      ar: "الاستقبالات واستراحات المؤتمرات والحفلات وقاعات الاجتماعات ووجبات المكاتب المستضافة.",
    },
    highlights: [
      { en: "Designed for shared service and visual presence", ar: "مصممة للخدمة المشتركة والحضور البصري" },
      { en: "Scales from small rooms to larger events", ar: "تتوسع من الغرف الصغيرة إلى الفعاليات الأكبر" },
      { en: "Can lean traditional, modern, or mixed", ar: "يمكن أن تكون تقليدية أو عصرية أو مزيجًا بينهما" },
    ],
    examples: [
      { en: "Savory pastry and sandwich trays", ar: "صواني معجنات مالحة وساندويتشات" },
      { en: "Warm buffet mains with sides", ar: "أطباق بوفيه ساخنة مع أطباق جانبية" },
      { en: "Dessert and coffee service trays", ar: "صواني حلويات وقهوة" },
    ],
    icon: ChefHat,
  },
  {
    id: "beverages",
    image: "/images/menu-beverages.webp",
    title: { en: "Beverages", ar: "المشروبات" },
    summary: {
      en: "Drink service for school programs, office days, meetings, and hospitality moments.",
      ar: "خدمة مشروبات للمدارس وأيام العمل والاجتماعات ولحظات الضيافة.",
    },
    story: {
      en: "Beverages can be delivered as simple add-ons or planned as a dedicated refreshment station. Options can match the pace of the event, the age group, and the level of hospitality needed.",
      ar: "يمكن تقديم المشروبات كإضافة بسيطة أو كمحطة ضيافة مستقلة. تُختار الخيارات حسب إيقاع المناسبة والفئة العمرية ومستوى الضيافة المطلوب.",
    },
    bestFor: {
      en: "Meeting rooms, event breaks, school add-ons, and warm welcome moments.",
      ar: "قاعات الاجتماعات واستراحات الفعاليات وإضافات المدارس ولحظات الترحيب الدافئة.",
    },
    highlights: [
      { en: "Simple pairing with breakfast, lunch, or buffets", ar: "تتكامل بسهولة مع الإفطار أو الغداء أو البوفيه" },
      { en: "Hot and chilled options can be mixed", ar: "إمكانية الجمع بين الخيارات الساخنة والباردة" },
      { en: "Packaging can match service setting", ar: "تغليف يناسب بيئة الخدمة" },
    ],
    examples: [
      { en: "Fresh juices and bottled water", ar: "عصائر طازجة ومياه معبأة" },
      { en: "Arabic coffee and tea service", ar: "خدمة قهوة عربية وشاي" },
      { en: "Milk, yogurt drinks, or chilled refreshments", ar: "حليب ومشروبات زبادي أو مرطبات باردة" },
    ],
    icon: Sparkles,
  },
  {
    id: "custom-packages",
    image: "/images/menu-custom.webp",
    title: { en: "Custom packages", ar: "باقات مخصصة" },
    summary: {
      en: "Tailored packages that combine meals, snacks, drinks, packaging, and service rhythm.",
      ar: "باقات مصممة تجمع الوجبات والوجبات الخفيفة والمشروبات والتغليف وإيقاع الخدمة.",
    },
    story: {
      en: "Custom packages are useful when the brief is specific: a school term, a multi-day conference, a VIP visit, or a team that needs recurring meals across locations.",
      ar: "تفيد الباقات المخصصة عندما تكون الحاجة محددة: فصل دراسي أو مؤتمر متعدد الأيام أو زيارة خاصة أو فريق يحتاج إلى وجبات متكررة عبر مواقع مختلفة.",
    },
    bestFor: {
      en: "Complex schedules, mixed audiences, recurring programs, and special hospitality briefs.",
      ar: "الجداول المعقدة والجماهير المتنوعة والبرامج المتكررة وطلبات الضيافة الخاصة.",
    },
    highlights: [
      { en: "Combines multiple category formats", ar: "تجمع أكثر من نوع من الفئات" },
      { en: "Can align with brand, age group, or event tone", ar: "تنسجم مع العلامة أو الفئة العمرية أو طابع المناسبة" },
      { en: "Useful for pilots before larger rollout", ar: "مناسبة للتجارب قبل التوسع الأكبر" },
    ],
    examples: [
      { en: "Weekly school meal bundle", ar: "باقة أسبوعية للوجبات المدرسية" },
      { en: "Conference breakfast, snack, and coffee set", ar: "باقة مؤتمر للإفطار والوجبة الخفيفة والقهوة" },
      { en: "Shift-team lunch and beverage plan", ar: "خطة غداء ومشروبات لفرق الورديات" },
    ],
    icon: BriefcaseBusiness,
  },
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
