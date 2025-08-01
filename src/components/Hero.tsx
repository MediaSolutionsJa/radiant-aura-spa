import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-spa.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury spa treatment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-spa-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="heading-luxury text-spa-dark-foreground mb-6">
          Glow From Within.
          <br />
          <span className="text-luxury-gold">Radiate Confidence.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-spa-dark-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Luxurious facials, body treatments, and beauty rituals designed just for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="btn-luxury text-lg px-12 py-4 text-spa-sage-dark">
            <Link to="/contact">Book Now</Link>
          </Button>
          
          <Button asChild variant="outline" className="btn-outline-spa text-lg px-12 py-4 border-spa-dark-foreground text-black hover:bg-spa-dark-foreground hover:text-spa-dark">
            <Link to="/services">View Services</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-spa-dark-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-spa-dark-foreground rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;