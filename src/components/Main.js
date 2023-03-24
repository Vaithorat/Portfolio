import React from "react";
import photo from "./images/photo.jpg";

const Main = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center mt-10 md:mt-20">
      <div className="flex flex-col gap-4 text-white md:mr-10 md:w-1/2 sm:mx-8">
        <div className="text-lg font-mono">Hello There, I am</div>
        <div className="text-4xl font-serif font-bold animate-pulse">Vaibhav Thorat.</div>
        <div className="text-xl w-full md:w-3/4 font-mono text-justify">
          I am a <span className="text-green-400">Fullstack Web Developer</span> with <span className="text-green-400">MERN Stack</span>. Currently residing in <span className="text-green-400">Amravati, Maharashtra</span>. I am currently working as a Production Manager at <span className="text-green-400">JH Film Production</span>.
        </div>
      </div>
      <div className="flex justify-start md:justify-center rounded-xl max-w-xs">
        <img src={photo} alt="profilePic" className="sm:w-1/2 md:w-1/2 shadow-lg rounded-2xl " />
      </div>
    </div>
  );
};

export default Main;
