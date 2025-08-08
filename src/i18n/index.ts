import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Hero Section
      heroTitle: "Glow From Within.",
      heroSubtitle: "Radiate Confidence.",
      heroDescription: "Luxurious facials, body treatments, and beauty rituals designed just for you.",
      bookNow: "Book Now",
      viewServices: "View Services",

      // Mission Statement
      missionTitle: "Our Mission",
      missionText: "At Aura Essence, our mission is to create a luxurious sanctuary where beauty | wellness and inner glow meet. We deliver high-end, personalized treatments that enhance your skin while restoring peace | confidence and self-love. Through a calming - radiant experience, we help every client feel seen | valued and empowered—because true beauty begins with a glow from within.",

      // Navigation
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      packages: "Packages",

      // Contact Info
      phone: "+1 (959) 250-8598",
      email: "essenceaura990@gmail.com",
      address: "MHD SUITE 101\n410 Middle Turnpike W\nManchester, 06040",

      // Hours
      hours: "Hours",
      monFri: "Mon-Friday: 9am to 8pm by Appointment",
      saturday: "Saturday: 10am to 9pm by Appointment",
      sunday: "Sunday: 10am to 5pm",

      // Experience
      experience: "6 years combined experience",

      // Services (labels/examples)
      miniFactial: "Mini Facial",
      signatureFacial: "AE Signature Facial",
      lymphaticDrainage: "Lymphatic Drainage Facial",
      luxeEventReady: "AE Luxe | Event Ready",
      ledTherapy: "LED Light Therapy + Massage + Exfoliation with Paraffin + Wax Service",

      // Pricing
      topLip: "$5",
      fullFace: "$20",

      // Footer
      quickLinks: "Quick Links",
      aboutUs: "About Us",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      copyright: "© 2024 Aura Essence LLC. All rights reserved.",
      footerDescription: "Luxurious sanctuary where beauty, wellness, and inner glow meet. Enhancing your natural radiance through personalized treatments.",

      // Language toggle
      changeLanguagePrompt: "Click here to change language",

      // Business Info headings
      callUs: "Call Us",
      visitUs: "Visit Us",
      experienceLabel: "Experience",

      // Values
      values: {
        luxury: "Luxury",
        comfort: "Comfort",
        confidence: "Confidence",
        wellness: "Wellness",
        glow: "Glow",
      },
    },
  },
  es: {
    translation: {
      // Hero Section
      heroTitle: "Brilla Desde Adentro.",
      heroSubtitle: "Irradia Confianza.",
      heroDescription: "Tratamientos faciales lujosos, tratamientos corporales y rituales de belleza diseñados especialmente para ti.",
      bookNow: "Reservar Ahora",
      viewServices: "Ver Servicios",

      // Mission Statement
      missionTitle: "Nuestra Misión",
      missionText: "En Aura Essence, nuestra misión es crear un santuario lujoso donde la belleza | el bienestar y el resplandor interior se encuentran. Ofrecemos tratamientos personalizados de alta gama que realzan tu piel mientras restauran la paz | la confianza y el amor propio. A través de una experiencia calmante - radiante, ayudamos a cada cliente a sentirse visto | valorado y empoderado—porque la verdadera belleza comienza con un brillo desde adentro.",

      // Navigation
      home: "Inicio",
      about: "Acerca de",
      services: "Servicios",
      gallery: "Galería",
      contact: "Contacto",
      packages: "Paquetes",

      // Contact Info
      phone: "+1 (959) 250-8598",
      email: "essenceaura990@gmail.com",
      address: "MHD SUITE 101\n410 Middle Turnpike W\nManchester, 06040",

      // Hours
      hours: "Horarios",
      monFri: "Lun-Viernes: 9am a 8pm con Cita",
      saturday: "Sábado: 10am a 9pm con Cita",
      sunday: "Domingo: 10am a 5pm",

      // Experience
      experience: "6 años de experiencia combinada",

      // Services (labels/examples)
      miniFactial: "Facial Mini",
      signatureFacial: "Facial Característico AE",
      lymphaticDrainage: "Facial de Drenaje Linfático",
      luxeEventReady: "AE Luxe | Listo para Evento",
      ledTherapy: "Terapia LED + Masaje + Exfoliación con Parafina + Servicio de Cera",

      // Pricing
      topLip: "$5",
      fullFace: "$20",

      // Footer
      quickLinks: "Enlaces Rápidos",
      aboutUs: "Acerca de Nosotros",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      copyright: "© 2024 Aura Essence LLC. Todos los derechos reservados.",
      footerDescription: "Un santuario lujoso donde la belleza, el bienestar y el brillo interior se encuentran. Realzamos tu luz natural con tratamientos personalizados.",

      // Language toggle
      changeLanguagePrompt: "Haz clic aquí para cambiar el idioma",

      // Business Info headings
      callUs: "Llámanos",
      visitUs: "Visítanos",
      experienceLabel: "Experiencia",

      // Values
      values: {
        luxury: "Lujo",
        comfort: "Comodidad",
        confidence: "Confianza",
        wellness: "Bienestar",
        glow: "Brillo",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
