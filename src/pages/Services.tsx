import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  // Translated data
  const facials = t('servicesPage.facials', { returnObjects: true }) as Array<{
    name: string;
    duration?: string;
    price: string;
    description: string;
    includes?: string[];
    featured?: boolean;
  }>;

  const childrenServices = t('servicesPage.childrenServices', { returnObjects: true }) as Array<{
    name: string;
    price: string;
    description: string;
  }>;

  const bodyTreatments = t('servicesPage.bodyTreatments', { returnObjects: true }) as Array<{
    name: string;
    duration: string;
    price: string;
    description: string;
    includes: string[];
  }>;

  const lashServices = t('servicesPage.lashServices', { returnObjects: true }) as Array<{
    name: string;
    duration: string;
    price: string;
    description: string;
  }>;

  const waxingServices = t('servicesPage.waxingServices', { returnObjects: true }) as Array<{
    name: string;
    duration: string;
    price: string;
  }>;

  const addOns = t('servicesPage.addOns', { returnObjects: true }) as Array<{
    name: string;
    price: string;
  }>;

  const serumBoosts = t('servicesPage.serumBoosts', { returnObjects: true }) as Array<{
    name: string;
    price: string;
    benefit: string;
  }>;

  const ServiceCard = ({ service, featured = false }: { service: any; featured?: boolean }) => (
    <div className={`service-card ${featured ? 'ring-2 ring-primary shadow-glow' : ''}`}>
      {featured && (
        <div className="bg-primary text-primary-foreground text-center py-2 font-semibold text-sm">
          {t('servicesPage.mostPopular')}
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
        
        <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
        
        {service.includes && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-foreground mb-2">{t('servicesPage.includesLabel')}</p>
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
          <Link to="/contact">{t('bookNow')}</Link>
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
          <h1 className="font-lavish text-5xl md:text-6xl text-foreground mb-6">
            {t('servicesPage.heroTitle')} <span className="text-primary">{t('servicesPage.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('servicesPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Facials */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-spa text-foreground mb-12 text-center">
            ✨ <span className="text-primary">{t('servicesPage.sections.facials')}</span>
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
              👩‍👧‍👦 <span className="text-primary">{t('servicesPage.sections.children')}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">{t('servicesPage.children.ageRange')}</p>
            <p className="text-sm font-semibold text-primary">{t('servicesPage.children.note')}</p>
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
            🌿 <span className="text-primary">{t('servicesPage.sections.body')}</span>
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
            👁️‍🗨️ <span className="text-luxury-gold">{t('servicesPage.sections.lash')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lashServices.map((service, index) => (
              <div key={index} className="card-dark hover-scale">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-spa-dark-foreground">{service.name}</h3>
                  <span className="text-2xl font-bold text-luxury-gold">{service.price}</span>
                </div>
                <p className="text-sm text-spa-dark-foreground/70 mb-4">{service.duration}</p>
                <p className="text-spa-dark-foreground/80 mb-6 leading-relaxed">{service.description}</p>
                <Button asChild className="btn-luxury w-full">
                  <Link to="/contact">{t('servicesPage.bookAppointment')}</Link>
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
            🌷 <span className="text-primary">{t('servicesPage.sections.waxing')}</span>
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
                💖 <span className="text-primary">{t('servicesPage.sections.addOns')}</span>
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
                🌿 <span className="text-primary">{t('servicesPage.sections.serums')}</span>
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
            {t('servicesPage.ctaTitle')} <span className="text-luxury-gold">{t('servicesPage.ctaHighlight')}</span>
          </h2>
          <p className="text-lg text-spa-dark-foreground/80 mb-8">{t('servicesPage.ctaSubtitle')}</p>
          <Button asChild className="btn-luxury text-lg px-12 py-4">
            <Link to="/contact">{t('servicesPage.ctaButton')}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
