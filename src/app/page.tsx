"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  ArrowUp,
  Award,
  Bed,
  Building,
  CheckCircle,
  Dot,
  Linkedin,
  Mail,
  Menu,
  Phone,
  RefreshCw,
  Shield,
  Shirt,
  Sparkles,
  Waves,
  X
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Language = "en" | "fr" | "de";

interface NavBarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

interface SlideItem {
  id: number;
  title: Record<string, string>;
  description: Record<string, string>;
  image: string;
}

interface Case {
  category: string;
  title: string;
  description: string;
  team: string[];
}

interface ContactInfoItem {
  title: string;
  icon: React.ReactNode;
  content: string;
}

type MenuItem = {
  label: string;
  id: string;
};

const menuItems: Record<Language, MenuItem[]> = {
  en: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Expertise", id: "expertise" },
    { label: "Products", id: "products" },
    { label: "Quality Assurance", id: "quality-assurance" },
    { label: "Reviews", id: "reviews" },
    { label: "Contact Us", id: "contact-us" },
  ],
  fr: [
    { label: "Accueil", id: "home" },
    { label: "À propos", id: "about" },
    { label: "Expertise", id: "expertise" },
    { label: "Produits", id: "products" },
    { label: "Assurance qualité", id: "quality-assurance" },
    { label: "Avis", id: "reviews" },
    { label: "Contactez-nous", id: "contact-us" },
  ],
  de: [
    { label: "Startseite", id: "home" },
    { label: "Über uns", id: "about" },
    { label: "Expertise", id: "expertise" },
    { label: "Produkte", id: "products" },
    { label: "Qualitätssicherung", id: "quality-assurance" },
    { label: "Bewertungen", id: "reviews" },
    { label: "Kontakt", id: "contact-us" },
  ],
};

const flagEmojis: Record<Language, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪"
};

