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
  RosetteIcon,
} from "@/components/PotteryIcons";
import * as React from "react";

export type Language = "en" | "ar";

export type LocalizedText = Record<Language, string>;

export type AudienceContentCollection = {
  badge: LocalizedText;
  title: LocalizedText;
  intro: LocalizedText;
  itemLabel: LocalizedText;
  items: Array<{
    title: LocalizedText;
    description: LocalizedText;
    details?: LocalizedText[];
  }>;
};

export type AudienceMenuSection = {
  title: LocalizedText;
  items: LocalizedText[];
};

export type AudienceFeaturedMenu = {
  badge: LocalizedText;
  title: LocalizedText;
  intro: LocalizedText;
  note?: LocalizedText;
  sections: AudienceMenuSection[];
};

export type DownloadItem = {
  title: LocalizedText;
  url: string;
  filename: string;
  size?: string;
  buttonText?: LocalizedText;
};

export type ServiceAudience = {
  id: string;
  title: LocalizedText;
  body: LocalizedText;
  image: string;
  icon: React.ComponentType<any>;
  summary: LocalizedText;
  story: LocalizedText;
  highlights: LocalizedText[];
  examples: LocalizedText[];
  contentCollection?: AudienceContentCollection;
  featuredMenu?: AudienceFeaturedMenu;
  downloads?: DownloadItem[];
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
  subtitle: LocalizedText;
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
    en: "School Meals • Hotel Hospitality • Events",
    ar: "وجبات المدارس • ضيافة الفنادق • المناسبات",
  },
  title: {
    en: "Meals Rooted in Heritage, Built for Modern Operations",
    ar: "وجبات بروح الضيافة العربية مصممة للمدارس والفنادق والمناسبات",
  },
  subtitle: {
    en: "Qira delivers reliable school meals, hotel hospitality, and event food programs inspired by Arabic hospitality and designed for daily operations.",
    ar: "تقدّم قرى برامج وجبات موثوقة للمدارس والفنادق والمناسبات، مستلهمة من كرم الضيافة العربية ومصممة للتشغيل اليومي.",
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
  { value: 6, label: { en: "Meal categories", ar: "فئات الوجبات" }, motif: "rosette" },
  { value: 4, label: { en: "Operating stages", ar: "مراحل التشغيل" }, motif: "jar" },
  { value: 2, label: { en: "Program types", ar: "أنواع البرامج" }, motif: "rosette" },
  { value: 3, label: { en: "Sectors served", ar: "قطاعات نخدمها" }, motif: "jar" },
];

