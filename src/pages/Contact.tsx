import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { telLink, mailtoLink, mapsLink } from '@/lib/contactLinks';

const Contact = () => {
  const { t } = useTranslation();
  const serviceOptions = t('contactPage.serviceOptions', { returnObjects: true }) as string[];

  useEffect(() => {
    const form = document.getElementById('bookingForm') as HTMLFormElement | null;
    if (!form) return;

    const submitBtn = document.getElementById('bookingSubmitBtn') as HTMLButtonElement | null;
    const statusEl = document.getElementById('bookingStatus') as HTMLElement | null;
    const modal = document.getElementById('bookingSuccessModal') as HTMLElement | null;
    const summaryEl = document.getElementById('bookingSummary') as HTMLElement | null;
    const closeBtn = document.getElementById('bookingCloseModal');
    const pageUrlEl = document.getElementById('bookingPageUrl') as HTMLInputElement | null;

    if (pageUrlEl) pageUrlEl.value = window.location.href;

    function showModal(summaryHtml: string) {
      if (summaryEl && summaryHtml) summaryEl.innerHTML = summaryHtml;
      if (modal) {
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
      }
    }
    function hideModal() {
      if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    }
    closeBtn?.addEventListener('click', hideModal);
    const modalClick = (e: Event) => {
      if (e.target === modal) hideModal();
    };
    modal?.addEventListener('click', modalClick);

    function validateRequired() {
      const requiredIds = ['bf_name', 'bf_email', 'bf_service', 'bf_date', 'bf_time'];
      for (const id of requiredIds) {
        const el = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | null;
        if (!el || !el.value) return false;
        if (id === 'bf_email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) return false;
      }
      return true;
    }

    const submitHandler = async (e: Event) => {
      e.preventDefault();
      if (statusEl) statusEl.textContent = '';
      if (!validateRequired()) {
        if (statusEl) statusEl.textContent = 'Please complete all required fields correctly.';
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      const formData = new FormData(form);

      try {
        const resp = await fetch(form.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        });

        if (resp.ok) {
          const name = (formData.get('name') || '').toString();
          const service = (formData.get('service') || '').toString();
          const date = (formData.get('date') || '').toString();
          const time = (formData.get('time') || '').toString();
          const summary = `\n          <strong>Booking Received</strong><br/>\n          Name: ${name || '—'}<br/>\n          Service: ${service || '—'}<br/>\n          Date: ${date || '—'} at ${time || '—'}<br/><br/>\n          A confirmation email will be sent to you shortly. If you need to make changes, reply to the confirmation email.\n        `;
          showModal(summary);
          form.reset();
          if (statusEl) statusEl.textContent = '';
        } else {
          let message = 'Something went wrong. Please try again in a moment.';
          try {
            const data = await resp.json();
            if (data && data.errors && data.errors.length) {
              message = data.errors.map((e: any) => e.message).join(', ');
            }
          } catch (_) {}
          if (statusEl) statusEl.textContent = message;
        }
      } catch {
        if (statusEl) statusEl.textContent = 'Network error. Please check your connection and try again.';
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Book Now';
        }
      }
    };

    form.addEventListener('submit', submitHandler);
    return () => {
      form.removeEventListener('submit', submitHandler);
      closeBtn?.removeEventListener('click', hideModal);
      modal?.removeEventListener('click', modalClick);
    };
  }, []);

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
              
              <form
                id="bookingForm"
                action="https://formspree.io/f/xyzdwkkv"
                method="POST"
                noValidate
                className="space-y-6"
              >
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, opacity: 0 }}
                  aria-hidden="true"
                />

                <input type="hidden" name="_subject" value="New Aura Essence Booking" />
                <input type="hidden" name="page_url" id="bookingPageUrl" value="" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bf_name">{t('contactPage.labels.name')}</Label>
                    <Input id="bf_name" name="name" type="text" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="bf_email">{t('contactPage.labels.email')}</Label>
                    <Input id="bf_email" name="email" type="email" required className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bf_phone">{t('contactPage.labels.phone')}</Label>
                  <Input id="bf_phone" name="phone" type="tel" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="bf_service">{t('contactPage.labels.service')}</Label>
                  <select
                    id="bf_service"
                    name="service"
                    required
                    defaultValue=""
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="" disabled>
                      {t('contactPage.placeholders.service')}
                    </option>
                    {serviceOptions.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bf_date">{t('contactPage.labels.preferredDate')}</Label>
                    <Input id="bf_date" name="date" type="date" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="bf_time">{t('contactPage.labels.preferredTime')}</Label>
                    <Input id="bf_time" name="time" type="time" required className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bf_message">{t('contactPage.labels.message')}</Label>
                  <Textarea
                    id="bf_message"
                    name="message"
                    rows={4}
                    placeholder={t('contactPage.placeholders.message')}
                    className="mt-1"
                  />
                </div>

                <Button id="bookingSubmitBtn" type="submit" className="btn-spa w-full text-lg py-3">
                  {t('contactPage.submit')}
                </Button>

                <p
                  id="bookingStatus"
                  role="status"
                  aria-live="polite"
                  style={{ marginTop: '.75rem' }}
                ></p>

                <p className="text-sm text-muted-foreground text-center">
                  {t('contactPage.contactWithin')}
                </p>
              </form>

              <div
                id="bookingSuccessModal"
                aria-hidden="true"
                style={{
                  position: 'fixed',
                  inset: 0,
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,.45)',
                  zIndex: 9999,
                }}
              >
                <div
                  style={{
                    maxWidth: '520px',
                    width: '92%',
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '24px',
                  }}
                >
                  <h3 style={{ margin: '0 0 8px' }}>Thank you for booking with us!</h3>
                  <p id="bookingSummary" style={{ margin: '0 0 16px' }}>
                    We’ve received your request. We’ll confirm by email shortly.
                  </p>
                  <button
                    id="bookingCloseModal"
                    type="button"
                    style={{ display: 'inline-block' }}
                  >
                    Close
                  </button>
                </div>
              </div>
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
                    <span className="text-muted-foreground">9:00 AM - 8:00 PM by appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">{t('contactPage.hours.saturday')}</span>
                    <span className="text-muted-foreground">10:00 AM - 9:00 PM by appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">{t('contactPage.hours.sunday')}</span>
                    <span className="text-muted-foreground">10:00 AM - 5:00 PM</span>
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
                    href="https://www.instagram.com/llcauraessence/"
                    target="_blank"
                    rel="noopener noreferrer"
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