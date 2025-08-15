import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { telLink, mailtoLink, mapsLink } from '@/lib/contactLinks';

const Contact = () => {
  const { t } = useTranslation();
  const serviceOptions = t('contactPage.serviceOptions', { returnObjects: true }) as string[];
  const timeOptions = t('contactPage.timeOptions', { returnObjects: true }) as string[];

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
            {t('contactPage.heroTitle')} <span className="text-primary">{t('contactPage.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contactPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-spa">
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t('contactPage.formTitle')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t('contactPage.labels.name')}</Label>
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
                    <Label htmlFor="email">{t('contactPage.labels.email')}</Label>
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
                  <Label htmlFor="phone">{t('contactPage.labels.phone')}</Label>
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
                  <Label htmlFor="service">{t('contactPage.labels.service')}</Label>
                  <Select required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder={t('contactPage.placeholders.service')} />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option, index) => (
                        <SelectItem key={index} value={String(index)}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDate">{t('contactPage.labels.preferredDate')}</Label>
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
                    <Label htmlFor="preferredTime">{t('contactPage.labels.preferredTime')}</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder={t('contactPage.placeholders.time')} />
                      </SelectTrigger>
                      <SelectContent>
                        {timeOptions.map((time, index) => (
                          <SelectItem key={index} value={String(index)}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">{t('contactPage.labels.message')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t('contactPage.placeholders.message')}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="btn-spa w-full text-lg py-3">
                  {t('contactPage.submit')}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  {t('contactPage.contactWithin')}
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="card-spa">
                <h3 className="text-xl font-semibold text-foreground mb-6">{t('contactPage.contactInfo.title')}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <a href={telLink('(860) 849-8064')} className="font-medium text-foreground">
                        (860) 849-8064
                      </a>
                      <p className="text-sm text-muted-foreground">{t('contactPage.contactInfo.phoneNote')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <a href={mailtoLink(undefined, undefined, t('email'))} className="font-medium text-foreground">
                        {t('email')}
                      </a>
                      <p className="text-sm text-muted-foreground">{t('contactPage.contactInfo.emailNote')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <a
                        href={mapsLink(
                          `${t('contactPage.contactInfo.addressLine1')} ${t('contactPage.contactInfo.addressLine2')}`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground"
                      >
                        <p>{t('contactPage.contactInfo.addressLine1')}</p>
                        <p className="text-muted-foreground">{t('contactPage.contactInfo.addressLine2')}</p>
                      </a>
                      <p className="text-sm text-muted-foreground">{t('contactPage.contactInfo.addressNote')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card-spa">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  {t('contactPage.hours.title')}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground">{t('contactPage.hours.monFri')}</span>
                    <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">{t('contactPage.hours.saturday')}</span>
                    <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">{t('contactPage.hours.sunday')}</span>
                    <span className="text-muted-foreground">By Appointment</span>
                  </div>
                </div>
                
                <p className="text-sm text-primary mt-4 font-medium">
                  {t('contactPage.hours.note')}
                </p>
              </div>

              {/* Social Media */}
              <div className="card-spa">
                <h3 className="text-xl font-semibold text-foreground mb-6">{t('contactPage.follow.title')}</h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>{t('contactPage.follow.instagram')}</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>{t('contactPage.follow.facebook')}</span>
                  </a>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  {t('contactPage.follow.note')}
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
            <h3 className="text-xl font-semibold text-foreground mb-6">{t('contactPage.policies.title')}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              {t('contactPage.policies.items', { returnObjects: true }).map(
                (item: { title: string; text: string }, index: number) => (
                  <div key={index}>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;