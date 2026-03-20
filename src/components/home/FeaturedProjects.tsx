import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import ScrollReveal from '../ScrollReveal';

import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

type Category = 'all' | 'residential' | 'nonResidential' | 'urban' | 'industrial';

const projects = [
  { img: project1, category: 'residential' as const, nameAz: 'Nərimanov Yaşayış Kompleksi', nameRu: 'ЖК Нариманов', nameEn: 'Narimanov Residential Complex' },
  { img: project2, category: 'nonResidential' as const, nameAz: 'Bakı Biznes Mərkəzi', nameRu: 'Бизнес-центр Баку', nameEn: 'Baku Business Center' },
  { img: project3, category: 'urban' as const, nameAz: 'Ağ Şəhər Masterplanı', nameRu: 'Мастерплан Белого Города', nameEn: 'White City Masterplan' },
  { img: project4, category: 'industrial' as const, nameAz: 'Sumqayıt Sənaye Parkı', nameRu: 'Промпарк Сумгаит', nameEn: 'Sumgayit Industrial Park' },
  { img: project5, category: 'residential' as const, nameAz: 'Səbail Premium Rezidensiya', nameRu: 'Премиум-резиденция Сабаил', nameEn: 'Sabail Premium Residence' },
  { img: project6, category: 'residential' as const, nameAz: 'Mərdəkan Villa Layihəsi', nameRu: 'Вилла-проект Мардакан', nameEn: 'Mardakan Villa Project' },
];

const FeaturedProjects = () => {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<Category>('all');

  const filters: { key: Category; label: string }[] = [
    { key: 'all', label: t.featuredProjects.all },
    { key: 'residential', label: t.featuredProjects.residential },
    { key: 'nonResidential', label: t.featuredProjects.nonResidential },
    { key: 'urban', label: t.featuredProjects.urban },
    { key: 'industrial', label: t.featuredProjects.industrial },
  ];

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const getName = (p: typeof projects[0]) => lang === 'ru' ? p.nameRu : lang === 'en' ? p.nameEn : p.nameAz;

  const getCategoryLabel = (cat: string) => {
    const map: Record<string, string> = {
      residential: t.featuredProjects.residential,
      nonResidential: t.featuredProjects.nonResidential,
      urban: t.featuredProjects.urban,
      industrial: t.featuredProjects.industrial,
    };
    return map[cat] || cat;
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl text-center mb-12">
            {t.featuredProjects.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`text-sm uppercase tracking-wide px-4 py-2 transition-colors ${
                  filter === f.key ? 'text-gold border-b-2 border-gold' : 'text-midgrey hover:text-charcoal'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ScrollReveal key={`${p.nameAz}-${filter}`} delay={i * 80}>
              <div className="group relative overflow-hidden cursor-pointer aspect-[4/3]">
                <img
                  src={p.img}
                  alt={getName(p)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-500 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-gold text-xs uppercase tracking-wider">{getCategoryLabel(p.category)}</span>
                    <h3 className="text-offwhite font-heading text-xl mt-1">{getName(p)}</h3>
                  </div>
                  <ArrowUpRight className="absolute top-6 right-6 text-gold w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <Link
              to="/layiheler"
              className="border border-charcoal text-charcoal px-8 py-3 text-sm uppercase tracking-wide hover:bg-charcoal hover:text-offwhite transition-colors active:scale-[0.97]"
            >
              {t.featuredProjects.viewAll}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedProjects;
