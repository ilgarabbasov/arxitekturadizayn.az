import { Ruler, Palette, MapPin, ClipboardList } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import ScrollReveal from '../ScrollReveal';

const icons = [Ruler, Palette, MapPin, ClipboardList];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl text-offwhite text-center mb-16">
            {t.services.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group p-8 border border-offwhite/10 hover:border-gold/40 transition-colors">
                  <Icon className="w-8 h-8 text-gold mb-6" />
                  <h3 className="font-heading text-xl text-offwhite mb-3">{item.title}</h3>
                  <p className="text-offwhite/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
