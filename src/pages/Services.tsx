import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const facials = [
    {
      name: "Mini Facial",
      duration: "45 mins",
      price: "$45",
      description: "This express facial includes cleansing, exfoliation, a hydrating mask, and SPF protection. Perfect for regular upkeep.",
      includes: ["Cleanse", "Exfoliation", "Masque", "Tone", "Moisturizer | SPF"]
    },
    {
      name: "AE Signature Facial",
      duration: "60 mins",
      price: "$75",
      description: "Our signature facial uses high-frequency technology, exfoliation, and serums to restore your skin's natural balance.",
      includes: ["Double Cleanse", "Exfoliation", "Masque", "Tone", "High Frequency", "Serum", "Moisturizer | SPF"],
      featured: true
    },
    {
      name: "Lymphatic Drainage Facial",
      duration: "1h 10m",
      price: "$90",
      description: "This treatment stimulates lymph flow to reduce puffiness and detoxify the skin. Perfect for improving circulation.",
      includes: ["Double Cleanse", "Exfoliation", "Tone", "Lymphatic Massage", "High Frequency", "Moisturizer | SPF"]
    },
    {
      name: "AE Luxe | Event Ready",
      duration: "1h 20m",
      price: "$120",
      description: "Designed for glowing skin before a big event. Includes massage, Gua Sha, LED therapy and more.",
      includes: ["Double Cleanse", "Exfoliation", "Tone", "Massage | Gua Sha | LED & High Frequency", "Serum", "Moisturizer | SPF"]
    }
  ];

  const childrenServices = [
    {
      name: "Mini Facial + High Frequency",
      price: "$35",
      description: "Cleanses and treats mild breakouts, promoting clear and healthy skin."
    },
    {
      name: "Mini Back Facial with Gua Sha or Hot Stones",
      price: "$50",
      description: "Soothes tension and deeply cleanses the back with relaxing techniques."
    },
    {
      name: "Eye & Lip Treatment",
      price: "$40",
      description: "Hydrates and brightens delicate areas with kid-friendly products."
    },
    {
      name: "LED Light Therapy + Massage + Exfoliation with Paraffin",
      price: "$55",
      description: "Promotes relaxation while boosting skin renewal and hydration."
    }
  ];

  const bodyTreatments = [
    {
      name: "Back Facial",
      duration: "60 mins",
      price: "$65",
      description: "Targets back acne, texture, and dryness with deep cleansing, exfoliation, and hydrating mask.",
      includes: ["Cleanse", "Exfoliation", "Tone", "Masque", "High Frequency", "Massage", "Serum | Moisturizer"]
    },
    {
      name: "Full Body Treatment",
      duration: "1h 30m",
      price: "$130",
      description: "A full-body skincare and relaxation session that improves circulation and smooths skin.",
      includes: ["Cleanse", "Exfoliation", "Tone", "Masque", "High Frequency", "Massage", "Moisturizer"]
    },
    {
      name: "Custom Back Facial",
      duration: "1h 15m",
      price: "Price Varies",
      description: "Tailored to your skin's needs. Perfect for personalizing your glow and targeting specific concerns.",
      includes: ["Service Designed By You", "Cleanse", "Exfoliation", "Tone", "Masque", "High Frequency", "Massage", "Moisturizer"]
    }
  ];

  const lashServices = [
    {
      name: "Classic Set",
      duration: "Approx. 3 hours",
      price: "$100",
      description: "Enhances natural lashes with a clean, elegant look. One extension per lash for length and definition."
    },
    {
      name: "Hybrid Set",
      duration: "Approx. 3 hours",
      price: "$120",
      description: "Perfect mix of classic and volume lashes providing both texture and fullness."
    },
    {
      name: "Volume Set",
      duration: "Approx. 3 hours",
      price: "$130",
      description: "Fuller, fluffier appearance using handmade fans. Perfect for bold, glamorous lashes."
    }
  ];

  const waxingServices = [
    { name: "Brows", duration: "15 mins", price: "$12" },
    { name: "Brows + Mapping", duration: "20 mins", price: "$20" },
    { name: "Top Lip", duration: "10 mins", price: "$8" },
    { name: "Chin", duration: "10 mins", price: "$5" },
    { name: "Sideburns", duration: "15 mins", price: "$10" },
    { name: "Full Face", duration: "30 mins", price: "$25" },
    { name: "Underarm", duration: "15 mins", price: "$20" },
    { name: "Full Arm", duration: "30 mins", price: "$30" },
    { name: "Bikini", duration: "30 mins", price: "$40" }
  ];

  const addOns = [
    { name: "Eye Treatment", price: "$35" },
    { name: "Lip Treatment", price: "$20" },
    { name: "LED Light Therapy", price: "$15" },
    { name: "BT Micro", price: "$15" },
    { name: "Galvanic/Radio Therapy", price: "$20" },
    { name: "Gua Sha", price: "$15" },
    { name: "Lymphatic Drainage", price: "$45" },
    { name: "Pressure Points", price: "$15" },
    { name: "Extraction", price: "$15" },
    { name: "Aromatherapy", price: "$10" },
    { name: "Cooling Globes", price: "$5" },
    { name: "Paraffin Wax Service", price: "$30" },
    { name: "Hot Stones", price: "$10" },
    { name: "Rubber Masque", price: "$25" },
    { name: "Jelly Masque", price: "$15" },
    { name: "Sheet Mask", price: "$10" },
    { name: "Salt/Sugar Crystal Scrub", price: "$5" }
  ];

  const serumBoosts = [
    { name: "Vitamin C", price: "$5", benefit: "Brightens & targets hyperpigmentation" },
    { name: "Retinol", price: "$5", benefit: "Improves texture & cell turnover" },
    { name: "Niacinamide", price: "$5", benefit: "Anti-inflammatory & soothes" },
    { name: "Hyaluronic Acid", price: "$5", benefit: "Deep hydration" }
  ];

  const ServiceCard = ({ service, featured = false }: { service: any; featured?: boolean }) => (
    <div className={`service-card ${featured ? 'ring-2 ring-primary shadow-glow' : ''}`}>
      {featured && (
        <div className="bg-primary text-primary-foreground text-center py-2 font-semibold text-sm">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
          <div className="text-right">
            <span className="service-price">{service.price}</span>
            {service.duration && <p className="text-sm text-muted-foreground">{service.duration}</p>}
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {service.description}
        </p>
        
        {service.includes && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-foreground mb-2">Includes:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              {service.includes.map((item: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {service.benefit && (
          <p className="text-sm text-primary font-medium mb-4">{service.benefit}</p>
        )}
        
        <Button asChild className="btn-spa w-full">
          <Link to="/contact">Book Now</Link>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-gradient py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-luxury text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of luxury treatments designed to enhance your natural beauty and wellness.
          </p>
        </div>
      </section>

      {/* Facials */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-spa text-foreground mb-12 text-center">
            ✨ <span className="text-primary">Facials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facials.map((service, index) => (
              <ServiceCard key={index} service={service} featured={service.featured} />
            ))}
          </div>
        </div>
      </section>

      {/* Children's Services */}
      <section className="section-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-spa text-foreground mb-4">
              👩‍👧‍👦 <span className="text-primary">Children's Facials</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">Ages 10–14 | 45–60 mins</p>
            <p className="text-sm font-semibold text-primary">Note: Minimum of 2 services required per session</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {childrenServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Body Treatments */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-spa text-foreground mb-12 text-center">
            🌿 <span className="text-primary">Body Treatments</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bodyTreatments.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Lash Extensions */}
      <section className="section-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-spa text-spa-dark-foreground mb-12 text-center">
            👁️‍🗨️ <span className="text-luxury-gold">Lash Extensions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lashServices.map((service, index) => (
              <div key={index} className="card-dark hover-scale">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-spa-dark-foreground">{service.name}</h3>
                  <span className="text-2xl font-bold text-luxury-gold">{service.price}</span>
                </div>
                <p className="text-sm text-spa-dark-foreground/70 mb-4">{service.duration}</p>
                <p className="text-spa-dark-foreground/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button asChild className="btn-luxury w-full">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waxing */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-spa text-foreground mb-12 text-center">
            🌷 <span className="text-primary">Waxing Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {waxingServices.map((service, index) => (
              <div key={index} className="card-spa">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>
                  <span className="text-xl font-bold text-primary">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons and Serum Boosts */}
      <section className="section-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Add-ons */}
            <div>
              <h2 className="heading-spa text-foreground mb-8 text-center">
                💖 <span className="text-primary">Add-Ons</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {addOns.map((addon, index) => (
                  <div key={index} className="card-spa">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-foreground">{addon.name}</h3>
                      <span className="font-bold text-primary">{addon.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Serum Boosts */}
            <div>
              <h2 className="heading-spa text-foreground mb-8 text-center">
                🌿 <span className="text-primary">Serum Boosts</span>
              </h2>
              <div className="space-y-4">
                {serumBoosts.map((serum, index) => (
                  <div key={index} className="card-spa">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-foreground">{serum.name}</h3>
                        <p className="text-sm text-muted-foreground">{serum.benefit}</p>
                      </div>
                      <span className="font-bold text-primary">{serum.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-spa text-spa-dark-foreground mb-4">
            Ready to <span className="text-luxury-gold">Glow?</span>
          </h2>
          <p className="text-lg text-spa-dark-foreground/80 mb-8">
            Let your glow journey begin. Book your personalized treatment today.
          </p>
          <Button asChild className="btn-luxury text-lg px-12 py-4">
            <Link to="/contact">Book Your Treatment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;