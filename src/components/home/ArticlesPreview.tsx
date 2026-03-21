import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import ScrollReveal from '../ScrollReveal';
import { articles } from '@/lib/articles-data';

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
              <Link to={`/meqaleler/${a.slug}`} className="group block">
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
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesPreview;
