const Logo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={`h-10 w-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="4" fill="hsl(0 0% 10%)" />
    <text x="20" y="27" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="16" fill="hsl(42 52% 54%)" letterSpacing="1">AD</text>
    <rect x="8" y="32" width="24" height="1.5" rx="0.5" fill="hsl(42 52% 54%)" opacity="0.6" />
  </svg>
);

export default Logo;
