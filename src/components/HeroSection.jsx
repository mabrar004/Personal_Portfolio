import React from "react";
import profile from "../assets/img.jpg";

const HeroSection = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center mt-10">
        <img
          src={profile}
          className="object-cover rounded-full w-64 md:mt-5 h-64 md:w-64 md:h-64 animate-scaleUp"
          alt="Profile"
        />
      </div>

      <div id="content" className="flex flex-col text-center mt-8">
        <h1 className="md:text-5xl text-3xl relative overflow-hidden whitespace-nowrap">
          <span className="animate-typewriter">I am Abrar Ahmed</span>
        </h1>
        <p className="mt-7 mx-2 text-md md:text-xl relative overflow-hidden ">
          <span className="animate-typewriter animate-delay-500ms ">
            I am a Frontend Developer from Pakistan with 1+ years of experience.
          </span>
        </p>
      </div>
      <div id="btn-groups" className="flex justify-center mt-5 gap-3">
        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-3xl border border-white transition-transform transform hover:scale-105 hover:shadow-lg">
          Contact with Me
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-3xl border border-white transition-transform transform hover:scale-105 hover:shadow-lg">
          My Resume
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
