import React, { useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navDialogueRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuBar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className="container mx-auto px-4 py-5 flex md:justify-evenly items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-semibold text-lg">AbraR</span>
        </Link>
        <div className="hidden md:flex gap-8">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/services" className="">
            Services
          </Link>
          <Link to="/portfolio" className="">
            Portfolio
          </Link>
          <Link to="/contact" className="">
            Contact
          </Link>
          <Link to="/aboutMe" className="">
            About Me
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link to="/contact">
            <button className="bg-gradient-to-r from-pink-500 to-yellow-500  w-full text-white px-4 py-2 rounded-3xl">
              Contact with Me
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={handleMenuBar} className="text-white">
            <FaBars />
          </button>
        </div>
      </div>
      <div
        ref={navDialogueRef}
        className={`fixed top-0 right-0 h-screen w-1/2 bg-gray-900 z-50 transform transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={handleMenuBar}
        >
          <RxCross1 />
        </button>
        <div className="flex flex-col h-full my-14 mx-7  gap-5 ">
          <Link to="/" className="text-white hover:text-blue-800">
            Home
          </Link>
          <Link to="/services" className="text-white">
            Services
          </Link>
          <Link to="/portfolio" className="text-white">
            Portfolio
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
          <Link to="/aboutMe" className="text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
