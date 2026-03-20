import { createContext, useContext, useState, ReactNode } from 'react';

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
      projectsDropdown: {
        urban: 'Şəhərsalma',
        residential: 'Yaşayış',
        nonResidential: 'Qeyri-yaşayış',
        industrial: 'Sənaye',
      },
    },
    hero: {
      title: 'Arxitektura və Dizaynda Yeni Standart',
      subtitle: 'Şəhərsalma, yaşayış və kommersiya layihələrinin peşəkar icraçısı',
      cta1: 'Layihələrə bax',
      cta2: 'Bizimlə əlaqə',
    },
    aboutPreview: {
      experience: 'il təcrübə',
      projectsDone: 'layihə',
      awards: 'mükafat',
      description: 'Arxitektura & Dizayn şirkəti 2008-ci ildən bəri Azərbaycanda memarlıq və dizayn sahəsində fəaliyyət göstərir. Peşəkar komandamız müasir memarlıq həlləri ilə müştərilərimizin bütün ehtiyaclarını qarşılayır.',
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
    },
    clients: {
      title: 'Sifarişçilər',
      trust: 'Azərbaycanın aparıcı şirkətləri və dövlət qurumları ilə əməkdaşlıq edirik',
    },
    articlesPrev: {
      title: 'Məqalələr',
      readMore: 'Daha ətraflı',
    },
    cta: {
      title: 'Layihənizi birlikdə həyata keçirək',
      button: 'Müraciət edin',
    },
    footer: {
      tagline: 'Memarlıq və dizaynda mükəmməllik',
      quickLinks: 'Keçidlər',
      contactInfo: 'Əlaqə',
      address: 'Bakı şəhəri, Nəsimi rayonu, Ü.Hacıbəyli küç. 27',
      phone: '+994 12 498 00 00',
      email: 'info@arxitekturadizayn.az',
      copyright: '© 2025 Arxitektura & Dizayn. Bütün hüquqlar qorunur.',
    },
    contact: {
      title: 'Əlaqə',
      form: {
        name: 'Ad',
        surname: 'Soyad',
        email: 'Email',
        phone: 'Telefon',
        subject: 'Mövzu',
        message: 'Mesaj',
        projectType: 'Layihə növü',
        submit: 'Göndər',
        selectType: 'Layihə növünü seçin',
        types: ['Yaşayış', 'Qeyri-yaşayış', 'Şəhərsalma', 'Sənaye', 'İnteryer', 'Digər'],
      },
    },
    about: {
      pageTitle: 'Haqqımızda',
      story: 'Arxitektura & Dizayn şirkəti 2008-ci ildə təsis olunub və Azərbaycanın memarlıq mənzərəsini formalaşdırmaqda aparıcı rol oynayır. Biz hər bir layihəyə yaradıcı yanaşma və peşəkarlıqla yanaşırıq.',
      storyP2: 'Komandamız təcrübəli memarlar, mühəndislər və dizaynerlərdən ibarətdir. Biz müasir texnologiyalardan istifadə edərək, funksional və estetik cəhətdən mükəmməl layihələr yaradırıq.',
      team: 'Komandamız',
      timeline: 'Tariximiz',
      values: 'Dəyərlərimiz',
      valuesItems: [
        { title: 'Keyfiyyət', desc: 'Hər bir layihədə ən yüksək keyfiyyət standartlarına riayət edirik' },
        { title: 'İnnovasiya', desc: 'Müasir texnologiya və yaradıcı həllərlə fərqlənrik' },
        { title: 'Etibarlılıq', desc: 'Müştərilərimizlə uzunmüddətli və etibarlı əlaqələr qururuq' },
      ],
    },
    projects: {
      pageTitle: 'Layihələr',
    },
    articles: {
      pageTitle: 'Məqalələr',
    },
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
      projectsDropdown: {
        urban: 'Градостроительство',
        residential: 'Жилые',
        nonResidential: 'Нежилые',
        industrial: 'Промышленные',
      },
    },
    hero: {
      title: 'Новый Стандарт в Архитектуре и Дизайне',
      subtitle: 'Профессиональное выполнение градостроительных, жилых и коммерческих проектов',
      cta1: 'Смотреть проекты',
      cta2: 'Связаться с нами',
    },
    aboutPreview: {
      experience: 'лет опыта',
      projectsDone: 'проектов',
      awards: 'наград',
      description: 'Компания Архитектура & Дизайн работает в сфере архитектуры и дизайна в Азербайджане с 2008 года. Наша профессиональная команда удовлетворяет все потребности клиентов современными архитектурными решениями.',
      link: 'Подробнее',
    },
    services: {
      title: 'Услуги',
      items: [
        { title: 'Архитектурный Дизайн', desc: 'Разработка функциональных и эстетичных проектов с современными архитектурными решениями' },
        { title: 'Дизайн Интерьера', desc: 'Профессиональное оформление жилых и коммерческих помещений' },
        { title: 'Градостроительство', desc: 'Планирование и развитие городской инфраструктуры' },
        { title: 'Управление Проектами', desc: 'Профессиональное управление проектами от начала до конца' },
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
    },
    clients: {
      title: 'Заказчики',
      trust: 'Мы сотрудничаем с ведущими компаниями и государственными учреждениями Азербайджана',
    },
    articlesPrev: {
      title: 'Статьи',
      readMore: 'Подробнее',
    },
    cta: {
      title: 'Давайте реализуем ваш проект вместе',
      button: 'Обратиться',
    },
    footer: {
      tagline: 'Совершенство в архитектуре и дизайне',
      quickLinks: 'Ссылки',
      contactInfo: 'Контакт',
      address: 'г. Баку, Насиминский район, ул. У.Гаджибейли 27',
      phone: '+994 12 498 00 00',
      email: 'info@arxitekturadizayn.az',
      copyright: '© 2025 Архитектура & Дизайн. Все права защищены.',
    },
    contact: {
      title: 'Контакт',
      form: {
        name: 'Имя',
        surname: 'Фамилия',
        email: 'Email',
        phone: 'Телефон',
        subject: 'Тема',
        message: 'Сообщение',
        projectType: 'Тип проекта',
        submit: 'Отправить',
        selectType: 'Выберите тип проекта',
        types: ['Жилой', 'Нежилой', 'Градостроительство', 'Промышленный', 'Интерьер', 'Другое'],
      },
    },
    about: {
      pageTitle: 'О нас',
      story: 'Компания Архитектура & Дизайн была основана в 2008 году и играет ведущую роль в формировании архитектурного ландшафта Азербайджана.',
      storyP2: 'Наша команда состоит из опытных архитекторов, инженеров и дизайнеров. Мы создаём функционально и эстетически безупречные проекты с использованием современных технологий.',
      team: 'Наша команда',
      timeline: 'Наша история',
      values: 'Наши ценности',
      valuesItems: [
        { title: 'Качество', desc: 'Мы соблюдаем высочайшие стандарты качества в каждом проекте' },
        { title: 'Инновации', desc: 'Отличаемся современными технологиями и креативными решениями' },
        { title: 'Надёжность', desc: 'Строим долгосрочные и надёжные отношения с клиентами' },
      ],
    },
    projects: {
      pageTitle: 'Проекты',
    },
    articles: {
      pageTitle: 'Статьи',
    },
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
      projectsDropdown: {
        urban: 'Urban Planning',
        residential: 'Residential',
        nonResidential: 'Non-Residential',
        industrial: 'Industrial',
      },
    },
    hero: {
      title: 'A New Standard in Architecture & Design',
      subtitle: 'Professional execution of urban planning, residential and commercial projects',
      cta1: 'View Projects',
      cta2: 'Contact Us',
    },
    aboutPreview: {
      experience: 'years of experience',
      projectsDone: 'projects',
      awards: 'awards',
      description: 'Architecture & Design has been operating in the field of architecture and design in Azerbaijan since 2008. Our professional team meets all customer needs with modern architectural solutions.',
      link: 'Learn more',
    },
    services: {
      title: 'Services',
      items: [
        { title: 'Architectural Design', desc: 'Development of functional and aesthetic projects with modern architectural solutions' },
        { title: 'Interior Design', desc: 'Professional interior design of residential and commercial spaces' },
        { title: 'Urban Planning', desc: 'City infrastructure planning and development projects' },
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
    },
    clients: {
      title: 'Clients',
      trust: 'We collaborate with leading companies and government institutions of Azerbaijan',
    },
    articlesPrev: {
      title: 'Articles',
      readMore: 'Read more',
    },
    cta: {
      title: "Let's bring your project to life together",
      button: 'Get in touch',
    },
    footer: {
      tagline: 'Excellence in architecture and design',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact',
      address: 'Baku, Nasimi district, U.Hajibeyov str. 27',
      phone: '+994 12 498 00 00',
      email: 'info@arxitekturadizayn.az',
      copyright: '© 2025 Architecture & Design. All rights reserved.',
    },
    contact: {
      title: 'Contact',
      form: {
        name: 'First Name',
        surname: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Message',
        projectType: 'Project Type',
        submit: 'Submit',
        selectType: 'Select project type',
        types: ['Residential', 'Non-Residential', 'Urban Planning', 'Industrial', 'Interior', 'Other'],
      },
    },
    about: {
      pageTitle: 'About Us',
      story: 'Architecture & Design was founded in 2008 and plays a leading role in shaping the architectural landscape of Azerbaijan.',
      storyP2: 'Our team consists of experienced architects, engineers and designers. We create functionally and aesthetically perfect projects using modern technologies.',
      team: 'Our Team',
      timeline: 'Our History',
      values: 'Our Values',
      valuesItems: [
        { title: 'Quality', desc: 'We adhere to the highest quality standards in every project' },
        { title: 'Innovation', desc: 'We stand out with modern technology and creative solutions' },
        { title: 'Reliability', desc: 'We build long-term and reliable relationships with our clients' },
      ],
    },
    projects: {
      pageTitle: 'Projects',
    },
    articles: {
      pageTitle: 'Articles',
    },
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
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as unknown as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
