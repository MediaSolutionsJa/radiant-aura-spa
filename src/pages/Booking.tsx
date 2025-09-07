import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingFormData } from '@/lib/validation/booking';
import { BookingSuccessModal } from '@/components/booking/BookingSuccessModal';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const eventTypes = [
  'Facial Treatment',
  'Body Treatment',
  'Massage Therapy',
  'Spa Package',
  'Bridal Services',
  'Corporate Event',
  'Private Party',
  'Consultation',
  'Other'
];

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      website: '' // honeypot field
    }
  });

  const onSubmit = async (data: BookingFormData) => {
    // Check honeypot
    if (data.website) {
      // Silently reject spam
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        reset();
        setShowSuccessModal(true);
      } else if (result.code === 'EMAIL_FAILED') {
        toast({
          title: 'Email Error',
          description:
            "We received your booking but couldn't send the email notification. We'll check this right away.",
          variant: 'destructive'
        });
      } else if (result.code === 'EMAIL_CONFIG') {
        toast({
          title: 'Email Sender Not Configured',
          description:
            result.message ||
            'Email sender not configured. Verify your Resend domain or set RESEND_FROM.',
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to save booking. Please try again.',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-gradient py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-lavish text-5xl md:text-6xl text-foreground mb-6">
            Book Your <span className="text-primary">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to indulge in luxury? Let us create the perfect spa experience tailored just for you.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-light py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-luxury">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">Book Your Appointment</CardTitle>
              <CardDescription>
                Fill out the form below and we'll be in touch to confirm your booking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  {...register('website')}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      {...register('fullName')}
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="mt-1"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="mt-1"
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="eventType">Service Type *</Label>
                  <Select
                    value={watch('eventType') || ''}
                    onValueChange={(value) => setValue('eventType', value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.eventType && (
                    <p className="text-sm text-destructive mt-1">{errors.eventType.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="eventDate">Preferred Date</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    {...register('eventDate')}
                    className="mt-1"
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.eventDate && (
                    <p className="text-sm text-destructive mt-1">{errors.eventDate.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Special Requests or Questions</Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className="mt-1"
                    placeholder="Tell us about any special requests, allergies, or questions you have..."
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg py-3 hover:scale-105 transition-transform"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Book Your Experience'
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll contact you within 24 hours to confirm your appointment details.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      <BookingSuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
};

export default Booking;