import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<Array<{ id: string; media_url: string; permalink: string; caption?: string }>>([]);

  useEffect(() => {
    const token = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    if (!token) return;

    fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&access_token=${token}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setImages(data.data);
        }
      })
      .catch((err) => console.error('Instagram fetch error', err));
  }, []);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-gradient py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-lavish text-5xl md:text-6xl text-foreground mb-6">
            {t('galleryPage.heroTitle')} <span className="text-primary">{t('galleryPage.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('galleryPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-light pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((item) => (
              <div
                key={item.id}
                className="service-card cursor-pointer overflow-hidden"
                onClick={() => openLightbox(item.media_url)}
              >
                <div className="relative">
                  <img
                    src={item.media_url}
                    alt={item.caption || t('galleryPage.lightboxAlt')}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {images.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t('galleryPage.noImages')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt={t('galleryPage.lightboxAlt')}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <Button
              variant="outline"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Testimonial Section */}
      <section className="section-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-spa text-spa-dark-foreground mb-8">
            {t('galleryPage.testimonial.title')} <span className="text-luxury-gold">{t('galleryPage.testimonial.highlight')}</span>
          </h2>
          
          <div className="card-dark max-w-2xl mx-auto">
            <blockquote className="text-lg text-spa-dark-foreground/90 italic mb-6">
              “{t('galleryPage.testimonial.quote')}”
            </blockquote>
            <p className="font-semibold text-spa-dark-foreground">{t('galleryPage.testimonial.name')}</p>
            <p className="text-luxury-gold text-sm">{t('galleryPage.testimonial.service')}</p>
          </div>
        </div>
      </section>

      {/* Before & After Notice */}
      <section className="section-muted py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-spa text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t('galleryPage.cta.title')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('galleryPage.cta.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-spa">
                <a href="/contact">{t('galleryPage.cta.primary')}</a>
              </Button>
              <Button asChild variant="outline" className="btn-outline-spa">
                <a href="/services">{t('galleryPage.cta.secondary')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
