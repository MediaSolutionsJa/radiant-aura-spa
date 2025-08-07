import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import BusinessInfo from '@/components/BusinessInfo';
import Mission from '@/components/Mission';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedServices />
      <BusinessInfo />
      <Mission />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
