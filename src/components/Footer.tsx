import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-luxury rounded-full flex items-center justify-center">
                <span className="text-luxury-gold-foreground font-serif font-bold">AE</span>
              </div>
              <span className="font-serif text-2xl font-bold text-spa-dark-foreground">Aura Essence</span>
            </div>
            <p className="text-spa-dark-foreground/80 mb-6 max-w-md">
              Luxurious sanctuary where beauty, wellness, and inner glow meet. 
              Enhancing your natural radiance through personalized treatments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-spa-dark-foreground/70 hover:text-luxury-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-spa-dark-foreground/70 hover:text-luxury-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-spa-dark-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-spa-dark-foreground/70 hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-spa-dark-foreground/70 hover:text-luxury-gold transition-colors">Services</Link></li>
              <li><Link to="/packages" className="text-spa-dark-foreground/70 hover:text-luxury-gold transition-colors">Packages</Link></li>
              <li><Link to="/gallery" className="text-spa-dark-foreground/70 hover:text-luxury-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-spa-dark-foreground/70 hover:text-luxury-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-spa-dark-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-spa-dark-foreground/70">
                <Phone className="w-4 h-4" />
                <span>(860) 849-8064</span>
              </li>
              <li className="flex items-center space-x-2 text-spa-dark-foreground/70">
                <Mail className="w-4 h-4" />
                <span>hello@auraessence.com</span>
              </li>
              <li className="flex items-start space-x-2 text-spa-dark-foreground/70">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Wellness Ave<br />Luxury District, CT 06001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-spa-dark-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-spa-dark-foreground/60 text-sm">
            © 2024 Aura Essence LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/policies" className="text-spa-dark-foreground/60 hover:text-luxury-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/policies" className="text-spa-dark-foreground/60 hover:text-luxury-gold text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;