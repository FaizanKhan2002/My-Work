import React, { useState } from "react";
import { ChevronLast, Youtube, Instagram } from "lucide-react";
import { PiAppStoreLogo } from "react-icons/pi";
import {
  FaHandsHelping,
  FaAmazon,
  FaWhatsapp,
  FaPhoenixFramework,
} from "react-icons/fa";

const Project = () => {
  const [selectedCardSet, setSelectedCardSet] = useState("set1");

  const handleRadioChange = (e) => {
    setSelectedCardSet(e.target.value);
  };

  return (
    <section className="mt-16 text-white flex items-center justify-center min-h-screen mb-5">
      <div className="bg-zinc-950 container shadow-lg rounded-lg p-8 max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-center md:justify-start w-full mb-8">
          <h1 className="text-4xl text-teal-400 font-semibold me-5">Project</h1>
          <div className="w-auto h-auto bg-gradient-to-r from-zinc-300 to-zinc-700 md:w-1/5 md:h-0.5"></div>
        </div>

        {/* Radio Buttons */}
        <div className="flex justify-center mt-8">
          <label className="flex items-center">
            <input
              type="radio"
              name="cardSet"
              value="set1"
              checked={selectedCardSet === "set1"}
              onChange={handleRadioChange}
              className="form-radio"
            />
            <span className="ml-2 text-white"></span>
          </label>
          <label className="flex items-center ms-5">
            <input
              type="radio"
              name="cardSet"
              value="set2"
              checked={selectedCardSet === "set2"}
              onChange={handleRadioChange}
              className="form-radio"
            />
            <span className="ml-2 text-white"></span>
          </label>
        </div>

        {/* Cards Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {selectedCardSet === "set1" && (
            <>
              <div>
                <div className="w-full max-w-md p-6 mt-5 border duration-700 bg-black border-zinc-800 rounded-2xl shadow-2xl hover:border-zinc-700 flex flex-col items-center">
                  <div className="bg-zinc-900 p-4 text-3xl rounded-full mb-4">
                    <FaPhoenixFramework />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-white">
                    RAJU FRAMING
                  </h3>
                  <p className="text-center text-sm font-normal text-white mb-4">
                    "Raju Framing" was a project I worked on as a freelance web
                    developer. The client wanted an e-commerce website to sell
                    custom frames online.
                  </p>
                  <a
                    href="https://fuziox.github.io/RajuFrames/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mt-4 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <ChevronLast />
                  </a>
                </div>

                <div className="w-full max-w-md p-6 mt-5 border duration-700 bg-black border-zinc-800 rounded-2xl shadow-2xl hover:border-zinc-700 flex flex-col items-center">
                  <div className="bg-zinc-900 p-4 text-3xl rounded-full mb-4">
                    <FaHandsHelping />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-white">
                    PARSHAD OF PADAVA
                  </h3>
                  <p className="text-center text-sm font-normal text-white mb-4">
                    "Parshad of Padava" was a web development project that I
                    undertook, showcasing my skills and expertise.
                  </p>
                  <a
                    href="https://fuziox.github.io/PadavaParshad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mt-5 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <ChevronLast />
                  </a>
                </div>
              </div>

              <div>
                <div className="w-full max-w-md p-6 md:mt-5 border duration-700 bg-black border-zinc-800 rounded-2xl shadow-2xl hover:border-zinc-700 flex flex-col items-center">
                  <div className="bg-zinc-900 p-4 text-3xl rounded-full mb-4">
                    <Youtube />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-white">
                    YOUTUBE CLONE
                  </h3>
                  <p className="text-center text-sm font-normal text-white mb-4">
                    "Youtube Clone" I developed as a web developer. The website
                    included give information front page of the Youtube Website.
                  </p>
                  <a
                    href="https://faizankhan2002.github.io/YouTube/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mt-5 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <ChevronLast />
                  </a>
                </div>

                <div className="w-full max-w-md p-6 mt-5 border duration-700 bg-black border-zinc-800 rounded-2xl shadow-2xl hover:border-zinc-700 flex flex-col items-center">
                  <div className="bg-zinc-900 p-4 text-2xl rounded-full mb-4">
                    <FaWhatsapp />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-white">
                    WHATSAPP CLONE
                  </h3>
                  <p className="text-center text-sm font-normal text-white mb-4">
                    "Whatsapp Clone" was a project I worked to build my
                    Confidence. The website included give information front page
                    of the Whatsapp Clone.
                  </p>
                  <a
                    href="https://faizankhan2002.github.io/Whataap/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mt-3 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <ChevronLast />
                  </a>
                </div>
              </div>
            </>
          )}

          {selectedCardSet === "set2" && (
            <>
              <div className="w-full max-w-md p-6 mt-5 border duration-700 bg-black border-zinc-800 rounded-2xl shadow-2xl hover:border-zinc-700 flex flex-col items-center">
                <div className="bg-zinc-900 p-4 text-3xl rounded-full mb-4">
                  <FaAmazon />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-white">
                  AMAZON CLONE
                </h3>
                <p className="text-center text-sm font-normal text-white mb-4">
                  "Amazon Clone" was a website project where I implemented key
                  features similar to Amazon's platform.
                </p>
                <a
                  href="https://fuziox.github.io/Amazon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-8 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                >
                  Visit
                  <ChevronLast />
                </a>
              </div>

              <div className="w-full max-w-md p-6 md:mt-5 border duration-700 bg-black border-zinc-800 rounded-2xl shadow-2xl hover:border-zinc-700 flex flex-col items-center">
                <div className="bg-zinc-900 p-4 text-3xl rounded-full mb-4">
                  <Instagram />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-white">
                  INSTAGRAM CLONE
                </h3>
                <p className="text-center text-sm font-normal text-white mb-4">
                  "Instagram LogIn page" was a web development project that I
                  undertook, which I created for my skills and expertise as a
                  web developer.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-4 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                >
                  Visit
                  <ChevronLast />
                </a>
              </div>
            </>
          )}

          {selectedCardSet === "set2" && (
            <>
              <div className="w-full max-w-md p-6 border duration-700 bg-black border-zinc-800 rounded-2xl shadow-2xl hover:border-zinc-700 flex flex-col items-center">
                <div className="bg-zinc-900 p-4 text-3xl rounded-full mb-4">
                  <PiAppStoreLogo />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-white">
                  SHRI RAM STEEL CLONE
                </h3>
                <p className="text-center text-sm font-normal text-white mb-4">
                  "Shri Ram Steel" was a project I worked to build my
                  Confidence. It is project where client wanted an website to
                  sell custom his product online.
                </p>
                <a
                  href="https://fuziox.github.io/ShriRamSteel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-4 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                >
                  Visit
                  <ChevronLast />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
