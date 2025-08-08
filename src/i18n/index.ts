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

      // Services Page
      servicesPage: {
        heroTitle: "Our",
        heroHighlight: "Services",
        heroSubtitle:
          "Discover our comprehensive range of luxury treatments designed to enhance your natural beauty and wellness.",
        sections: {
          facials: "Facials",
          children: "Children's Facials",
          body: "Body Treatments",
          lash: "Lash Extensions",
          waxing: "Waxing Services",
          addOns: "Add-Ons",
          serums: "Serum Boosts",
        },
        includesLabel: "Includes:",
        mostPopular: "Most Popular",
        children: {
          ageRange: "Ages 10–14 | 45–60 mins",
          note: "Note: Minimum of 2 services required per session",
        },
        bookAppointment: "Book Appointment",
        ctaTitle: "Ready to",
        ctaHighlight: "Glow?",
        ctaSubtitle: "Let your glow journey begin. Book your personalized treatment today.",
        ctaButton: "Book Your Treatment",
        facials: [
          {
            name: "Mini Facial",
            duration: "45 mins",
            price: "$45",
            description:
              "This express facial includes cleansing, exfoliation, a hydrating mask, and SPF protection. Perfect for regular upkeep.",
            includes: ["Cleanse", "Exfoliation", "Masque", "Tone", "Moisturizer | SPF"],
          },
          {
            name: "AE Signature Facial",
            duration: "60 mins",
            price: "$75",
            description:
              "Our signature facial uses high-frequency technology, exfoliation, and serums to restore your skin's natural balance.",
            includes: [
              "Double Cleanse",
              "Exfoliation",
              "Masque",
              "Tone",
              "High Frequency",
              "Serum",
              "Moisturizer | SPF",
            ],
            featured: true,
          },
          {
            name: "Lymphatic Drainage Facial",
            duration: "1h 10m",
            price: "$90",
            description:
              "This treatment stimulates lymph flow to reduce puffiness and detoxify the skin. Perfect for improving circulation.",
            includes: [
              "Double Cleanse",
              "Exfoliation",
              "Tone",
              "Lymphatic Massage",
              "High Frequency",
              "Moisturizer | SPF",
            ],
          },
          {
            name: "AE Luxe | Event Ready",
            duration: "1h 20m",
            price: "$120",
            description:
              "Designed for glowing skin before a big event. Includes massage, Gua Sha, LED therapy and more.",
            includes: [
              "Double Cleanse",
              "Exfoliation",
              "Tone",
              "Massage | Gua Sha | LED & High Frequency",
              "Serum",
              "Moisturizer | SPF",
            ],
          },
        ],
        childrenServices: [
          {
            name: "Mini Facial + High Frequency",
            price: "$35",
            description: "Cleanses and treats mild breakouts, promoting clear and healthy skin.",
          },
          {
            name: "Mini Back Facial with Gua Sha or Hot Stones",
            price: "$50",
            description: "Soothes tension and deeply cleanses the back with relaxing techniques.",
          },
          {
            name: "Eye & Lip Treatment",
            price: "$40",
            description: "Hydrates and brightens delicate areas with kid-friendly products.",
          },
          {
            name: "LED Light Therapy + Massage + Exfoliation with Paraffin",
            price: "$55",
            description: "Promotes relaxation while boosting skin renewal and hydration.",
          },
        ],
        bodyTreatments: [
          {
            name: "Back Facial",
            duration: "60 mins",
            price: "$65",
            description:
              "Targets back acne, texture, and dryness with deep cleansing, exfoliation, and hydrating mask.",
            includes: [
              "Cleanse",
              "Exfoliation",
              "Tone",
              "Masque",
              "High Frequency",
              "Massage",
              "Serum | Moisturizer",
            ],
          },
          {
            name: "Full Body Treatment",
            duration: "1h 30m",
            price: "$130",
            description:
              "A full-body skincare and relaxation session that improves circulation and smooths skin.",
            includes: [
              "Cleanse",
              "Exfoliation",
              "Tone",
              "Masque",
              "High Frequency",
              "Massage",
              "Moisturizer",
            ],
          },
          {
            name: "Custom Back Facial",
            duration: "1h 15m",
            price: "Price Varies",
            description:
              "Tailored to your skin's needs. Perfect for personalizing your glow and targeting specific concerns.",
            includes: [
              "Service Designed By You",
              "Cleanse",
              "Exfoliation",
              "Tone",
              "Masque",
              "High Frequency",
              "Massage",
              "Moisturizer",
            ],
          },
        ],
        lashServices: [
          {
            name: "Classic Set",
            duration: "Approx. 3 hours",
            price: "$100",
            description:
              "Enhances natural lashes with a clean, elegant look. One extension per lash for length and definition.",
          },
          {
            name: "Hybrid Set",
            duration: "Approx. 3 hours",
            price: "$120",
            description:
              "Perfect mix of classic and volume lashes providing both texture and fullness.",
          },
          {
            name: "Volume Set",
            duration: "Approx. 3 hours",
            price: "$130",
            description:
              "Fuller, fluffier appearance using handmade fans. Perfect for bold, glamorous lashes.",
          },
        ],
        waxingServices: [
          { name: "Brows", duration: "15 mins", price: "$12" },
          { name: "Brows + Mapping", duration: "20 mins", price: "$20" },
          { name: "Top Lip", duration: "10 mins", price: "$5" },
          { name: "Chin", duration: "10 mins", price: "$5" },
          { name: "Sideburns", duration: "15 mins", price: "$10" },
          { name: "Full Face", duration: "30 mins", price: "$20" },
          { name: "Underarm", duration: "15 mins", price: "$20" },
          { name: "Full Arm", duration: "30 mins", price: "$30" },
          { name: "Bikini", duration: "30 mins", price: "$40" },
        ],
        addOns: [
          { name: "Eye Treatment", price: "$35" },
          { name: "Lip Treatment", price: "$20" },
          { name: "LED Light Therapy + Massage + Exfoliation with Paraffin + Wax Service", price: "$15" },
          { name: "BT Micro", price: "$15" },
          { name: "Galvanic/Radio Therapy", price: "$20" },
          { name: "Gua Sha", price: "$15" },
          { name: "Lymphatic Drainage", price: "$45" },
          { name: "Pressure Points", price: "$15" },
          { name: "Extraction", price: "$15" },
          { name: "Aromatherapy", price: "$10" },
          { name: "Cooling Globes", price: "$5" },
          { name: "Paraffin Wax Service", price: "$30" },
          { name: "Hot Stones", price: "$10" },
          { name: "Rubber Masque", price: "$25" },
          { name: "Jelly Masque", price: "$15" },
          { name: "Sheet Mask", price: "$10" },
          { name: "Salt/Sugar Crystal Scrub", price: "$5" },
        ],
        serumBoosts: [
          { name: "Vitamin C", price: "$5", benefit: "Brightens & targets hyperpigmentation" },
          { name: "Retinol", price: "$5", benefit: "Improves texture & cell turnover" },
          { name: "Niacinamide", price: "$5", benefit: "Anti-inflammatory & soothes" },
          { name: "Hyaluronic Acid", price: "$5", benefit: "Deep hydration" },
        ],
      },

      // Packages Page
      packagesPage: {
        heroTitle: "Custom",
        heroHighlight: "Packages",
        heroSubtitle:
          "Create lasting memories with our specially curated group experiences designed for bonding, celebration, and relaxation.",
        includesLabel: "Package Includes:",
        customizeButton: "Customize Package",
        customizeTitle: "Customize Your",
        customizeHighlight: "Experience",
        customizeSubtitle: "Make your package even more special with these additional options",
        howItWorks: {
          title: "How It",
          highlight: "Works",
          steps: [
            { title: "Choose Your Package", description: "Select the package that best fits your group and occasion." },
            { title: "Customize Your Experience", description: "Work with us to tailor services, add-ons, and special touches." },
            { title: "Enjoy & Relax", description: "Arrive and let us take care of everything while you create memories." },
          ],
        },
        packageInfoTitle: "Package Information",
        packageInfoBullets: [
          "All packages require advance booking and consultation to customize your experience",
          "Group sizes can be accommodated from 2-8 people depending on the package",
          "48-hour cancellation policy applies to all packages",
          "Gratuity is not included in package pricing",
          "Special dietary restrictions can be accommodated with advance notice",
          "Children's packages available for ages 10-14 with adult supervision",
        ],
        ctaTitle: "Ready to Create",
        ctaHighlight: "Memories?",
        ctaSubtitle: "Contact us to discuss your custom package and make your special occasion unforgettable.",
        ctaPrimary: "Plan Your Package",
        ctaSecondary: "View All Services",
        packages: [
          {
            name: "Mommy & Me",
            description:
              "A special bonding experience for mothers and daughters. Enjoy relaxing treatments together in our peaceful environment.",
            includes: [
              "Choice of any facial service for both",
              "Complimentary herbal tea",
              "Relaxing aromatherapy",
              "Special photo session",
              "Take-home skincare samples",
            ],
            price: "Custom Pricing",
            duration: "2-3 hours",
            highlight: "Perfect for ages 10-14 with mom",
          },
          {
            name: "Couples Package",
            description:
              "Reconnect and unwind together with side-by-side treatments in our couples suite.",
            includes: [
              "Side-by-side treatment rooms",
              "Choice of signature facials or body treatments",
              "Champagne or sparkling cider",
              "Chocolate-covered strawberries",
              "Extended relaxation time",
            ],
            price: "Custom Pricing",
            duration: "2.5-3 hours",
            highlight: "Romantic and rejuvenating",
          },
          {
            name: "Bestie's Spa Day",
            description:
              "Celebrate friendship with your closest friends. Perfect for birthdays, bachelorettes, or just because!",
            includes: [
              "Group treatment sessions",
              "Mini facial or body treatment for each guest",
              "Light refreshments and beverages",
              "Group photos and memories",
              "Special group discount",
              "Custom playlist of your choice",
            ],
            price: "Custom Pricing",
            duration: "3-4 hours",
            highlight: "Groups of 3-6 people",
          },
        ],
        addOnOptions: [
          "Lash extensions for the group",
          "Professional makeup application",
          "Nail services",
          "Extended aromatherapy session",
          "Healthy spa lunch",
          "Customized gift bags",
          "Professional photography",
          "Meditation and wellness coaching",
        ],
      },

      // Gallery Page
      galleryPage: {
        heroTitle: "Our",
        heroHighlight: "Gallery",
        heroSubtitle:
          "Discover the beauty of our treatments, results, and serene spa environment through our gallery of transformations.",
        categories: [
          "All",
          "Treatment Rooms",
          "Facial Treatments",
          "Body Treatments",
          "Lash Services",
          "Results",
          "Family Packages",
        ],
        items: [
          { alt: "Luxury spa treatment room", category: "Treatment Rooms" },
          { alt: "Signature facial treatment", category: "Facial Treatments" },
          { alt: "Relaxing body treatment", category: "Body Treatments" },
          { alt: "Professional lash extensions", category: "Lash Services" },
          { alt: "Elegant treatment room setup", category: "Treatment Rooms" },
          { alt: "Glowing skin results", category: "Results" },
          { alt: "Beautiful lash extension results", category: "Lash Services" },
          { alt: "Mother and daughter spa experience", category: "Family Packages" },
        ],
        noImages: "No images found for this category.",
        lightboxAlt: "Gallery image",
        testimonial: {
          title: "See the",
          highlight: "Difference",
          quote:
            "The results speak for themselves. My skin has never looked better, and the photos don't even capture how amazing I feel. The whole experience was transformative.",
          name: "Sarah M.",
          service: "AE Signature Facial Client",
        },
        cta: {
          title: "Want to See Your Results?",
          text:
            "We love celebrating our clients' transformations! With your permission, we may feature before and after photos to inspire others on their glow journey.",
          primary: "Book Your Transformation",
          secondary: "View Our Services",
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

      // Página de Servicios
      servicesPage: {
        heroTitle: "Nuestros",
        heroHighlight: "Servicios",
        heroSubtitle:
          "Descubre nuestra amplia gama de tratamientos de lujo diseñados para realzar tu belleza natural y bienestar.",
        sections: {
          facials: "Faciales",
          children: "Faciales para Niños",
          body: "Tratamientos Corporales",
          lash: "Extensiones de Pestañas",
          waxing: "Servicios de Depilación",
          addOns: "Complementos",
          serums: "Refuerzos de Sueros",
        },
        includesLabel: "Incluye:",
        mostPopular: "Más Popular",
        children: {
          ageRange: "Edades 10–14 | 45–60 mins",
          note: "Nota: Se requieren mínimo 2 servicios por sesión",
        },
        bookAppointment: "Reservar Cita",
        ctaTitle: "¿Lista para",
        ctaHighlight: "Brillar?",
        ctaSubtitle: "Que comience tu viaje de brillo. Reserva tu tratamiento personalizado hoy.",
        ctaButton: "Reserva tu Tratamiento",
        facials: [
          {
            name: "Facial Mini",
            duration: "45 mins",
            price: "$45",
            description:
              "Este facial exprés incluye limpieza, exfoliación, una mascarilla hidratante y protección SPF. Perfecto para mantenimiento regular.",
            includes: ["Limpieza", "Exfoliación", "Mascarilla", "Tónico", "Hidratante | SPF"],
          },
          {
            name: "Facial Característico AE",
            duration: "60 mins",
            price: "$75",
            description:
              "Nuestro facial característico utiliza tecnología de alta frecuencia, exfoliación y sueros para restaurar el equilibrio natural de tu piel.",
            includes: [
              "Doble Limpieza",
              "Exfoliación",
              "Mascarilla",
              "Tónico",
              "Alta Frecuencia",
              "Suero",
              "Hidratante | SPF",
            ],
            featured: true,
          },
          {
            name: "Facial de Drenaje Linfático",
            duration: "1h 10m",
            price: "$90",
            description:
              "Este tratamiento estimula el flujo linfático para reducir la hinchazón y desintoxicar la piel. Perfecto para mejorar la circulación.",
            includes: [
              "Doble Limpieza",
              "Exfoliación",
              "Tónico",
              "Masaje Linfático",
              "Alta Frecuencia",
              "Hidratante | SPF",
            ],
          },
          {
            name: "AE Luxe | Listo para Evento",
            duration: "1h 20m",
            price: "$120",
            description:
              "Diseñado para una piel radiante antes de un gran evento. Incluye masaje, Gua Sha, terapia LED y más.",
            includes: [
              "Doble Limpieza",
              "Exfoliación",
              "Tónico",
              "Masaje | Gua Sha | LED y Alta Frecuencia",
              "Suero",
              "Hidratante | SPF",
            ],
          },
        ],
        childrenServices: [
          {
            name: "Facial Mini + Alta Frecuencia",
            price: "$35",
            description: "Limpia y trata brotes leves, promoviendo una piel clara y saludable.",
          },
          {
            name: "Mini Facial de Espalda con Gua Sha o Piedras Calientes",
            price: "$50",
            description: "Alivia la tensión y limpia profundamente la espalda con técnicas relajantes.",
          },
          {
            name: "Tratamiento de Ojos y Labios",
            price: "$40",
            description: "Hidrata e ilumina áreas delicadas con productos aptos para niños.",
          },
          {
            name: "Terapia LED + Masaje + Exfoliación con Parafina",
            price: "$55",
            description: "Promueve la relajación mientras estimula la renovación e hidratación de la piel.",
          },
        ],
        bodyTreatments: [
          {
            name: "Facial de Espalda",
            duration: "60 mins",
            price: "$65",
            description:
              "Trata el acné, la textura y la resequedad de la espalda con limpieza profunda, exfoliación y mascarilla hidratante.",
            includes: [
              "Limpieza",
              "Exfoliación",
              "Tónico",
              "Mascarilla",
              "Alta Frecuencia",
              "Masaje",
              "Suero | Hidratante",
            ],
          },
          {
            name: "Tratamiento Corporal Completo",
            duration: "1h 30m",
            price: "$130",
            description:
              "Sesión integral de cuidado corporal y relajación que mejora la circulación y suaviza la piel.",
            includes: [
              "Limpieza",
              "Exfoliación",
              "Tónico",
              "Mascarilla",
              "Alta Frecuencia",
              "Masaje",
              "Hidratante",
            ],
          },
          {
            name: "Facial de Espalda Personalizado",
            duration: "1h 15m",
            price: "Precio Variable",
            description:
              "Adaptado a las necesidades de tu piel. Perfecto para personalizar tu brillo y tratar preocupaciones específicas.",
            includes: [
              "Servicio Diseñado por Ti",
              "Limpieza",
              "Exfoliación",
              "Tónico",
              "Mascarilla",
              "Alta Frecuencia",
              "Masaje",
              "Hidratante",
            ],
          },
        ],
        lashServices: [
          {
            name: "Juego Clásico",
            duration: "Aprox. 3 horas",
            price: "$100",
            description:
              "Realza las pestañas naturales con un look limpio y elegante. Una extensión por pestaña para longitud y definición.",
          },
          {
            name: "Juego Híbrido",
            duration: "Aprox. 3 horas",
            price: "$120",
            description:
              "Mezcla perfecta de clásicas y volumen que brinda textura y plenitud.",
          },
          {
            name: "Juego de Volumen",
            duration: "Aprox. 3 horas",
            price: "$130",
            description:
              "Apariencia más llena y esponjosa usando abanicos hechos a mano. Ideal para un look glamoroso.",
          },
        ],
        waxingServices: [
          { name: "Cejas", duration: "15 mins", price: "$12" },
          { name: "Cejas + Mapeo", duration: "20 mins", price: "$20" },
          { name: "Labio Superior", duration: "10 mins", price: "$5" },
          { name: "Barbilla", duration: "10 mins", price: "$5" },
          { name: "Patillas", duration: "15 mins", price: "$10" },
          { name: "Rostro Completo", duration: "30 mins", price: "$20" },
          { name: "Axila", duration: "15 mins", price: "$20" },
          { name: "Brazo Completo", duration: "30 mins", price: "$30" },
          { name: "Bikini", duration: "30 mins", price: "$40" },
        ],
        addOns: [
          { name: "Tratamiento de Ojos", price: "$35" },
          { name: "Tratamiento de Labios", price: "$20" },
          { name: "Terapia LED + Masaje + Exfoliación con Parafina + Servicio de Cera", price: "$15" },
          { name: "BT Micro", price: "$15" },
          { name: "Terapia Galvánica/Radio", price: "$20" },
          { name: "Gua Sha", price: "$15" },
          { name: "Drenaje Linfático", price: "$45" },
          { name: "Puntos de Presión", price: "$15" },
          { name: "Extracción", price: "$15" },
          { name: "Aromaterapia", price: "$10" },
          { name: "Globos Fríos", price: "$5" },
          { name: "Parafina", price: "$30" },
          { name: "Piedras Calientes", price: "$10" },
          { name: "Mascarilla de Goma", price: "$25" },
          { name: "Mascarilla Jelly", price: "$15" },
          { name: "Mascarilla en Hoja", price: "$10" },
          { name: "Exfoliante de Sal/Azúcar", price: "$5" },
        ],
        serumBoosts: [
          { name: "Vitamina C", price: "$5", benefit: "Aporta luminosidad y combate hiperpigmentación" },
          { name: "Retinol", price: "$5", benefit: "Mejora la textura y la renovación celular" },
          { name: "Niacinamida", price: "$5", benefit: "Antiinflamatoria y calmante" },
          { name: "Ácido Hialurónico", price: "$5", benefit: "Hidratación profunda" },
        ],
      },

      // Página de Paquetes
      packagesPage: {
        heroTitle: "Paquetes",
        heroHighlight: "Personalizados",
        heroSubtitle:
          "Crea recuerdos duraderos con nuestras experiencias en grupo especialmente curadas para conexión, celebración y relajación.",
        includesLabel: "Incluye:",
        customizeButton: "Personalizar Paquete",
        customizeTitle: "Personaliza tu",
        customizeHighlight: "Experiencia",
        customizeSubtitle: "Haz tu paquete aún más especial con estas opciones adicionales",
        howItWorks: {
          title: "Cómo",
          highlight: "Funciona",
          steps: [
            { title: "Elige tu Paquete", description: "Selecciona el paquete que mejor se adapte a tu grupo y ocasión." },
            { title: "Personaliza tu Experiencia", description: "Trabaja con nosotros para ajustar servicios, complementos y toques especiales." },
            { title: "Disfruta y Relájate", description: "Llega y deja que nos encarguemos de todo mientras creas recuerdos." },
          ],
        },
        packageInfoTitle: "Información del Paquete",
        packageInfoBullets: [
          "Todos los paquetes requieren reserva anticipada y consulta para personalizar tu experiencia",
          "Se pueden acomodar grupos de 2-8 personas según el paquete",
          "Se aplica política de cancelación de 48 horas a todos los paquetes",
          "La propina no está incluida en el precio del paquete",
          "Se pueden acomodar restricciones dietéticas con aviso previo",
          "Paquetes para niños disponibles para edades 10-14 con supervisión adulta",
        ],
        ctaTitle: "¿Listo para Crear",
        ctaHighlight: "Recuerdos?",
        ctaSubtitle: "Contáctanos para hablar de tu paquete personalizado y hacer inolvidable tu ocasión especial.",
        ctaPrimary: "Planifica tu Paquete",
        ctaSecondary: "Ver Todos los Servicios",
        packages: [
          {
            name: "Mamá e Hija",
            description:
              "Una experiencia especial de unión para madres e hijas. Disfruten juntas de tratamientos relajantes en nuestro ambiente pacífico.",
            includes: [
              "Elección de cualquier servicio facial para ambas",
              "Té de hierbas de cortesía",
              "Aromaterapia relajante",
              "Sesión de fotos especial",
              "Muestras de cuidado de la piel para llevar",
            ],
            price: "Precio Personalizado",
            duration: "2-3 horas",
            highlight: "Perfecto para edades 10-14 con mamá",
          },
          {
            name: "Paquete para Parejas",
            description:
              "Reconecta y relájate con tratamientos lado a lado en nuestra suite para parejas.",
            includes: [
              "Salas de tratamiento lado a lado",
              "Elección de faciales característicos o tratamientos corporales",
              "Champaña o sidra espumosa",
              "Fresas cubiertas de chocolate",
              "Tiempo de relajación extendido",
            ],
            price: "Precio Personalizado",
            duration: "2.5-3 horas",
            highlight: "Romántico y rejuvenecedor",
          },
          {
            name: "Día de Spa con Amigas",
            description:
              "Celebra la amistad con tus mejores amigas. Perfecto para cumpleaños, despedidas o simplemente porque sí!",
            includes: [
              "Sesiones de tratamiento en grupo",
              "Mini facial o tratamiento corporal para cada invitada",
              "Refrescos y bebidas ligeras",
              "Fotos y recuerdos en grupo",
              "Descuento especial para grupos",
              "Lista de reproducción personalizada",
            ],
            price: "Precio Personalizado",
            duration: "3-4 horas",
            highlight: "Grupos de 3-6 personas",
          },
        ],
        addOnOptions: [
          "Extensiones de pestañas para el grupo",
          "Maquillaje profesional",
          "Servicios de uñas",
          "Sesión extendida de aromaterapia",
          "Almuerzo saludable de spa",
          "Bolsas de regalo personalizadas",
          "Fotografía profesional",
          "Meditación y coaching de bienestar",
        ],
      },

      // Página de Galería
      galleryPage: {
        heroTitle: "Nuestra",
        heroHighlight: "Galería",
        heroSubtitle:
          "Descubre la belleza de nuestros tratamientos, resultados y ambiente sereno a través de nuestra galería de transformaciones.",
        categories: [
          "Todas",
          "Salas de Tratamiento",
          "Tratamientos Faciales",
          "Tratamientos Corporales",
          "Servicios de Pestañas",
          "Resultados",
          "Paquetes Familiares",
        ],
        items: [
          { alt: "Sala de tratamiento de spa de lujo", category: "Salas de Tratamiento" },
          { alt: "Tratamiento facial característico", category: "Tratamientos Faciales" },
          { alt: "Relajante tratamiento corporal", category: "Tratamientos Corporales" },
          { alt: "Extensiones de pestañas profesionales", category: "Servicios de Pestañas" },
          { alt: "Elegante montaje de sala de tratamiento", category: "Salas de Tratamiento" },
          { alt: "Resultados de piel radiante", category: "Resultados" },
          { alt: "Hermosos resultados de extensiones de pestañas", category: "Servicios de Pestañas" },
          { alt: "Experiencia de spa madre e hija", category: "Paquetes Familiares" },
        ],
        noImages: "No se encontraron imágenes para esta categoría.",
        lightboxAlt: "Imagen de la galería",
        testimonial: {
          title: "Mira la",
          highlight: "Diferencia",
          quote:
            "Los resultados hablan por sí solos. Mi piel nunca ha lucido mejor, y las fotos ni siquiera capturan lo increíble que me siento. Toda la experiencia fue transformadora.",
          name: "Sarah M.",
          service: "Cliente de Facial Característico AE",
        },
        cta: {
          title: "¿Quieres Ver tus Resultados?",
          text:
            "¡Nos encanta celebrar las transformaciones de nuestros clientes! Con tu permiso, podemos mostrar fotos de antes y después para inspirar a otros en su viaje de brillo.",
          primary: "Reserva tu Transformación",
          secondary: "Ver Nuestros Servicios",
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
