import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [showPrompt, setShowPrompt] = useState(false);
  
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative group">
      {/* Animated Prompt Text */}
      {showPrompt && (
        <div className="absolute right-0 top-full mt-2 z-20 animate-fade-in">
          <div className="bg-gradient-to-r from-luxury-gold to-secondary text-luxury-gold-foreground text-xs px-4 py-2 rounded-lg shadow-luxury border border-luxury-gold/30 whitespace-nowrap animate-bounce font-medium">
            Click here to change language
            <div className="absolute -top-1 right-4 w-2 h-2 bg-gradient-to-r from-luxury-gold to-secondary rotate-45"></div>
          </div>
        </div>
      )}
      
      <Button
        onClick={toggleLanguage}
        variant="outline"
        size="sm"
        className="relative flex items-center gap-2 bg-gradient-to-r from-luxury-gold/10 to-secondary/10 backdrop-blur-sm border-luxury-gold/30 text-foreground hover:bg-gradient-to-r hover:from-luxury-gold/20 hover:to-secondary/20 transition-all duration-300 hover:shadow-luxury hover:scale-105 animate-pulse hover:animate-none font-semibold"
      >
        <Globe className="w-4 h-4 animate-bounce text-luxury-gold" />
        <span className="font-lavish">{i18n.language === 'en' ? 'ES' : 'EN'}</span>
        
        {/* Glowing ring effect */}
        <div className="absolute inset-0 rounded-md ring-2 ring-luxury-gold/30 ring-offset-2 ring-offset-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      </Button>
    </div>
  );
};

export default LanguageToggle;