import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Packages = () => {
  const { t } = useTranslation();

  const icons = [Heart, Users, Crown];
  const packagesData = t('packagesPage.packages', { returnObjects: true }) as Array<{
    name: string;
    description: string;
    includes: string[];
    price: string;
    duration: string;
    highlight: string;
  }>;
  const packages = packagesData.map((p, i) => ({ ...p, icon: icons[i] }));

  const addOnOptions = t('packagesPage.addOnOptions', { returnObjects: true }) as string[];
  const howItWorks = t('packagesPage.howItWorks.steps', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const packageInfoBullets = t('packagesPage.packageInfoBullets', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-gradient py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-luxury text-foreground mb-6">
            {t('packagesPage.heroTitle')} <span className="text-primary">{t('packagesPage.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('packagesPage.heroSubtitle')}
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
                      <h4 className="font-semibold text-foreground mb-3">{t('packagesPage.includesLabel')}</h4>
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
                      <Link to="/contact">{t('packagesPage.customizeButton')}</Link>
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
              {t('packagesPage.customizeTitle')} <span className="text-luxury-gold">{t('packagesPage.customizeHighlight')}</span>
            </h2>
            <p className="text-lg text-spa-dark-foreground/80">
              {t('packagesPage.customizeSubtitle')}
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
              {t('packagesPage.howItWorks.title')} <span className="text-primary">{t('packagesPage.howItWorks.highlight')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
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
            <h3 className="text-xl font-semibold text-foreground mb-4">{t('packagesPage.packageInfoTitle')}</h3>
            <div className="space-y-3 text-muted-foreground">
              {packageInfoBullets.map((b, i) => (
                <p key={i}>• {b}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-spa text-spa-dark-foreground mb-4">
            {t('packagesPage.ctaTitle')} <span className="text-luxury-gold">{t('packagesPage.ctaHighlight')}</span>
          </h2>
          <p className="text-lg text-spa-dark-foreground/80 mb-8">{t('packagesPage.ctaSubtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-luxury text-lg px-12 py-4">
              <Link to="/contact">{t('packagesPage.ctaPrimary')}</Link>
            </Button>
            <Button asChild variant="outline" className="btn-outline-spa text-lg px-12 py-4 border-spa-dark-foreground text-spa-dark-foreground hover:bg-spa-dark-foreground hover:text-spa-dark">
              <Link to="/services">{t('packagesPage.ctaSecondary')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
