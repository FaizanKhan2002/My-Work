import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Github,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="md:-mt-1.5 mt-16 text-white flex items-center justify-center min-h-screen mb-5">
      <div className="bg-zinc-950 container shadow-lg rounded-lg p-8 max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-center md:justify-start w-full mb-8">
          <h1 className="text-4xl text-teal-400 font-semibold mr-5">
            Contact Me
          </h1>
          <div className="w-auto h-0.5 bg-gradient-to-r from-zinc-300 to-zinc-700 md:w-1/5"></div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around pt-12">
          <div className="flex flex-col items-center justify-center mb-4 md:mb-0">
            <div className="flex items-center justify-center bg-zinc-800 hover:bg-zinc-950 duration-700 rounded-full w-16 h-16">
              <MapPin size={32} className="text-white" />
            </div>
            <div className="mt-2 text-center md:text-left">Singot</div>
          </div>

          <div className="flex flex-col items-center justify-center mb-4 md:mb-0">
            <div className="flex items-center justify-center bg-zinc-800 hover:bg-zinc-950 duration-700 rounded-full w-16 h-16">
              <Phone size={32} className="text-white" />
            </div>
            <div className="mt-2 text-center md:text-left">011-99-99</div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center bg-zinc-800 hover:bg-zinc-950 duration-700 rounded-full w-16 h-16">
              <Mail size={32} className="text-white" />
            </div>
            <div className="mt-2 text-center md:text-left">@gmail.com</div>
          </div>
        </div>

        <div className="bg-black mt-12 container shadow-lg rounded-lg p-8 max-w-6xl w-full">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="col-span-1 md:col-span-1 flex justify-center mt-3">
              <div className="flex items-center hover:scale-125 hover:text-yellow-400 justify-center bg-zinc-800 hover:bg-black duration-700 rounded-full w-16 h-16">
                <Facebook />
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 flex justify-center mt-3">
              <div className="flex items-center hover:scale-125 hover:text-yellow-400 justify-center bg-zinc-800 hover:bg-black duration-700 rounded-full w-16 h-16">
                <Instagram />
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 flex justify-center mt-3">
              <div className="flex items-center hover:scale-125 hover:text-yellow-400 justify-center bg-zinc-800 hover:bg-black duration-700 rounded-full w-16 h-16">
                <Youtube />
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 flex justify-center mt-3">
              <div className="flex items-center hover:scale-125 hover:text-yellow-400 justify-center bg-zinc-800 hover:bg-black duration-700 rounded-full w-16 h-16">
                <Twitter />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center mt-3">
              <div className="flex items-center hover:scale-125 hover:text-yellow-400 justify-center bg-zinc-800 hover:bg-black duration-700 rounded-full w-16 h-16">
                <Github />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
