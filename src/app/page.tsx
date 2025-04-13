import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Skills />
    </div>
  );
}


const Skills = () => {
  return (
    <div>

    </div>
  )
}


const Hero = () => {
  return (
    <div className="flex items-center h-[90vh] w-screen text-white bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
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

