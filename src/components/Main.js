import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#3D9239] font-bold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Vaibhav Thorat
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[690px]">
          I am working on <span className="text-[#3D9239]"> MERN Stack </span>.
          I am currently residing in Amravati, Maharashtra and working as a
          Production Manager at JH Film Production.
        </p>
      </div>
    </div>
  );
};

export default Home;
