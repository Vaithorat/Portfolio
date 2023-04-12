import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4  border-[#3D9239]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Vaibhav Thorat. Thank you for taking time out to visit my
              portfolio.
            </p>
          </div>
          <div className="text-start">
            <p>
              I am a fullstack web developer with a year of experience. I
              graduated from Government College of Engineering, Aurangabad, with
              a degree in Electronics and Telecommunications Engineering.
            </p>
            <p>
              Along my career path, I worked as a Production Manager where I
              gained valuable experience in SEO, content management, team
              building, and team management.
            </p>

            <p>
              Later, I developed an interest in Web Development and started
              learning through online resources like The Odin Project. To
              further enhance my skills and build real-world projects, I worked
              as an intern at Almabetter. As a result, I have gained expertise
              in front-end technologies like HTML, CSS, JavaScript, React as
              well as back-end technologies like Node.js and MongoDB. I'm always
              keen to learn and implement new technologies to create efficient
              and elegant web solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
