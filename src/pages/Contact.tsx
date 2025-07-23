import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // In a real app, you would send this data to your backend
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-gradient py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-luxury text-foreground mb-6">
            Book Your <span className="text-primary">Treatment</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let your glow journey begin. Contact us to schedule your personalized spa experience.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-spa">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Book Your Appointment</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Preferred Service *</Label>
                  <Select required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mini-facial">Mini Facial ($45)</SelectItem>
                      <SelectItem value="signature-facial">AE Signature Facial ($75)</SelectItem>
                      <SelectItem value="lymphatic-facial">Lymphatic Drainage Facial ($90)</SelectItem>
                      <SelectItem value="luxe-facial">AE Luxe | Event Ready ($120)</SelectItem>
                      <SelectItem value="back-facial">Back Facial ($65)</SelectItem>
                      <SelectItem value="full-body">Full Body Treatment ($130)</SelectItem>
                      <SelectItem value="classic-lashes">Classic Lash Set ($100)</SelectItem>
                      <SelectItem value="hybrid-lashes">Hybrid Lash Set ($120)</SelectItem>
                      <SelectItem value="volume-lashes">Volume Lash Set ($130)</SelectItem>
                      <SelectItem value="waxing">Waxing Services</SelectItem>
                      <SelectItem value="custom-package">Custom Package</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Notes</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Any specific requests, concerns, or questions..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="btn-spa w-full text-lg py-3">
                  Submit Booking Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="card-spa">
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">(860) 849-8064</p>
                      <p className="text-sm text-muted-foreground">Call or text for appointments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">hello@auraessence.com</p>
                      <p className="text-sm text-muted-foreground">Email for inquiries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">123 Wellness Avenue</p>
                      <p className="text-muted-foreground">Luxury District, CT 06001</p>
                      <p className="text-sm text-muted-foreground">Private parking available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card-spa">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  Business Hours
                </h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground">Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Saturday</span>
                    <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Sunday</span>
                    <span className="text-muted-foreground">By Appointment</span>
                  </div>
                </div>
                
                <p className="text-sm text-primary mt-4 font-medium">
                  Extended hours available for special events and packages
                </p>
              </div>

              {/* Social Media */}
              <div className="card-spa">
                <h3 className="text-xl font-semibold text-foreground mb-6">Follow Us</h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@auraessencellc</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Aura Essence LLC</span>
                  </a>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Follow us for skincare tips, before & after photos, and special offers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-spa">
            <h3 className="text-xl font-semibold text-foreground mb-6">Booking Policies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Cancellation Policy</h4>
                <p>Please provide at least 24 hours notice for cancellations to avoid fees.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Late Arrival</h4>
                <p>Late arrivals may result in shortened treatment time or rescheduling.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Health Conditions</h4>
                <p>Please inform us of any allergies, medications, or skin conditions.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Age Requirements</h4>
                <p>Children's services available for ages 10-14 with adult supervision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;