export const audiences: ServiceAudience[] = [
  {
    id: "schools",
    title: { en: "School Meals", ar: "وجبات المدارس" },
    body: {
      en: "Nourishing daily meals prepared with fresh ingredients, portioned carefully for children, and served with warmth.",
      ar: "وجبات يومية مغذية تُحضّر بمكونات طازجة وحصص مدروسة بعناية تناسب الصغار، وتُقدم بكل حب.",
    },
    image: "/images/serve-schools-1.png",
    icon: SchoolPot,
    summary: {
      en: "Dependable, nutritious meal programs designed specifically for school environments, ensuring children have the energy they need to learn and grow.",
      ar: "برامج وجبات مغذية وموثوقة مصممة خصيصًا للبيئات المدرسية، لضمان حصول الأطفال على الطاقة التي يحتاجونها للتعلم والنمو."
    },
    story: {
      en: "Feeding students requires a careful balance of nutrition, taste, and logistics. Our School Meals program is built around the daily rhythms of educational institutions, delivering fresh, child-friendly meals in practical, mess-free packaging.",
      ar: "يتطلب إطعام الطلاب توازنًا دقيقًا بين التغذية والمذاق والخدمات اللوجستية. صُمم برنامج الوجبات المدرسية الخاص بنا حول الإيقاع اليومي للمؤسسات التعليمية، لتقديم وجبات طازجة ومناسبة للأطفال في عبوات عملية لا تسبب الفوضى."
    },
    highlights: [
      { en: "Age-appropriate portion sizing", ar: "أحجام حصص مناسبة للأعمار" },
      { en: "Nutritionally balanced menus", ar: "قوائم طعام متوازنة غذائيًا" },
      { en: "Reliable delivery schedules", ar: "جداول توصيل موثوقة" }
    ],
    examples: [
      { en: "Hot lunch trays with fresh sides", ar: "صواني غداء ساخنة مع أطباق جانبية طازجة" },
      { en: "Nutritious morning snack boxes", ar: "صناديق وجبات خفيفة صباحية مغذية" },
      { en: "Special dietary requirement options", ar: "خيارات للمتطلبات الغذائية الخاصة" }
    ],
    contentCollection: {
      badge: { en: "From the school program", ar: "من البرنامج المدرسي" },
      title: { en: "Zad Qira: A Meal That Carries a Story", ar: "زاد قرى المدرسي" },
      intro: {
        en: "At Qira, a meal is more than food. It is a gentle opportunity to plant a beautiful meaning, revive an Arabic word, and open a small window onto our history and culture. A short weekly story can accompany the meal or be shared inside the school.",
        ar: "في قرى، الوجبة ليست طعامًا فحسب، بل فرصة لطيفة لغرس معنى جميل، وإحياء كلمة عربية، وفتح نافذة صغيرة على تاريخنا وثقافتنا. نقترح تقديم معلومة أسبوعية قصيرة للطلاب، تُرفق مع الوجبة أو تُعرض داخل المدرسة.",
      },
      itemLabel: { en: "Weekly theme", ar: "باب أسبوعي" },
      items: [
        {
          title: { en: "Shades of Meaning", ar: "فروق المعاني" },
          description: { en: "Introduce students to the precision of Arabic and show how words may be close in meaning without being identical.", ar: "نعرّف الطالب بدقّة العربية، وأن بعض الكلمات قد تتقارب في المعنى ولا تتطابق." },
        },
        {
          title: { en: "A Word's Journey", ar: "رحلة كلمة" },
          description: { en: "Trace familiar everyday words back to their origins and follow their journey between languages and cultures.", ar: "كلمات نستعملها كل يوم، لها حكاية في أصلها وانتقالها بين اللغات والثقافات." },
        },
        {
          title: { en: "Arab Kunyas", ar: "كُنى العرب" },
          description: { en: "Open a friendly window onto an authentic Arab custom and how the kunya became a sign of affection or renown.", ar: "نفتح بابًا لطيفًا على عادة عربية أصيلة، وكيف صارت الكنية علامة مودة أو شهرة." },
        },
        {
          title: { en: "Arab Virtues", ar: "مكارم العرب" },
          description: { en: "Explore history through generosity, loyalty, care for one's neighbor, and support for people in need.", ar: "نقدّم التاريخ من خلال القيم الجميلة: الكرم، والوفاء، وحماية الجار، ونصرة المحتاج." },
        },
        {
          title: { en: "Makers of Civilization", ar: "علماء وصنّاع الحضارة" },
          description: { en: "Meet Arab scholars in language, medicine, astronomy, and cuisine, including Al-Khalil ibn Ahmad, Ibn Sina, and Ibn Sayyar al-Warraq.", ar: "نعرّف الطلاب بعلماء العرب في اللغة والطب والفلك والطهي، ومنهم الخليل بن أحمد الفراهيدي، وابن سينا، وابن سيّار الورّاق." },
        },
        {
          title: { en: "Why Is It Called That?", ar: "لِمَ سُمّي؟" },
          description: { en: "Turn the names of familiar things around the student into short, enjoyable questions about language and origin.", ar: "نشرح سبب تسمية أشياء مألوفة حول الطالب، فنحوّل الاسم اليومي إلى سؤال ممتع." },
        },
        {
          title: { en: "Say It in Sound Arabic", ar: "قلها بالعربية الصحيحة" },
          description: { en: "Share one language rule in a minute and gently correct a common expression without making the lesson feel heavy.", ar: "نقدّم قاعدة في دقيقة، ونصحّح عبارة شائعة بلا ثقل مدرسي." },
        },
        {
          title: { en: "The Arab Table", ar: "مائدة العرب" },
          description: { en: "Discover historic Arab dishes and their names, connecting each story to food served to students.", ar: "نقدّم معلومات عن طعام العرب القديم وأسمائه، مع ربط جميل بما يُقدّم للطلاب من طعام." },
        },
      ],
    },
    featuredMenu: {
      badge: { en: "School menu", ar: "من قائمة المدرسة" },
      title: { en: "School Breakfast Menu", ar: "قائمة الإفطار المدرسي" },
      intro: {
        en: "A simple breakfast format schools can shape by bread type, bread style, and filling. The selections below follow your shared menu reference and can be adjusted by age group and daily volume.",
        ar: "صيغة إفطار مدرسية بسيطة يمكن تنسيقها حسب نوع الخبز، وشكل الرغيف، والحشوة. الخيارات التالية مبنية على المرجع المرفق وقابلة للتعديل بحسب المرحلة العمرية وعدد الوجبات اليومية.",
      },
      note: {
        en: "Shelf life: up to 3 days from the production date.",
        ar: "صالح لمدة 3 أيام من تاريخ التصنيع.",
      },
      sections: [
        {
          title: { en: "Bread type", ar: "نوع الخبز" },
          items: [
            { en: "Whole grain", ar: "حبة كاملة" },
            { en: "White", ar: "أبيض" },
          ],
        },
        {
          title: { en: "Bread", ar: "الخبز" },
          items: [
            { en: "Loaf (manakish)", ar: "رغيف (مناقيش)" },
            { en: "Brioche sandwich", ar: "ساندويش بريوش" },
            { en: "Crescent croissant", ar: "كرواسون هلالي" },
            { en: "Loaf (pizza)", ar: "رغيف (بيتزا)" },
          ],
        },
        {
          title: { en: "Fillings", ar: "الحشوات" },
          items: [
            { en: "White cheese", ar: "جبنة بيضاء" },
            { en: "Yellow cheese", ar: "جبنة صفراء" },
            { en: "Three-cheese blend", ar: "الأجبان الثلاثة" },
            { en: "Cheese and olives", ar: "جبنة وزيتون" },
            { en: "Cream cheese spread", ar: "جبنة سائلة" },
            { en: "Jam and peanut butter", ar: "مربى وفول سوداني" },
            { en: "Jam and yellow cheese", ar: "مربى وجبنة صفراء" },
            { en: "Dates and tahini", ar: "تمر وطحينة" },
            { en: "Tuna and olives", ar: "تونة وزيتون" },
            { en: "Tuna and cheese", ar: "تونة وجبنة" },
          ],
        },
      ],
    },
    downloads: [
      {
        title: { en: "Zad Qira School Presentation", ar: "عرض زاد قرى المدرسي" },
        url: "/PDF/زاد_قِرَى_المدرسي_.pdf",
        filename: "زاد_قِرَى_المدرسي_.pdf",
        size: "51.6 MB",
        buttonText: { en: "Download Brochure", ar: "تحميل البروشور" }
      },
      {
        title: { en: "Thareed Day (Example Topic)", ar: "نموذج يوم الثريد (مثال للموضوعات)" },
        url: "/PDF/يــوم الثريــــد_.pdf",
        filename: "يــوم الثريــــد_.pdf",
        size: "2.3 MB",
        buttonText: { en: "Download Example", ar: "تحميل النموذج" }
      }
    ]
  },
  {
    id: "hotels",
    title: { en: "Hotel Hospitality", ar: "ضيافة الفنادق" },
    body: {
      en: "Consistent staff dining and back-of-house meal programs that match the hospitality standard of your brand.",
      ar: "وجبات موظفين وخدمات مساندة تُحضّر بنفس مستوى الضيافة والاهتمام الذي تقدمونه لضيوفكم.",
    },
    image: "/images/serve-hotels.webp",
    icon: HotelDallah,
    summary: {
      en: "Elevate your back-of-house operations with staff dining programs that reflect the care and quality your hotel extends to its guests.",
      ar: "ارتقِ بعملياتك المساندة من خلال برامج طعام للموظفين تعكس الاهتمام والجودة التي يقدمها فندقك لضيوفه."
    },
    story: {
      en: "Hospitality professionals deserve the same level of care they provide. We partner with hotels to deliver robust, high-quality staff meals that keep your team energized across all shifts, allowing you to focus on the guest experience.",
      ar: "يستحق محترفو الضيافة نفس مستوى الرعاية الذي يقدمونه. نتعاون مع الفنادق لتقديم وجبات قوية وعالية الجودة للموظفين تحافظ على نشاط فريقك في جميع الورديات، مما يتيح لك التركيز على تجربة الضيف."
    },
    highlights: [
      { en: "24/7 coverage for rotating shifts", ar: "تغطية على مدار الساعة للورديات المتعاقبة" },
      { en: "Menu variety to combat fatigue", ar: "تنوع في القائمة لمكافحة الملل" },
      { en: "Scalable volume for peak seasons", ar: "كميات قابلة للتطوير لمواسم الذروة" }
    ],
    examples: [
      { en: "Hearty midnight shift meals", ar: "وجبات دسمة لورديات منتصف الليل" },
      { en: "Executive team dining setups", ar: "تجهيزات طعام للفريق التنفيذي" },
      { en: "Grab-and-go options for busy staff", ar: "خيارات سريعة للموظفين المشغولين" }
    ],
    contentCollection: {
      badge: { en: "From the breakfast menu", ar: "من قائمة الإفطار" },
      title: { en: "Bakour Qira: A Seven-Day Breakfast Rotation", ar: "بَكور قرى — قائمة الإفطار الأسبوعية" },
      intro: {
        en: "A warm weekly breakfast rotation for hotel teams and hospitality operations, combining familiar regional flavors, fresh sides, and dependable daily variety.",
        ar: "دورة إفطار أسبوعية دافئة لفرق الفنادق وعمليات الضيافة، تجمع النكهات الإقليمية المألوفة، والإضافات الطازجة، والتنوّع اليومي الموثوق.",
      },
      itemLabel: { en: "Daily menu", ar: "قائمة اليوم" },
      items: [
        {
          title: { en: "Saturday", ar: "السبت" },
          description: { en: "A Hijazi start with warm foul and simple home-style accompaniments.", ar: "بداية حجازية بفول دافئ وإضافات منزلية بسيطة." },
          details: [
            { en: "Qira Hijazi foul", ar: "فول قرى الحجازي" },
            { en: "Boiled eggs", ar: "بيض الدار المسلوق" },
            { en: "Mini brioche manakish", ar: "ميني مناقيش بريوش" },
            { en: "Fresh morning vegetables", ar: "خضار الصباح" },
            { en: "Cheddar cheese", ar: "جبنة شيدر صفراء" },
            { en: "Mulberry jam with fruit pieces", ar: "مربى الفرصاد مع قطع التوت" },
            { en: "Qira mint tea", ar: "شاي قرى بالنعناع" },
          ],
        },
        {
          title: { en: "Sunday", ar: "الأحد" },
          description: { en: "A generous breakfast led by fresh liver and a soft milk omelet.", ar: "إفطار مشبع تتقدمه الكبدة الطازجة وعجة البيض بالحليب." },
          details: [
            { en: "Qira liver", ar: "كبدة قرى" },
            { en: "Milk omelet", ar: "عجة بيض بالحليب" },
            { en: "Roasted potatoes", ar: "بطاطس مشوية" },
            { en: "Fruit yogurt", ar: "زبادي بالفواكه" },
            { en: "White feta cheese", ar: "جبنة فيتا بيضاء" },
            { en: "Tahini halva", ar: "حلاوة طحينية" },
            { en: "Qira mint tea", ar: "شاي قرى بالنعناع" },
          ],
        },
        {
          title: { en: "Monday", ar: "الاثنين" },
          description: { en: "A calm Arab morning with warm lentils and Moroccan shakshuka.", ar: "صباح عربي هادئ مع العدس الدافئ والشكشوكة المغربية." },
          details: [
            { en: "Abbasi lentils", ar: "عدس عباسي" },
            { en: "Moroccan shakshuka", ar: "شكشوكة مغربية" },
            { en: "Mini pizza", ar: "الأقراص الحمراء — ميني بيتزا" },
            { en: "Labneh and olive oil", ar: "لبنة وزيت زيتون" },
            { en: "Cheddar cheese", ar: "جبنة شيدر صفراء" },
            { en: "Mulberry jam with fruit pieces", ar: "مربى الفرصاد مع قطع التوت" },
            { en: "Qira mint tea", ar: "شاي قرى بالنعناع" },
          ],
        },
        {
          title: { en: "Tuesday", ar: "الثلاثاء" },
          description: { en: "A light Levantine table centered on creamy hummus and fresh sides.", ar: "مائدة شامية خفيفة تتمحور حول الحمص الناعم والإضافات الطازجة." },
          details: [
            { en: "Levantine hummus", ar: "حمص شامي" },
            { en: "Boiled eggs", ar: "بيض الدار المسلوق" },
            { en: "Mashed potatoes", ar: "بطاطس مهروسة" },
            { en: "Fresh morning vegetables", ar: "خضار الصباح" },
            { en: "White feta cheese", ar: "جبنة فيتا بيضاء" },
            { en: "Tahini halva", ar: "حلاوة طحينية" },
            { en: "Qira mint tea", ar: "شاي قرى بالنعناع" },
          ],
        },
        {
          title: { en: "Wednesday", ar: "الأربعاء" },
          description: { en: "Slow-cooked foul with a soft omelet and bright fruit yogurt.", ar: "فول مطهو على مهل مع عجة ناعمة وزبادي بالفواكه." },
          details: [
            { en: "Smoked foul", ar: "فول مبخّر" },
            { en: "Milk omelet", ar: "عجة بيض بالحليب" },
            { en: "Mini brioche manakish", ar: "ميني مناقيش بريوش" },
            { en: "Fruit yogurt", ar: "زبادي بالفواكه" },
            { en: "Cheddar cheese", ar: "جبنة شيدر صفراء" },
            { en: "Mulberry jam with fruit pieces", ar: "مربى الفرصاد مع قطع التوت" },
            { en: "Qira mint tea", ar: "شاي قرى بالنعناع" },
          ],
        },
        {
          title: { en: "Thursday", ar: "الخميس" },
          description: { en: "Warm lentils, creamy labneh, and easy favorites to close the workweek.", ar: "عدس دافئ ولبنة كريمية وخيارات محببة لختام أسبوع العمل." },
          details: [
            { en: "Abbasi lentils", ar: "عدس عباسي" },
            { en: "Mashed potatoes", ar: "بطاطس مهروسة" },
            { en: "Mini pizza", ar: "الأقراص الحمراء — ميني بيتزا" },
            { en: "Labneh and olive oil", ar: "لبنة وزيت زيتون" },
            { en: "White feta cheese", ar: "جبنة فيتا بيضاء" },
            { en: "Tahini halva", ar: "حلاوة طحينية" },
            { en: "Qira mint tea", ar: "شاي قرى بالنعناع" },
          ],
        },
        {
          title: { en: "Friday", ar: "الجمعة" },
          description: { en: "Vegetable foul and roasted potatoes for a warm, unhurried Friday table.", ar: "فول بالخضار وبطاطس مشوية لمائدة جمعة دافئة وهادئة." },
          details: [
            { en: "Foul with vegetables", ar: "فول بالخضار" },
            { en: "Roasted potatoes", ar: "بطاطس مشوية" },
            { en: "Mini brioche manakish", ar: "ميني مناقيش بريوش" },
            { en: "Fresh morning vegetables", ar: "خضار الصباح" },
            { en: "Cheddar cheese", ar: "جبنة شيدر صفراء" },
            { en: "Mulberry jam with fruit pieces", ar: "مربى الفرصاد مع قطع التوت" },
            { en: "Qira mint tea", ar: "شاي قرى بالنعناع" },
          ],
        },
      ],
    },
    downloads: [
      {
        title: { en: "Bakour Qira Breakfast Menu", ar: "قائمة إفطار بكور قرى" },
        url: "/PDF/بكور قرى.pdf",
        filename: "بكور قرى.pdf",
        size: "1.9 MB",
        buttonText: { en: "Download Brochure", ar: "تحميل البروشور" }
      }
    ]
  },
  {
    id: "events",
    title: { en: "Gatherings & Events", ar: "اللقاءات والفعاليات" },
    body: {
      en: "Beautifully presented sharing trays, warm buffet spreads, and bespoke catering designed to elevate every gathering.",
      ar: "صواني مشاركة منسقة بعناية، وبوفيهات دافئة، وتموين مخصص يُعد ليزيد لقاءاتكم بهجة وحفاوة.",
    },
    image: "/images/serve-events.webp",
    icon: EventBowl,
    summary: {
      en: "From intimate gatherings to large-scale events, our catering combines authentic flavor with elegant presentation to make every occasion memorable.",
      ar: "من اللقاءات الحميمة إلى الفعاليات الكبيرة، يجمع تقديم الطعام لدينا بين النكهة الأصيلة والعرض الأنيق لجعل كل مناسبة لا تُنسى."
    },
    story: {
      en: "Food is the centerpiece of any successful gathering. We bring the warmth of Arabic hospitality to your events, providing meticulously curated buffets and beautifully arranged trays that invite connection and conversation among your guests.",
      ar: "الطعام هو محور أي تجمع ناجح. نجلب دفء الضيافة العربية إلى مناسباتك، من خلال تقديم بوفيهات منسقة بدقة وصواني مرتبة بشكل جميل تدعو ضيوفك للتواصل والحديث."
    },
    highlights: [
      { en: "Artisanal, eye-catching presentation", ar: "عروض تقديمية فنية ملفتة للنظر" },
      { en: "Flexible setups for any venue", ar: "تجهيزات مرنة لأي مكان" },
      { en: "Seamless service coordination", ar: "تنسيق سلس للخدمة" }
    ],
    examples: [
      { en: "Elegant VIP reception buffets", ar: "بوفيهات استقبال أنيقة لكبار الشخصيات" },
      { en: "Cultural and festive sharing trays", ar: "صواني مشاركة ثقافية واحتفالية" },
      { en: "Customized event refreshment stations", ar: "محطات مرطبات مخصصة للمناسبات" }
    ]
  }
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
    image: "/images/serve-schools-3.png",
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
  {
    icon: Apple,
    title: { en: "Ingredient quality", ar: "جودة المكونات" },
    body: {
      en: "Menus begin with dependable ingredients and steady preparation standards.",
      ar: "تبدأ القوائم والوجبات بمكونات موثوقة ومعايير تحضير دقيقة ومستقرة.",
    },
  },
  {
    icon: PackageCheck,
    title: { en: "Packaging", ar: "التغليف" },
    body: {
      en: "Packaging is selected for schools, hotels, and events.",
      ar: "يتم اختيار التغليف وتصميمه ليناسب المدارس والفنادق والفعاليات.",
    },
  },
  {
    icon: Truck,
    title: { en: "Delivery reliability", ar: "موثوقية التوصيل" },
    body: {
      en: "Programs are planned around receiving windows, site coordination, and repeatable routines.",
      ar: "تُخطط البرامج والوجبات بدقة لتلائم نوافذ الاستلام، وتنسيق الموقع، والمسارات التشغيلية المتكررة.",
    },
  },
  {
    icon: ChefHat,
    title: { en: "Menu flexibility", ar: "مرونة القوائم" },
    body: {
      en: "Menus adapt by group, schedule, dietary need, and cultural preference.",
      ar: "تتكيف القوائم والخيارات حسب الفئة المستهدفة، والجدول الزمني، والاحتياج الغذائي، والتفضيل الثقافي.",
    },
  },
  {
    icon: RosetteIcon,
    title: { en: "Cultural fit", ar: "ملاءمة ثقافية" },
    body: {
      en: "Arabic hospitality appears in flavor, presentation, and service manners.",
      ar: "تتجسد الضيافة العربية الأصيلة في النكهة، وطريقة التقديم، ولطافة أسلوب الخدمة.",
    },
  },
  {
    icon: GraduationCap,
    title: { en: "School-friendly portions", ar: "حصص مناسبة للمدارس" },
    body: {
      en: "Portions can be shaped for student age groups and daily routines.",
      ar: "تُصمم الحصص والوجبات بدقة لتناسب فئات أعمار الطلاب المختلفة وروتينهم المدرسي.",
    },
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast-boxes",
    image: "/images/menu-breakfast.webp",
    title: { en: "Breakfast boxes", ar: "صناديق الإفطار" },
    subtitle: { en: "Early starts, neatly packed", ar: "بداية يوم نشيطة، معبأة بعناية" },
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
    subtitle: { en: "Reliable daily service", ar: "خدمة يومية موثوقة" },
    summary: {
      en: "Dependable lunch programs with clear portions, practical service flow, and flexible menu rotation.",
      ar: "برامج غداء موثوقة بحصص واضحة وتدفق خدمة عملي وتدوير مرن للقوائم.",
    },
    story: {
      en: "Lunch meals form the backbone of many daily programs. Qira can shape the menu around repeat delivery windows, dietary needs, and receiving conditions so lunch stays calm and consistent.",
      ar: "تشكل وجبات الغداء أساس كثير من البرامج اليومية. يمكن لقرى تشكيل القائمة حول مواعيد تسليم متكررة واحتياجات غذائية وبيئة استلام واضحة حتى يبقى الغداء منظمًا وثابتًا.",
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
    subtitle: { en: "Light options for breaks", ar: "خيارات خفيفة لأوقات الاستراحة" },
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
    subtitle: { en: "Shared tables, simple flow", ar: "طاولات مشتركة وتدفق بسيط" },
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
    subtitle: { en: "Hot and cold hospitality", ar: "ضيافة دافئة وباردة" },
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
    subtitle: { en: "Packed for teams and occasions", ar: "معبأة للفرق والمناسبات" },
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
    ar: "أخبرنا عن جمهورك وحجم الطلب وبيئة الخدمة. ستساعدك قرى في تشكيل عرض تموين عملي يناسب تشغيلك.",
  },
  button: { en: "Start Your B2B Catering Request", ar: "ابدأ طلب التموين المؤسسي" },
};
