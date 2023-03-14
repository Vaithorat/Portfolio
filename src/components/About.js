import React from "react";

const About = () => {
  
  const text =
    "Hi, I'm Vaibhav, a web developer with a year of experience. I started with The Odin Project and later enrolled in Almabetter's Fullstack bootcamp to build projects and improve my skills. Despite CSS being commonly disliked, it's my favorite. In 2020, I founded my own production house where I gained experience in SEO, content management, team building, and team management.";
  return (
    <div className="flex-col flex items-center justify-center mt-12 text-[#F6E8EA]">
      <div className="flex items-center">
        <div className="text-4xl my-12 w-8 ml-[34vw]">ABOUT ME</div>
        <div className="container flex justify-center items-center ">
          <div className="text-container w-3/4 rounded-lg">
            <p className="subtitle text-lg font-mono text-justify w-8/12">
              {text.split("").map((char, index) => (
                <span key={index} className="hover:text-green-500">
                  {char}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold mt-[12vh] mb-8">
        Here are the technologies that I worked with
      </div>
      <ul className="flex justify-center gap-[4vw] text-lg mt-2 items-start">
        <div className="flex-col gap-2 flex">
          <div className="font-bold ">Languages</div>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
        </div>
        <div className="flex-col gap-2 flex">
          <div className="font-bold">Libraries</div>
          <li>Tailwind</li>
          <li>BootStrap</li>
          <li>ReactJs</li>
          <li>Redux</li>
        </div>
        <div className="flex-col gap-2 flex">
          <div className="font-bold">Frameworks</div>
          <li>Node.js</li>
          <li>Express.js</li>
        </div>
        <div className="flex-col gap-2 flex">
          <div className="font-bold">Database</div>
          <li>MySQL</li>
          <li>MongoDB</li>
        </div>
      </ul>
      <div className=" text-4xl flex justify-center mt-[15vh]">
        Here's Some of My Work
      </div>
    </div>
  );
};

export default About;
