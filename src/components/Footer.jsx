import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" text-white mt-12 py-6">
      <div className="max-w-screen-xl mx-auto px-6 md:px-20">
        <div className="flex flex-col gap-5 md:flex-row md:gap-10 justify-center items-center">
          {/* Terms and Privacy Links */}
          <div className="flex gap-6 md:flex-row md:justify-center md:items-center text-lg font-semibold">
            <h1 className="cursor-pointer hover:text-pink-500 transition-colors duration-300">
              Terms of Service
            </h1>
            <h1 className="cursor-pointer hover:text-pink-500 transition-colors duration-300">
              Privacy Policy
            </h1>
            <h1 className="cursor-pointer hover:text-pink-500 transition-colors duration-300">
              Connect with me
            </h1>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="flex justify-center mt-6">
          <h1 className="text-sm md:text-base opacity-75">
            &copy; Abrar Ahmed. All rights reserved.
          </h1>
          <div className="ml-5 flex gap-4 items-center text-2xl">
            <a href="https://github.com/mabrar004">
              <IoLogoGithub />
            </a>
            <a href="https://www.linkedin.com/in/mabrarahmed">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
