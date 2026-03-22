import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'az' | 'ru' | 'en';

const translations = {
  az: {
    nav: {
      about: 'Haqqımızda',
      services: 'Xidmətlər',
      projects: 'Layihələr',
      clients: 'Sifarişçilər',
      contact: 'Əlaqə',
      articles: 'Məqalələr',
      servicesDropdown: { projects: 'Layihələr' },
      projectsDropdown: { urban: 'Şəhərsalma', residential: 'Yaşayış', nonResidential: 'Qeyri-yaşayış', industrial: 'Sənaye' },
    },
    hero: {
      heroLine1: 'ARXİTEKTURA VƏ DİZAYNDA',
      heroLine2: 'YENİ STANDARTLAR',
      phrases: [
        'Arxitektura və Dizaynda Yeni Standart',
        'Fikirlərini Formaya Çeviririk',
        'Gələcəyin Məkanlarını Layihələndiririk',
      ] as readonly string[],
      subtitle: 'Şəhərsalma, yaşayış və kommersiya layihələrinin peşəkar icraçısı',
      cta1: 'Layihələrə bax',
      cta2: 'Bizimlə əlaqə',
    },
    aboutPreview: {
      experience: 'il təcrübə',
      projectsDone: 'layihə',
      awards: 'mükafat',
      description: 'Arxitektura & Dizayn şirkəti 2025-ci ildə Azərbaycanda memarlıq və dizayn sahəsində yeni standartlar yaratmaq məqsədilə təsis olunmuşdur. Peşəkar komandamız müasir memarlıq həlləri ilə müştərilərimizin bütün ehtiyaclarını qarşılayır.',
      link: 'Daha ətraflı',
    },
    services: {
      title: 'Xidmətlər',
      items: [
        { title: 'Memarlıq Dizaynı', desc: 'Müasir memarlıq həlləri ilə funksional və estetik layihələrin hazırlanması' },
        { title: 'İnteryer Dizaynı', desc: 'Yaşayış və kommersiya məkanlarının daxili dizaynının peşəkar icrası' },
        { title: 'Şəhərsalma', desc: 'Şəhər infrastrukturunun planlaşdırılması və inkişaf layihələri' },
        { title: 'Layihə İdarəetməsi', desc: 'Layihələrin başlanğıcdan sona qədər peşəkar idarə edilməsi' },
      ],
    },
    featuredProjects: {
      title: 'Seçilmiş Layihələr',
      all: 'Hamısı',
      residential: 'Yaşayış',
      nonResidential: 'Qeyri-yaşayış',
      urban: 'Şəhərsalma',
      industrial: 'Sənaye',
      viewAll: 'Bütün layihələrə bax',
      sampleNote: 'Nümunəvi layihə',
    },
    clients: {
      title: 'Sifarişçilər',
      trust: 'Etibarlı tərəfdaşlarımızla birlikdə uğurlu layihələr həyata keçiririk',
    },
    clientsPage: {
      title: 'Sifarişçilərimiz',
      trustStatement: 'Biz müştərilərimizlə uzunmüddətli və etibarlı əlaqələr qururuq. Hər bir layihədə müştərimizin vizyonunu anlamaq və onu ən yüksək keyfiyyətlə həyata keçirmək əsas məqsədimizdir.',
      becomeClient: 'Siz də sifarişçimiz olun',
    },
    articlesPrev: {
      title: 'Məqalələr',
      readMore: 'Daha ətraflı',
    },
    articleDetail: {
      author: 'Redaksiya',
      otherArticles: 'Digər məqalələr',
      backToArticles: '← Məqalələrə qayıt',
      breadcrumbHome: 'Ana səhifə',
      breadcrumbArticles: 'Məqalələr',
    },
    cta: {
      title: 'Layihənizi birlikdə həyata keçirək',
      button: 'Müraciət edin',
    },
    footer: {
      tagline: 'Memarlıq və dizaynda mükəmməllik',
      quickLinks: 'Keçidlər',
      contactInfo: 'Əlaqə',
      address: 'Sumqayıt şəhəri, Azərbaycan',
      phone: '+994 99 311 13 89',
      email: 'info@arxitekturadizayn.az',
      copyright: '© 2026 Arxitektura & Dizayn. Bütün hüquqlar qorunur.',
    },
    contact: {
      title: 'Əlaqə',
      form: {
        name: 'Ad Soyad',
        email: 'Email',
        phone: 'Telefon',
        message: 'Mesaj',
        projectType: 'Layihə növü',
        submit: 'Müraciət göndər',
        selectType: 'Layihə növünü seçin',
        types: ['Yaşayış', 'Qeyri-yaşayış', 'Şəhərsalma', 'Sənaye', 'Digər'],
        success: 'Müraciətiniz qəbul edildi! Tezliklə sizinlə əlaqə saxlayacağıq.',
      },
    },
    about: {
      pageTitle: 'Haqqımızda',
      heroTitle: 'Bir Vizyonun Hekayəsi',
      storyTitle: '2025: Yeni Bir Başlanğıc',
      story: 'Arxitektura & Dizayn 2025-ci ildə Cabar Həşimovun rəhbərliyi altında, Azərbaycanda memarlıq və dizayn sahəsində yeni standartlar yaratmaq məqsədilə Sumqayıtda əsası qoyulmuşdur. Şirkət qurulduğu gündən etibarən müasir memarlıq həllərini milli estetika ilə birləşdirərək unikal layihələr yaratmağa çalışır.',
      team: 'Komandamız',
      timeline: 'Tariximiz',
      mission: { title: 'Missiya', desc: 'Hər layihədə funksionallığı estetika ilə birləşdirmək', icon: '🏛️' },
      vision: { title: 'Vizyon', desc: 'Azərbaycanda memarlıq dizaynının lideri olmaq', icon: '🔭' },
      valuesCard: { title: 'Dəyərlər', desc: 'Keyfiyyət, Yaradıcılıq, Etibarlılıq', icon: '💎' },
    },
    projects: { pageTitle: 'Layihələr' },
    articles: { pageTitle: 'Məqalələr' },
  },
  ru: {
    nav: {
      about: 'О нас',
      services: 'Услуги',
      projects: 'Проекты',
      clients: 'Заказчики',
      contact: 'Контакт',
      articles: 'Статьи',
      servicesDropdown: { projects: 'Проекты' },
      projectsDropdown: { urban: 'Градостроительство', residential: 'Жилые', nonResidential: 'Нежилые', industrial: 'Промышленные' },
    },
    hero: {
      heroLine1: 'АРХИТЕКТУРА И ДИЗАЙН',
      heroLine2: 'НОВЫЕ СТАНДАРТЫ',
      phrases: [
        'Новый стандарт в архитектуре и дизайне',
        'Превращаем идеи в форму',
        'Проектируем пространства будущего',
      ] as readonly string[],
      subtitle: 'Профессиональное выполнение градостроительных, жилых и коммерческих проектов',
      cta1: 'Смотреть проекты',
      cta2: 'Связаться с нами',
    },
    aboutPreview: {
      experience: 'лет опыта',
      projectsDone: 'проектов',
      awards: 'наград',
      description: 'Компания Архитектура & Дизайн основана в 2025 году с целью создания новых стандартов в сфере архитектуры и дизайна в Азербайджане.',
      link: 'Подробнее',
    },
    services: {
      title: 'Услуги',
      items: [
        { title: 'Архитектурный Дизайн', desc: 'Разработка функциональных и эстетичных проектов' },
        { title: 'Дизайн Интерьера', desc: 'Профессиональное оформление помещений' },
        { title: 'Градостроительство', desc: 'Планирование городской инфраструктуры' },
        { title: 'Управление Проектами', desc: 'Управление проектами от начала до конца' },
      ],
    },
    featuredProjects: {
      title: 'Избранные Проекты',
      all: 'Все',
      residential: 'Жилые',
      nonResidential: 'Нежилые',
      urban: 'Градостроительство',
      industrial: 'Промышленные',
      viewAll: 'Смотреть все проекты',
      sampleNote: 'Образцовый проект',
    },
    clients: {
      title: 'Заказчики',
      trust: 'Мы реализуем успешные проекты совместно с надёжными партнёрами',
    },
    clientsPage: {
      title: 'Наши заказчики',
      trustStatement: 'Мы строим долгосрочные и надёжные отношения с нашими клиентами.',
      becomeClient: 'Станьте нашим заказчиком',
    },
    articlesPrev: { title: 'Статьи', readMore: 'Подробнее' },
    articleDetail: {
      author: 'Редакция',
      otherArticles: 'Другие статьи',
      backToArticles: '← Вернуться к статьям',
      breadcrumbHome: 'Главная',
      breadcrumbArticles: 'Статьи',
    },
    cta: { title: 'Давайте реализуем ваш проект вместе', button: 'Обратиться' },
    footer: {
      tagline: 'Совершенство в архитектуре и дизайне',
      quickLinks: 'Ссылки',
      contactInfo: 'Контакт',
      address: 'г. Сумгайыт, Азербайджан',
      phone: '+994 99 311 13 89',
      email: 'info@arxitekturadizayn.az',
      copyright: '© 2026 Архитектура & Дизайн. Все права защищены.',
    },
    contact: {
      title: 'Контакт',
      form: {
        name: 'Имя Фамилия',
        email: 'Email',
        phone: 'Телефон',
        message: 'Сообщение',
        projectType: 'Тип проекта',
        submit: 'Отправить заявку',
        selectType: 'Выберите тип проекта',
        types: ['Жилой', 'Нежилой', 'Градостроительство', 'Промышленный', 'Другое'],
        success: 'Ваша заявка принята! Мы свяжемся с вами в ближайшее время.',
      },
    },
    about: {
      pageTitle: 'О нас',
      heroTitle: 'История одного видения',
      storyTitle: '2025: Новое начало',
      story: 'Архитектура & Дизайн была основана в 2025 году под руководством Джабара Хашимова с целью создания новых стандартов в архитектуре и дизайне в Азербайджане.',
      team: 'Наша команда',
      timeline: 'Наша история',
      mission: { title: 'Миссия', desc: 'Объединять функциональность и эстетику в каждом проекте', icon: '🏛️' },
      vision: { title: 'Видение', desc: 'Стать лидером архитектурного дизайна в Азербайджане', icon: '🔭' },
      valuesCard: { title: 'Ценности', desc: 'Качество, Креативность, Надёжность', icon: '💎' },
    },
    projects: { pageTitle: 'Проекты' },
    articles: { pageTitle: 'Статьи' },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      clients: 'Clients',
      contact: 'Contact',
      articles: 'Articles',
      servicesDropdown: { projects: 'Projects' },
      projectsDropdown: { urban: 'Urban Planning', residential: 'Residential', nonResidential: 'Non-Residential', industrial: 'Industrial' },
    },
    hero: {
      heroLine1: 'ARCHITECTURE & DESIGN',
      heroLine2: 'NEW STANDARDS',
      phrases: [
        'A New Standard in Architecture & Design',
        'Turning Ideas into Form',
        'Designing Spaces of the Future',
      ] as readonly string[],
      subtitle: 'Professional execution of urban planning, residential and commercial projects',
      cta1: 'View Projects',
      cta2: 'Contact Us',
    },
    aboutPreview: {
      experience: 'years of experience',
      projectsDone: 'projects',
      awards: 'awards',
      description: 'Architecture & Design was founded in 2025 with the goal of creating new standards in architecture and design in Azerbaijan.',
      link: 'Learn more',
    },
    services: {
      title: 'Services',
      items: [
        { title: 'Architectural Design', desc: 'Development of functional and aesthetic projects' },
        { title: 'Interior Design', desc: 'Professional interior design of spaces' },
        { title: 'Urban Planning', desc: 'City infrastructure planning and development' },
        { title: 'Project Management', desc: 'Professional project management from start to finish' },
      ],
    },
    featuredProjects: {
      title: 'Featured Projects',
      all: 'All',
      residential: 'Residential',
      nonResidential: 'Non-Residential',
      urban: 'Urban Planning',
      industrial: 'Industrial',
      viewAll: 'View all projects',
      sampleNote: 'Sample project',
    },
    clients: {
      title: 'Clients',
      trust: 'We deliver successful projects with our trusted partners',
    },
    clientsPage: {
      title: 'Our Clients',
      trustStatement: 'We build long-term and reliable relationships with our clients.',
      becomeClient: 'Become our client',
    },
    articlesPrev: { title: 'Articles', readMore: 'Read more' },
    articleDetail: {
      author: 'Editorial',
      otherArticles: 'Other articles',
      backToArticles: '← Back to articles',
      breadcrumbHome: 'Home',
      breadcrumbArticles: 'Articles',
    },
    cta: { title: "Let's bring your project to life together", button: 'Get in touch' },
    footer: {
      tagline: 'Excellence in architecture and design',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact',
      address: 'Sumgayit, Azerbaijan',
      phone: '+994 99 311 13 89',
      email: 'info@arxitekturadizayn.az',
      copyright: '© 2026 Architecture & Design. All rights reserved.',
    },
    contact: {
      title: 'Contact',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        projectType: 'Project Type',
        submit: 'Submit Inquiry',
        selectType: 'Select project type',
        types: ['Residential', 'Non-Residential', 'Urban Planning', 'Industrial', 'Other'],
        success: 'Your inquiry has been received! We will contact you shortly.',
      },
    },
    about: {
      pageTitle: 'About Us',
      heroTitle: 'The Story of a Vision',
      storyTitle: '2025: A New Beginning',
      story: 'Architecture & Design was founded in 2025 under the leadership of Jabar Hashimov to create new standards in architecture and design in Azerbaijan.',
      team: 'Our Team',
      timeline: 'Our History',
      mission: { title: 'Mission', desc: 'To unite functionality and aesthetics in every project', icon: '🏛️' },
      vision: { title: 'Vision', desc: 'To become the leader of architectural design in Azerbaijan', icon: '🔭' },
      valuesCard: { title: 'Values', desc: 'Quality, Creativity, Reliability', icon: '💎' },
    },
    projects: { pageTitle: 'Projects' },
    articles: { pageTitle: 'Articles' },
  },
} as const;

type Translations = typeof translations.az;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'az',
  setLang: () => {},
  t: translations.az,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('az');

  useEffect(() => {
    const langMap: Record<Language, string> = { az: 'az', ru: 'ru', en: 'en' };
    document.documentElement.lang = langMap[lang];
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as unknown as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
