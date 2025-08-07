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
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative group">
      {/* Animated Prompt Text */}
      {showPrompt && (
        <div className="absolute right-0 top-full mt-2 z-20 animate-fade-in">
          <div className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-2 rounded-lg shadow-lg border border-white/20 whitespace-nowrap animate-bounce">
            Click here to change language
            <div className="absolute -top-1 right-4 w-2 h-2 bg-white/90 rotate-45 border-l border-t border-white/20"></div>
          </div>
        </div>
      )}
      
      <Button
        onClick={toggleLanguage}
        variant="outline"
        size="sm"
        className="relative flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 animate-pulse hover:animate-none"
      >
        <Globe className="w-4 h-4 animate-bounce" />
        {i18n.language === 'en' ? 'ES' : 'EN'}
        
        {/* Glowing ring effect */}
        <div className="absolute inset-0 rounded-md ring-2 ring-white/30 ring-offset-2 ring-offset-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      </Button>
    </div>
  );
};

export default LanguageToggle;