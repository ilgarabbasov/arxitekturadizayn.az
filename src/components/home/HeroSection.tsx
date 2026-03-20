import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Architecture"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1
          className="font-heading text-4xl sm:text-5xl md:text-7xl text-offwhite leading-[1.1] tracking-tight text-balance animate-reveal-up"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          {t.hero.title}
        </h1>
        <p
          className="text-offwhite/70 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-body opacity-0 animate-reveal-up"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          {t.hero.subtitle}
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0 animate-reveal-up"
          style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
        >
          <Link
            to="/layiheler"
            className="gold-gradient text-gold-foreground px-8 py-3.5 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            {t.hero.cta1}
          </Link>
          <Link
            to="/elaqe"
            className="border border-offwhite/40 text-offwhite px-8 py-3.5 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors active:scale-[0.97]"
          >
            {t.hero.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
