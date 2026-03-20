import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import ScrollReveal from '../ScrollReveal';
import article1 from '@/assets/article-1.jpg';
import article2 from '@/assets/article-2.jpg';
import article3 from '@/assets/article-3.jpg';

const articles = [
  { img: article1, date: '15 Mart 2025', titleAz: 'Müasir memarlıqda davamlı materiallar', titleRu: 'Устойчивые материалы в современной архитектуре', titleEn: 'Sustainable materials in modern architecture' },
  { img: article2, date: '02 Fevral 2025', titleAz: 'Yaşıl binaların gələcəyi', titleRu: 'Будущее зелёных зданий', titleEn: 'The future of green buildings' },
  { img: article3, date: '18 Yanvar 2025', titleAz: 'Layihə idarəetməsində yeni yanaşmalar', titleRu: 'Новые подходы в управлении проектами', titleEn: 'New approaches in project management' },
];

const ArticlesPreview = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl text-center mb-16">{t.articlesPrev.title}</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden aspect-[3/2] mb-4">
                  <img
                    src={a.img}
                    alt={a.titleAz}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs text-midgrey">{a.date}</span>
                <h3 className="font-heading text-xl mt-2 group-hover:text-gold transition-colors">
                  {lang === 'ru' ? a.titleRu : lang === 'en' ? a.titleEn : a.titleAz}
                </h3>
                <Link to="/meqaleler" className="inline-flex items-center gap-1 text-gold text-sm mt-3 hover:gap-2 transition-all">
                  {t.articlesPrev.readMore} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesPreview;
