import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const differenceItems = t('aboutPage.difference.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;
  const values = t('aboutPage.valuesSection.values', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-gradient py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-lavish text-5xl md:text-6xl text-foreground mb-6">
            {t('aboutPage.heroTitle')} <span className="text-primary">{t('aboutPage.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('aboutPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-light py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-spa text-foreground mb-6">{t('aboutPage.ourStory.title')}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {t('aboutPage.ourStory.paragraphs', { returnObjects: true })
                  .map((p: string, idx: number) => (
                    <p key={idx}>{p}</p>
                  ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-luxury rounded-2xl p-8 shadow-luxury">
                <h3 className="text-2xl font-semibold text-luxury-gold-foreground mb-4">{t('aboutPage.founder.title')}</h3>
                <p className="text-luxury-gold-foreground/80 mb-4">
                  {t('aboutPage.founder.paragraphs.0')}
                </p>
                <p className="text-luxury-gold-foreground/80">
                  {t('aboutPage.founder.paragraphs.1')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-spa text-spa-dark-foreground mb-4">
              {t('aboutPage.difference.title')} <span className="text-luxury-gold">{t('aboutPage.difference.highlight')}</span>
            </h2>
            <p className="text-lg text-spa-dark-foreground/80">
              {t('aboutPage.difference.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differenceItems.map((item, index) => (
              <div key={index} className="card-dark hover-scale">
                <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center mb-4 shadow-luxury">
                  <span className="text-luxury-gold-foreground font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-spa-dark-foreground mb-3">{item.title}</h3>
                <p className="text-spa-dark-foreground/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-spa text-foreground mb-12">
            {t('aboutPage.valuesSection.title')} <span className="text-primary">{t('aboutPage.valuesSection.highlight')}</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center hover-scale">
                <h3 className="text-lg font-semibold text-foreground">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;