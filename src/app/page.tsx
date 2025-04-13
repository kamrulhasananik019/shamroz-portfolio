import { Dot, Facebook, Instagram, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <div className="bg-gray-100 py-10">
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

const NavBar = () => {
  const menuItems = ["Expertise", "About", "Our Work", "Team", "Blog", "Contacts"];

  return (
    <div className="w-full bg-transparent absolute">
      <div className="container mx-auto grid grid-cols-2 py-4 px-6 pb-5">
        <div>
          <img width={70} className="invert" src="./lawyerlogo.png" alt="Logo" />
        </div>
        <div className="text-white flex items-center justify-around">
          {menuItems.map((item, index) => (
            <button key={index}>{item}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const menuItems = ["Expertise", "About", "Our Work", "Team", "Blog", "Contacts"];
  return (

    <div className="bg-[#d9dce4] text-gray-800">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-12 gap-5 items-start">


          <div className="col-span-12 md:col-span-3 flex flex-col items-start gap-4">
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

          <div className="col-span-12 md:col-span-3 text-sm space-y-4">
            <div>
              <p className="font-semibold">Phone</p>
              <p>+44 20 482 705 41</p>
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p>6 Murray Glens lake</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>lawcompany@gmail.com</p>
            </div>
          </div>
        </div>


        <div className="border-t border-gray-300 my-6"></div>


        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-3">
          <p>Company © 2024. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Cookies Policy</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  const statsData = [
    {
      value: "600+",
      label: "",
      description: "of consultation conducted for the entire work of the company",
    },
    {
      value: "12",
      label: "barristers",
      description: "highly qualified and experienced lawyers with international recognition",
    },
    {
      value: "32",
      label: "partners",
      description: "of consultation conducted for the entire work of the company",
    },
    {
      value: "26",
      label: "times",
      description: 'recognized as the "Best Law firm in England " by the professional ratings',
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
        <div className="pt-36">
          <div className="grid grid-cols-2 ">
            <div>
              <div className="flex items-center text-blue-700">
                <Dot size={50} />
                <p className="font-medium">Introduction</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-medium">We are a leading English law firm operating in accordance <span className="text-blue-700">
                with  international standards of legal services
              </span>
              </h2>
            </div>
          </div>

          <div >
            <div className="flex items-center py-10 text-blue-700">
              <Dot size={50} />
              <p className="font-medium ">why Choose Us</p>
            </div>

            <div className="grid grid-cols-3 gap-10">
              {statsData.map((item, index) => (
                <div key={index} className="p-5 bg-white rounded-md">
                  <div className="pt-20">
                    <p className="text-5xl py-2 text-blue-700">
                      {item.value}{" "}
                      {item.label && <span className="text-2xl">{item.label}</span>}
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
  )
}


const Hero = () => {
  return (
    <div className="flex items-center h-[90vh]  text-white bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto">
        <h1 className="text-7xl font-semibold w-5/12">The power of legal protection</h1>
        <div className="grid grid-cols-2">
          <div>
            <p className="py-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quae
              quaerat dolor! Quisquam possimus alias odio, voluptatum impedit
              molestias? Exercitationem dicta nemo ipsa harum! Perferendis aliquam
              ullam optio autem iste.
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
          <div>
            video
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

