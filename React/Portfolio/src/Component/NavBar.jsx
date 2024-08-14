import React, { useState } from "react";
import { ImHome3 } from "react-icons/im";
import { IoMenuOutline } from "react-icons/io5";
import { MdContacts, MdSettingsSuggest } from "react-icons/md";
import { PiChalkboardTeacherBold, PiStudentBold } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 md:px-10">
        <div className="text-2xl md:text-3xl font-extrabold text-indigo-700">
          Marks Predictor
        </div>

        <button
          onClick={handleMenuToggle}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? (
            <RxCross2 className="w-7 h-7 text-indigo-700 animate-spin" /> 
          ) : (
            <IoMenuOutline className="w-7 h-7 text-indigo-700 animate-pulse" />
          )}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="home-section"
            smooth={true}
            duration={500}
            className="relative flex items-center space-x-2 text-yellow-300 hover:text-blue-900 transition duration-300 group cursor-pointer"
          >
            <ImHome3 className="group-hover:scale-110 transform transition duration-300" />
            <span>Home</span>
          </Link>
          <Link
            to="about-section"
            smooth={true}
            duration={500}
            className="relative flex items-center space-x-2 text-yellow-300 hover:text-blue-900 transition duration-300 group cursor-pointer"
          >
            <RiContactsFill className="group-hover:scale-110 transform transition duration-300" />
            <span>About</span>
          </Link>
          <Link
            to="services-section"
            smooth={true}
            duration={500}
            className="relative flex items-center space-x-2 text-yellow-300 hover:text-blue-900 transition duration-300 group cursor-pointer"
          >
            <MdSettingsSuggest className="group-hover:scale-110 transform transition duration-300" />
            <span>Services</span>
          </Link>
          <Link
            to="student-section"
            smooth={true}
            duration={500}
            className="relative flex items-center space-x-2 text-yellow-300 hover:text-blue-900 transition duration-300 group cursor-pointer"
          >
            <PiStudentBold className="group-hover:scale-110 transform transition duration-300" />
            <span>Student</span>
          </Link>
          <Link
            to="faculty-section"
            smooth={true}
            duration={500}
            className="relative flex items-center space-x-2 text-yellow-300 hover:text-blue-900 transition duration-300 group cursor-pointer"
          >
            <PiChalkboardTeacherBold className="group-hover:scale-110 transform transition duration-300" />
            <span>Faculty</span>
          </Link>
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            className="relative flex items-center space-x-2 text-yellow-300 hover:text-blue-900 transition duration-300 group cursor-pointer"
          >
            <MdContacts className="group-hover:scale-110 transform transition duration-300" />
            <span>Contact</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 text-white z-40 transform transition-transform duration-500 ease-in-out flex flex-col items-center justify-center ${
          isOpen ? "translate-x-0 opacity-100" : "h-0 translate-x-full opacity-0"
        } md:hidden`}
      >
        <nav className="flex flex-col m-5 items-center space-y-6">
          <Link
            to="home-section"
            smooth={true}
            duration={500}
            className="text-xl font-medium hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
            onClick={handleMenuToggle}
          >
            <ImHome3 />
            <span>Home</span>
          </Link>
          <Link
            to="about-section"
            smooth={true}
            duration={500}
            className="text-xl font-medium hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
            onClick={handleMenuToggle}
          >
            <RiContactsFill />
            <span>About</span>
          </Link>
          <Link
            to="services-section"
            smooth={true}
            duration={500}
            className="text-xl font-medium hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
            onClick={handleMenuToggle}
          >
            <MdSettingsSuggest />
            <span>Services</span>
          </Link>
          <Link
            to="student-section"
            smooth={true}
            duration={500}
            className="text-xl font-medium hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
            onClick={handleMenuToggle}
          >
            <PiStudentBold />
            <span>Student</span>
          </Link>
          <Link
            to="faculty-section"
            smooth={true}
            duration={500}
            className="text-xl font-medium hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
            onClick={handleMenuToggle}
          >
            <PiChalkboardTeacherBold />
            <span>Faculty</span>
          </Link>
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            className="text-xl font-medium hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
            onClick={handleMenuToggle}
          >
            <MdContacts />
            <span>Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
