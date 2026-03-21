import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '@/lib/i18n';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal text-offwhite">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Logo className="text-offwhite mb-4" />
            <p className="text-sm text-offwhite/60 mt-2">{t.footer.tagline}</p>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-4 text-gold">{t.footer.quickLinks}</h4>
            <div className="flex flex-col gap-2 text-sm text-offwhite/60">
              <Link to="/haqqimizda" className="hover:text-gold transition-colors">{t.nav.about}</Link>
              <Link to="/layiheler" className="hover:text-gold transition-colors">{t.nav.projects}</Link>
              <Link to="/meqaleler" className="hover:text-gold transition-colors">{t.nav.articles}</Link>
              <Link to="/sifarisciler" className="hover:text-gold transition-colors">{t.nav.clients}</Link>
              <Link to="/elaqe" className="hover:text-gold transition-colors">{t.nav.contact}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-4 text-gold">{t.footer.contactInfo}</h4>
            <div className="flex flex-col gap-2 text-sm text-offwhite/60">
              <p>{t.footer.address}</p>
              <p>{t.footer.phone}</p>
              <p>{t.footer.email}</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-offwhite/40 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-offwhite/40 hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-offwhite/40 hover:text-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-offwhite/10 mt-12 pt-8 text-center text-xs text-offwhite/40">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
