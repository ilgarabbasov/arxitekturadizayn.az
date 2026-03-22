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
            viewBox="0 0 900 220"
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
            <rect width="900" height="220" fill="none" />
            <rect width="900" height="220" fill="url(#grid)" rx="4" />
            <rect width="900" height="220" fill="url(#gridMajor)" rx="4" />

            {/* Top dimension line */}
            <line x1="80" y1="25" x2="820" y2="25" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            <line x1="80" y1="20" x2="80" y2="30" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            <line x1="820" y1="20" x2="820" y2="30" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            {/* Dimension arrows */}
            <polygon points="80,25 90,22 90,28" fill="hsl(var(--offwhite))" opacity="0.5" />
            <polygon points="820,25 810,22 810,28" fill="hsl(var(--offwhite))" opacity="0.5" />
            <text x="450" y="22" textAnchor="middle" fill="hsl(var(--offwhite))" fontSize="9" fontFamily="Montserrat, sans-serif" opacity="0.5">740</text>

            {/* Line 1: ARXİTEKTURA VƏ DİZAYNDA */}
            <text
              x="450"
              y="90"
              textAnchor="middle"
              fontFamily="Montserrat, sans-serif"
              fontWeight="700"
              fontSize="52"
              letterSpacing="6"
              fill="url(#hatch)"
              stroke="hsl(var(--offwhite))"
              strokeWidth="1.2"
            >
              ARXİTEKTURA VƏ DİZAYNDA
            </text>

            {/* Line 2: YENİ STANDARTLAR */}
            <text
              x="450"
              y="155"
              textAnchor="middle"
              fontFamily="Montserrat, sans-serif"
              fontWeight="700"
              fontSize="58"
              letterSpacing="8"
              fill="url(#crosshatch)"
              stroke="hsl(var(--offwhite))"
              strokeWidth="1.5"
            >
              YENİ STANDARTLAR
            </text>

            {/* Bottom dimension line */}
            <line x1="80" y1="185" x2="820" y2="185" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            <line x1="80" y1="180" x2="80" y2="190" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            <line x1="820" y1="180" x2="820" y2="190" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.5" />
            <polygon points="80,185 90,182 90,188" fill="hsl(var(--offwhite))" opacity="0.5" />
            <polygon points="820,185 810,182 810,188" fill="hsl(var(--offwhite))" opacity="0.5" />

            {/* Tick marks / detail indicators */}
            <line x1="40" y1="60" x2="40" y2="170" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />
            <line x1="35" y1="60" x2="45" y2="60" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />
            <line x1="35" y1="170" x2="45" y2="170" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />
            <text x="38" y="118" textAnchor="middle" fill="hsl(var(--offwhite))" fontSize="8" fontFamily="Montserrat, sans-serif" opacity="0.35" transform="rotate(-90, 38, 118)">110</text>

            {/* Right side tick */}
            <line x1="860" y1="60" x2="860" y2="170" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />
            <line x1="855" y1="60" x2="865" y2="60" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />
            <line x1="855" y1="170" x2="865" y2="170" stroke="hsl(var(--offwhite))" strokeWidth="0.5" opacity="0.35" />

            {/* Corner detail marks */}
            <path d="M 70,40 L 70,35 L 75,35" fill="none" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.4" />
            <path d="M 830,40 L 830,35 L 825,35" fill="none" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.4" />
            <path d="M 70,195 L 70,200 L 75,200" fill="none" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.4" />
            <path d="M 830,195 L 830,200 L 825,200" fill="none" stroke="hsl(var(--offwhite))" strokeWidth="0.7" opacity="0.4" />

            {/* Small scale reference */}
            <text x="850" y="205" textAnchor="end" fill="hsl(var(--offwhite))" fontSize="7" fontFamily="Montserrat, sans-serif" opacity="0.3">1:100</text>
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
