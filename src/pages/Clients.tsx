import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/lib/i18n';

const clients = [
  { name: 'Vertex Development MMC', descAz: 'İnşaat və daşınmaz əmlak sahəsində fəaliyyət göstərən şirkət', descRu: 'Компания в сфере строительства и недвижимости', descEn: 'Construction and real estate company' },
  { name: 'Panorama İnşaat Şirkəti', descAz: 'Yaşayış və kommersiya tikinti layihələri', descRu: 'Жилые и коммерческие строительные проекты', descEn: 'Residential and commercial construction projects' },
];

const Clients = () => {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = `${t.clientsPage.title} | Arxitektura və Dizayn`;
  }, [t]);

  return (
    <Layout>
      <PageHero title={t.clientsPage.title} />

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-midgrey text-center text-lg max-w-2xl mx-auto mb-16">
              {t.clientsPage.trustStatement}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {clients.map((c, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-charcoal text-offwhite p-10 text-center">
                  <h3 className="font-heading text-2xl mb-4">{c.name}</h3>
                  <p className="text-offwhite/60 text-sm">
                    {lang === 'ru' ? c.descRu : lang === 'en' ? c.descEn : c.descAz}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center mt-16">
              <Link to="/elaqe" className="gold-gradient text-gold-foreground px-10 py-3.5 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
                {t.clientsPage.becomeClient}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
