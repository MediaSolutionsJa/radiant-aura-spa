import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Crown } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: "Mommy & Me",
      icon: Heart,
      description: "A special bonding experience for mothers and daughters. Enjoy relaxing treatments together in our peaceful environment.",
      includes: [
        "Choice of any facial service for both",
        "Complimentary herbal tea",
        "Relaxing aromatherapy",
        "Special photo session",
        "Take-home skincare samples"
      ],
      price: "Custom Pricing",
      duration: "2-3 hours",
      highlight: "Perfect for ages 10-14 with mom"
    },
    {
      name: "Couples Package",
      icon: Users,
      description: "Reconnect and unwind together with side-by-side treatments in our couples suite.",
      includes: [
        "Side-by-side treatment rooms",
        "Choice of signature facials or body treatments",
        "Champagne or sparkling cider",
        "Chocolate-covered strawberries",
        "Extended relaxation time"
      ],
      price: "Custom Pricing",
      duration: "2.5-3 hours",
      highlight: "Romantic and rejuvenating"
    },
    {
      name: "Bestie's Spa Day",
      icon: Crown,
      description: "Celebrate friendship with your closest friends. Perfect for birthdays, bachelorettes, or just because!",
      includes: [
        "Group treatment sessions",
        "Mini facial or body treatment for each guest",
        "Light refreshments and beverages",
        "Group photos and memories",
        "Special group discount",
        "Custom playlist of your choice"
      ],
      price: "Custom Pricing",
      duration: "3-4 hours",
      highlight: "Groups of 3-6 people"
    }
  ];

  const addOnOptions = [
    "Lash extensions for the group",
    "Professional makeup application",
    "Nail services",
    "Extended aromatherapy session",
    "Healthy spa lunch",
    "Customized gift bags",
    "Professional photography",
    "Meditation and wellness coaching"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-gradient py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-luxury text-foreground mb-6">
            Custom <span className="text-primary">Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create lasting memories with our specially curated group experiences designed for bonding, celebration, and relaxation.
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <div key={index} className="service-card">
                  <div className="p-8">
                    {/* Icon and Title */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">{pkg.name}</h3>
                      <p className="text-primary font-medium">{pkg.highlight}</p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                      {pkg.description}
                    </p>

                    {/* Pricing and Duration */}
                    <div className="text-center mb-6">
                      <div className="service-price mb-1">{pkg.price}</div>
                      <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                    </div>

                    {/* Includes */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-3">Package Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button asChild className="btn-spa w-full">
                      <Link to="/contact">Customize Package</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="section-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-spa text-spa-dark-foreground mb-4">
              Customize Your <span className="text-luxury-gold">Experience</span>
            </h2>
            <p className="text-lg text-spa-dark-foreground/80">
              Make your package even more special with these additional options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOnOptions.map((option, index) => (
              <div key={index} className="card-dark hover-scale">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-luxury rounded-full mr-4"></div>
                  <span className="text-spa-dark-foreground">{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-spa text-foreground mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose Your Package",
                description: "Select the package that best fits your group and occasion."
              },
              {
                step: "2",
                title: "Customize Your Experience",
                description: "Work with us to tailor services, add-ons, and special touches."
              },
              {
                step: "3",
                title: "Enjoy & Relax",
                description: "Arrive and let us take care of everything while you create memories."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Policies */}
      <section className="section-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-spa">
            <h3 className="text-xl font-semibold text-foreground mb-4">Package Information</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>• All packages require advance booking and consultation to customize your experience</p>
              <p>• Group sizes can be accommodated from 2-8 people depending on the package</p>
              <p>• 48-hour cancellation policy applies to all packages</p>
              <p>• Gratuity is not included in package pricing</p>
              <p>• Special dietary restrictions can be accommodated with advance notice</p>
              <p>• Children's packages available for ages 10-14 with adult supervision</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-spa text-spa-dark-foreground mb-4">
            Ready to Create <span className="text-luxury-gold">Memories?</span>
          </h2>
          <p className="text-lg text-spa-dark-foreground/80 mb-8">
            Contact us to discuss your custom package and make your special occasion unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-luxury text-lg px-12 py-4">
              <Link to="/contact">Plan Your Package</Link>
            </Button>
            <Button asChild variant="outline" className="btn-outline-spa text-lg px-12 py-4 border-spa-dark-foreground text-spa-dark-foreground hover:bg-spa-dark-foreground hover:text-spa-dark">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;