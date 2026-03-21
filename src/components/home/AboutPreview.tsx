import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import ScrollReveal from '../ScrollReveal';

const AboutPreview = () => {
  const { t } = useLanguage();

  const stats = [
    { num: '1+', label: t.aboutPreview.experience },
    { num: '10+', label: t.aboutPreview.projectsDone },
    { num: '2+', label: t.aboutPreview.awards },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-8">
              {stats.map((s, i) => (
                <div key={i} className="flex items-baseline gap-4">
                  <span className="font-heading text-5xl md:text-6xl text-gold">{s.num}</span>
                  <span className="text-midgrey text-sm uppercase tracking-wide">{s.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <p className="text-midgrey leading-relaxed text-lg">{t.aboutPreview.description}</p>
            <Link to="/haqqimizda" className="inline-flex items-center gap-2 text-gold mt-6 text-sm uppercase tracking-wide hover:gap-3 transition-all">
              {t.aboutPreview.link} <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
