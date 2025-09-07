import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingSuccessModal = ({ isOpen, onClose }: BookingSuccessModalProps) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Load the Lottie animation
    fetch('/lottie/booking-success.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Failed to load animation:', error));
  }, []);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            {animationData && !prefersReducedMotion ? (
              <div className="w-24 h-24">
                <Lottie
                  animationData={animationData}
                  loop={false}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
          <DialogTitle className="text-2xl font-semibold text-foreground">
            Thank you for booking with us!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            We've received your request. We'll be in touch shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};