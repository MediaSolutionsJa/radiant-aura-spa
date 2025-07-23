import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import signatureFacial from '@/assets/signature-facial.jpg';
import bodyTreatment from '@/assets/body-treatment.jpg';
import lashExtensions from '@/assets/lash-extensions.jpg';

const FeaturedServices = () => {
  const services = [
    {
      title: 'AE Signature Facial',
      description: 'Our signature facial uses high-frequency technology, exfoliation, and serums to restore your skin\'s natural balance.',
      price: '$75',
      duration: '60 mins',
      image: signatureFacial,
    },
    {
      title: 'Full Body Treatment',
      description: 'A complete skincare and relaxation session that includes cleansing, exfoliation, and nourishing treatments.',
      price: '$130',
      duration: '1h 30m',
      image: bodyTreatment,
    },
    {
      title: 'Lash Extensions',
      description: 'Enhance your natural beauty with our professional lash extension services for a glamorous look.',
      price: 'From $100',
      duration: '3 hours',
      image: lashExtensions,
    },
  ];

  return (
    <section className="section-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-spa text-foreground mb-4">
            Signature <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our most popular treatments designed to rejuvenate your skin and restore your inner glow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {service.duration}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <span className="service-price">{service.price}</span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button asChild className="btn-spa w-full">
                  <Link to="/contact">Book Treatment</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="btn-outline-spa">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;