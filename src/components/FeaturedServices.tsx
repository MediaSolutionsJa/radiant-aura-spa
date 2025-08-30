import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import signatureFacial from '@/assets/signature-facial.jpg';
import bodyTreatment from '@/assets/body-treatment.jpg';
import lashExtensions from '@/assets/lash-extensions.jpg';
import { useTranslation } from 'react-i18next';
const faceTreatmentImage = '/uploads/6240f13e-63be-4d28-ab8d-087c1f0a391c.png';

const FeaturedServices = () => {
  const { t } = useTranslation();
  const services = t('featuredServices.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string; price: string; duration: string } & { image?: string }>;
  // Attach images after translation
  const servicesWithImages = services.map((service, index) => ({
    ...service,
    image: [faceTreatmentImage, bodyTreatment, lashExtensions][index],
  }));

  return (
    <section className="section-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-lavish text-4xl md:text-5xl text-foreground mb-4">
            {t('featuredServices.title')} <span className="text-primary">{t('featuredServices.highlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('featuredServices.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesWithImages.map((service, index) => (
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
                  <Link to="/contact">{t('featuredServices.book')}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="btn-outline-spa">
            <Link to="/services">{t('featuredServices.viewAll')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;