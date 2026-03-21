import { useLanguage } from '@/lib/i18n';
import ScrollReveal from '../ScrollReveal';

const clients = [
  { name: 'Vertex Development MMC' },
  { name: 'Panorama İnşaat Şirkəti' },
];

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
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((c) => (
              <div key={c.name} className="bg-charcoal text-offwhite px-10 py-6 font-heading text-xl tracking-wider">
                {c.name}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClientsSection;
