import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroLeaves from '@/assets/hero-leaves.jpg';
import heroModel from '@/assets/hero-model.jpg';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background leaves and warm golden overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroLeaves}
          alt=""
          aria-hidden
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/80 via-spa-dark/60 to-spa-dark/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 via-transparent to-luxury-gold/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div className="text-left">
            <p className="uppercase tracking-[0.3em] text-sm text-spa-dark-foreground/80 mb-3">
              {t('heroWelcome', { defaultValue: 'WELCOME TO' })}
            </p>
            <h1 className="font-lavish text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
              <span className="text-golden-texture font-lavish">
                {t('heroTitle')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-spa-dark-foreground/90 mb-8 max-w-xl">
              {t('heroDescription')}
            </p>
            <div className="flex gap-4">
              <Button asChild variant="secondary" className="px-8 py-6 rounded-full hover-scale">
                <Link to="/about">{t('learnMore', { defaultValue: 'Learn more' })}</Link>
              </Button>
            </div>
          </div>

          {/* Right: Model image */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-xl mx-auto rounded-3xl overflow-hidden shadow-luxury">
              <img
                src={heroModel}
                alt={t('heroModelAlt', { defaultValue: 'Model with natural skincare, daisy in hair, cream on cheek' })}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;