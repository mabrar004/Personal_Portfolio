import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpg";

const Portfolio = () => {
  const IMG_DATA = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
  ];
  return (
    <>
      <div className="flex flex-col flex-wrap mx-7 mt-7">
        <h2 className="md:flex md:justify-center font-bold text-3xl text-left md:text-center md:text-5xl md:mt-20">
          My portfolio
        </h2>
        <div className="flex flex-row gap-4 flex-wrap mt-5 justify-center">
          {IMG_DATA.map((items, index) => {
            return (
              <div
                key={index}
                className="mb-1 md:mt-10 hover:cursor-pointer hover:scale-105 transition-transform duration-300 border-4 hover:border-pink-400 hover:rounded-xl"
              >
                <img
                  src={items.img}
                  className="w-40 h-40 md:w-64 md:h-64 rounded"
                  alt={`Portfolio ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
