const Logo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={`h-10 w-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stylized AD monogram with angular architectural lines */}
    <path d="M5 36L18 4H22L35 36H30.5L27.5 28H12.5L9.5 36H5ZM14 24H26L20 8L14 24Z" fill="currentColor" />
    <path d="M32 4H43C48 4 52 6 54.5 9.5C57 13 57.5 17 57.5 20C57.5 23 57 27 54.5 30.5C52 34 48 36 43 36H32V4ZM36.5 8V32H43C46.5 32 49.5 30.5 51.5 28C53.5 25.5 54 22.5 54 20C54 17.5 53.5 14.5 51.5 12C49.5 9.5 46.5 8 43 8H36.5Z" fill="currentColor" />
    {/* Architectural accent line */}
    <rect x="0" y="38" width="60" height="1.5" fill="hsl(42, 52%, 54%)" />
  </svg>
);

export default Logo;
