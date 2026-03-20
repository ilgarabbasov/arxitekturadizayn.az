import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/lib/i18n';
import { ArrowUpRight } from 'lucide-react';

import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

type Category = 'all' | 'residential' | 'nonResidential' | 'urban' | 'industrial';

const projects = [
  { img: project1, category: 'residential' as const, nameAz: 'Nərimanov Yaşayış Kompleksi', nameRu: 'ЖК Нариманов', nameEn: 'Narimanov Residential Complex', year: '2023', area: '45,000 m²' },
  { img: project2, category: 'nonResidential' as const, nameAz: 'Bakı Biznes Mərkəzi', nameRu: 'Бизнес-центр Баку', nameEn: 'Baku Business Center', year: '2022', area: '32,000 m²' },
  { img: project3, category: 'urban' as const, nameAz: 'Ağ Şəhər Masterplanı', nameRu: 'Мастерплан Белого Города', nameEn: 'White City Masterplan', year: '2021', area: '120 ha' },
  { img: project4, category: 'industrial' as const, nameAz: 'Sumqayıt Sənaye Parkı', nameRu: 'Промпарк Сумгаит', nameEn: 'Sumgayit Industrial Park', year: '2020', area: '85,000 m²' },
  { img: project5, category: 'residential' as const, nameAz: 'Səbail Premium Rezidensiya', nameRu: 'Премиум-резиденция Сабаил', nameEn: 'Sabail Premium Residence', year: '2024', area: '12,000 m²' },
  { img: project6, category: 'residential' as const, nameAz: 'Mərdəkan Villa Layihəsi', nameRu: 'Вилла-проект Мардакан', nameEn: 'Mardakan Villa Project', year: '2023', area: '800 m²' },
];

const Projects = () => {
  const { t, lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const initialFilter = (searchParams.get('filter') as Category) || 'all';
  const [filter, setFilter] = useState<Category>(initialFilter);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filters: { key: Category; label: string }[] = [
    { key: 'all', label: t.featuredProjects.all },
    { key: 'residential', label: t.featuredProjects.residential },
    { key: 'nonResidential', label: t.featuredProjects.nonResidential },
    { key: 'urban', label: t.featuredProjects.urban },
    { key: 'industrial', label: t.featuredProjects.industrial },
  ];

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const getName = (p: typeof projects[0]) => lang === 'ru' ? p.nameRu : lang === 'en' ? p.nameEn : p.nameAz;
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
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`text-sm uppercase tracking-wide px-4 py-2 transition-colors ${filter === f.key ? 'text-gold border-b-2 border-gold' : 'text-midgrey hover:text-charcoal'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ScrollReveal key={`${p.nameAz}-${filter}`} delay={i * 80}>
                <div className="group relative overflow-hidden cursor-pointer aspect-[4/3]" onClick={() => setSelectedProject(p)}>
                  <img src={p.img} alt={getName(p)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-500 flex items-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-gold text-xs uppercase tracking-wider">{getCatLabel(p.category)}</span>
                      <h3 className="text-offwhite font-heading text-xl mt-1">{getName(p)}</h3>
                    </div>
                    <ArrowUpRight className="absolute top-6 right-6 text-gold w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-charcoal/80 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-offwhite max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-reveal-up" style={{ animationFillMode: 'forwards' }} onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.img} alt={getName(selectedProject)} className="w-full aspect-video object-cover" />
            <div className="p-8">
              <span className="text-gold text-xs uppercase tracking-wider">{getCatLabel(selectedProject.category)}</span>
              <h2 className="font-heading text-3xl mt-2 mb-6">{getName(selectedProject)}</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-midgrey">{lang === 'ru' ? 'Год' : lang === 'en' ? 'Year' : 'İl'}:</span> <span className="font-medium">{selectedProject.year}</span></div>
                <div><span className="text-midgrey">{lang === 'ru' ? 'Площадь' : lang === 'en' ? 'Area' : 'Sahə'}:</span> <span className="font-medium">{selectedProject.area}</span></div>
              </div>
              <button onClick={() => setSelectedProject(null)} className="mt-8 border border-charcoal px-6 py-2 text-sm uppercase tracking-wide hover:bg-charcoal hover:text-offwhite transition-colors">
                {lang === 'ru' ? 'Закрыть' : lang === 'en' ? 'Close' : 'Bağla'}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Projects;
