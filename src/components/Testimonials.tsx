import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      service: "AE Signature Facial",
      rating: 5,
      text: "Absolutely amazing experience! My skin has never looked better. The staff is so professional and the atmosphere is so relaxing. I can't wait to come back!",
    },
    {
      name: "Maria Rodriguez",
      service: "Full Body Treatment",
      rating: 5,
      text: "The full body treatment was pure luxury. I felt completely pampered and relaxed. The results were incredible - my skin feels so soft and renewed.",
    },
    {
      name: "Emily Chen",
      service: "Lash Extensions",
      rating: 5,
      text: "My lash extensions look absolutely perfect! The attention to detail is amazing. I receive compliments every day and feel so confident.",
    },
    {
      name: "Jessica Williams",
      service: "AE Luxe Facial",
      rating: 5,
      text: "The event-ready facial was exactly what I needed before my wedding. My skin was glowing and photos turned out amazing. Highly recommend!",
    },
    {
      name: "Ashley Davis",
      service: "Mommy & Me Package",
      rating: 5,
      text: "Such a wonderful bonding experience with my daughter. The staff made us both feel so special and comfortable. We're definitely coming back!",
    },
  ];

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
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Read about the transformative experiences of our valued clients
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="card-spa text-center min-h-[300px] flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
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