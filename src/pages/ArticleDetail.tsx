import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/lib/articles-data';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();

  const article = articles.find((a) => a.slug === slug);
  const otherArticles = articles.filter((a) => a.slug !== slug);

  useEffect(() => {
    if (article) {
      const title = lang === 'ru' ? article.titleRu : lang === 'en' ? article.titleEn : article.titleAz;
      document.title = `${title} | Arxitektura və Dizayn`;
    }
    window.scrollTo(0, 0);
  }, [article, lang]);

  if (!article) {
    return (
      <Layout>
        <div className="pt-32 pb-24 text-center">
          <h1 className="font-heading text-4xl">Məqalə tapılmadı</h1>
          <Link to="/meqaleler" className="text-gold mt-4 inline-block">← {t.articleDetail.backToArticles}</Link>
        </div>
      </Layout>
    );
  }

  const title = lang === 'ru' ? article.titleRu : lang === 'en' ? article.titleEn : article.titleAz;
  const body = lang === 'ru' ? article.bodyRu : lang === 'en' ? article.bodyEn : article.bodyAz;
  const category = lang === 'ru' ? article.categoryRu : lang === 'en' ? article.categoryEn : article.categoryAz;

  return (
    <Layout>
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] min-h-[320px]">
        <img src={article.img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      <article className="py-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-midgrey mb-8 flex items-center gap-2">
            <Link to="/" className="hover:text-gold transition-colors">{t.articleDetail.breadcrumbHome}</Link>
            <span>/</span>
            <Link to="/meqaleler" className="hover:text-gold transition-colors">{t.articleDetail.breadcrumbArticles}</Link>
            <span>/</span>
            <span className="text-foreground">{title}</span>
          </nav>

          <ScrollReveal>
            <h1 className="font-heading text-3xl md:text-5xl mb-6">{title}</h1>
            <div className="flex items-center gap-4 text-sm text-midgrey mb-10">
              <span>{t.articleDetail.author}</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span className="text-gold uppercase text-xs tracking-wider">{category}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-midgrey leading-relaxed">
              {body.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-6">{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-12">
            <Link to="/meqaleler" className="text-gold text-sm uppercase tracking-wide hover:underline">
              {t.articleDetail.backToArticles}
            </Link>
          </div>
        </div>
      </article>

      {/* Other Articles */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-3xl text-center mb-12">{t.articleDetail.otherArticles}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherArticles.map((a, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link to={`/meqaleler/${a.slug}`} className="group block">
                  <div className="overflow-hidden aspect-[3/2] mb-4">
                    <img src={a.img} alt={a.titleAz} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <span className="text-xs text-midgrey">{a.date}</span>
                  <h3 className="font-heading text-xl mt-2 group-hover:text-gold transition-colors">
                    {lang === 'ru' ? a.titleRu : lang === 'en' ? a.titleEn : a.titleAz}
                  </h3>
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

export default ArticleDetail;