export default function HomePage() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("ksk-lang");

    if (savedLang && ["en", "fr", "de"].includes(savedLang)) {
      setLang(savedLang as Language);
    } else {
      localStorage.setItem("ksk-lang", "en");
      setLang("en");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ksk-lang", lang);
  }, [lang]);

  return (
    <div>
      <NavBar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <div className="bg-gray-100 py-10">
        <AboutUs lang={lang} />
      </div>
      <Expertise lang={lang} />
      <Products lang={lang} />
      <QualityAssurance lang={lang} />
      <Reviews lang={lang} />
      <ContactUs lang={lang} />
      <CtaBar lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

const NavBar: React.FC<NavBarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showLangDropdown, setShowLangDropdown] = useState<boolean>(false);

  const toggleLang = (language: Language) => {
    setLang(language);
    setShowLangDropdown(false);
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className="w-full bg-zinc-900/80 backdrop-blur-md backdrop-saturate-50 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        <p className="text-2xl font-medium text-white">KSK Textile</p>


        <div className="hidden md:flex flex-1 justify-center space-x-6 text-white font-medium">
          {menuItems[lang].map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className="hover:text-pink-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>


        <div className="hidden md:block relative">
          <button
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            className="text-white font-semibold flex items-center space-x-2"
          >
            <span>{flagEmojis[lang]} {lang.toUpperCase()}</span>
          </button>
          {showLangDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
              <button
                onClick={() => toggleLang("en")}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => toggleLang("fr")}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
              >
                🇫🇷 Français
              </button>
              <button
                onClick={() => toggleLang("de")}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
              >
                🇩🇪 Deutsch
              </button>
            </div>
          )}
        </div>


        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 pb-6 flex justify-center">
          <div className="flex flex-col items-center space-y-4 text-white font-medium mt-4 w-full">
            {menuItems[lang].map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="hover:text-pink-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="relative mt-4">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="text-white font-semibold flex items-center space-x-2"
              >
                <span>{flagEmojis[lang]} {lang.toUpperCase()}</span>
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                  <button
                    onClick={() => toggleLang("en")}
                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    🇬🇧 English
                  </button>
                  <button
                    onClick={() => toggleLang("fr")}
                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    🇫🇷 Français
                  </button>
                  <button
                    onClick={() => toggleLang("de")}
                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    🇩🇪 Deutsch
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC<{ lang: string }> = ({ lang }) => {
  const TEXTS: { hero: SlideItem[] } = {
    hero: [
      {
        "id": 1,
        "title": {
          "en": "Supplying Premium Textiles for the Hospitality Sector Across Europe",
          "fr": "Fourniture de textiles haut de gamme pour le secteur de l'hôtellerie à travers l'Europe",
          "de": "Lieferung hochwertiger Textilien für die Hotelbranche in ganz Europa"
        },
        "description": {
          "en": "With over 40 years of family expertise in textile manufacturing and a solid foundation in legal and commercial operations, we provide premium bed linens, towels, and customized textile solutions tailored to the needs of hotels, laundries, and hospitality professionals.",
          "fr": "Avec plus de 40 ans d'expertise familiale dans la fabrication de textiles et une solide expérience en droit et commerce, nous fournissons du linge de lit haut de gamme, des serviettes et des solutions textiles personnalisées adaptées aux besoins des hôtels, blanchisseries et professionnels de l'hôtellerie.",
          "de": "Mit über 40 Jahren familiärer Erfahrung in der Textilproduktion und einer soliden Basis in rechtlichen und kommerziellen Abläufen bieten wir hochwertige Bettwäsche, Handtücher und maßgeschneiderte Textillösungen für Hotels, Wäschereien und Gastgewerbeprofis."
        },
        "image": "/hero.jpg"
      },
      {
        "id": 2,
        "title": {
          "en": "Tailored Textile Solutions for Hotels, Spas, and Laundries",
          "fr": "Solutions textiles sur mesure pour hôtels, spas et blanchisseries",
          "de": "Maßgeschneiderte Textillösungen für Hotels, Spas und Wäschereien"
        },
        "description": {
          "en": "Our products are designed to meet the rigorous standards of the hospitality industry. From durability to elegance, we ensure your guests enjoy luxurious comfort while maintaining cost-effectiveness for your business.",
          "fr": "Nos produits sont conçus pour répondre aux normes rigoureuses de l'industrie hôtelière. De la durabilité à l'élégance, nous veillons à ce que vos clients profitent d'un confort luxueux tout en maintenant la rentabilité de votre entreprise.",
          "de": "Unsere Produkte sind auf die strengen Anforderungen der Hotelbranche ausgelegt. Von Langlebigkeit bis Eleganz sorgen wir dafür, dass Ihre Gäste luxuriösen Komfort genießen und Ihr Unternehmen gleichzeitig wirtschaftlich bleibt."
        },
        "image": "/hero-2.jpg"
      },
      {
        "id": 3,
        "title": {
          "en": "Elevate Guest Experience with European-Quality Linens",
          "fr": "Améliorez l'expérience client avec du linge de qualité européenne",
          "de": "Steigern Sie das Gästeerlebnis mit hochwertiger Bettwäsche aus Europa"
        },
        "description": {
          "en": "We specialize in premium-quality linens and towels sourced and crafted in Europe. Whether you run a boutique hotel or a large-scale laundry service, we deliver consistency and quality with every thread.",
          "fr": "Nous sommes spécialisés dans le linge et les serviettes de qualité supérieure, fabriqués en Europe. Que vous dirigiez un hôtel de charme ou un service de blanchisserie à grande échelle, nous garantissons une qualité constante à chaque fil.",
          "de": "Wir spezialisieren uns auf hochwertige Bettwäsche und Handtücher, die in Europa bezogen und gefertigt werden. Ob Boutiquehotel oder Großwäscherei – wir liefern durchgehend Qualität bei jedem Faden."
        },
        "image": "/hero-1.jpg"
      }
    ]

  };

  return (
    <div id="home">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {TEXTS.hero.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex items-center py-10 h-screen text-white bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-60 z-0" />
              <div className="relative z-10 container mx-auto px-5 md:text-start text-center md:block flex flex-col justify-center items-center">
                <h1 className="md:text-4xl lg:text-5xl pt-5 sm:text-4xl text-3xl xl:text-6xl font-semibold md:w-5/12">
                  {slide.title[lang]}
                </h1>
                <div className="md:text-start text-center flex flex-col justify-center items-center md:grid grid-cols-2">
                  <div>
                    <p className="py-10">{slide.description[lang]}</p>
                    <a href="#our-work" className="bg-white text-black py-3 px-7 rounded-3xl">
                      {{
                        en: "Explore Our Products",
                        fr: "Voir Nos Produits",
                        de: "Unsere Produkte entdecken",
                      }[lang]}
                    </a>
                    <div className="flex gap-5 pt-10 md:justify-start justify-center">
                      <Link
                        href="https://www.linkedin.com/in/ksk-textile-quality-textile-solutions-9a5288361/"
                        className="h-10 w-10 text-black bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition"
                      >
                        <Linkedin size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


const AboutUs: React.FC<{ lang: Language }> = ({ lang }) => {
  const statsData = [
    {
      value: {
        en: "40+",
        fr: "40+",
        de: "40+"
      },
      label: {
        en: "years",
        fr: "années",
        de: "Jahre"
      },
      description: {
        en: "of family heritage in textile manufacturing, delivering consistent quality and reliability",
        fr: "d'héritage familial dans la fabrication de textiles, offrant une qualité et une fiabilité constantes",
        de: "von Familientradition in der Textilproduktion, die konstante Qualität und Zuverlässigkeit liefert",
      },
    },
    {
      value: {
        en: "12",
        fr: "12",
        de: "12"
      },
      label: {
        en: "countries",
        fr: "pays",
        de: "Länder"
      },
      description: {
        en: "served across Europe, with a strong focus on the French hospitality sector",
        fr: "desservi à travers l'Europe, avec un fort accent sur le secteur hôtelier français",
        de: "in ganz Europa tätig, mit einem starken Fokus auf den französischen Gastsektor",
      },
    },
    {
      value: {
        en: "100+",
        fr: "100+",
        de: "100+"
      },
      label: {
        en: "clients",
        fr: "clients",
        de: "Kunden"
      },
      description: {
        en: "including hotels, laundries, and other hospitality businesses who trust our quality",
        fr: "y compris des hôtels, des blanchisseries et d'autres entreprises hôtelières qui font confiance à notre qualité",
        de: "einschließlich Hotels, Wäschereien und andere Gastgewerbebetriebe, die auf unsere Qualität vertrauen",
      },
    },
    {
      value: {
        en: "98%",
        fr: "98%",
        de: "98%"
      },
      label: {
        en: "satisfaction",
        fr: "satisfaction",
        de: "Zufriedenheit"
      },
      description: {
        en: "customer satisfaction rate based on feedback and long-term partnerships",
        fr: "taux de satisfaction client basé sur les retours et partenariats à long terme",
        de: "Kundenzufriedenheitsrate basierend auf Feedback und langfristigen Partnerschaften",
      },
    },
    {
      value: {
        en: "24/7",
        fr: "24/7",
        de: "24/7"
      },
      label: {
        en: "support",
        fr: "support",
        de: "Support"
      },
      description: {
        en: "dedicated service to ensure smooth communication and on-time delivery",
        fr: "service dédié pour garantir une communication fluide et une livraison à temps",
        de: "dedizierter Service, um eine reibungslose Kommunikation und pünktliche Lieferung zu gewährleisten",
      },
    },
    {
      value: {
        en: "100%",
        fr: "100%",
        de: "100%"
      },
      label: {
        en: "customizable",
        fr: "personnalisable",
        de: "anpassbar"
      },
      description: {
        en: "textile solutions tailored to the unique requirements of your business",
        fr: "solutions textiles adaptées aux exigences uniques de votre entreprise",
        de: "Textillösungen, die auf die einzigartigen Anforderungen Ihres Unternehmens zugeschnitten sind",
      },
    },
  ];


  const content = {
    en: {
      title: "About KSK Textile",
      intro: "KSK Textile is your dedicated partner in high-quality textile supply, proudly serving hospitality professionals, laundries, and cleaning companies across Europe.",
      specialization: "We specialize in delivering a wide range of textile solutions, including hotel and hospital linens, home textiles, and more — combining competitive pricing, durable quality, and reliable service.",
      needs: "We understand the unique needs of businesses that rely on textile products daily. That's why we focus on consistency, flexibility, and quick response — ensuring you always have what you need, when you need it.",
      partnership: "Whether you're managing a boutique hotel, running an industrial laundry, or sourcing for a large operation, we work with trusted manufacturers to offer tailored solutions to match your standards and budget.",
      contact: "Contact Us",
    },
    fr: {
      title: "À propos de KSK Textile",
      intro: "KSK Textile est votre partenaire dédié pour la fourniture de textiles de haute qualité, au service des professionnels de l'hôtellerie, des blanchisseries et des entreprises de nettoyage à travers l'Europe.",
      specialization: "Nous nous spécialisons dans la fourniture d'une large gamme de solutions textiles, notamment des draps d'hôtel et d'hôpital, des textiles pour la maison, et bien plus encore — alliant prix compétitifs, qualité durable et service fiable.",
      needs: "Nous comprenons les besoins uniques des entreprises qui dépendent quotidiennement des produits textiles. C'est pourquoi nous nous concentrons sur la cohérence, la flexibilité et une réponse rapide — vous garantissant toujours ce dont vous avez besoin, quand vous en avez besoin.",
      partnership: "Que vous gériez un hôtel boutique, une blanchisserie industrielle ou que vous approvisionniez une grande opération, nous travaillons avec des fabricants de confiance pour offrir des solutions adaptées à vos normes et à votre budget.",
      contact: "Contactez-nous",
    },
    de: {
      title: "Über KSK Textile",
      intro: "KSK Textile ist Ihr engagierter Partner für hochwertige Textilversorgung und bedient stolz Fachleute aus der Hotellerie, Wäschereien und Reinigungsunternehmen in ganz Europa.",
      specialization: "Wir sind spezialisiert auf die Lieferung einer breiten Palette von Textillösungen, einschließlich Hotel- und Krankenhausbettwäsche, Heimtextilien und mehr — mit wettbewerbsfähigen Preisen, langlebiger Qualität und zuverlässigem Service.",
      needs: "Wir verstehen die einzigartigen Bedürfnisse von Unternehmen, die täglich auf Textilprodukte angewiesen sind. Deshalb konzentrieren wir uns auf Konsistenz, Flexibilität und schnelle Reaktionsfähigkeit — damit Sie immer das haben, was Sie brauchen, wenn Sie es brauchen.",
      partnership: "Ob Sie ein Boutique-Hotel leiten, eine industrielle Wäscherei betreiben oder für einen großen Betrieb einkaufen, wir arbeiten mit vertrauenswürdigen Herstellern zusammen, um maßgeschneiderte Lösungen anzubieten, die Ihren Standards und Ihrem Budget entsprechen.",
      contact: "Kontaktieren Sie uns",
    },
  };


  const { title, intro, specialization, needs, partnership, contact } = content[lang];

  return (
    <section id="about" className="flex justify-center" lang={lang} title={`${title} - European Textile Supplier`}>
      <div className="max-w-7xl w-full">
        <div className="md:pt-16 px-5">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
            <figure className="relative mx-auto max-w-md lg:max-w-none mb-8 lg:mb-0 order-1 lg:order-1">
              <div className="relative">
                <Image
                  src="/about.png"
                  alt="Main textile display"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 md:-bottom-10 md:-right-8 lg:-bottom-12 lg:right-0">
                  <Image
                    src="/about-2.png"
                    alt="Secondary textile display"
                    width={200}
                    height={150}
                    className="w-24 sm:w-32 md:w-36 lg:w-44 border-4 border-white rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </figure>

            <div className="text-gray-800 order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-pink-600">{title}</h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                <span className="font-semibold text-pink-600">KSK Textile</span> {intro}
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                {specialization}
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                {needs}
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                {partnership}
              </p>

              <a
                href="#contact-us"
                className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out"
              >
                {contact}
              </a>
            </div>
          </article>

          <section aria-labelledby="why-choose-us" className="pt-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {statsData.map((item, index) => (
                <article key={index} className="p-5 bg-white rounded-md" aria-label={item.label[lang]}>
                  <div className="pt-20">
                    <p className="text-5xl py-2 text-pink-600">
                      {item.value[lang]}{" "}
                      {item.label[lang] && (
                        <span className="text-2xl">{item.label[lang]}</span>
                      )}
                    </p>
                    <p className="text-sm w-9/12">{item.description[lang]}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};


const Expertise = ({ lang }: { lang: Language }) => {
  const expertiseContent = {
    en: {
      sectionTitle: "What We Offer",
      title: "Our Expertise",
      description: "At KSK Textile, we provide a carefully curated selection of high-quality textile products designed to meet the standards of hotels, laundries, and professional service providers across Europe.",

      // Bed Linen
      bedLinen: "Bed Linen",
      bedLinenDesc: "Our woven bed sheets combine durability and elegance — perfect for frequent use in hospitality settings.",
      availableOptions: "Available Options:",
      satinSheets: "Satin Sheets",
      satinSheetsOptions: "T-200, T-250, T-300, T-400",
      satinStripes: "Satin Stripes",
      satinStripesOptions: "0.5cm, 1cm, 2cm, 3cm",
      percaleSheets: "Percale Sheets",
      percaleSheetsOptions: "T-180, T-200",
      materials: "Materials",
      materialsOptions: "100% cotton, poly-cotton",

      // Towels
      towels: "Towels",
      towelsDesc: "We offer soft, absorbent towels built to withstand industrial washing cycles — ideal for hotels, spas, and laundries.",
      weightOptions: "Weight Options",
      weightOptionsDetails: "450, 500, and 550 gsm",
      customization: "Customization",
      customizationDetails: "Customizable sizes and colors to match your brand identity",

      // Uniforms
      uniforms: "Uniforms & Workwear",
      uniformsDesc: "We supply professional-grade uniforms and accessories for cleaning services, hotel staff, and other frontline professionals.",
      keyFeatures: "Key Features:",
      feature1: "Durable, comfortable fabrics",
      feature2: "Tailored to function and form",

      // Custom Orders
      customOrders: "Custom Orders",
      customOrdersDesc: "Need something specific? We also offer custom textile sourcing through our trusted manufacturing partners. Whether you are looking for a particular fabric, finish, or bulk order solution.",
      readyToDiscuss: "Ready to discuss your requirements?",
      requestQuote: "Request a Quote"
    },
    fr: {
      sectionTitle: "Ce Que Nous Offrons",
      title: "Notre Expertise",
      description: "Chez KSK Textile, nous proposons une sélection soigneusement organisée de produits textiles de haute qualité conçus pour répondre aux normes des hôtels, blanchisseries et prestataires de services professionnels à travers l'Europe.",

      // Bed Linen
      bedLinen: "Linge de Lit",
      bedLinenDesc: "Nos draps tissés allient durabilité et élégance — parfaits pour une utilisation fréquente dans les établissements hôteliers.",
      availableOptions: "Options Disponibles:",
      satinSheets: "Draps en Satin",
      satinSheetsOptions: "T-200, T-250, T-300, T-400",
      satinStripes: "Rayures en Satin",
      satinStripesOptions: "0.5cm, 1cm, 2cm, 3cm",
      percaleSheets: "Draps en Percale",
      percaleSheetsOptions: "T-180, T-200",
      materials: "Matériaux",
      materialsOptions: "100% coton, polycoton",

      // Towels
      towels: "Serviettes",
      towelsDesc: "Nous proposons des serviettes douces et absorbantes conçues pour résister aux cycles de lavage industriels — idéales pour les hôtels, spas et blanchisseries.",
      weightOptions: "Options de Poids",
      weightOptionsDetails: "450, 500, et 550 g/m²",
      customization: "Personnalisation",
      customizationDetails: "Tailles et couleurs personnalisables pour correspondre à l'identité de votre marque",

      // Uniforms
      uniforms: "Uniformes & Vêtements de Travail",
      uniformsDesc: "Nous fournissons des uniformes et accessoires de qualité professionnelle pour les services de nettoyage, le personnel hôtelier et autres professionnels de première ligne.",
      keyFeatures: "Caractéristiques Principales:",
      feature1: "Tissus durables et confortables",
      feature2: "Adaptés à la fonction et à la forme",

      // Custom Orders
      customOrders: "Commandes Personnalisées",
      customOrdersDesc: "Besoin de quelque chose de spécifique? Nous proposons également des solutions textiles sur mesure via nos partenaires de fabrication de confiance. Que vous recherchiez un tissu particulier, une finition ou une solution de commande en gros.",
      readyToDiscuss: "Prêt à discuter de vos besoins?",
      requestQuote: "Demander un Devis"
    },
    de: {
      sectionTitle: "Was Wir Anbieten",
      title: "Unsere Expertise",
      description: "Bei KSK Textile bieten wir eine sorgfältig zusammengestellte Auswahl an hochwertigen Textilprodukten, die den Anforderungen von Hotels, Wäschereien und professionellen Dienstleistern in ganz Europa gerecht werden.",

      // Bed Linen
      bedLinen: "Bettwäsche",
      bedLinenDesc: "Unsere gewebten Bettlaken verbinden Haltbarkeit und Eleganz — perfekt für den häufigen Einsatz im Gastgewerbe.",
      availableOptions: "Verfügbare Optionen:",
      satinSheets: "Satin-Bettwäsche",
      satinSheetsOptions: "T-200, T-250, T-300, T-400",
      satinStripes: "Satin-Streifen",
      satinStripesOptions: "0,5 cm, 1 cm, 2 cm, 3 cm",
      percaleSheets: "Perkal-Bettwäsche",
      percaleSheetsOptions: "T-180, T-200",
      materials: "Materialien",
      materialsOptions: "100% Baumwolle, Mischgewebe",

      // Towels
      towels: "Handtücher",
      towelsDesc: "Wir bieten weiche, saugfähige Handtücher, die industriellen Waschzyklen standhalten — ideal für Hotels, Spas und Wäschereien.",
      weightOptions: "Gewichtsoptionen",
      weightOptionsDetails: "450, 500 und 550 g/m²",
      customization: "Anpassung",
      customizationDetails: "Anpassbare Größen und Farben, die zu Ihrer Markenidentität passen",

      // Uniforms
      uniforms: "Uniformen & Arbeitskleidung",
      uniformsDesc: "Wir liefern professionelle Uniformen und Zubehör für Reinigungsdienste, Hotelpersonal und andere Fachkräfte mit Kundenkontakt.",
      keyFeatures: "Hauptmerkmale:",
      feature1: "Strapazierfähige, bequeme Stoffe",
      feature2: "Auf Funktion und Form abgestimmt",

      // Custom Orders
      customOrders: "Sonderanfertigungen",
      customOrdersDesc: "Benötigen Sie etwas Bestimmtes? Wir bieten auch maßgeschneiderte Textillösungen über unsere vertrauenswürdigen Herstellungspartner an. Ob Sie nach einem bestimmten Stoff, einer Veredelung oder einer Großbestellungslösung suchen.",
      readyToDiscuss: "Bereit, Ihre Anforderungen zu besprechen?",
      requestQuote: "Angebot anfragen"
    }
  };

  const content = expertiseContent[lang];

  return (
    <div id="expertise" className="bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto py-20 px-5 space-y-16">

        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-pink-100 rounded-full px-4 py-1 mb-4">
            <span className="text-pink-600 font-medium text-sm">{content.sectionTitle}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">{content.title}</h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            {content.description}
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Bed className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{content.bedLinen}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {content.bedLinenDesc}
                </p>
                <div className="bg-pink-50 rounded-lg p-4 space-y-3">
                  <h4 className="font-medium text-gray-800">{content.availableOptions}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">{content.satinSheets}</span>
                      <p className="text-sm text-gray-600 mt-1">{content.satinSheetsOptions}</p>
                    </div>
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">{content.satinStripes}</span>
                      <p className="text-sm text-gray-600 mt-1">{content.satinStripesOptions}</p>
                    </div>
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">{content.percaleSheets}</span>
                      <p className="text-sm text-gray-600 mt-1">{content.percaleSheetsOptions}</p>
                    </div>
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">{content.materials}</span>
                      <p className="text-sm text-gray-600 mt-1">{content.materialsOptions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Waves className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{content.towels}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {content.towelsDesc}
                </p>
                <div className="bg-pink-50 rounded-lg p-4 space-y-3">
                  <h4 className="font-medium text-gray-800">{content.availableOptions}</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">{content.weightOptions}</span>
                      <p className="text-sm text-gray-600 mt-1">{content.weightOptionsDetails}</p>
                    </div>
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">{content.customization}</span>
                      <p className="text-sm text-gray-600 mt-1">
                        {content.customizationDetails}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Shirt className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{content.uniforms}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {content.uniformsDesc}
                </p>
                <div className="bg-pink-50 rounded-lg p-4 space-y-3">
                  <h4 className="font-medium text-gray-800">{content.keyFeatures}</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white rounded-md p-3 shadow-sm flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                        <span className="font-bold">1</span>
                      </div>
                      <span className="text-gray-700">{content.feature1}</span>
                    </div>
                    <div className="bg-white rounded-md p-3 shadow-sm flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                        <span className="font-bold">2</span>
                      </div>
                      <span className="text-gray-700">{content.feature2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{content.customOrders}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {content.customOrdersDesc}
                </p>
                <div className="bg-pink-50 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-medium text-gray-800">{content.readyToDiscuss}</p>
                    <a href="#contact-us" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
                      {content.requestQuote}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Products = ({ lang }: { lang: Language }) => {
  const productsContent = {
    en: {
      title: "Products",
      showAll: "Show All",
      showLess: "Show Less"
    },
    fr: {
      title: "Produits",
      showAll: "Voir Tout",
      showLess: "Voir Moins"
    },
    de: {
      title: "Produkte",
      showAll: "Alle Anzeigen",
      showLess: "Weniger Anzeigen"
    }
  };

  const content = productsContent[lang];

  const productsData = {
    en: [
      { title: "Plain Towels", img: "./products/plain-towels.webp" },
      { title: "Dyed Towels", img: "./products/dyed-towels.webp" },
      { title: "Bathrobes", img: "./products/bathrobes.webp" },
      { title: "Printed Bedsheets", img: "./products/printed-bedsheets.webp" },
      { title: "Dyed Sheetsets", img: "./products/dyed-sheetsets.webp" },
      { title: "Fitted Sheetsets", img: "./products/fitted-sheetsets.webp" },
      { title: "Percale Sheetsets", img: "./products/percale-sheetsets.webp" },
      { title: "Satin Stripe", img: "./products/satin-stripe.webp" },
      { title: "Dyed Fabrics", img: "./products/dyed-fabrics.webp" },
      { title: "Knitted Fabrics", img: "./products/knitted-fabrics.webp" },
      { title: "Printed Fabrics", img: "./products/printed-fabrics.webp" },
      { title: "Terry Mattress Protectors", img: "./products/terry-mattress-protectors.webp" },
      { title: "Hospital Sheetsets", img: "./products/hospital-sheetsets.webp" },
      { title: "Jersey Fitted Sheets", img: "./products/jersey-fitted-sheets.webp" },
      { title: "Chef Gowns", img: "./products/chef-gowns.webp" },
      { title: "Chef Coats", img: "./products/chef-coats.webp" },
      { title: "Chef Hats And Aprons", img: "./products/chef-hats-and-approns.webp" },
      { title: "Doctor Gowns", img: "./products/doctor-gowns.webp" },
      { title: "Patient Gowns", img: "./products/patient-gowns1.webp" },
      { title: "Doctor Scrubs", img: "./products/doctor-scrubs.webp" },
    ],
    fr: [
      { title: "Serviettes Unies", img: "./products/plain-towels.webp" },
      { title: "Serviettes Teintes", img: "./products/dyed-towels.webp" },
      { title: "Peignoirs", img: "./products/bathrobes.webp" },
      { title: "Draps Imprimés", img: "./products/printed-bedsheets.webp" },
      { title: "Ensembles de Draps Teints", img: "./products/dyed-sheetsets.webp" },
      { title: "Draps-housses", img: "./products/fitted-sheetsets.webp" },
      { title: "Ensembles en Percale", img: "./products/percale-sheetsets.webp" },
      { title: "Rayures en Satin", img: "./products/satin-stripe.webp" },
      { title: "Tissus Teints", img: "./products/dyed-fabrics.webp" },
      { title: "Tissus Tricotés", img: "./products/knitted-fabrics.webp" },
      { title: "Tissus Imprimés", img: "./products/printed-fabrics.webp" },
      { title: "Protège-matelas en Éponge", img: "./products/terry-mattress-protectors.webp" },
      { title: "Ensembles de Draps Hospitaliers", img: "./products/hospital-sheetsets.webp" },
      { title: "Draps-housses en Jersey", img: "./products/jersey-fitted-sheets.webp" },
      { title: "Blouses de Chef", img: "./products/chef-gowns.webp" },
      { title: "Vestes de Chef", img: "./products/chef-coats.webp" },
      { title: "Toques et Tabliers de Chef", img: "./products/chef-hats-and-approns.webp" },
      { title: "Blouses Médicales", img: "./products/doctor-gowns.webp" },
      { title: "Blouses de Patient", img: "./products/patient-gowns1.webp" },
      { title: "Tenues Médicales", img: "./products/doctor-scrubs.webp" },
    ],
    de: [
      { title: "Einfarbige Handtücher", img: "./products/plain-towels.webp" },
      { title: "Gefärbte Handtücher", img: "./products/dyed-towels.webp" },
      { title: "Bademäntel", img: "./products/bathrobes.webp" },
      { title: "Bedruckte Bettwäsche", img: "./products/printed-bedsheets.webp" },
      { title: "Gefärbte Bettwäsche-Sets", img: "./products/dyed-sheetsets.webp" },
      { title: "Spannbetttücher-Sets", img: "./products/fitted-sheetsets.webp" },
      { title: "Perkal-Bettwäsche-Sets", img: "./products/percale-sheetsets.webp" },
      { title: "Satin-Streifen", img: "./products/satin-stripe.webp" },
      { title: "Gefärbte Stoffe", img: "./products/dyed-fabrics.webp" },
      { title: "Gestrickte Stoffe", img: "./products/knitted-fabrics.webp" },
      { title: "Bedruckte Stoffe", img: "./products/printed-fabrics.webp" },
      { title: "Frottee-Matratzenschoner", img: "./products/terry-mattress-protectors.webp" },
      { title: "Krankenhaus-Bettwäsche-Sets", img: "./products/hospital-sheetsets.webp" },
      { title: "Jersey-Spannbetttücher", img: "./products/jersey-fitted-sheets.webp" },
      { title: "Kochkittel", img: "./products/chef-gowns.webp" },
      { title: "Kochjacken", img: "./products/chef-coats.webp" },
      { title: "Kochmützen und Schürzen", img: "./products/chef-hats-and-approns.webp" },
      { title: "Arztkittel", img: "./products/doctor-gowns.webp" },
      { title: "Patientenkittel", img: "./products/patient-gowns1.webp" },
      { title: "Arzt-Scrubs", img: "./products/doctor-scrubs.webp" },
    ]
  };

  const products = productsData[lang];

  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <div id="products" className="bg-gray-100 py-10 md:py-20 transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto py-8 p-5">
        <div className="mb-10">
          <div className="flex items-center text-pink-600">
            <Dot size={50} />
            <p className="font-medium">{content.title}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
          {visibleProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md flex flex-col justify-between overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-pink-700 transition duration-300"
          >
            {showAll ? content.showLess : content.showAll}
          </button>
        </div>
      </div>
    </div>
  );
};

const QualityAssurance = ({ lang }: { lang: Language }) => {
  const qualityContent = {
    en: {
      title: "Quality Assurance",
      description: "At <span class=\"font-semibold text-pink-600\">KSK Textile</span>, we know that our clients rely on textile products that are not only professional-grade but consistently reliable and durable. That's why we maintain strict quality control measures from sourcing to final delivery.",

      // Sections
      rigorous: {
        title: "Rigorous Standards",
        content: "Our commitment is simple: every product we deliver must meet or exceed industry standards. From raw material selection to the final stitch, each production batch is carefully inspected for texture, strength, color consistency, and finish."
      },
      certified: {
        title: "Certified Partners",
        content: "We partner exclusively with vetted manufacturers who comply with internationally recognized quality benchmarks and ethical production practices. All our partner facilities hold essential certifications, including <span class=\"font-medium text-pink-600\">OEKO-TEX Standard 100</span>, guaranteeing safety and sustainability."
      },
      performance: {
        title: "Performance Testing",
        content: "Our textiles are rigorously tested to meet the demands of professional use — including washing durability, colorfastness, shrinkage resistance, and comfort under intensive conditions."
      },
      improvement: {
        title: "Continuous Improvement",
        content: "We believe in continuous improvement. By actively monitoring client feedback and market trends, we adapt our sourcing and production strategies to stay ahead of evolving needs."
      },

      // Trust message
      trust: "<span class=\"font-semibold\">Trust KSK Textile</span> to deliver quality you can feel — and rely on.",
      contactUs: "Contact Us"
    },
    fr: {
      title: "Assurance Qualité",
      description: "Chez <span class=\"font-semibold text-pink-600\">KSK Textile</span>, nous savons que nos clients comptent sur des produits textiles non seulement de qualité professionnelle, mais aussi fiables et durables. C'est pourquoi nous maintenons des mesures strictes de contrôle qualité, de l'approvisionnement à la livraison finale.",

      // Sections
      rigorous: {
        title: "Normes Rigoureuses",
        content: "Notre engagement est simple : chaque produit que nous livrons doit respecter ou dépasser les normes de l'industrie. De la sélection des matières premières à la dernière couture, chaque lot de production est soigneusement inspecté pour sa texture, sa résistance, la constance des couleurs et sa finition."
      },
      certified: {
        title: "Partenaires Certifiés",
        content: "Nous travaillons exclusivement avec des fabricants contrôlés qui respectent les critères de qualité et les pratiques de production éthiques reconnus internationalement. Toutes nos installations partenaires détiennent des certifications essentielles, notamment la <span class=\"font-medium text-pink-600\">norme OEKO-TEX Standard 100</span>, garantissant sécurité et durabilité."
      },
      performance: {
        title: "Tests de Performance",
        content: "Nos textiles sont rigoureusement testés pour répondre aux exigences d'un usage professionnel — einschließlich Waschbeständigkeit, Farbechtheit, Schrumpfresistenz und Komfort in intensiven Bedingungen."
      },
      improvement: {
        title: "Amélioration Continue",
        content: "Nous croyons en l'amélioration continue. En surveillant activement les retours des clients et les tendances du marché, nous adaptons nos stratégies d'approvisionnement et de production pour rester à la pointe des besoins en évolution."
      },

      // Trust message
      trust: "<span class=\"font-semibold\">Faites confiance à KSK Textile</span> pour vous livrer une qualité que vous pouvez ressentir — et sur laquelle vous pouvez compter.",
      contactUs: "Contactez-nous"
    },
    de: {
      title: "Qualitätssicherung",
      description: "Bei <span class=\"font-semibold text-pink-600\">KSK Textile</span> wissen wir, dass unsere Kunden auf Textilprodukte angewiesen sind, die nicht nur professionell, sondern auch durchgehend zuverlässig und langlebig sind. Deshalb setzen wir strenge Qualitätskontrollmaßnahmen vom Einkauf bis zur endgültigen Lieferung ein.",

      // Sections
      rigorous: {
        title: "Strenge Standards",
        content: "Unser Engagement ist einfach: Jedes Produkt, das wir liefern, muss die Industriestandards erfüllen oder übertreffen. Von der Auswahl der Rohmaterialien bis zum letzten Stich wird jede Produktionscharge sorgfältig auf Textur, Festigkeit, Farbkonsistenz und Verarbeitung geprüft."
      },
      certified: {
        title: "Zertifizierte Partner",
        content: "Wir arbeiten ausschließlich mit geprüften Herstellern zusammen, die international anerkannte Qualitätsstandards und ethische Produktionspraktiken einhalten. Alle unsere Partneranlagen verfügen über wesentliche Zertifizierungen, einschließlich des <span class=\"font-medium text-pink-600\">OEKO-TEX Standard 100</span>, der Sicherheit und Nachhaltigkeit garantiert."
      },
      performance: {
        title: "Leistungstests",
        content: "Unsere Textilien werden rigoros getestet, um den Anforderungen des professionellen Einsatzes gerecht zu werden — einschließlich Waschbeständigkeit, Farbechtheit, Schrumpfresistenz und Komfort unter intensiven Bedingungen."
      },
      improvement: {
        title: "Kontinuierliche Verbesserung",
        content: "Wir glauben an kontinuierliche Verbesserung. Durch aktives Monitoring von Kundenfeedback und Markttrends passen wir unsere Beschaffungs- und Produktionsstrategien an, um den sich entwickelnden Bedürfnissen immer einen Schritt voraus zu sein."
      },

      // Trust message
      trust: "<span class=\"font-semibold\">Vertrauen Sie KSK Textile</span>, um Qualität zu liefern, die Sie spüren können — und auf die Sie sich verlassen können.",
      contactUs: "Kontaktieren Sie uns"
    }
  };

  const content = qualityContent[lang];

  return (
    <section id="quality-assurance" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 opacity-75 blur"></div>
              <div className="relative bg-white p-6 rounded-full">
                <Award className="w-20 h-20 text-pink-600" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">{content.title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: content.description }}></p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-pink-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <div className="flex items-start mb-4">
              <CheckCircle className="w-6 h-6 text-pink-600 mr-3 flex-shrink-0" />
              <h3 className="font-semibold text-pink-600 text-xl">{content.rigorous.title}</h3>
            </div>
            <p className="text-gray-700">
              {content.rigorous.content}
            </p>
          </div>

          <div className="border border-pink-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <div className="flex items-start mb-4">
              <Shield className="w-6 h-6 text-pink-600 mr-3 flex-shrink-0" />
              <h3 className="font-semibold text-pink-600 text-xl">{content.certified.title}</h3>
            </div>
            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: content.certified.content }}></p>
          </div>

          <div className="border border-pink-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <div className="flex items-start mb-4">
              <Sparkles className="w-6 h-6 text-pink-600 mr-3 flex-shrink-0" />
              <h3 className="font-semibold text-pink-600 text-xl">{content.performance.title}</h3>
            </div>
            <p className="text-gray-700">
              {content.performance.content}
            </p>
          </div>

          <div className="border border-pink-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <div className="flex items-start mb-4">
              <RefreshCw className="w-6 h-6 text-pink-600 mr-3 flex-shrink-0" />
              <h3 className="font-semibold text-pink-600 text-xl">{content.improvement.title}</h3>
            </div>
            <p className="text-gray-700">
              {content.improvement.content}
            </p>
          </div>
        </div>


        <div className="bg-white border border-pink-200 rounded-lg p-8 text-center shadow-sm">
          <p className="text-xl font-medium text-pink-600 mb-4" dangerouslySetInnerHTML={{ __html: content.trust }}></p>
          <div className="inline-flex items-center justify-center mt-2">
            <a
              href="#contact-us"
              className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              {content.contactUs}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const Reviews = ({ lang }: { lang: Language }) => {
  const reviewsContent = {
    en: {
      title: "Reviews",
      reviews: [
        {
          img: "/man-review.png",
          text: "Working with this textile supplier transformed our guest experience. The linens are luxurious, durable, and our clients instantly noticed the upgrade.",
          name: "Elise Moreau",
          position: "Hotel Manager, Le Grand Hôtel Paris",
          date: "January 2024",
        },
        {
          img: "/man-review.png",
          text: "The bathrobes and spa towels were of exceptional quality. Our customers frequently compliment their softness and comfort. Fast delivery too!",
          name: "Marc Lefevre",
          position: "Spa Director, Bleu Ciel Wellness",
          date: "February 2024",
        },
        {
          img: "/man-review.png",
          text: "We've partnered for bulk linen supply for over a year now. Their textiles hold up extremely well to industrial washing. Highly reliable.",
          name: "Isabelle Dumas",
          position: "Operations Manager, Lavandis Pro",
          date: "March 2024",
        },
        {
          img: "/man-review.png",
          text: "Table linens and aprons were customized exactly to our branding. High-quality fabric, beautiful stitching, and delivered on time.",
          name: "Thomas Garnier",
          position: "Owner, Maison Garnier",
          date: "March 2024",
        },
        {
          img: "/man-review.png",
          text: "They understood our needs perfectly. Everything from pillowcases to duvet covers feels premium. Our guests have never been more satisfied.",
          name: "Claire Fontaine",
          position: "Director, Hôtel Lumière",
          date: "April 2024",
        },
      ]
    },
    fr: {
      title: "Avis Clients",
      reviews: [
        {
          img: "/man-review.png",
          text: "Travailler avec ce fournisseur textile a transformé l'expérience de nos clients. Le linge est luxueux, durable, et nos clients ont immédiatement remarqué l'amélioration.",
          name: "Elise Moreau",
          position: "Directrice d'hôtel, Le Grand Hôtel Paris",
          date: "Janvier 2024",
        },
        {
          img: "/man-review.png",
          text: "Les peignoirs et serviettes de spa étaient d'une qualité exceptionnelle. Nos clients complimentent fréquemment leur douceur et leur confort. Livraison rapide également !",
          name: "Marc Lefevre",
          position: "Directeur de Spa, Bleu Ciel Wellness",
          date: "Février 2024",
        },
        {
          img: "/man-review.png",
          text: "Nous sommes partenaires pour la fourniture de linge en gros depuis plus d'un an maintenant. Leurs textiles résistent extrêmement bien au lavage industriel. Très fiable.",
          name: "Isabelle Dumas",
          position: "Responsable des Opérations, Lavandis Pro",
          date: "Mars 2024",
        },
        {
          img: "/man-review.png",
          text: "Le linge de table et les tabliers ont été personnalisés exactement selon notre image de marque. Tissu de haute qualité, belles coutures et livrés à temps.",
          name: "Thomas Garnier",
          position: "Propriétaire, Maison Garnier",
          date: "Mars 2024",
        },
        {
          img: "/man-review.png",
          text: "Ils ont parfaitement compris nos besoins. Tout, des taies d'oreiller aux housses de couette, est de qualité premium. Nos clients n'ont jamais été aussi satisfaits.",
          name: "Claire Fontaine",
          position: "Directrice, Hôtel Lumière",
          date: "Avril 2024",
        },
      ]
    },
    de: {
      title: "Bewertungen",
      reviews: [
        {
          img: "/man-review.png",
          text: "Die Zusammenarbeit mit diesem Textillieferanten hat das Erlebnis unserer Gäste verändert. Die Bettwäsche ist luxuriös, langlebig, und unsere Kunden haben das Upgrade sofort bemerkt.",
          name: "Elise Moreau",
          position: "Hotelmanagerin, Le Grand Hôtel Paris",
          date: "Januar 2024",
        },
        {
          img: "/man-review.png",
          text: "Die Bademäntel und Spa-Handtücher waren von außergewöhnlicher Qualität. Unsere Kunden loben häufig ihre Weichheit und ihren Komfort. Auch schnelle Lieferung!",
          name: "Marc Lefevre",
          position: "Spa-Direktor, Bleu Ciel Wellness",
          date: "Februar 2024",
        },
        {
          img: "/man-review.png",
          text: "Wir arbeiten seit über einem Jahr für die Großlieferung von Wäsche zusammen. Ihre Textilien halten der industriellen Wäsche außerordentlich gut stand. Sehr zuverlässig.",
          name: "Isabelle Dumas",
          position: "Betriebsleiterin, Lavandis Pro",
          date: "März 2024",
        },
        {
          img: "/man-review.png",
          text: "Tischwäsche und Schürzen wurden genau nach unserem Branding angepasst. Hochwertiger Stoff, schöne Nähte und pünktlich geliefert.",
          name: "Thomas Garnier",
          position: "Inhaber, Maison Garnier",
          date: "März 2024",
        },
        {
          img: "/man-review.png",
          text: "Sie haben unsere Bedürfnisse perfekt verstanden. Alles, von Kissenbezügen bis zu Bettbezügen, fühlt sich hochwertig an. Unsere Gäste waren noch nie so zufrieden.",
          name: "Claire Fontaine",
          position: "Direktorin, Hôtel Lumière",
          date: "April 2024",
        },
      ]
    }
  };

  const content = reviewsContent[lang];


  return (
    <div id="reviews" className="max-w-7xl mx-auto p-4 md:my-28 my-10">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center text-pink-600">
          <Dot size={40} />
          <p className="font-medium text-lg ml-2">{content.title}</p>
        </div>

      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {content.reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl border shadow-md p-6 flex flex-col justify-between h-[250px]">
              <p className="text-gray-600 italic mb-6">"{review.text}"</p>
              <div className="flex items-center space-x-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.position}</p>
                  <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ContactUs: React.FC<{ lang: Language }> = ({ lang }) => {
  const contactContent = {
    en: {
      title: "Contact Us",
      description: "We're here to support you with all your textile needs — whether you're looking for product information, placing an order, or exploring a partnership.",
      messageSection: {
        title: "Send Us A Message",
        description: "Reach out to us for inquiries, quotes, or collaborations, and our team will be happy to provide tailored solutions with prompt and professional service",
        form: {
          firstName: "First Name",
          lastName: "Last Name",
          phone: "Phone Number",
          email: "Email Address",
          message: "Message",
          button: "Send Message"
        }
      },
      contactInfo: {
        headOffice: {
          title: "Head Office",
          content: "50 avenue des Champs-Élysées, 75008 Paris"
        },
        callOrText: {
          title: "Call or Text",
          content: "+33 (0)7 82 86 55 18"
        },
        sendEmail: {
          title: "Send Email",
          content: "business@kskimex.com"
        }
      },
      scrollToTop: "Scroll to top"
    },
    fr: {
      title: "Contactez-Nous",
      description: "Nous sommes là pour vous accompagner dans tous vos besoins en matière de textile — que vous recherchiez des informations sur nos produits, passiez une commande ou exploriez un partenariat.",
      messageSection: {
        title: "Envoyez-Nous un Message",
        description: "Contactez-nous pour vos demandes, devis ou collaborations, et notre équipe se fera un plaisir de vous proposer des solutions adaptées avec un service rapide et professionnel",
        form: {
          firstName: "Prénom",
          lastName: "Nom",
          phone: "Numéro de Téléphone",
          email: "Adresse Email",
          message: "Message",
          button: "Envoyer le Message"
        }
      },
      contactInfo: {
        headOffice: {
          title: "Siège Social",
          content: "50 avenue des Champs-Élysées, 75008 Paris"
        },
        callOrText: {
          title: "Appelez ou Envoyez un SMS",
          content: "+33 (0)7 82 86 55 18"
        },
        sendEmail: {
          title: "Envoyez un Email",
          content: "business@kskimex.com"
        }
      },
      scrollToTop: "Remonter en haut"
    },
    de: {
      title: "Kontakt",
      description: "Wir sind für Sie da, um Sie bei all Ihren Textilanforderungen zu unterstützen — sei es für Produktinformationen, Bestellungen oder potenzielle Partnerschaften.",
      messageSection: {
        title: "Senden Sie uns eine Nachricht",
        description: "Kontaktieren Sie uns für Anfragen, Angebote oder Zusammenarbeit, und unser Team wird Ihnen gerne maßgeschneiderte Lösungen mit promptem und professionellem Service anbieten",
        form: {
          firstName: "Vorname",
          lastName: "Nachname",
          phone: "Telefonnummer",
          email: "E-Mail-Adresse",
          message: "Nachricht",
          button: "Nachricht senden"
        }
      },
      contactInfo: {
        headOffice: {
          title: "Hauptsitz",
          content: "50 avenue des Champs-Élysées, 75008 Paris"
        },
        callOrText: {
          title: "Anrufen oder SMS senden",
          content: "+33 (0)7 82 86 55 18"
        },
        sendEmail: {
          title: "E-Mail senden",
          content: "business@kskimex.com"
        }
      },
      scrollToTop: "Nach oben scrollen"
    }
  };

  const content = contactContent[lang];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${formData.firstName} ${formData.lastName}`;
    const mailLink = `mailto:info@neelumfabrics.com?subject=Contact%20Form%20Submission&body=${encodeURIComponent(
      `Name: ${fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    const a = document.createElement("a")
    a.href = mailLink;
    document.body.appendChild(a);
    a.click()
  };

  const contactInfoItems: ContactInfoItem[] = [
    {
      title: content.contactInfo.headOffice.title,
      icon: <Building className="h-6 w-6 text-pink-600" />,
      content: content.contactInfo.headOffice.content,
    },
    {
      title: content.contactInfo.callOrText.title,
      icon: <Phone className="h-6 w-6 text-pink-600" />,
      content: content.contactInfo.callOrText.content,
    },
    {
      title: content.contactInfo.sendEmail.title,
      icon: <Mail className="h-6 w-6 text-pink-600" />,
      content: content.contactInfo.sendEmail.content,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white mb-10 pt-16" id="contact-us">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {content.title}
          </h1>
          <p className="text-gray-600 text-center max-w-3xl">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">{content.messageSection.title}</h2>
            <p className="text-gray-600 mb-6">{content.messageSection.description}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder={content.messageSection.form.firstName}
                  className="w-full p-4 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                  aria-label={content.messageSection.form.firstName}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={content.messageSection.form.lastName}
                  className="w-full p-4 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                  aria-label={content.messageSection.form.lastName}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder={content.messageSection.form.phone}
                  className="w-full p-4 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  onChange={handleChange}
                  value={formData.phone}
                  required
                  aria-label={content.messageSection.form.phone}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={content.messageSection.form.email}
                  className="w-full p-4 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  aria-label={content.messageSection.form.email}
                />
              </div>

              <textarea
                name="message"
                placeholder={content.messageSection.form.message}
                className="w-full p-4 border rounded-md h-40 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                onChange={handleChange}
                value={formData.message}
                required
                aria-label={content.messageSection.form.message}
              ></textarea>

              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full flex items-center transition-colors duration-300"
              >
                {content.messageSection.form.button}
                <ArrowUp className="ml-2 h-4 w-4 rotate-45" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-6 space-y-6">
            {contactInfoItems.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-4 rounded-full">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6">
        <button
          className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
          aria-label={content.scrollToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

const CtaBar = ({ lang }: { lang: Language }) => {
  const ctaContent = {
    en: {
      title: "Let's plan your textile solution",
      button: "Request a Consultation"
    },
    fr: {
      title: "Planifions votre solution textile",
      button: "Demander une Consultation"
    },
    de: {
      title: "Lassen Sie uns Ihre Textillösung planen",
      button: "Beratungsgespräch anfordern"
    }
  };

  const content = ctaContent[lang];

  return (
    <div className="bg-[url('/hero.jpg')] m-1 rounded-3xl py-28 mt-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="flex justify-center text-center md:block md:text-start">
          <h2 className="lg:text-7xl md:text-5xl text-4xl font-medium text-white w-7/12">
            {content.title}
          </h2>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/ksk-textile-quality-textile-solutions-9a5288361/" className="bg-white text-black py-3 px-7 rounded-3xl">
            {content.button}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const contactInfo: Record<Language, { phone: string; address: string; email: string }> = {
    en: {
      phone: "+33 (0)7 82 86 55 18",
      address: "50 avenue des Champs-Élysées, 75008 Paris",
      email: "business@kskimex.com"
    },
    fr: {
      phone: "+33 (0)7 82 86 55 18",
      address: "50 avenue des Champs-Élysées, 75008 Paris",
      email: "business@kskimex.com"
    },
    de: {
      phone: "+33 (0)7 82 86 55 18",
      address: "50 avenue des Champs-Élysées, 75008 Paris",
      email: "business@kskimex.com"
    }
  };

  const footerTexts: Record<Language, { rights: string; cookies: string; privacy: string; terms: string }> = {
    en: {
      rights: "KSK Textile © 2025. All rights reserved.",
      cookies: "Cookies Policy",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    },
    fr: {
      rights: "KSK Textile © 2025. Tous droits réservés.",
      cookies: "Politique des cookies",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales"
    },
    de: {
      rights: "KSK Textile © 2025. Alle Rechte vorbehalten.",
      cookies: "Cookie-Richtlinie",
      privacy: "Datenschutzrichtlinie",
      terms: "Geschäftsbedingungen"
    }
  };

  const contactLabels: Record<Language, { phone: string; address: string; email: string }> = {
    en: {
      phone: "Phone",
      address: "Address",
      email: "Email"
    },
    fr: {
      phone: "Téléphone",
      address: "Adresse",
      email: "Email"
    },
    de: {
      phone: "Telefon",
      address: "Adresse",
      email: "E-Mail"
    }
  };

  return (
    <div className="bg-[#d9dce4] text-gray-800">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Logo + Socials */}
          <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <p className="text-2xl font-medium">KSK Textile</p>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/ksk-textile-quality-textile-solutions-9a5288361/"
                className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="col-span-12 md:col-span-6 flex justify-center items-start mt-6 md:mt-0">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {menuItems[lang].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="hover:underline transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start text-sm space-y-4 mt-6 md:mt-0">
            <div className="text-center md:text-left">
              <p className="font-semibold">{contactLabels[lang].phone}</p>
              <p>{contactInfo[lang].phone}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-semibold">{contactLabels[lang].address}</p>
              <p>{contactInfo[lang].address}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-semibold">{contactLabels[lang].email}</p>
              <p>{contactInfo[lang].email}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-3">
          <p>{footerTexts[lang].rights}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              {footerTexts[lang].cookies}
            </a>
            <a href="#" className="hover:underline">
              {footerTexts[lang].privacy}
            </a>
            <a href="#" className="hover:underline">
              {footerTexts[lang].terms}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};