import heroBg from '@/assets/hero-bg.jpg';

const PageHero = ({ title }: { title: string }) => (
  <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-charcoal/70" />
    <h1 className="relative z-10 font-heading text-4xl md:text-6xl text-offwhite tracking-tight animate-reveal-up" style={{ animationFillMode: 'forwards' }}>
      {title}
    </h1>
  </section>
);

export default PageHero;
