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

      // Featured Services
      featuredServices: {
        title: "Signature",
        highlight: "Services",
        subtitle:
          "Experience our most popular treatments designed to rejuvenate your skin and restore your inner glow.",
        items: [
          {
            title: "AE Signature Facial",
            description:
              "Our signature facial uses high-frequency technology, exfoliation, and serums to restore your skin's natural balance.",
            price: "$75",
            duration: "60 mins",
          },
          {
            title: "Full Body Treatment",
            description:
              "A complete skincare and relaxation session that includes cleansing, exfoliation, and nourishing treatments.",
            price: "$130",
            duration: "1h 30m",
          },
          {
            title: "Lash Extensions",
            description:
              "Enhance your natural beauty with our professional lash extension services for a glamorous look.",
            price: "From $100",
            duration: "3 hours",
          },
        ],
        book: "Book Treatment",
        viewAll: "View All Services",
      },

      // Testimonials
      testimonials: {
        title: "What Our Clients",
        highlight: "Say",
        subtitle:
          "Read about the transformative experiences of our valued clients",
        list: [
          {
            name: "Sarah Johnson",
            service: "AE Signature Facial",
            text:
              "Absolutely amazing experience! My skin has never looked better. The staff is so professional and the atmosphere is so relaxing. I can't wait to come back!",
          },
          {
            name: "Maria Rodriguez",
            service: "Full Body Treatment",
            text:
              "The full body treatment was pure luxury. I felt completely pampered and relaxed. The results were incredible - my skin feels so soft and renewed.",
          },
          {
            name: "Emily Chen",
            service: "Lash Extensions",
            text:
              "My lash extensions look absolutely perfect! The attention to detail is amazing. I receive compliments every day and feel so confident.",
          },
          {
            name: "Jessica Williams",
            service: "AE Luxe Facial",
            text:
              "The event-ready facial was exactly what I needed before my wedding. My skin was glowing and photos turned out amazing. Highly recommend!",
          },
          {
            name: "Ashley Davis",
            service: "Mommy & Me Package",
            text:
              "Such a wonderful bonding experience with my daughter. The staff made us both feel so special and comfortable. We're definitely coming back!",
          },
        ],
      },

      // About Page
      aboutPage: {
        heroTitle: "About",
        heroHighlight: "Aura Essence",
        heroSubtitle:
          "Where luxury meets wellness, and every treatment is designed to help you glow from within.",
        ourStory: {
          title: "Our Story",
          paragraphs: [
            "Founded with a passion for luxury wellness and skincare, Aura Essence LLC was born from the belief that everyone deserves to feel radiant, confident, and pampered. Our journey began with a simple vision: to create a sanctuary where advanced skincare meets personalized care.",
            "Every treatment at Aura Essence is carefully curated to not just enhance your natural beauty, but to provide a transformative experience that rejuvenates both body and spirit. From our signature facials to our specialized body treatments, we combine cutting-edge techniques with premium products to deliver exceptional results.",
            "Our commitment extends beyond skincare – we believe in empowering every client to embrace their unique beauty and feel confident in their own skin. This philosophy guides everything we do, from our personalized consultation process to our ongoing client relationships.",
          ],
        },
        founder: {
          title: "Our Founder",
          paragraphs: [
            "With over a decade of experience in luxury skincare and wellness, our founder brings expertise, passion, and an unwavering commitment to excellence to every aspect of Aura Essence.",
            "Certified in advanced skincare techniques and dedicated to continuing education, our team ensures that every client receives the highest quality care and the most innovative treatments available.",
          ],
        },
        difference: {
          title: "What Makes Us",
          highlight: "Different",
          subtitle:
            "Experience the Aura Essence difference through our unique approach to luxury wellness",
          items: [
            {
              title: "Personalized Care",
              description:
                "Every treatment is customized to your unique skin type, concerns, and goals. We believe in individual attention and tailored experiences.",
            },
            {
              title: "Premium Ingredients",
              description:
                "We use only the finest, clinically-proven ingredients and products from leading luxury skincare brands to ensure optimal results.",
            },
            {
              title: "Relaxing Environment",
              description:
                "Our serene, luxurious space is designed to transport you from everyday stress to a peaceful sanctuary of wellness.",
            },
            {
              title: "Advanced Techniques",
              description:
                "Our team stays current with the latest innovations in skincare technology and advanced treatment methodologies.",
            },
            {
              title: "Holistic Approach",
              description:
                "We consider your overall wellness, combining skincare with relaxation techniques for comprehensive rejuvenation.",
            },
            {
              title: "Ongoing Support",
              description:
                "Your skin journey doesn't end with your treatment. We provide guidance and support for your at-home skincare routine.",
            },
          ],
        },
        valuesSection: {
          title: "Our",
          highlight: "Values",
          values: ["Luxury", "Comfort", "Confidence", "Wellness", "Glow"],
          icons: ["✨", "🌿", "💫", "🧘‍♀️", "✨"],
        },
      },

      // Contact Page
      contactPage: {
        heroTitle: "Book Your",
        heroHighlight: "Treatment",
        heroSubtitle:
          "Let your glow journey begin. Contact us to schedule your personalized spa experience.",
        formTitle: "Book Your Appointment",
        labels: {
          name: "Full Name *",
          email: "Email *",
          phone: "Phone Number",
          service: "Preferred Service *",
          preferredDate: "Preferred Date",
          preferredTime: "Preferred Time",
          message: "Additional Notes",
        },
        placeholders: {
          service: "Select a service",
          time: "Select time",
          message: "Any specific requests, concerns, or questions...",
        },
        serviceOptions: [
          "Mini Facial ($45)",
          "AE Signature Facial ($75)",
          "Lymphatic Drainage Facial ($90)",
          "AE Luxe | Event Ready ($120)",
          "Back Facial ($65)",
          "Full Body Treatment ($130)",
          "Classic Lash Set ($100)",
          "Hybrid Lash Set ($120)",
          "Volume Lash Set ($130)",
          "Waxing Services",
          "Custom Package",
          "Consultation",
        ],
        timeOptions: [
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "12:00 PM",
          "1:00 PM",
          "2:00 PM",
          "3:00 PM",
          "4:00 PM",
          "5:00 PM",
        ],
        submit: "Submit Booking Request",
        contactWithin:
          "We'll contact you within 24 hours to confirm your appointment.",
        contactInfo: {
          title: "Contact Information",
          phoneNote: "Call or text for appointments",
          emailNote: "Email for inquiries",
          addressLine1: "123 Wellness Avenue",
          addressLine2: "Luxury District, CT 06001",
          addressNote: "Private parking available",
        },
        hours: {
          title: "Business Hours",
          monFri: "Monday - Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          note: "Extended hours available for special events and packages",
        },
        follow: {
          title: "Follow Us",
          instagram: "@auraessencellc",
          facebook: "Aura Essence LLC",
          note:
            "Follow us for skincare tips, before & after photos, and special offers!",
        },
        policies: {
          title: "Booking Policies",
          items: [
            {
              title: "Cancellation Policy",
              text:
                "Please provide at least 24 hours notice for cancellations to avoid fees.",
            },
            {
              title: "Late Arrival",
              text:
                "Late arrivals may result in shortened treatment time or rescheduling.",
            },
            {
              title: "Health Conditions",
              text:
                "Please inform us of any allergies, medications, or skin conditions.",
            },
            {
              title: "Age Requirements",
              text:
                "Children's services available for ages 10-14 with adult supervision.",
            },
          ],
        },
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

      // Featured Services
      featuredServices: {
        title: "Servicios",
        highlight: "Destacados",
        subtitle:
          "Experimenta nuestros tratamientos más populares diseñados para rejuvenecer tu piel y restaurar tu brillo interior.",
        items: [
          {
            title: "Facial Característico AE",
            description:
              "Nuestro facial característico utiliza tecnología de alta frecuencia, exfoliación y sueros para restaurar el equilibrio natural de tu piel.",
            price: "$75",
            duration: "60 mins",
          },
          {
            title: "Tratamiento Corporal Completo",
            description:
              "Una sesión completa de cuidado de la piel y relajación que incluye limpieza, exfoliación y tratamientos nutritivos.",
            price: "$130",
            duration: "1h 30m",
          },
          {
            title: "Extensiones de Pestañas",
            description:
              "Realza tu belleza natural con nuestros servicios profesionales de extensión de pestañas para un look glamoroso.",
            price: "Desde $100",
            duration: "3 horas",
          },
        ],
        book: "Reservar Tratamiento",
        viewAll: "Ver Todos los Servicios",
      },

      // Testimonials
      testimonials: {
        title: "Lo que Nuestros Clientes",
        highlight: "Dicen",
        subtitle:
          "Lee sobre las experiencias transformadoras de nuestros valiosos clientes",
        list: [
          {
            name: "Sarah Johnson",
            service: "Facial Característico AE",
            text:
              "¡Experiencia absolutamente increíble! Mi piel nunca ha lucido mejor. El personal es muy profesional y el ambiente muy relajante. ¡No puedo esperar para volver!",
          },
          {
            name: "Maria Rodriguez",
            service: "Tratamiento Corporal Completo",
            text:
              "El tratamiento corporal completo fue pura lujo. Me sentí completamente mimada y relajada. Los resultados fueron increíbles: mi piel se siente tan suave y renovada.",
          },
          {
            name: "Emily Chen",
            service: "Extensiones de Pestañas",
            text:
              "¡Mis extensiones de pestañas se ven absolutamente perfectas! La atención al detalle es increíble. Recibo cumplidos todos los días y me siento muy segura.",
          },
          {
            name: "Jessica Williams",
            service: "Facial AE Luxe",
            text:
              "El facial para eventos fue exactamente lo que necesitaba antes de mi boda. Mi piel estaba radiante y las fotos salieron increíbles. ¡Muy recomendado!",
          },
          {
            name: "Ashley Davis",
            service: "Paquete Mamá e Hija",
            text:
              "Una experiencia de unión maravillosa con mi hija. El personal nos hizo sentir tan especiales y cómodas. ¡Definitivamente volveremos!",
          },
        ],
      },

      // About Page
      aboutPage: {
        heroTitle: "Acerca de",
        heroHighlight: "Aura Essence",
        heroSubtitle:
          "Donde el lujo se une al bienestar y cada tratamiento está diseñado para ayudarte a brillar desde adentro.",
        ourStory: {
          title: "Nuestra Historia",
          paragraphs: [
            "Fundada con una pasión por el bienestar y el cuidado de la piel de lujo, Aura Essence LLC nació de la creencia de que todos merecen sentirse radiantes, seguros y mimados. Nuestro viaje comenzó con una visión simple: crear un santuario donde el cuidado avanzado de la piel se encuentre con la atención personalizada.",
            "Cada tratamiento en Aura Essence está cuidadosamente diseñado no solo para realzar tu belleza natural, sino para brindar una experiencia transformadora que rejuvenezca tanto el cuerpo como el espíritu. Desde nuestros faciales característicos hasta nuestros tratamientos corporales especializados, combinamos técnicas de vanguardia con productos premium para ofrecer resultados excepcionales.",
            "Nuestro compromiso va más allá del cuidado de la piel: creemos en empoderar a cada cliente para que abrace su belleza única y se sienta seguro en su propia piel. Esta filosofía guía todo lo que hacemos, desde nuestro proceso de consulta personalizado hasta nuestras relaciones continuas con los clientes.",
          ],
        },
        founder: {
          title: "Nuestra Fundadora",
          paragraphs: [
            "Con más de una década de experiencia en cuidado de la piel y bienestar de lujo, nuestra fundadora aporta experiencia, pasión y un compromiso inquebrantable con la excelencia en cada aspecto de Aura Essence.",
            "Certificado en técnicas avanzadas de cuidado de la piel y dedicado a la educación continua, nuestro equipo garantiza que cada cliente reciba la atención de la más alta calidad y los tratamientos más innovadores disponibles.",
          ],
        },
        difference: {
          title: "Qué Nos Hace",
          highlight: "Diferentes",
          subtitle:
            "Experimenta la diferencia de Aura Essence a través de nuestro enfoque único del bienestar de lujo",
          items: [
            {
              title: "Atención Personalizada",
              description:
                "Cada tratamiento se personaliza según tu tipo de piel, preocupaciones y objetivos. Creemos en la atención individual y experiencias a medida.",
            },
            {
              title: "Ingredientes Premium",
              description:
                "Utilizamos solo los mejores ingredientes y productos clínicamente probados de las principales marcas de cuidado de la piel de lujo para garantizar resultados óptimos.",
            },
            {
              title: "Ambiente Relajante",
              description:
                "Nuestro espacio sereno y lujoso está diseñado para transportarte del estrés cotidiano a un santuario pacífico de bienestar.",
            },
            {
              title: "Técnicas Avanzadas",
              description:
                "Nuestro equipo se mantiene al día con las últimas innovaciones en tecnología de cuidado de la piel y metodologías de tratamiento avanzadas.",
            },
            {
              title: "Enfoque Holístico",
              description:
                "Consideramos tu bienestar general, combinando el cuidado de la piel con técnicas de relajación para una rejuvenecimiento integral.",
            },
            {
              title: "Apoyo Continuo",
              description:
                "Tu viaje de cuidado de la piel no termina con tu tratamiento. Brindamos orientación y apoyo para tu rutina de cuidado en casa.",
            },
          ],
        },
        valuesSection: {
          title: "Nuestros",
          highlight: "Valores",
          values: ["Lujo", "Comodidad", "Confianza", "Bienestar", "Brillo"],
          icons: ["✨", "🌿", "💫", "🧘‍♀️", "✨"],
        },
      },

      // Contact Page
      contactPage: {
        heroTitle: "Reserva tu",
        heroHighlight: "Tratamiento",
        heroSubtitle:
          "Que comience tu viaje de brillo. Contáctanos para programar tu experiencia de spa personalizada.",
        formTitle: "Reserva tu Cita",
        labels: {
          name: "Nombre Completo *",
          email: "Correo Electrónico *",
          phone: "Número de Teléfono",
          service: "Servicio Preferido *",
          preferredDate: "Fecha Preferida",
          preferredTime: "Hora Preferida",
          message: "Notas Adicionales",
        },
        placeholders: {
          service: "Selecciona un servicio",
          time: "Selecciona una hora",
          message: "Cualquier solicitud, preocupación o pregunta específica...",
        },
        serviceOptions: [
          "Facial Mini ($45)",
          "Facial Característico AE ($75)",
          "Facial de Drenaje Linfático ($90)",
          "AE Luxe | Listo para Evento ($120)",
          "Facial de Espalda ($65)",
          "Tratamiento Corporal Completo ($130)",
          "Juego de Pestañas Clásicas ($100)",
          "Juego de Pestañas Híbridas ($120)",
          "Juego de Pestañas Volumen ($130)",
          "Servicios de Depilación",
          "Paquete Personalizado",
          "Consulta",
        ],
        timeOptions: [
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "12:00 PM",
          "1:00 PM",
          "2:00 PM",
          "3:00 PM",
          "4:00 PM",
          "5:00 PM",
        ],
        submit: "Enviar Solicitud de Reserva",
        contactWithin:
          "Nos pondremos en contacto contigo dentro de 24 horas para confirmar tu cita.",
        contactInfo: {
          title: "Información de Contacto",
          phoneNote: "Llama o envía un texto para citas",
          emailNote: "Correo para consultas",
          addressLine1: "123 Avenida Wellness",
          addressLine2: "Distrito de Lujo, CT 06001",
          addressNote: "Estacionamiento privado disponible",
        },
        hours: {
          title: "Horario de Atención",
          monFri: "Lunes - Viernes",
          saturday: "Sábado",
          sunday: "Domingo",
          note:
            "Horarios extendidos disponibles para eventos especiales y paquetes",
        },
        follow: {
          title: "Síguenos",
          instagram: "@auraessencellc",
          facebook: "Aura Essence LLC",
          note:
            "¡Síguenos para consejos de cuidado de la piel, fotos de antes y después, y ofertas especiales!",
        },
        policies: {
          title: "Políticas de Reserva",
          items: [
            {
              title: "Política de Cancelación",
              text:
                "Por favor proporciona al menos 24 horas de anticipación para cancelaciones y así evitar cargos.",
            },
            {
              title: "Llegada Tarde",
              text:
                "Las llegadas tarde pueden resultar en una reducción del tiempo de tratamiento o reprogramación.",
            },
            {
              title: "Condiciones de Salud",
              text:
                "Por favor infórmanos de cualquier alergia, medicamento o condición de la piel.",
            },
            {
              title: "Requisitos de Edad",
              text:
                "Servicios para niños disponibles para edades de 10-14 con supervisión adulta.",
            },
          ],
        },
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
