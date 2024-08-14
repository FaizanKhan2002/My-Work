import React from "react";
import img from "../assets/img3.jpg";
import CVFile from "../assets/Faizan Resume.pdf"; // Adjust the path and filename accordingly
import { Download } from "lucide-react";

const Home = () => {
  const handleDownload = () => {
  };

  return (
    <>
      <div className="mt-16 text-white flex items-center justify-center h-full">
        <div className="flex justify-center shadow-lg rounded-full p-5 max-w-3xl max-h-2xl w-full h-full">
          <img src={img} className="h-72 w-72 rounded-full" alt="Profile" />
        </div>
      </div>
      <h1 className="text-white flex items-center justify-center text-4xl pb-5">
        Faizan Khan
      </h1>
      <div className="text-white flex items-center justify-center">
        <h1 className="border hover:border-zinc-700 duration-500 rounded-lg shadow p-3 bg-zinc-900 border-zinc-800">
          I am Front End Developer & Designer
        </h1>
      </div>
      <div className="text-white flex items-center justify-center mt-3 mb-5">
        <a
          href={CVFile}
          download="Faizan_Khan_CV.pdf"
          className="group w-12 hover:w-44 h-12 hover:bg-zinc-800 relative bg-zinc-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:hover:bg-zinc-800 before:rotate-45"
          onClick={handleDownload}
        >
          <svg class="w-8 h-8 shrink-0 mt-2 ms-1 fill-neutral-50">
            <Download className="text-white text-2xl h-8 w-8 mt-5" />
          </svg>
          <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-300 opacity-0 group-hover:opacity-100 border-l-2 px-2 transform scale-x-0 group-hover:scale-x-100 transition-all">
            Download <span className="ps-2">CV</span>
          </span>
        </a>
      </div>
    </>
  );
};

export default Home;
