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

export type Language = "en" | "ar";

export type LocalizedText = Record<Language, string>;

export type ServiceAudience = {
  title: LocalizedText;
  body: LocalizedText;
  image: string;
  icon: LucideIcon;
};

export type Program = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  bestFor: LocalizedText;
  benefit: LocalizedText;
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
