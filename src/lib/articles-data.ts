import article1 from '@/assets/article-1.jpg';
import article2 from '@/assets/article-2.jpg';
import article3 from '@/assets/article-3.jpg';

export interface Article {
  slug: string;
  img: string;
  date: string;
  titleAz: string;
  titleRu: string;
  titleEn: string;
  excerptAz: string;
  excerptRu: string;
  excerptEn: string;
  categoryAz: string;
  categoryRu: string;
  categoryEn: string;
  bodyAz: string;
  bodyRu: string;
  bodyEn: string;
}

export const articles: Article[] = [
  {
    slug: 'muasir-memarliq-tendensiyalari',
    img: article1,
    date: '15 Mart 2025',
    titleAz: 'Müasir memarlıqda tendensiyalar',
    titleRu: 'Тенденции в современной архитектуре',
    titleEn: 'Trends in modern architecture',
    categoryAz: 'Memarlıq',
    categoryRu: 'Архитектура',
    categoryEn: 'Architecture',
    excerptAz: 'Müasir memarlıq dünyasında baş verən ən son tendensiyalar və onların gələcəyə təsiri...',
    excerptRu: 'Последние тенденции в мире современной архитектуры и их влияние на будущее...',
    excerptEn: 'The latest trends in the world of modern architecture and their impact on the future...',
    bodyAz: `Müasir memarlıq sahəsində son illərdə ciddi dəyişikliklər baş verir. Texnologiyanın sürətli inkişafı, ekoloji şüurun artması və urbanizasiya prosesləri memarlıq dizaynına yeni istiqamətlər verir.

Parametrik dizayn bu tendensiyaların ən önəmlilərindən biridir. Kompüter proqramları vasitəsilə yaradılan mürəkkəb həndəsi formalar binaların estetik görünüşünü tamamilə dəyişdirir. Bu yanaşma həm funksionallığı, həm də vizual cəlbediciliyi artırır.

Biomimetik memarlıq — təbiətdən ilham alan dizayn — başqa bir əhəmiyyətli tendenciyadır. Memarlar təbiətin milyonlarla il ərzində yaratdığı strukturları öyrənərək, daha səmərəli və dayanıqlı binalar layihələndirirlər. Məsələn, arı şanına bənzər strukturlar daha yüngül, lakin daha möhkəm konstruksiyalar yaratmağa imkan verir.

Ağıllı bina texnologiyaları da memarlığın gələcəyini formalaşdırır. İoT sensorları, avtomatlaşdırılmış iqlim nəzarəti sistemləri və enerji idarəetmə platformaları binaları daha səmərəli edir. Bu texnologiyalar eyni zamanda sakinlərin rahatlığını artırır və enerji xərclərini azaldır.

Modular tikinti üsulları da populyarlığını artırır. Fabrikdə istehsal olunan modular komponentlər tikinti müddətini qısaldır, tullantıları azaldır və keyfiyyət nəzarətini asanlaşdırır. Bu üsul xüsusilə yaşayış komplekslərinin tikintisində geniş tətbiq olunur.

Yaşıl damlar və şaquli bağlar şəhər memarlığının ayrılmaz hissəsinə çevrilir. Bu elementlər həm binanın enerji səmərəliliyini artırır, həm də şəhər mühitinin ekoloji balansını yaxşılaşdırır. Xüsusilə sıx şəhərlərdə bu yanaşma yaşayış keyfiyyətini əhəmiyyətli dərəcədə artırır.

Nəticə olaraq, müasir memarlıq texnologiya, ekologiya və estetikanın qovşağında inkişaf edir. Gələcəyin binaları daha ağıllı, daha yaşıl və daha insan yönümlü olacaq. Bu tendensiyalar Azərbaycanda da öz əksini tapmaqdadır və şirkətimiz bu yenilikləri layihələrinə tətbiq etməyə davam edir.`,
    bodyRu: `В сфере современной архитектуры за последние годы произошли серьёзные изменения. Быстрое развитие технологий, рост экологического сознания и процессы урбанизации задают новые направления в архитектурном дизайне.

Параметрический дизайн — одна из наиболее значимых тенденций. Сложные геометрические формы, создаваемые с помощью компьютерных программ, полностью меняют эстетический облик зданий.

Биомиметическая архитектура — дизайн, вдохновлённый природой — ещё одна важная тенденция. Архитекторы изучают структуры, созданные природой за миллионы лет, проектируя более эффективные и устойчивые здания.

Технологии умных зданий также формируют будущее архитектуры. IoT-сенсоры, автоматизированные системы климат-контроля и платформы управления энергией делают здания более эффективными.

Модульные методы строительства также набирают популярность. Компоненты, производимые на фабрике, сокращают сроки строительства и уменьшают отходы.

Зелёные крыши и вертикальные сады становятся неотъемлемой частью городской архитектуры, улучшая энергоэффективность и экологический баланс.

В результате современная архитектура развивается на пересечении технологий, экологии и эстетики.`,
    bodyEn: `The field of modern architecture has undergone significant changes in recent years. The rapid development of technology, growing environmental awareness, and urbanization processes are giving new directions to architectural design.

Parametric design is one of the most important of these trends. Complex geometric forms created through computer programs completely change the aesthetic appearance of buildings.

Biomimetic architecture — design inspired by nature — is another significant trend. Architects study structures created by nature over millions of years to design more efficient and sustainable buildings.

Smart building technologies are also shaping the future of architecture. IoT sensors, automated climate control systems, and energy management platforms make buildings more efficient.

Modular construction methods are also growing in popularity. Factory-produced modular components shorten construction periods and reduce waste.

Green roofs and vertical gardens are becoming an integral part of urban architecture, improving energy efficiency and ecological balance.

As a result, modern architecture develops at the intersection of technology, ecology, and aesthetics.`,
  },
  {
    slug: 'interyer-dizaynda-renk-psixologiyasi',
    img: article2,
    date: '02 Fevral 2025',
    titleAz: 'İnteryer dizaynda rəng psixologiyası',
    titleRu: 'Психология цвета в дизайне интерьера',
    titleEn: 'Color psychology in interior design',
    categoryAz: 'İnteryer',
    categoryRu: 'Интерьер',
    categoryEn: 'Interior',
    excerptAz: 'Rənglərin insan psixologiyasına təsiri və interyer dizaynında düzgün rəng seçimi...',
    excerptRu: 'Влияние цветов на психологию человека и правильный выбор цвета в интерьерном дизайне...',
    excerptEn: 'The impact of colors on human psychology and choosing the right colors in interior design...',
    bodyAz: `Rənglər həyatımızın ayrılmaz hissəsidir və onların insan psixologiyasına təsiri elmi araşdırmalarla sübut olunmuşdur. İnteryer dizaynında rəng seçimi məkanın atmosferini, sakinlərin əhval-ruhiyyəsini və hətta məhsuldarlığını birbaşa təsir edir.

Mavi rəng sakitlik və rahatlıq hissi yaradır. Bu səbəbdən yataq otaqları və istirahət zonalarında tez-tez istifadə olunur. Tədqiqatlar göstərir ki, mavi rəng qan təzyiqini azaldır və ürək döyüntüsünü yavaşladır. Açıq mavi tonlar məkanı daha geniş göstərməyə kömək edir.

Yaşıl rəng təbiətlə əlaqəni simvolizə edir və göz üçün ən rahat rənglərdən biridir. Ofis məkanlarında yaşıl elementlərin istifadəsi işçilərin konsentrasiyasını və yaradıcılığını artırır. Ev şəraitində isə yaşıl tonlar harmoniya və tarazlıq hissi yaradır.

Sarı rəng enerji və optimizm rəmzidir. Mətbəx və qonaq otaqlarında sarı aksentlər istifadə etmək məkana canlılıq qatır. Lakin həddən artıq sarı rəng narahatlıq yarada bilər, ona görə bu rəngi balanslaşdırmaq vacibdir.

Qırmızı rəng ehtiras və enerji ilə assosiasiya olunur. Restoranlarda və yemək otaqlarında qırmızı tonlar iştahanı artırır. Lakin yaşayış məkanlarında bu rəngi aksent kimi istifadə etmək daha məqsədəuyğundur.

Neytral tonlar — bej, krem, boz — müasir interyer dizaynının əsasını təşkil edir. Bu rənglər universaldır və demək olar ki, hər bir üslubla uyğunlaşır. Neytral fon üzərində rəngli aksentlər əlavə etmək ən populyar yanaşmalardan biridir.

Qaranlıq tonlar — qara, tünd boz, tünd yaşıl — lüks və sofistikasiya hissi yaradır. Bu rənglər xüsusilə premium yaşayış və kommersiya məkanlarında istifadə olunur. Düzgün işıqlandırma ilə birləşdirildikdə qaranlıq tonlar dramatik və yaddaqalan interyerlər yaradır.

Nəticə olaraq, rəng seçimi interyer dizaynının ən vacib elementlərindən biridir. Peşəkar dizayner rənglərin psixoloji təsirini başa düşərək, hər bir məkan üçün optimal rəng palitrasını yaradır.`,
    bodyRu: `Цвета являются неотъемлемой частью нашей жизни, и их влияние на психологию человека доказано научными исследованиями. Выбор цвета в интерьерном дизайне напрямую влияет на атмосферу пространства и настроение жителей.

Синий цвет создаёт ощущение спокойствия и комфорта. Зелёный символизирует связь с природой. Жёлтый — символ энергии и оптимизма. Красный ассоциируется со страстью и энергией.

Нейтральные тона составляют основу современного интерьерного дизайна. Тёмные тона создают ощущение роскоши и утончённости.

Выбор цвета — один из важнейших элементов интерьерного дизайна. Профессиональный дизайнер создаёт оптимальную цветовую палитру для каждого пространства.`,
    bodyEn: `Colors are an integral part of our lives, and their impact on human psychology has been proven by scientific research. Color selection in interior design directly affects the atmosphere of the space and residents' mood.

Blue creates a feeling of calmness and comfort. Green symbolizes connection with nature. Yellow represents energy and optimism. Red is associated with passion and energy.

Neutral tones form the basis of modern interior design. Dark tones create a sense of luxury and sophistication.

Color selection is one of the most important elements of interior design. A professional designer creates an optimal color palette for each space.`,
  },
  {
    slug: 'dayaniqli-memarliq-ve-ekoloji-layihe',
    img: article3,
    date: '18 Yanvar 2025',
    titleAz: 'Dayanıqlı memarlıq və ekoloji layihə',
    titleRu: 'Устойчивая архитектура и экологические проекты',
    titleEn: 'Sustainable architecture and ecological design',
    categoryAz: 'Ekologiya',
    categoryRu: 'Экология',
    categoryEn: 'Ecology',
    excerptAz: 'Dayanıqlı memarlığın prinsipləri və ekoloji layihələndirmənin əhəmiyyəti...',
    excerptRu: 'Принципы устойчивой архитектуры и важность экологического проектирования...',
    excerptEn: 'Principles of sustainable architecture and the importance of ecological design...',
    bodyAz: `Dayanıqlı memarlıq son onillikdə dünya memarlığının ən vacib mövzularından birinə çevrilmişdir. İqlim dəyişikliyi, təbii resursların azalması və ekoloji böhranlar memarları daha məsuliyyətli yanaşmalara sövq edir.

Dayanıqlı memarlığın əsas prinsiplərindən biri enerji səmərəliliyidir. Passiv ev konsepsiyası minimal enerji istehlakı ilə maksimum rahatlıq təmin edən bina dizaynını nəzərdə tutur. Bu yanaşma yüksək keyfiyyətli izolyasiya, günəş enerjisindən istifadə və təbii ventilyasiya sistemlərini əhatə edir.

Su idarəetməsi dayanıqlı memarlığın digər vacib aspektidir. Yağış suyunun toplanması, boz suyun təkrar istifadəsi və su qənaətli armaturlar binaların su istehlakını əhəmiyyətli dərəcədə azaldır. Xüsusilə quru iqlim zonalarında bu texnologiyalar həyati əhəmiyyət daşıyır.

Yerli və təkrar emal olunmuş materialların istifadəsi dayanıqlı tikintinin əsas elementlərindən biridir. Bambuk, təkrar emal edilmiş polad, yenidən istifadə olunan taxta və ekoloji beton kimi materiallar həm ətraf mühitə zərəri azaldır, həm də tikinti xərclərini optimallaşdırır.

Yaşıl sertifikasiya sistemləri — LEED, BREEAM, Green Star — binaların ekoloji performansını qiymətləndirmək üçün beynəlxalq standartlar təqdim edir. Bu sertifikatlar həm binanın dəyərini artırır, həm də sahibkarın ekoloji məsuliyyətini nümayiş etdirir.

Bioklimatik dizayn yerli iqlim şərtlərini nəzərə alaraq binaların layihələndirilməsini nəzərdə tutur. Günəşin hərəkəti, hakim küləklər və rütubət səviyyəsi kimi amillər binanın istiqamətini, pəncərə yerləşdirilməsini və kölgəlik sistemlərini müəyyən edir.

Şəhər kənd təsərrüfatı və ərzaq istehsalının binalara inteqrasiyası da yeni bir tendenciyadır. Dam üstü bağlar, vertikal fermalar və ictimai bağlar şəhər sakinlərinin təzə ərzağa çıxışını artırır və karbon izini azaldır.

Nəticə olaraq, dayanıqlı memarlıq yalnız bir trend deyil, gələcəyin qaçılmaz reallığıdır. Arxitektura & Dizayn olaraq biz hər layihədə ekoloji prinsipləri tətbiq etməyə çalışırıq.`,
    bodyRu: `Устойчивая архитектура стала одной из важнейших тем мировой архитектуры за последнее десятилетие. Изменение климата и сокращение природных ресурсов побуждают архитекторов к более ответственным подходам.

Энергоэффективность — один из основных принципов. Концепция пассивного дома предусматривает минимальное потребление энергии при максимальном комфорте.

Управление водными ресурсами — другой важный аспект. Использование местных и переработанных материалов — ключевой элемент устойчивого строительства.

Системы зелёной сертификации предоставляют международные стандарты для оценки экологической эффективности зданий.

Устойчивая архитектура — не просто тренд, а неизбежная реальность будущего.`,
    bodyEn: `Sustainable architecture has become one of the most important topics in world architecture over the past decade. Climate change and the depletion of natural resources are driving architects toward more responsible approaches.

Energy efficiency is one of the main principles. The passive house concept involves minimal energy consumption with maximum comfort.

Water management is another important aspect. The use of local and recycled materials is a key element of sustainable construction.

Green certification systems provide international standards for evaluating the ecological performance of buildings.

Sustainable architecture is not just a trend but an inevitable reality of the future.`,
  },
];
