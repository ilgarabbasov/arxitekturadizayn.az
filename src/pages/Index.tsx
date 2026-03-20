import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ClientsSection from '@/components/home/ClientsSection';
import ArticlesPreview from '@/components/home/ArticlesPreview';
import CTABanner from '@/components/home/CTABanner';

const Index = () => (
  <Layout>
    <HeroSection />
    <AboutPreview />
    <ServicesSection />
    <FeaturedProjects />
    <ClientsSection />
    <ArticlesPreview />
    <CTABanner />
  </Layout>
);

export default Index;
