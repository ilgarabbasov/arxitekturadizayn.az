import { useEffect } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/lib/i18n';
import aboutTeam from '@/assets/about-team.jpg';

const teamMembers = [
  { name: 'Cabar Həşimov', roleAz: 'Qurucu və Direktor', roleRu: 'Основатель и директор', roleEn: 'Founder & Director', showName: true },
  { name: '', roleAz: 'Baş Memar', roleRu: 'Главный архитектор', roleEn: 'Chief Architect', showName: false },
  { name: '', roleAz: 'İnteryer Dizayneri', roleRu: 'Дизайнер интерьера', roleEn: 'Interior Designer', showName: false },
  { name: '', roleAz: 'Layihə Meneceri', roleRu: 'Менеджер проектов', roleEn: 'Project Manager', showName: false },
];

const timeline = [
  { year: '2025', textAz: 'Şirkətin əsası qoyuldu', textRu: 'Основание компании', textEn: 'Company founded' },
  { year: '2025', textAz: 'İlk kommersiya layihəsi tamamlandı', textRu: 'Завершён первый коммерческий проект', textEn: 'First commercial project completed' },
  { year: '2025', textAz: 'Sumqayıt ofisi açıldı', textRu: 'Открыт офис в Сумгайыте', textEn: 'Sumgayit office opened' },
  { year: '2026', textAz: 'Genişlənmə və yeni layihələr', textRu: 'Расширение и новые проекты', textEn: 'Expansion and new projects' },
];

const About = () => {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = `${t.about.pageTitle} | Arxitektura və Dizayn`;
  }, [t]);

  return (
    <Layout>
      <PageHero title={t.about.heroTitle} />

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl mb-6 text-gold">{t.about.storyTitle}</h2>
                <p className="text-midgrey leading-relaxed text-lg">{t.about.story}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <img src={aboutTeam} alt="Team" className="w-full aspect-[4/3] object-cover" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl text-center mb-16">{t.about.team}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((m, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-charcoal flex items-center justify-center text-offwhite font-heading text-3xl">
                    {m.showName ? m.name.split(' ').map(n => n[0]).join('') : '?'}
                  </div>
                  {m.showName && <h3 className="font-heading text-xl">{m.name}</h3>}
                  <p className="text-midgrey text-sm mt-1">
                    {lang === 'ru' ? m.roleRu : lang === 'en' ? m.roleEn : m.roleAz}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl text-center mb-16">{t.about.timeline}</h2>
          </ScrollReveal>
          <div className="relative border-l-2 border-gold/30 pl-8 space-y-12">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-gold rounded-full" />
                  <span className="font-heading text-2xl text-gold">{item.year}</span>
                  <p className="text-midgrey mt-1">{lang === 'ru' ? item.textRu : lang === 'en' ? item.textEn : item.textAz}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[t.about.mission, t.about.vision, t.about.valuesCard].map((card, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center p-8">
                  <span className="text-4xl mb-4 block">{card.icon}</span>
                  <h3 className="font-heading text-xl text-offwhite mb-3">{card.title}</h3>
                  <p className="text-offwhite/50 text-sm">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
