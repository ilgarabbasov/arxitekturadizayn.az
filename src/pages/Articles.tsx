import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';
import article1 from '@/assets/article-1.jpg';
import article2 from '@/assets/article-2.jpg';
import article3 from '@/assets/article-3.jpg';

const articles = [
  { img: article1, date: '15 Mart 2025', titleAz: 'Müasir memarlıqda davamlı materiallar', titleRu: 'Устойчивые материалы в современной архитектуре', titleEn: 'Sustainable materials in modern architecture', excerptAz: 'Davamlı materialların istifadəsi müasir memarlığın əsas istiqamətlərindən biridir...', excerptRu: 'Использование устойчивых материалов — одно из ключевых направлений современной архитектуры...', excerptEn: 'The use of sustainable materials is one of the key directions of modern architecture...' },
  { img: article2, date: '02 Fevral 2025', titleAz: 'Yaşıl binaların gələcəyi', titleRu: 'Будущее зелёных зданий', titleEn: 'The future of green buildings', excerptAz: 'Yaşıl bina konsepsiyası ətraf mühitə təsiri minimuma endirməyi hədəfləyir...', excerptRu: 'Концепция зелёного здания направлена на минимизацию воздействия на окружающую среду...', excerptEn: 'The green building concept aims to minimize environmental impact...' },
  { img: article3, date: '18 Yanvar 2025', titleAz: 'Layihə idarəetməsində yeni yanaşmalar', titleRu: 'Новые подходы в управлении проектами', titleEn: 'New approaches in project management', excerptAz: 'Müasir texnologiyalar layihə idarəetməsini əsaslı şəkildə dəyişdirir...', excerptRu: 'Современные технологии кардинально меняют управление проектами...', excerptEn: 'Modern technologies are fundamentally changing project management...' },
];

const Articles = () => {
  const { t, lang } = useLanguage();

  return (
    <Layout>
      <PageHero title={t.articles.pageTitle} />
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden aspect-[3/2] mb-4">
                    <img src={a.img} alt={a.titleAz} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <span className="text-xs text-midgrey">{a.date}</span>
                  <h3 className="font-heading text-xl mt-2 group-hover:text-gold transition-colors">
                    {lang === 'ru' ? a.titleRu : lang === 'en' ? a.titleEn : a.titleAz}
                  </h3>
                  <p className="text-midgrey text-sm mt-2 line-clamp-2">
                    {lang === 'ru' ? a.excerptRu : lang === 'en' ? a.excerptEn : a.excerptAz}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm mt-3 group-hover:gap-2 transition-all">
                    {t.articlesPrev.readMore} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
