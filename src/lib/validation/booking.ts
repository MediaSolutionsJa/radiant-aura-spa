import { z } from 'zod';

export const bookingSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().optional(),
  message: z.string().optional(),
  website: z.string().max(0, 'This field should be empty'), // honeypot
});

export type BookingFormData = z.infer<typeof bookingSchema>;