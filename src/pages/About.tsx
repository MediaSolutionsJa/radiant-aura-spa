import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-gradient py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-lavish text-5xl md:text-6xl text-foreground mb-6">
            About <span className="text-primary">Aura Essence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where luxury meets wellness, and every treatment is designed to help you glow from within.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-light py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-spa text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for luxury wellness and skincare, Aura Essence LLC was born from 
                  the belief that everyone deserves to feel radiant, confident, and pampered. Our journey 
                  began with a simple vision: to create a sanctuary where advanced skincare meets 
                  personalized care.
                </p>
                <p>
                  Every treatment at Aura Essence is carefully curated to not just enhance your natural beauty, 
                  but to provide a transformative experience that rejuvenates both body and spirit. From our 
                  signature facials to our specialized body treatments, we combine cutting-edge techniques 
                  with premium products to deliver exceptional results.
                </p>
                <p>
                  Our commitment extends beyond skincare – we believe in empowering every client to embrace 
                  their unique beauty and feel confident in their own skin. This philosophy guides everything 
                  we do, from our personalized consultation process to our ongoing client relationships.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-luxury rounded-2xl p-8 shadow-luxury">
                <h3 className="text-2xl font-semibold text-luxury-gold-foreground mb-4">Our Founder</h3>
                <p className="text-luxury-gold-foreground/80 mb-4">
                  With over a decade of experience in luxury skincare and wellness, our founder brings 
                  expertise, passion, and an unwavering commitment to excellence to every aspect of 
                  Aura Essence.
                </p>
                <p className="text-luxury-gold-foreground/80">
                  Certified in advanced skincare techniques and dedicated to continuing education, 
                  our team ensures that every client receives the highest quality care and the most 
                  innovative treatments available.
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
              What Makes Us <span className="text-luxury-gold">Different</span>
            </h2>
            <p className="text-lg text-spa-dark-foreground/80">
              Experience the Aura Essence difference through our unique approach to luxury wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Care",
                description: "Every treatment is customized to your unique skin type, concerns, and goals. We believe in individual attention and tailored experiences."
              },
              {
                title: "Premium Ingredients",
                description: "We use only the finest, clinically-proven ingredients and products from leading luxury skincare brands to ensure optimal results."
              },
              {
                title: "Relaxing Environment",
                description: "Our serene, luxurious space is designed to transport you from everyday stress to a peaceful sanctuary of wellness."
              },
              {
                title: "Advanced Techniques",
                description: "Our team stays current with the latest innovations in skincare technology and advanced treatment methodologies."
              },
              {
                title: "Holistic Approach",
                description: "We consider your overall wellness, combining skincare with relaxation techniques for comprehensive rejuvenation."
              },
              {
                title: "Ongoing Support",
                description: "Your skin journey doesn't end with your treatment. We provide guidance and support for your at-home skincare routine."
              }
            ].map((item, index) => (
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
            Our <span className="text-primary">Values</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { value: 'Luxury', icon: '✨' },
              { value: 'Comfort', icon: '🌿' },
              { value: 'Confidence', icon: '💫' },
              { value: 'Wellness', icon: '🧘‍♀️' },
              { value: 'Glow', icon: '✨' }
            ].map((item, index) => (
              <div key={index} className="text-center hover-scale">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-soft">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.value}</h3>
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