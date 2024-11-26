import React from "react";

const Subscription = () => {
  return (
    <>
      <div className="flex flex-col mt-10 mx-5 md:mx-36">
        <h1 className="font-extrabold text-3xl">AbraR</h1>
        <p className="mt-7 text-md md:mt-3">
          {" "}
          I am a frontEnd Developer from Pakistan with 1+years of experience in
          Company like CoderzPark.
        </p>
        <div className="mt-5 flex flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-full w-64 h-12 md:w-72 p-2 bg-gray-600 px-6"
          />
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full text-xl h-12 w-1/3 md:w-1/6 transition-transform transform hover:scale-105 hover:shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="block mt-5 md:mx-36" />
    </>
  );
};

export default Subscription;
