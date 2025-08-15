import { useTranslation } from 'react-i18next';
import { Phone, Clock, MapPin, Award } from 'lucide-react';
import { telLink, mapsLink } from '@/lib/contactLinks';

const BusinessInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="section-muted py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-luxury-gold-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{t('callUs')}</h3>
            <a href={telLink(t('phone'))} className="text-muted-foreground">
              {t('phone')}
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-luxury-gold-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{t('hours')}</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>{t('monFri')}</p>
              <p>{t('saturday')}</p>
              <p>{t('sunday')}</p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-luxury-gold-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{t('visitUs')}</h3>
            <a
              href={mapsLink(t('address'))}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground whitespace-pre-line"
            >
              {t('address')}
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-luxury-gold-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{t('experienceLabel')}</h3>
            <p className="text-muted-foreground">{t('experience')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;