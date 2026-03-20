import { useLanguage } from '@/lib/i18n';
import ScrollReveal from '../ScrollReveal';

const clientNames = ['SOCAR', 'Azərenerji', 'Bakı Metropoliteni', 'AzerGold', 'Port of Baku', 'Azərbaycan Dəmir Yolları', 'ASAN Xidmət', 'Azersu'];

const ClientsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl text-center mb-4">{t.clients.title}</h2>
          <p className="text-midgrey text-center mb-16 max-w-xl mx-auto">{t.clients.trust}</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clientNames.map((name) => (
              <div
                key={name}
                className="text-midgrey/40 hover:text-charcoal text-lg font-heading tracking-wider transition-colors cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClientsSection;
