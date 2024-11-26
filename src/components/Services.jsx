import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  const cards_data = [
    {
      id: "01",
      name: "Web Development",
      detail:
        "Building responsive, high-performance websites and web applications tailored to client needs.",
    },
    {
      id: "02",
      name: "Responsive Design",
      detail: "Create websites that look great on any device.",
    },
    {
      id: "03",
      name: "Custom Web Applications",
      detail: "Develop tailored solutions to meet specific business needs.",
    },
    {
      id: "04",
      name: "CMS Integration",
      detail:
        "Integrate Content Management Systems for easy website management.",
    },
    {
      id: "05",
      name: "Payment Method Integration",
      detail:
        "Integrating secure and reliable payment gateways into websites, ensuring smooth  transactions.",
    },
    {
      id: "06",
      name: "Server-Side Scripting",
      detail:
        "Implement dynamic functionality using server-side scripting languages like Nodejs. ",
    },
    {
      id: "07",
      name: "User Authentication",
      detail:
        "Offer robust user authentication services to ensure secure and seamless access for your applications. ",
    },
  ];
  return (
    <div className="mx-7 mt-7 ">
      <h1 className="md:flex md:justify-center font-bold text-3xl text-left md:text-center md:text-5xl md:mt-20">
        My Services
      </h1>
      <div className="flex flex-row mt-5 flex-wrap md:justify-center md:mt-10">
        {cards_data.map((data) => {
          return (
            <div
              key={data.id}
              className="border border-white rounded w-48 h-64 mx-7 mb-7 overflow-hidden hover:cursor-pointer hover:scale-125 transition-transform duration-300 hover:border-pink-400 hover:rounded-xl hover:border-4"
            >
              <div className="flex flex-col flex-wrap gap-2 mt-6 mx-5">
                <h1 className="text-3xl font-bold text-center">{data.id}</h1>
                <h1 className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent text-md font-semibold text-center">
                  {data.name}
                </h1>
                <h1 className="text-justify hover:text-sm">{data.detail}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
