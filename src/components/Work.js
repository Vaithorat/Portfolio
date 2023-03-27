import React, { useState } from "react";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;
  const [showIntro, setShowIntro] = useState(-1);

  const handleMouseEnter = (index) => {
    setShowIntro(index);
  };

  const handleMouseLeave = () => {
    setShowIntro(-1);
  };

  return (
    <div
      id="work"
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] md:mt-8"
    >
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#3D9239] ">
            Projects that I've worked on
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-28 ">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`intro${showIntro === index ? " visible" : ""}`}>
                <div className="absolute  w-full h-20 translate-y-full bg-black opacity-80 flex items-center justify-center">
                  <div className="text-white text-center mx-4 ">
                    {item.intro}
                  </div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
