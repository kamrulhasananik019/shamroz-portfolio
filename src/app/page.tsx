"use client";

import { useState } from "react";

import {
  ArrowRight,
  Dot,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomePage() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <div className="bg-gray-100 py-10">
        <Skills />
      </div>
      <Expertise />
      <OurWork />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    "Expertise",
    "About",
    "Our Work",
    "Team",
    "Blog",
    "Contacts",
  ];

  return (
    <nav className="w-full bg-transparent absolute z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <img
            width={70}
            className="invert"
            src="./lawyerlogo.png"
            alt="Logo"
          />
        </div>

        <div className="hidden md:flex space-x-6 text-white items-center">
          {menuItems.map((item, index) => (
            <button key={index} className="hover:text-blue-300 transition">
              {item}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 pb-4">
          <div className="flex flex-col space-y-4 text-white">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-300 transition text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {

  return (
    <div>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="flex items-center md:h-[90vh] h-[100vh] text-white bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto px-5 md:text-start text-center md:block flex flex-col justify-center items-center">
              <h1 className="md:text-5xl lg:text-6xl sm:text-4xl text-3xl  font-semibold md:w-5/12">
                Supplying Premium Textiles for the Hospitality Sector Across Europe
              </h1>
              <div className="md:text-start text-center flex flex-col justify-center items-center md:grid grid-cols-2">
                <div>
                  <p className="py-10">
                    With over 40 years of family expertise in textile manufacturing
                    and a solid foundation in legal and commercial operations, we
                    provide premium bed linens, towels, and customized textile
                    solutions tailored to the needs of hotels, laundries, and
                    hospitality professionals.
                  </p>
                  <button className=" bg-white text-black py-3 px-7 rounded-3xl">
                    Explore Our Products
                  </button>
                  <div className="flex gap-5 pt-10 md:justify-start justify-center ">
                    <div className="h-10 w-10 bg-gray-400 rounded-full flex justify-center items-center ">
                      <Facebook width={30} />
                    </div>
                    <div className="h-10 w-10 bg-gray-400 rounded-full flex justify-center items-center ">
                      <Linkedin />
                    </div>
                    <div className="h-10 w-10 bg-gray-400 rounded-full flex justify-center items-center ">
                      <Instagram />
                    </div>
                  </div>
                </div>
                {/* <div>video</div> */}
              </div>
              <div></div>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center md:h-[90vh] h-[100vh] text-white bg-[url('/hero-2.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto px-5 md:text-start text-center md:block flex flex-col justify-center items-center">
              <h1 className="md:text-5xl lg:text-6xl sm:text-4xl text-3xl  font-semibold md:w-5/12">
                Supplying Premium Textiles for the Hospitality Sector Across Europe
              </h1>
              <div className="md:text-start text-center flex flex-col justify-center items-center md:grid grid-cols-2">
                <div>
                  <p className="py-10">
                    With over 40 years of family expertise in textile manufacturing
                    and a solid foundation in legal and commercial operations, we
                    provide premium bed linens, towels, and customized textile
                    solutions tailored to the needs of hotels, laundries, and
                    hospitality professionals.
                  </p>
                  <button className=" bg-white text-black py-3 px-7 rounded-3xl">
                    Explore Our Products
                  </button>
                  <div className="flex gap-5 pt-10 md:justify-start justify-center ">
                    <div className="h-10 w-10 bg-gray-400 rounded-full flex justify-center items-center ">
                      <Facebook width={30} />
                    </div>
                    <div className="h-10 w-10 bg-gray-400 rounded-full flex justify-center items-center ">
                      <Linkedin />
                    </div>
                    <div className="h-10 w-10 bg-gray-400 rounded-full flex justify-center items-center ">
                      <Instagram />
                    </div>
                  </div>
                </div>
                {/* <div>video</div> */}
              </div>
              <div></div>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center md:h-[90vh] h-[100vh] text-white bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto px-5 md:text-start text-center md:block flex flex-col justify-center items-center">
              <h1 className="md:text-5xl lg:text-6xl sm:text-4xl text-3xl  font-semibold md:w-5/12">
                Supplying Premium Textiles for the Hospitality Sector Across Europe
              </h1>
              <div className="md:text-start text-center flex flex-col justify-center items-center md:grid grid-cols-2">
                <div>
                  <p className="py-10">
                    With over 40 years of family expertise in textile manufacturing
                    and a solid foundation in legal and commercial operations, we
                    provide premium bed linens, towels, and customized textile
                    solutions tailored to the needs of hotels, laundries, and
                    hospitality professionals.
                  </p>
                  <button className=" bg-white text-black py-3 px-7 rounded-3xl">
                    Explore Our Products
                  </button>
                  <div className="flex gap-5 pt-10 md:justify-start justify-center ">
                    <div className="h-10 w-10 bg-gray-400 rounded-full flex justify-center items-center ">
                      <Facebook width={30} />
                    </div>
                    <div className="h-10 w-10 bg-gray-400 rounded-full flex justify-center items-center ">
                      <Linkedin />
                    </div>
                    <div className="h-10 w-10 bg-gray-400 rounded-full flex justify-center items-center ">
                      <Instagram />
                    </div>
                  </div>
                </div>
                {/* <div>video</div> */}
              </div>
              <div></div>
            </div>
          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const Skills = () => {
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
    <div className="flex justify-center ">
      <div className="max-w-7xl  ">
        <div className="md:pt-36 px-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <div className="flex items-center text-blue-700">
                <Dot size={50} />
                <p className="font-medium">Introduction</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-medium">
                We are a trusted textile supplier delivering solutions{" "}
                <span className="text-blue-700">
                  tailored to the highest standards of the hospitality industry
                </span>
              </h2>
            </div>

          </div>

          <div>
            <div className="flex items-center py-10 text-blue-700">
              <Dot size={50} />
              <p className="font-medium ">why Choose Us</p>
            </div>

            <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-10">
              {statsData.map((item, index) => (
                <div key={index} className="p-5 bg-white rounded-md">
                  <div className="pt-20">
                    <p className="text-5xl py-2 text-blue-700">
                      {item.value}{" "}
                      {item.label && (
                        <span className="text-2xl">{item.label}</span>
                      )}
                    </p>
                    <p className="text-sm w-9/12">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ExpertiseItem {
  title: string;
  active?: boolean;
}

interface ExpertiseCategory {
  title: string;
  items: ExpertiseItem[];
}

const Expertise = () => {
  const categories: ExpertiseCategory[] = [
    {
      title: "Product Categories",
      items: [
        { title: "Bed Linens" },
        { title: "Bath Towels" },
        { title: "Table Linens" },
        { title: "Kitchen Textiles" },
        { title: "Spa & Wellness Fabrics" },
        { title: "Custom-Made Orders" },
      ],
    },
    {
      title: "Industries We Serve",
      items: [
        { title: "Hotels & Resorts" },
        { title: "Laundries" },
        { title: "Restaurants & Catering" },
        { title: "Wellness & Spa Centers" },
      ],
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto  py-8 pb-16 p-5">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center text-blue-600 ">
            <Dot size={50} />
            <h2 className="font-medium">Our Expertise</h2>
          </div>
          <button className="text-blue-600 border border-blue-600 rounded-full px-4 py-1 text-sm font-medium hover:bg-blue-50 transition-colors">
            View All Products
          </button>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-gray-500 text-sm font-medium">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex justify-between items-center border-t border-gray-200 hover:border-blue-700 py-4 px-4 cursor-pointer hover:bg-gray-50  hover:text-blue-700 transition-colors"
                  >
                    <span className="font-medium">/ {item.title}</span>
                    <div className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-700 flex items-center justify-center  text-blue-700 hover:text-white ">
                      <ArrowRight className="h-5 w-5 " />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <div className="grid md:grid-cols-2 gap-5 ">
            <div>
              <div className="flex items-center text-blue-700">
                <Dot size={50} />
                <p className="font-medium">Mission</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-medium">
                We combine decades of textile expertise with a client-first mindset to deliver
                <span className="text-blue-700">
                  {" "}
                  tailored, high-quality products that meet the demands of the hospitality industry.
                </span>
              </h2>

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
  const cases: Case[] = [
    {
      category: "Hotels & Resorts",
      title: "Luxury Hotel Linen Upgrade",
      description:
        "Partnered with a 5-star hotel chain in Paris to supply premium bed linens and towels, enhancing guest comfort and sustainability…",
      team: ["/team1.jpg", "/team2.jpg", "/team3.jpg"],
    },
    {
      category: "Spa & Wellness",
      title: "Tailored Spa Textiles",
      description:
        "Delivered custom-made soft cotton robes and treatment bed covers for a luxury wellness resort in the South of France…",
      team: ["/team2.jpg", "/team3.jpg"],
    },
    {
      category: "Laundries",
      title: "Bulk Supply for Industrial Laundry",
      description:
        "Supported a commercial laundry service in Belgium with durable, easy-to-maintain textiles for hotels and restaurants…",
      team: ["/team1.jpg", "/team3.jpg"],
    },
  ];


  return (
    <div className="bg-gray-100 py-10 md:py-20">
      <div className="max-w-7xl mx-auto  py-8 p-5">
        <div className="flex justify-between items-center mb-10 ">
          <div className="flex items-center text-blue-700">
            <Dot size={50} />
            <p className="font-medium">Our Projects</p>
          </div>

          <div>
            <button className="text-blue-600 border border-blue-600 rounded-full px-4 py-1 text-sm font-medium hover:bg-blue-50 transition-colors">
              Show All
            </button>
          </div>
        </div>
        <div>
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {cases.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between pt-16"
              >
                <div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2 mb-2">
                      {item.team.map((img, i) => (
                        <img
                          key={i}
                          src={"./man.jpg"}
                          alt="team member"
                          className="rounded-full w-10 h-10"
                        />
                      ))}
                    </div>
                    <div className="text-sm bg-gradient-to-br border inline-block px-3 py-1  rounded-full mb-4">
                      {item.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <a href="#" className="text-blue-600 text-sm mt-4 font-medium">
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center text-blue-700">
          <Dot size={40} />
          <p className="font-medium text-lg ml-2">Client Feedback</p>
        </div>
        <button className="text-blue-600 border border-blue-600 rounded-full px-4 py-1 text-sm font-medium hover:bg-blue-50 transition-colors">
          Show All
        </button>
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

const Contacts = () => {
  return (
    <div className="bg-[url('/hero.jpg')] m-1 rounded-3xl py-28 my-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="flex justify-center text-center md:block md:text-start">
          <h2 className="lg:text-7xl md:text-5xl text-4xl  font-medium text-white w-7/12">
            Let’s plan your textile solution.
          </h2>
        </div>
        <div>
          <button className=" bg-white text-black py-3 px-7 rounded-3xl">
            Request a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const menuItems = [
    "Expertise",
    "About",
    "Our Work",
    "Team",
    "Blog",
    "Contact",
  ];

  return (
    <div className="bg-[#d9dce4] text-gray-800">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Logo + Socials */}
          <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <img width={70} src="./lawyerlogo.png" alt="Logo" />
            <div className="flex gap-4">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition">
                <Facebook size={18} />
              </div>
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition">
                <Linkedin size={18} />
              </div>
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition">
                <Instagram size={18} />
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="col-span-12 md:col-span-6 flex justify-center items-start mt-6 md:mt-0">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {menuItems.map((item, index) => (
                <button key={index} className="hover:underline transition">
                  {item}
                </button>
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

