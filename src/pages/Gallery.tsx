import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-spa.jpg';
import signatureFacial from '@/assets/signature-facial.jpg';
import bodyTreatment from '@/assets/body-treatment.jpg';
import lashExtensions from '@/assets/lash-extensions.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: heroImage,
      alt: "Luxury spa treatment room",
      category: "Treatment Rooms"
    },
    {
      src: signatureFacial,
      alt: "Signature facial treatment",
      category: "Facial Treatments"
    },
    {
      src: bodyTreatment,
      alt: "Relaxing body treatment",
      category: "Body Treatments"
    },
    {
      src: lashExtensions,
      alt: "Professional lash extensions",
      category: "Lash Services"
    },
    {
      src: gallery1,
      alt: "Elegant treatment room setup",
      category: "Treatment Rooms"
    },
    {
      src: gallery2,
      alt: "Glowing skin results",
      category: "Results"
    },
    {
      src: gallery3,
      alt: "Beautiful lash extension results",
      category: "Lash Services"
    },
    {
      src: gallery4,
      alt: "Mother and daughter spa experience",
      category: "Family Packages"
    }
  ];

  const categories = ["All", "Treatment Rooms", "Facial Treatments", "Body Treatments", "Lash Services", "Results", "Family Packages"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
          <h1 className="heading-luxury text-foreground mb-6">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the beauty of our treatments, results, and serene spa environment through our gallery of transformations.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-light py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "btn-spa" : "btn-outline-spa"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-light pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="service-card cursor-pointer overflow-hidden"
                onClick={() => openLightbox(item.src)}
              >
                <div className="relative">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold">{item.alt}</h3>
                      <p className="text-sm text-white/80">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found for this category.</p>
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
              alt="Gallery image" 
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
            See the <span className="text-luxury-gold">Difference</span>
          </h2>
          
          <div className="card-dark max-w-2xl mx-auto">
            <blockquote className="text-lg text-spa-dark-foreground/90 italic mb-6">
              "The results speak for themselves. My skin has never looked better, and the photos don't even 
              capture how amazing I feel. The whole experience was transformative."
            </blockquote>
            <p className="font-semibold text-spa-dark-foreground">Sarah M.</p>
            <p className="text-luxury-gold text-sm">AE Signature Facial Client</p>
          </div>
        </div>
      </section>

      {/* Before & After Notice */}
      <section className="section-muted py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-spa text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Want to See Your Results?
            </h3>
            <p className="text-muted-foreground mb-6">
              We love celebrating our clients' transformations! With your permission, 
              we may feature before and after photos to inspire others on their glow journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-spa">
                <a href="/contact">Book Your Transformation</a>
              </Button>
              <Button asChild variant="outline" className="btn-outline-spa">
                <a href="/services">View Our Services</a>
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