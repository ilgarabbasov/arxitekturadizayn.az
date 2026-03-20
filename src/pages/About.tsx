import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/lib/i18n';
import aboutTeam from '@/assets/about-team.jpg';
import { Target, Lightbulb, Shield } from 'lucide-react';

const teamMembers = [
  { name: 'Rəşad Əliyev', role: 'Baş Memar / CEO', roleRu: 'Главный Архитектор / CEO', roleEn: 'Chief Architect / CEO' },
  { name: 'Günel Həsənova', role: 'İnteryer Dizayn Rəhbəri', roleRu: 'Руководитель интерьерного дизайна', roleEn: 'Interior Design Lead' },
  { name: 'Tural Məmmədov', role: 'Layihə Meneceri', roleRu: 'Менеджер проектов', roleEn: 'Project Manager' },
  { name: 'Nigar Quliyeva', role: 'Şəhərsalma Mütəxəssisi', roleRu: 'Специалист по градостроительству', roleEn: 'Urban Planning Specialist' },
];

const timeline = [
  { year: '2008', textAz: 'Şirkətin təsis edilməsi', textRu: 'Основание компании', textEn: 'Company founded' },
  { year: '2012', textAz: 'İlk böyük şəhərsalma layihəsi', textRu: 'Первый крупный градостроительный проект', textEn: 'First major urban planning project' },
  { year: '2016', textAz: '100-cü layihənin tamamlanması', textRu: 'Завершение 100-го проекта', textEn: '100th project completed' },
  { year: '2020', textAz: 'Beynəlxalq mükafat', textRu: 'Международная награда', textEn: 'International award' },
  { year: '2024', textAz: '200+ layihə, 50+ mükafat', textRu: '200+ проектов, 50+ наград', textEn: '200+ projects, 50+ awards' },
];

const About = () => {
  const { t, lang } = useLanguage();
  const valuesIcons = [Target, Lightbulb, Shield];

  return (
    <Layout>
      <PageHero title={t.about.pageTitle} />

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-midgrey leading-relaxed text-lg mb-6">{t.about.story}</p>
                <p className="text-midgrey leading-relaxed">{t.about.storyP2}</p>
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
                    {m.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-heading text-xl">{m.name}</h3>
                  <p className="text-midgrey text-sm mt-1">{lang === 'ru' ? m.roleRu : lang === 'en' ? m.roleEn : m.role}</p>
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

      {/* Values */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl text-offwhite text-center mb-16">{t.about.values}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.valuesItems.map((v, i) => {
              const Icon = valuesIcons[i];
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="text-center p-8">
                    <Icon className="w-10 h-10 text-gold mx-auto mb-4" />
                    <h3 className="font-heading text-xl text-offwhite mb-3">{v.title}</h3>
                    <p className="text-offwhite/50 text-sm">{v.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
