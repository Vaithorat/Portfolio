import React from "react";
const photo = require("./images/photo.jpg");
const Main = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[20vh]">
        <div className="flex-col flex gap-4 w-[40%]  text-[#F6E8EA]">
          <div className="text-lg font-mono">Hello There, I am</div>
          <div className="text-4xl font-serif">Vaibhav Thorat.</div>
          <div className="text-xl w-[35vw] font-mono">
            I am a Fullstack Web Developer with MERN Stack. Currently residing
            in Amravati, Maharashtra. I am currently working as a Production
            Manager at JH Film Production.
          </div>
          <div></div>
        </div>
        <div className="w-[30%] flex justify-start bg-[#242038]">
          <img src={photo} alt="profilePic" className=" w-[8vw] rounded-2xl shadow-2xl" />
        </div>
      </div>
 
    </>
  );
};

export default Main;
