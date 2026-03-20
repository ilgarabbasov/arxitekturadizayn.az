import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import ScrollReveal from '../ScrollReveal';

const CTABanner = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl text-offwhite mb-8 text-balance">
            {t.cta.title}
          </h2>
          <Link
            to="/elaqe"
            className="inline-block gold-gradient text-gold-foreground px-10 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            {t.cta.button}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTABanner;
