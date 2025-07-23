import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Policies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-gradient py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-luxury text-foreground mb-6">
            Policies & <span className="text-primary">Guidelines</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Important information to ensure you have the best possible experience at Aura Essence.
          </p>
        </div>
      </section>

      {/* Policies Content */}
      <section className="section-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Booking & Cancellation Policy */}
          <div className="card-spa">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Booking & Cancellation Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Advance Booking</h3>
                <p>We recommend booking appointments at least 48 hours in advance to ensure availability. Popular time slots and weekend appointments book quickly.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cancellation Notice</h3>
                <p>Please provide at least 24 hours notice for cancellations or rescheduling. Cancellations made with less than 24 hours notice may be subject to a 50% service fee.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">No-Show Policy</h3>
                <p>Clients who fail to show up for their appointment without prior notice will be charged the full service fee and may be required to prepay for future appointments.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Same-Day Cancellations</h3>
                <p>Same-day cancellations due to illness are handled on a case-by-case basis. We appreciate your consideration in not exposing our staff and other clients to illness.</p>
              </div>
            </div>
          </div>

          {/* Late Arrival Policy */}
          <div className="card-spa">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Late Arrival Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We understand that delays can happen, but late arrivals affect our ability to provide quality service to all clients.</p>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">5-15 Minutes Late</h3>
                <p>Your treatment time may be shortened to accommodate the next client, but we will do our best to provide the full service.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">15+ Minutes Late</h3>
                <p>Your appointment may need to be rescheduled depending on availability. You may be charged a partial fee if rescheduling is not possible.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Please Plan Ahead</h3>
                <p>We recommend arriving 10 minutes early to complete any necessary paperwork and settle in before your treatment begins.</p>
              </div>
            </div>
          </div>

          {/* Payment & Refund Policy */}
          <div className="card-spa">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Payment & Refund Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Payment Methods</h3>
                <p>We accept cash, credit cards (Visa, MasterCard, American Express), and digital payments. Payment is due at the time of service unless other arrangements have been made.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Gratuity</h3>
                <p>Gratuity is not included in service prices and is always appreciated but never required. Standard gratuity ranges from 15-20% for exceptional service.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Refunds</h3>
                <p>Refunds are evaluated on a case-by-case basis. If you are unsatisfied with your service, please speak with us immediately so we can address your concerns.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Package Deals</h3>
                <p>Package services must be used within 12 months of purchase. Packages are non-transferable and non-refundable but may be rescheduled with proper notice.</p>
              </div>
            </div>
          </div>

          {/* Age Restrictions */}
          <div className="card-spa">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Age Restrictions</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Children's Services (Ages 10-14)</h3>
                <p>We offer specialized children's facial services for ages 10-14. A parent or guardian must be present during the entire treatment. Minimum of 2 services required per session.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Adult Services (Ages 15+)</h3>
                <p>Most of our services are available for clients 15 and older. Clients under 18 require parent/guardian consent and may need to be accompanied by an adult.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Lash Extensions</h3>
                <p>Lash extension services are available for clients 16 and older. Clients under 18 require written parent/guardian consent.</p>
              </div>
            </div>
          </div>

          {/* Health Conditions Disclaimer */}
          <div className="card-spa">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Health Conditions & Safety</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Medical Disclosure</h3>
                <p>Please inform us of any allergies, medications, skin conditions, or medical treatments that might affect your service. This includes recent cosmetic procedures, prescription medications, and topical treatments.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Pregnancy</h3>
                <p>Many of our services are safe during pregnancy, but please inform us so we can modify treatments as needed. Some services may not be recommended during certain stages of pregnancy.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Skin Sensitivity</h3>
                <p>If you have sensitive skin or known allergies, please inform us before your treatment. We may recommend a patch test for certain products or services.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Post-Treatment Care</h3>
                <p>Following aftercare instructions is crucial for optimal results and safety. We will provide specific guidelines for your treatment type.</p>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="card-spa">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Client Information</h3>
                <p>All client information is kept strictly confidential and is used only for providing services and maintaining client records. We do not sell or share personal information with third parties.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Photography</h3>
                <p>Before and after photos may be taken for your records and, with your written consent, for marketing purposes. You have the right to decline photography at any time.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Communication</h3>
                <p>We may contact you via phone, email, or text for appointment confirmations, reminders, and promotional offers. You may opt out of promotional communications at any time.</p>
              </div>
            </div>
          </div>

          {/* Spa Etiquette */}
          <div className="card-spa">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Spa Etiquette</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Respectful Environment</h3>
                <p>Please maintain a quiet, respectful atmosphere for all clients. Mobile phones should be silenced, and conversations should be kept to a minimum in treatment areas.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Personal Hygiene</h3>
                <p>Please arrive clean and avoid wearing strong fragrances that might affect other clients or interfere with aromatherapy treatments.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Valuables</h3>
                <p>We recommend leaving valuables at home. While we take precautions, we are not responsible for lost or stolen items.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Policies;