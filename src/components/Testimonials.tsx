import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = t('testimonials.list', {
    returnObjects: true,
  }) as Array<{ name: string; service: string; text: string; rating?: number }>;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="section-gradient py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-lavish text-4xl md:text-5xl text-foreground mb-4">
            {t('testimonials.title')} <span className="text-primary">{t('testimonials.highlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="card-spa text-center min-h-[300px] flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic mb-6">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div>
                <p className="font-semibold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-primary text-sm font-medium">
                  {testimonials[currentIndex].service}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              className="rounded-full w-10 h-10 p-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="rounded-full w-10 h-10 p-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;