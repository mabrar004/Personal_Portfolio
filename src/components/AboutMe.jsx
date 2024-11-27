import React from "react";
import profile from "../assets/img.jpg";

const AboutMe = () => {
  return (
    <div className="flex flex-col mx-7 mt-7">
      <h2 className="font-bold text-3xl text-left md:text-center md:text-5xl ">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row md:mt-20 mt-8">
        {/* Profile Image */}
        <div className="hidden md:block md:w-1/3 lg:w-1/4 mx-auto">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* About Me Text */}
        <div className="md:w-2/3 lg:w-3/4 md:mx-5 mt-8 md:mt-0">
          <p className="text-justify text-lg leading-relaxed ">
            I am a MERN Stack developer with over a year of experience in
            building responsive and user-friendly web applications. Skilled in
            HTML, CSS, JavaScript,Reactjs,Nodejs,Expressjs,Mysql I have a
            passion for creating clean and efficient code. My experience
            includes collaborating with cross-functional teams to deliver
            high-quality projects. I am dedicated to continuous learning and
            staying updated with the latest industry trends to ensure the best
            user experience.
          </p>
          <p className="text-justify mt-5 text-lg ">
            My passion for Full stack development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </p>

          {/* Skills Progress Bars */}
          <div className="mt-10 md:mx-10 md:w-full flex flex-col md:flex-wrap md:flex-row">
            {[
              "HTML & CSS",
              "TAILWINDCSS",
              "BOOTSTRAP",
              "JAVASCRIPT",
              "REACT.JS",
              "NODE.JS",
              "EXPRESS.JS",
              "MYSQL",
              "MongoDB",
            ].map((skill, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-6 hover:cursor-pointer hover:scale-105 transition-transform duration-300 lg:w-1/2 sm:w-full  flex-wrap"
              >
                <h3 className="text-lg font-medium">{skill}</h3>
                <div className="w-1/2 mx-10 bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-yellow-500 h-2 rounded-full"
                    style={{
                      width:
                        index === 0
                          ? "100%"
                          : index === 1
                          ? "100%"
                          : index === 2
                          ? "90%"
                          : index === 3
                          ? "85%"
                          : index === 4
                          ? "95%"
                          : index === 5
                          ? "80%"
                          : index === 6
                          ? "75%"
                          : index === 7
                          ? "70%"
                          : "60%", // Set different widths based on your skill level or preference
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          {/* Statistics */}
          <div className="mt-10">
            <div className="flex flex-row gap-10 justify-between text-center items-center">
              {["1+", "10+", "20+"].map((stat, index) => (
                <p
                  key={index}
                  className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent text-4xl"
                >
                  {stat}
                </p>
              ))}
            </div>
            <div className="flex flex-row justify-between items-center gap-2 mt-4">
              <p className="text-gray-600">Experience</p>
              <p className="text-gray-600">Projects</p>
              <p className="text-gray-600">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
