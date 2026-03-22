import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Architecture" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        {/* Architectural Blueprint Heading */}
        <div className="mx-auto mb-8">
          <svg
            viewBox="0 0 1000 220"
            className="w-full max-w-4xl mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Hatching pattern for letter fill */}
              <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="6" stroke="hsl(var(--offwhite))" strokeWidth="1.2" opacity="0.7" />
              </pattern>
              <pattern id="crosshatch" width="6" height="6" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="6" y2="6" stroke="hsl(var(--offwhite))" strokeWidth="0.8" opacity="0.5" />
                <line x1="6" y1="0" x2="0" y2="6" stroke="hsl(var(--offwhite))" strokeWidth="0.8" opacity="0.3" />
              </pattern>
              {/* Grid background pattern */}
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--offwhite))" strokeWidth="0.3" opacity="0.15" />
              </pattern>
              <pattern id="gridMajor" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>

            {/* Grid background */}
            <rect width="1000" height="220" fill="none" />
            <rect width="1000" height="220" fill="url(#grid)" rx="4" />
            <rect width="1000" height="220" fill="url(#gridMajor)" rx="4" />

            {/* Top dimension line */}
            <line x1="50" y1="25" x2="950" y2="25" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            <line x1="50" y1="20" x2="50" y2="30" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            <line x1="950" y1="20" x2="950" y2="30" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            {/* Dimension arrows */}
            <polygon points="50,25 60,22 60,28" fill="hsl(var(--offwhite))" opacity="0.5" />
            <polygon points="950,25 940,22 940,28" fill="hsl(var(--offwhite))" opacity="0.5" />
            <text x="500" y="22" textAnchor="middle" fill="hsl(var(--offwhite))" fontSize="9" fontFamily="Montserrat, sans-serif" opacity="0.5">900</text>

            {/* Line 1: ARXİTEKTURA VƏ DİZAYNDA */}
            <text
              x="500"
              y="90"
              textAnchor="middle"
              fontFamily="Montserrat, sans-serif"
              fontWeight="700"
              fontSize="48"
              letterSpacing="5"
              fill="url(#hatch)"
              stroke="hsl(var(--offwhite))"
              strokeWidth="1.2"
            >
              {t.hero.heroLine1}
            </text>

            {/* Line 2: YENİ STANDARTLAR */}
            <text
              x="500"
              y="155"
              textAnchor="middle"
              fontFamily="Montserrat, sans-serif"
              fontWeight="700"
              fontSize="56"
              letterSpacing="8"
              fill="url(#crosshatch)"
              stroke="hsl(var(--offwhite))"
              strokeWidth="1.5"
            >
              YENİ STANDARTLAR
            </text>

            {/* Bottom dimension line */}
            <line x1="50" y1="185" x2="950" y2="185" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            <line x1="50" y1="180" x2="50" y2="190" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            <line x1="950" y1="180" x2="950" y2="190" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            <polygon points="50,185 60,182 60,188" fill="hsl(var(--offwhite))" opacity="0.5" />
            <polygon points="950,185 940,182 940,188" fill="hsl(var(--offwhite))" opacity="0.5" />

            {/* Tick marks / detail indicators */}
            <line x1="25" y1="60" x2="25" y2="170" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />
            <line x1="20" y1="60" x2="30" y2="60" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />
            <line x1="20" y1="170" x2="30" y2="170" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />
            <text x="23" y="118" textAnchor="middle" fill="hsl(var(--offwhite))" fontSize="8" fontFamily="Montserrat, sans-serif" opacity="0.35" transform="rotate(-90, 23, 118)">110</text>

            {/* Right side tick */}
            <line x1="975" y1="60" x2="975" y2="170" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />
            <line x1="970" y1="60" x2="980" y2="60" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />
            <line x1="970" y1="170" x2="980" y2="170" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />

            {/* Corner detail marks */}
            <path d="M 40,40 L 40,35 L 45,35" fill="none" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.4" />
            <path d="M 960,40 L 960,35 L 955,35" fill="none" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.4" />
            <path d="M 40,195 L 40,200 L 45,200" fill="none" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.4" />
            <path d="M 960,195 L 960,200 L 955,200" fill="none" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.4" />

            {/* Small scale reference */}
            <text x="970" y="205" textAnchor="end" fill="hsl(var(--offwhite))" fontSize="7" fontFamily="Montserrat, sans-serif" opacity="0.3">1:100</text>
          </svg>
        </div>

        <p
          className="text-offwhite/70 text-lg md:text-xl mt-6 max-w-2xl mx-auto opacity-0 animate-reveal-up"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          {t.hero.subtitle}
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0 animate-reveal-up"
          style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
        >
          <Link to="/layiheler" className="gold-gradient text-gold-foreground px-8 py-3.5 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
            {t.hero.cta1}
          </Link>
          <Link to="/elaqe" className="border border-offwhite/40 text-offwhite px-8 py-3.5 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors active:scale-[0.97]">
            {t.hero.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
