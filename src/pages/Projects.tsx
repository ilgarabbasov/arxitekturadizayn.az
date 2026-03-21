import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/lib/i18n';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/components/home/FeaturedProjects';

type Category = 'all' | 'residential' | 'nonResidential' | 'urban' | 'industrial';

const Projects = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const initialFilter = (searchParams.get('filter') as Category) || 'all';
  const [filter, setFilter] = useState<Category>(initialFilter);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    document.title = `${t.projects.pageTitle} | Arxitektura və Dizayn`;
  }, [t]);

  const filters: { key: Category; label: string }[] = [
    { key: 'all', label: t.featuredProjects.all },
    { key: 'residential', label: t.featuredProjects.residential },
    { key: 'nonResidential', label: t.featuredProjects.nonResidential },
    { key: 'urban', label: t.featuredProjects.urban },
    { key: 'industrial', label: t.featuredProjects.industrial },
  ];

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const getCatLabel = (cat: string) => {
    const map: Record<string, string> = { residential: t.featuredProjects.residential, nonResidential: t.featuredProjects.nonResidential, urban: t.featuredProjects.urban, industrial: t.featuredProjects.industrial };
    return map[cat] || cat;
  };

  return (
    <Layout>
      <PageHero title={t.projects.pageTitle} />
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((f) => (
              <button key={f.key} onClick={() => setFilter(f.key)} className={`text-sm uppercase tracking-wide px-4 py-2 transition-colors ${filter === f.key ? 'text-gold border-b-2 border-gold' : 'text-midgrey hover:text-charcoal'}`}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ScrollReveal key={`${p.name}-${filter}`} delay={i * 80}>
                <div className="group relative overflow-hidden cursor-pointer aspect-[4/3]" onClick={() => setSelectedProject(p)}>
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-500 flex items-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-gold text-xs uppercase tracking-wider">{getCatLabel(p.category)}</span>
                      <h3 className="text-offwhite font-heading text-xl mt-1">{p.name}</h3>
                      <p className="text-offwhite/60 text-xs mt-1">{p.location} · {t.featuredProjects.sampleNote}</p>
                    </div>
                    <ArrowUpRight className="absolute top-6 right-6 text-gold w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-charcoal/80 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-offwhite max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-reveal-up" style={{ animationFillMode: 'forwards' }} onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.img} alt={selectedProject.name} className="w-full aspect-video object-cover" />
            <div className="p-8">
              <span className="text-gold text-xs uppercase tracking-wider">{getCatLabel(selectedProject.category)}</span>
              <h2 className="font-heading text-3xl mt-2 mb-6">{selectedProject.name}</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-midgrey">İl:</span> <span className="font-medium">{selectedProject.year}</span></div>
                <div><span className="text-midgrey">Sahə:</span> <span className="font-medium">{selectedProject.area}</span></div>
                <div><span className="text-midgrey">Yer:</span> <span className="font-medium">{selectedProject.location}</span></div>
              </div>
              <p className="text-xs text-midgrey mt-4">{t.featuredProjects.sampleNote}</p>
              <button onClick={() => setSelectedProject(null)} className="mt-8 border border-charcoal px-6 py-2 text-sm uppercase tracking-wide hover:bg-charcoal hover:text-offwhite transition-colors">
                Bağla
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Projects;
