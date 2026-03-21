import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/lib/articles-data';

const Articles = () => {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = `${t.articles.pageTitle} | Arxitektura və Dizayn`;
  }, [t]);

  return (
    <Layout>
      <PageHero title={t.articles.pageTitle} />
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </Layout>
  );
};

export default Articles;
