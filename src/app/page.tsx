"use client"

import { ArrowRight, Dot, Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";



// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';



// // import required modules
// import { Pagination } from 'swiper/modules';


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
      {/* <Reviews /> */}
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
    <div className="flex items-center h-[90vh]  text-white bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-5">
        <h1 className="md:text-6xl lg:text-7xl sm:text-5xl text-4xl  font-semibold w-5/12">
          The power of legal protection
        </h1>
        <div className="grid grid-cols-2">
          <div>
            <p className="py-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              quae quaerat dolor! Quisquam possimus alias odio, voluptatum
              impedit molestias? Exercitationem dicta nemo ipsa harum!
              Perferendis aliquam ullam optio autem iste.
            </p>
            <button className=" bg-white text-black py-3 px-7 rounded-3xl">
              Get a Consultation
            </button>
            <div className="flex gap-5 pt-10">
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
  );
};


const Skills = () => {
  const statsData = [
    {
      value: "600+",
      label: "",
      description:
        "of consultation conducted for the entire work of the company",
    },
    {
      value: "12",
      label: "barristers",
      description:
        "highly qualified and experienced lawyers with international recognition",
    },
    {
      value: "32",
      label: "partners",
      description:
        "of consultation conducted for the entire work of the company",
    },
    {
      value: "26",
      label: "times",
      description:
        'recognized as the "Best Law firm in England " by the professional ratings',
    },
    {
      value: "40",
      label: "times",
      description: "attracted to England as investments, thanks to our work",
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
                We are a leading English law firm operating in accordance{" "}
                <span className="text-blue-700">
                  with international standards of legal services
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
      title: "Practices",
      items: [
        { title: "Corporate Law" },
        { title: "Criminal Law" },
        { title: "Commercial Law" },
        { title: "Accounting Services" },
        { title: "Migration Law" },
        { title: "Insurance" },
      ],
    },
    {
      title: "Industries",
      items: [
        { title: "Private Equity" },
        { title: "Information Technology" },
        { title: "Estate & Construction" },
        { title: "Automotive Aviation" },
      ],
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto  py-8 pb-16 p-5">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center text-blue-600 ">
            <Dot size={50} />
            <h2 className="font-medium">Expertise</h2>
          </div>
          <button className="text-blue-600 border border-blue-600 rounded-full px-4 py-1 text-sm font-medium hover:bg-blue-50 transition-colors">
            Show All
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
                Prioritizing client needs and providing swift responses are
                <span className="text-blue-700">
                  {" "}
                  fundamental principles ensuring efficient legal solutions.
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
      category: 'Commercial Law',
      title: 'Airport Litigation',
      description:
        'Paris airport faced a legal challenge when neighboring residents filed a lawsuit against noise pollution caused by increas...',
      team: ['./man.jpg', './man.jpg', './man.jpg'],
    },
    {
      category: 'Corporate Law',
      title: 'Patent Defense',
      description:
        'Client, a young tech company, faced patent infringements from competitors attempting to replicate their innovative developments…',
      team: ['/team2.jpg', '/team3.jpg'],
    },
    {
      category: 'Migration Law',
      title: 'Migration Legal Case',
      description:
        'A multinational corporation faced a complex legal challenge regarding immigration laws when several of its key...',
      team: ['/team1.jpg', '/team3.jpg'],
    },
  ];

  return (
    <div className="bg-gray-100 py-10 md:py-20">
      <div className="max-w-7xl mx-auto  py-8 p-5">
        <div className="flex justify-between items-center mb-10 ">

          <div className="flex items-center text-blue-700">
            <Dot size={50} />
            <p className="font-medium">Our Work</p>
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
                          src={'./man.jpg'}
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
  )
}


// const Reviews = () => {
//   return (
//     <div className="max-w-7xl mx-auto ">
//       <div>

//         <div className="flex justify-between items-center mb-10 ">
//           <div className="flex items-center text-blue-700">
//             <Dot size={50} />
//             <p className="font-medium">Reviews</p>
//           </div>
//           <div>
//             <button className="text-blue-600 border border-blue-600 rounded-full px-4 py-1 text-sm font-medium hover:bg-blue-50 transition-colors">
//               Show All
//             </button>
//           </div>
//         </div>

//         <div>
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={20}
//             pagination={{ clickable: true }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//             }}
//             modules={[Pagination]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 Slide 1
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 Slide 2
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 Slide 3
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 Slide 4
//               </div>
//             </SwiperSlide>
//             {/* Add more slides as needed */}
//           </Swiper>
//         </div>

//       </div>
//     </div>
//   )
// }



const Contacts = () => {
  return (
    <div className="bg-[url('/hero.jpg')] m-1 rounded-3xl py-28 my-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="flex justify-center text-center md:block md:text-start">
          <h2 className="lg:text-7xl md:text-5xl text-4xl  font-medium text-white w-7/12">
            Lets make an action plan!
          </h2>
        </div>
        <div>
          <button className=" bg-white text-black py-3 px-7 rounded-3xl">
            Get a Consultation
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
    "Contacts",
  ];
  return (
    <div className="bg-[#d9dce4] text-gray-800">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-12 gap-5 items-start">

          <div className="col-span-12 md:col-span-3 flex flex-col md:items-start items-center gap-4">
            <img width={70} src="./lawyerlogo.png" alt="Logo" />
            <div className="flex gap-4">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow">
                <Facebook size={18} />
              </div>
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow">
                <Linkedin size={18} />
              </div>
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow">
                <Instagram size={18} />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-center items-start mt-6 md:mt-0">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {menuItems.map((item, index) => (
                <button key={index} className="hover:underline">
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 flex flex-col md:items-start items-center text-sm space-y-4">
            <div className="flex gap-5 md:block">
              <p className="font-semibold">Phone</p>
              <p>+44 20 482 705 41</p>
            </div>
            <div className="flex gap-5 md:block">
              <p className="font-semibold">Address</p>
              <p>6 Murray Glens lake</p>
            </div>
            <div className="flex gap-5 md:block">
              <p className="font-semibold">Email</p>
              <p>lawcompany@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-3">
          <p>Company © 2024. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Cookies Policy
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
