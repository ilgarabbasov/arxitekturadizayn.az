import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import Logo from './Logo';
import { useLanguage, Language } from '@/lib/i18n';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navBg = scrolled || !isHome || mobileOpen ? 'bg-offwhite/95 backdrop-blur-sm shadow-sm' : 'bg-transparent';
  const textColor = scrolled || !isHome || mobileOpen ? 'text-charcoal' : 'text-offwhite';

  const langs: { code: Language; label: string }[] = [
    { code: 'az', label: 'AZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className={`${textColor} transition-colors`}><Logo /></Link>

          {/* Desktop */}
          <div className={`hidden lg:flex items-center gap-8 ${textColor}`}>
            <Link to="/" className="text-sm tracking-wide uppercase hover:text-gold transition-colors">{t.nav.home}</Link>
            <Link to="/haqqimizda" className="text-sm tracking-wide uppercase hover:text-gold transition-colors">{t.nav.about}</Link>

            <div className="relative group" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="text-sm tracking-wide uppercase hover:text-gold transition-colors flex items-center gap-1">
                {t.nav.services} <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 pt-2 animate-slide-down">
                  <div className="bg-offwhite shadow-lg rounded-sm py-2 min-w-[180px]">
                    <Link to="/layiheler" className="block px-4 py-2 text-sm text-charcoal hover:text-gold hover:bg-muted transition-colors">{t.nav.servicesDropdown.projects}</Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group" onMouseEnter={() => setActiveDropdown('projects')} onMouseLeave={() => setActiveDropdown(null)}>
              <Link to="/layiheler" className="text-sm tracking-wide uppercase hover:text-gold transition-colors flex items-center gap-1">
                {t.nav.projects} <ChevronDown className="w-3 h-3" />
              </Link>
              {activeDropdown === 'projects' && (
                <div className="absolute top-full left-0 pt-2 animate-slide-down">
                  <div className="bg-offwhite shadow-lg rounded-sm py-2 min-w-[180px]">
                    {Object.entries(t.nav.projectsDropdown).map(([key, label]) => (
                      <Link key={key} to={`/layiheler?filter=${key}`} className="block px-4 py-2 text-sm text-charcoal hover:text-gold hover:bg-muted transition-colors">{label}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/sifarisciler" className="text-sm tracking-wide uppercase hover:text-gold transition-colors">{t.nav.clients}</Link>
            <Link to="/meqaleler" className="text-sm tracking-wide uppercase hover:text-gold transition-colors">{t.nav.articles}</Link>
            <Link to="/elaqe" className="border border-gold text-gold px-5 py-2 text-sm tracking-wide uppercase hover:bg-gold hover:text-gold-foreground transition-colors">{t.nav.contact}</Link>

            <div className="flex items-center gap-1 ml-2">
              <Globe className="w-4 h-4 opacity-50" />
              {langs.map((l) => (
                <button key={l.code} onClick={() => setLang(l.code)} className={`text-xs px-1.5 py-0.5 transition-colors ${lang === l.code ? 'text-gold font-semibold' : 'opacity-50 hover:opacity-100'}`}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <button className={`lg:hidden ${textColor}`} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 animate-slide-down">
            <div className="flex flex-col gap-4 text-charcoal">
              <Link to="/" className="text-sm tracking-wide uppercase">{t.nav.home}</Link>
              <Link to="/haqqimizda" className="text-sm tracking-wide uppercase">{t.nav.about}</Link>
              <button onClick={() => setActiveDropdown(activeDropdown === 'services-m' ? null : 'services-m')} className="text-sm tracking-wide uppercase flex items-center gap-1 text-left">
                {t.nav.services} <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === 'services-m' && (
                <div className="pl-4 flex flex-col gap-2">
                  <Link to="/layiheler" className="text-sm text-midgrey">{t.nav.servicesDropdown.projects}</Link>
                </div>
              )}
              <button onClick={() => setActiveDropdown(activeDropdown === 'projects-m' ? null : 'projects-m')} className="text-sm tracking-wide uppercase flex items-center gap-1 text-left">
                {t.nav.projects} <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === 'projects-m' && (
                <div className="pl-4 flex flex-col gap-2">
                  {Object.entries(t.nav.projectsDropdown).map(([key, label]) => (
                    <Link key={key} to={`/layiheler?filter=${key}`} className="text-sm text-midgrey">{label}</Link>
                  ))}
                </div>
              )}
              <Link to="/sifarisciler" className="text-sm tracking-wide uppercase">{t.nav.clients}</Link>
              <Link to="/meqaleler" className="text-sm tracking-wide uppercase">{t.nav.articles}</Link>
              <Link to="/elaqe" className="border border-gold text-gold px-5 py-2 text-sm tracking-wide uppercase text-center hover:bg-gold hover:text-gold-foreground transition-colors">{t.nav.contact}</Link>
              <div className="flex items-center gap-2 pt-2">
                <Globe className="w-4 h-4 opacity-50" />
                {langs.map((l) => (
                  <button key={l.code} onClick={() => setLang(l.code)} className={`text-xs px-2 py-1 ${lang === l.code ? 'text-gold font-semibold' : 'opacity-50'}`}>{l.label}</button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
