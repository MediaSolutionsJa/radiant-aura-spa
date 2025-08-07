import { useTranslation } from 'react-i18next';

const Mission = () => {
  const { t } = useTranslation();
  
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-lavish text-3xl md:text-4xl text-spa-dark-foreground mb-8">
          {t('missionTitle')} <span className="text-luxury-gold">Mission</span>
        </h2>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent rounded-2xl"></div>
          <div className="relative bg-spa-dark/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-luxury-gold/20">
            <p className="text-lg md:text-xl text-spa-dark-foreground/90 leading-relaxed">
              {t('missionText')}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
          {['Luxury', 'Comfort', 'Confidence', 'Wellness', 'Glow'].map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-3 shadow-luxury">
                <span className="text-luxury-gold-foreground font-semibold text-sm">{value[0]}</span>
              </div>
              <p className="text-spa-dark-foreground/80 font-medium text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;