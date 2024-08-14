import React from "react";
import { Palette, SeparatorVertical, GalleryVerticalEnd } from "lucide-react";
import img from "../assets/img3.jpg";
import { FaDigitalOcean } from "react-icons/fa6";

const About = () => {
  return (
    <section className="mt-16 text-white flex items-center justify-center min-h-screen mb-5">
      <div className="bg-zinc-950 container shadow-lg rounded-lg p-8 max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-center md:justify-start w-full mb-8">
          <h1 className="text-4xl text-teal-400 font-semibold me-5">
            About Me
          </h1>
          <div className="w-auto h-auto bg-gradient-to-r from-zinc-300 to-zinc-700 md:w-1/5 md:h-0.5"></div>
        </div>

        {/* Main content */}
        <div className="text-white mt-16 grid grid-cols-1 sm:grid-cols-12 gap-8">
          {/* Image */}
          <div className="col-span-10 sm:col-span-4 flex justify-center">
            <img
              src={img}
              className="rounded-lg w-48 h-52 sm:w-60 sm:h-60"
              alt="Profile"
            />
          </div>
          {/* Text content */}
          <div className="col-span-10 sm:col-span-8 flex flex-col justify-center">
            <div>
              <h1 className="text-4xl font-semibold mb-4">Faizan Khan</h1>
              <p className="text-md md:text-lg leading-relaxed text-gray-500">
                I create responsive, creative, and engaging websites. I turn
                design concepts into reality with code, making websites
                user-friendly. I am not just a developer; I am an architect of
                digital experiences, shaping the way users interact with
                websites. <br />
                My aim is to bring across your message and identity in the most
                creative way.
              </p>
            </div>
          </div>
        </div>

        {/* What I do section */}
        <div className="bg-black mt-12 container shadow-lg rounded-lg p-8 max-w-6xl w-full">
          <h3 className="text-xl font-semibold mb-5">What I do ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="w-full max-w-md p-6 bg-white border hover:border-zinc-700 duration-500 rounded-lg shadow sm:p-8 dark:bg-zinc-950 dark:border-zinc-800">
              <div className="flex justify-center items-center mb-4">
                <div className="w-12 h-12 rounded-full hover:bg-zinc-800 bg-zinc-900 duration-700 flex justify-center items-center text-white">
                  <SeparatorVertical />
                </div>
              </div>
              <p className="text-center text-sm font-normal text-gray-500 dark:text-gray-400">
                As a Front End Developer, I specialize in creating stunning
                websites and applications that are both functional and visually
                appealing.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-md p-6 bg-white border hover:border-zinc-700 duration-500 rounded-lg shadow sm:p-8 dark:bg-zinc-950 dark:border-zinc-800">
              <div className="flex justify-center items-center mb-4">
                <div className="w-12 h-12 rounded-full hover:bg-zinc-800 bg-zinc-900 duration-700 flex justify-center items-center text-white">
                  <FaDigitalOcean />
                </div>
              </div>
              <p className="text-center text-sm font-normal text-gray-500 dark:text-gray-400">
                I specialize in creating and executing comprehensive digital
                marketing strategies that drive traffic, increase brand
                awareness, and generate leads.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-md p-6 bg-white border hover:border-zinc-700 duration-500 rounded-lg shadow sm:p-8 dark:bg-zinc-950 dark:border-zinc-800">
              <div className="flex justify-center items-center mb-4">
                <div className="w-12 h-12 rounded-full hover:bg-zinc-800 bg-zinc-900 duration-700 flex justify-center items-center text-white">
                  <Palette />
                </div>
              </div>
              <p className="text-center text-sm font-normal text-gray-500 dark:text-gray-400">
                A UI/UX Designer is responsible for creating user-friendly and
                visually appealing interfaces for websites and digital
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
