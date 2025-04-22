"use client";

import { useState } from "react";

import {
  ArrowUp,
  Award,
  Bed,
  Building,
  CheckCircle,
  Dot,
  Factory,
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

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function HomePage() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <div className="bg-gray-100 py-10">
        <AboutUs />
      </div>
      <Expertise />
      <OurWork />
      <QualityAssurance />
      <Reviews />
      <CtaBar />
      <ContactUs />
      <Footer />
    </div>
  );
}

const menuItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Expertise", id: "expertise" },
  { label: "Our Work", id: "our-work" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact Us", id: "contact-us" },

];


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const toggleLang = (language: any) => {
    setLang(language);
    setShowLangDropdown(false);
  };

  return (
    <nav className="w-full bg-pink-600 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        <p className="text-2xl font-medium text-white">KSK TEXTILE</p>
        <div className="hidden md:flex flex-1 justify-center space-x-6 text-white font-medium">
          {menuItems.map((item, index) => (
            <a key={index} href={`#${item.id}`} className="hover:text-pink-300 transition">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block relative">
          <button onClick={() => setShowLangDropdown(!showLangDropdown)} className="text-white font-semibold">
            {lang}
          </button>
          {showLangDropdown && (
            <div className="absolute right-0 mt-2 w-24 bg-white text-black rounded shadow-lg z-50">
              <button onClick={() => toggleLang("EN")} className="block w-full px-4 py-2 hover:bg-gray-100 text-left">
                English
              </button>
              <button onClick={() => toggleLang("FR")} className="block w-full px-4 py-2 hover:bg-gray-100 text-left">
                French
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
            {menuItems.map((item, index) => (
              <a key={index} href={`#${item.id}`} className="hover:text-pink-300 transition">
                {item.label}
              </a>
            ))}
            <div className="relative">
              <button onClick={() => setShowLangDropdown(!showLangDropdown)} className="text-white font-semibold">
                {lang}
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-24 bg-white text-black rounded shadow-lg z-50">
                  <button onClick={() => toggleLang("EN")} className="block w-full px-4 py-2 hover:bg-gray-100 text-left">
                    English
                  </button>
                  <button onClick={() => toggleLang("FR")} className="block w-full px-4 py-2 hover:bg-gray-100 text-left">
                    French
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

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Supplying Premium Textiles for the Hospitality Sector Across Europe",
      description:
        "With over 40 years of family expertise in textile manufacturing and a solid foundation in legal and commercial operations, we provide premium bed linens, towels, and customized textile solutions tailored to the needs of hotels, laundries, and hospitality professionals.",
      image: "/hero.jpg",
    },
    {
      id: 2,
      title: "Tailored Textile Solutions for Hotels, Spas, and Laundries",
      description:
        "Our products are designed to meet the rigorous standards of the hospitality industry. From durability to elegance, we ensure your guests enjoy luxurious comfort while maintaining cost-effectiveness for your business.",
      image: "/hero-2.jpg",
    },
    {
      id: 3,
      title: "Elevate Guest Experience with European-Quality Linens",
      description:
        "We specialize in premium-quality linens and towels sourced and crafted in Europe. Whether you run a boutique hotel or a large-scale laundry service, we deliver consistency and quality with every thread.",
      image: "/hero-1.jpg",
    },
  ];

  return (
    <div id="home">
      <Swiper pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]} className="mySwiper">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex items-center py-10 h-screen  text-white bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >

              <div className="absolute inset-0 bg-black opacity-60 z-0" />
              <div className="relative z-10 container mx-auto px-5 md:text-start text-center md:block flex flex-col justify-center items-center">
                <h1 className="md:text-4xl lg:text-5xl pt-5  sm:text-4xl text-3xl xl:text-6xl font-semibold md:w-5/12">
                  {slide.title}
                </h1>
                <div className="md:text-start text-center flex flex-col justify-center items-center md:grid grid-cols-2">
                  <div>
                    <p className="py-10">{slide.description}</p>
                    <a href="#our-work" className=" bg-white text-black py-3 px-7 rounded-3xl">
                      Explore Our Products
                    </a>
                    <div className="flex gap-5 pt-10 md:justify-start justify-center">
                      <Link href="https://www.linkedin.com/in/ksk-textile-quality-textile-solutions-9a5288361/" className="h-10 w-10 text-black bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition">
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


const AboutUs = () => {
  const statsData = [
    {
      value: "40+",
      label: "years",
      description:
        "of family heritage in textile manufacturing, delivering consistent quality and reliability",
    },
    {
      value: "12",
      label: "countries",
      description:
        "served across Europe, with a strong focus on the French hospitality sector",
    },
    {
      value: "100+",
      label: "clients",
      description:
        "including hotels, laundries, and other hospitality businesses who trust our quality",
    },
    {
      value: "98%",
      label: "satisfaction",
      description:
        "customer satisfaction rate based on feedback and long-term partnerships",
    },
    {
      value: "24/7",
      label: "support",
      description:
        "dedicated service to ensure smooth communication and on-time delivery",
    },
    {
      value: "100%",
      label: "customizable",
      description:
        "textile solutions tailored to the unique requirements of your business",
    },
  ];

  return (
    <section id="about" className="flex justify-center" lang="en" title="About KSK Textile - European Textile Supplier">
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-pink-600">About KSK Textile</h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                <span className="font-semibold text-pink-600">KSK Textile</span> is your dedicated partner in high-quality
                textile supply, proudly serving hospitality professionals, laundries, and cleaning companies across Europe.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                We specialize in delivering a{" "}
                <span className="font-semibold text-pink-600">wide range of textile solutions</span>, including hotel and
                hospital linens, home textiles, and more — combining competitive pricing, durable quality, and reliable
                service.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                We understand the unique needs of businesses that rely on textile products daily. That's why we focus on
                consistency, flexibility, and quick response — ensuring you always have what you need, when you need it.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Whether you're managing a boutique hotel, running an industrial laundry, or sourcing for a large operation,
                we work with trusted manufacturers to offer tailored solutions to match your standards and budget.
              </p>

              <a
                href="#contact-us"
                className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out"
              >
                Contact Us
              </a>
            </div>
          </article>

          <section aria-labelledby="why-choose-us" className="pt-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {statsData.map((item, index) => (
                <article key={index} className="p-5 bg-white rounded-md" aria-label={item.label}>
                  <div className="pt-20">
                    <p className="text-5xl py-2 text-pink-600">
                      {item.value}{" "}
                      {item.label && (
                        <span className="text-2xl">{item.label}</span>
                      )}
                    </p>
                    <p className="text-sm w-9/12">{item.description}</p>
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


const Expertise = () => {
  return (
    <div id="expertise" className="bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto py-20 px-5 space-y-16">

        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-pink-100 rounded-full px-4 py-1 mb-4">
            <span className="text-pink-600 font-medium text-sm">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">Our Expertise</h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            At KSK Textile, we provide a carefully curated selection of high-quality textile products designed to meet
            the standards of hotels, laundries, and professional service providers across Europe.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Bed className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Bed Linen</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Our woven bed sheets combine durability and elegance — perfect for frequent use in hospitality
                  settings.
                </p>
                <div className="bg-pink-50 rounded-lg p-4 space-y-3">
                  <h4 className="font-medium text-gray-800">Available Options:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">Satin Sheets</span>
                      <p className="text-sm text-gray-600 mt-1">T-200, T-250, T-300, T-400</p>
                    </div>
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">Satin Stripes</span>
                      <p className="text-sm text-gray-600 mt-1">0.5cm, 1cm, 2cm, 3cm</p>
                    </div>
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">Percale Sheets</span>
                      <p className="text-sm text-gray-600 mt-1">T-180, T-200</p>
                    </div>
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">Materials</span>
                      <p className="text-sm text-gray-600 mt-1">100% cotton, poly-cotton</p>
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
                <h3 className="text-xl font-semibold">Towels</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We offer soft, absorbent towels built to withstand industrial washing cycles — ideal for hotels, spas,
                  and laundries.
                </p>
                <div className="bg-pink-50 rounded-lg p-4 space-y-3">
                  <h4 className="font-medium text-gray-800">Available Options:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">Weight Options</span>
                      <p className="text-sm text-gray-600 mt-1">450, 500, and 550 gsm</p>
                    </div>
                    <div className="bg-white rounded-md p-3 shadow-sm">
                      <span className="text-pink-600 font-medium">Customization</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Customizable sizes and colors to match your brand identity
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
                <h3 className="text-xl font-semibold">Uniforms & Workwear</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We supply professional-grade uniforms and accessories for cleaning services, hotel staff, and other
                  frontline professionals.
                </p>
                <div className="bg-pink-50 rounded-lg p-4 space-y-3">
                  <h4 className="font-medium text-gray-800">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white rounded-md p-3 shadow-sm flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                        <span className="font-bold">1</span>
                      </div>
                      <span className="text-gray-700">Durable, comfortable fabrics</span>
                    </div>
                    <div className="bg-white rounded-md p-3 shadow-sm flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                        <span className="font-bold">2</span>
                      </div>
                      <span className="text-gray-700">Tailored to function and form</span>
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
                <h3 className="text-xl font-semibold">Custom Orders</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Need something specific? We also offer custom textile sourcing through our trusted manufacturing
                  partners. Whether you are looking for a particular fabric, finish, or bulk order solution.
                </p>
                <div className="bg-pink-50 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-medium text-gray-800">Ready to discuss your requirements?</p>
                    <a href="#contact-us" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
                      Request a Quote
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

interface Case {
  category: string;
  title: string;
  description: string;
  team: string[];
}

const OurWork = () => {
  const cases = [
    {
      category: "Hotels & Resorts",
      title: "Luxury Hotel Linen Upgrade",
      description:
        "Partnered with a 5-star hotel chain in Paris to supply premium bed linens and towels, enhancing guest comfort and sustainability…",
      img: "./card-1.jpg",
    },
    {
      category: "Spa & Wellness",
      title: "Tailored Spa Textiles",
      description:
        "Delivered custom-made soft cotton robes and treatment bed covers for a luxury wellness resort in the South of France…",
      img: "./card-2.jpg",
    },
    {
      category: "Laundries",
      title: "Bulk Supply for Industrial Laundry",
      description:
        "Supported a commercial laundry service in Belgium with durable, easy-to-maintain textiles for hotels and restaurants…",
      img: "./card-3.jpg",
    },
    {
      category: "Boutique Hotels",
      title: "Elegant Bedding for Boutique Suites",
      description:
        "Collaborated with a boutique hotel in Lyon to design elegant, hypoallergenic bedding sets for premium guest experiences…",
      img: "./card-4.jpg",
    },
    {
      category: "Restaurants",
      title: "Custom Table Linen Collection",
      description:
        "Supplied a chain of fine-dining restaurants in Marseille with stain-resistant, stylish tablecloths and napkins…",
      img: "./card-5.jpg",
    },
    {
      category: "Healthcare & Wellness",
      title: "Sanitary Textiles for Clinics",
      description:
        "Delivered anti-bacterial, high-durability towels and sheets to a private wellness clinic in Geneva…",
      img: "./hero.jpg",
    },
  ];

  return (
    <div id="our-work" className="bg-gray-100 py-10 md:py-20">
      <div className="max-w-7xl mx-auto py-8 p-5">
        <div className=" mb-10">
          <div className="flex items-center text-pink-600">
            <Dot size={50} />
            <p className="font-medium">Our Projects</p>
          </div>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md flex flex-col justify-between overflow-hidden"
            >
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-pink-600 font-medium py-1">
                  {item.category}
                </p>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <a
                  href="#"
                  className="text-pink-600 text-sm mt-4 font-medium hover:underline inline-block"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const QualityAssurance = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">Quality Assurance</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At <span className="font-semibold text-pink-600">KSK Textile</span>, we know that our clients rely on
              textile products that are not only professional-grade but consistently reliable and durable. That's why we
              maintain strict quality control measures from sourcing to final delivery.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-pink-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <div className="flex items-start mb-4">
              <CheckCircle className="w-6 h-6 text-pink-600 mr-3 flex-shrink-0" />
              <h3 className="font-semibold text-pink-600 text-xl">Rigorous Standards</h3>
            </div>
            <p className="text-gray-700">
              Our commitment is simple: every product we deliver must meet or exceed industry standards. From raw
              material selection to the final stitch, each production batch is carefully inspected for texture,
              strength, color consistency, and finish.
            </p>
          </div>

          <div className="border border-pink-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <div className="flex items-start mb-4">
              <Shield className="w-6 h-6 text-pink-600 mr-3 flex-shrink-0" />
              <h3 className="font-semibold text-pink-600 text-xl">Certified Partners</h3>
            </div>
            <p className="text-gray-700">
              We partner exclusively with vetted manufacturers who comply with internationally recognized quality
              benchmarks and ethical production practices. All our partner facilities hold essential certifications,
              including <span className="font-medium text-pink-600">OEKO-TEX Standard 100</span>, guaranteeing safety
              and sustainability.
            </p>
          </div>

          <div className="border border-pink-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <div className="flex items-start mb-4">
              <Sparkles className="w-6 h-6 text-pink-600 mr-3 flex-shrink-0" />
              <h3 className="font-semibold text-pink-600 text-xl">Performance Testing</h3>
            </div>
            <p className="text-gray-700">
              Our textiles are rigorously tested to meet the demands of professional use — including washing durability,
              colorfastness, shrinkage resistance, and comfort under intensive conditions.
            </p>
          </div>

          <div className="border border-pink-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <div className="flex items-start mb-4">
              <RefreshCw className="w-6 h-6 text-pink-600 mr-3 flex-shrink-0" />
              <h3 className="font-semibold text-pink-600 text-xl">Continuous Improvement</h3>
            </div>
            <p className="text-gray-700">
              We believe in continuous improvement. By actively monitoring client feedback and market trends, we adapt
              our sourcing and production strategies to stay ahead of evolving needs.
            </p>
          </div>
        </div>


        <div className="bg-white border border-pink-200 rounded-lg p-8 text-center shadow-sm">
          <p className="text-xl font-medium text-pink-600 mb-4">
            <span className="font-semibold">Trust KSK Textile</span> to deliver quality you can feel — and rely on.
          </p>
          <div className="inline-flex items-center justify-center mt-2">
            <a
              href="#contact-us"
              className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const Reviews = () => {
  const reviews = [
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
  ];


  return (
    <div id="reviews" className="max-w-7xl mx-auto p-4 md:my-28 my-10">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center text-pink-600">
          <Dot size={40} />
          <p className="font-medium text-lg ml-2">Client Feedback</p>
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
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl border shadow-md p-6 flex flex-col justify-between h-[250px]">
              <p className="text-gray-600 italic mb-6">“{review.text}”</p>
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

const CtaBar = () => {
  return (
    <div className="bg-[url('/hero.jpg')] m-1 rounded-3xl py-28 mt-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="flex justify-center text-center md:block md:text-start">
          <h2 className="lg:text-7xl md:text-5xl text-4xl  font-medium text-white w-7/12">
            Let’s plan your textile solution
          </h2>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/ksk-textile-quality-textile-solutions-9a5288361/" className=" bg-white text-black py-3 px-7 rounded-3xl">
            Request a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen bg-white mb-5 pt-10" id="contact-us">
      <div className="container mx-auto px-4 " >

        <div className="flex flex-col items-center justify-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
          <p className=" text-gray-600 text-center max-w-3xl">
            We're here to support you with all your textile needs — whether you're looking for product
            information, placing an order, or exploring a partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">

          <div className="lg:col-span-6 bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Send Us A Message</h2>
            <p className="text-gray-600 mb-6">
              Reach out to us for inquiries, quotes, or collaborations, and our team will be happy to
              provide tailored solutions with prompt and professional service
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full p-4 border rounded-md" />
                <input type="text" placeholder="Last Name" className="w-full p-4 border rounded-md" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" placeholder="Phone Number" className="w-full p-4 border rounded-md" />
                <input type="email" placeholder="Email Address" className="w-full p-4 border rounded-md" />
              </div>

              <textarea placeholder="Message" className="w-full p-4 border rounded-md h-40"></textarea>

              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full flex items-center"
              >
                Send Message
                <ArrowUp className="ml-2 h-4 w-4 rotate-45" />
              </button>
            </form>
          </div>


          <div className="lg:col-span-6 space-y-6">

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Building className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Head Office</h3>
                  <p className="text-gray-600">132 Regency Arcade, Mall Road, Faisalabad - Pakistan.</p>
                </div>
              </div>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Factory className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Factory</h3>
                  <p className="text-gray-600">
                    Bawa Chak Main Stop, Masjid Wali Gali, Opp. Sultan Chemicals
                    <br />
                    Sargodha Road, Faisalabad - Pakistan
                  </p>
                </div>
              </div>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call or Text</h3>
                  <p className="text-gray-600">+33 7 82 86 55 18</p>
                </div>
              </div>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Send Email</h3>
                  <p className="text-gray-600">info@neelumfabrics.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="fixed bottom-6 right-6">
        <button className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-sm shadow-lg" aria-label="Scroll to top">
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

const Footer = () => {


  return (
    <div className="bg-[#d9dce4] text-gray-800">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Logo + Socials */}
          <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start gap-4 text-center md:text-left">

            <p className="text-2xl font-medium ">KSK TEXTILE</p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/ksk-textile-quality-textile-solutions-9a5288361/" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="col-span-12 md:col-span-6 flex justify-center items-start mt-6 md:mt-0">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {menuItems.map((item) => (
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
              <p className="font-semibold">Phone</p>
              <p>+44 20 482 705 41</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-semibold">Address</p>
              <p>6 Murray Glens Lake, France</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-semibold">Email</p>
              <p>contact@textileexperts.fr</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-3">
          <p>Textile Experts © 2024. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Cookies Policy
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

