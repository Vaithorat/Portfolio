import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const About = () => {
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [languagesVisible, setLanguagesVisible] = useState(false);
  const [librariesVisible, setLibrariesVisible] = useState(false);
  const [frameworksVisible, setFrameworksVisible] = useState(false);
  const [databaseVisible, setDatabaseVisible] = useState(false);

  const toggleLanguagesVisible = () => {
    setLanguagesVisible(!languagesVisible);
  };

  const toggleLibrariesVisible = () => {
    setLibrariesVisible(!librariesVisible);
  };

  const toggleFrameworksVisible = () => {
    setFrameworksVisible(!frameworksVisible);
  };

  const toggleDatabaseVisible = () => {
    setDatabaseVisible(!databaseVisible);
  };
  const toggleShowTechnologies = () => {
    setShowTechnologies(!showTechnologies);
  };
  return (
    <div className="flex-col flex items-center justify-center mt-8 sm:mt-12 text-[#F6E8EA]">
      <div className="flex items-center flex-col sm:flex-row">
        <div className="text-4xl my-4 sm:my-12 sm:ml-[34vw] sm:w-auto md:w-auto">
          ABOUT ME
        </div>
        <div className="container flex justify-center items-center ">
          <div className="text-container w-3/4 rounded-lg">
            <p className="subtitle text-lg font-mono text-justify w-full sm:w-8/12">
              Hi, I'm Vaibhav, a web developer with a year of experience. I
              started with{" "}
              <span className="text-green-400">The Odin Project </span> and
              later enrolled in{" "}
              <span className="text-green-400">
                Almabetter's Fullstack bootcamp{" "}
              </span>{" "}
              to build projects and improve my skills. In 2018, I started
              working as a Production Manager where I gained experience in SEO,
              content management, team building, and team management.
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={toggleShowTechnologies}
        onMouseEnter={toggleShowTechnologies}
        onTouchStart={toggleShowTechnologies}
        onTouchEnd={toggleShowTechnologies}
        className="flex flex-col justify-center items-center sm:items-start md:items-start text-3xl px-4 font-bold mt-8 sm:mt-[12vh] cursor-pointer transition duration-1000 ease-in-out hover:text-blue-500"
      > 
        Here are the technologies that I worked with
      </div>
      {showTechnologies && (
        <ul className="flex flex-col sm:flex-row justify-center gap-[4vw] text-lg items-start sm:items-start md:items-start">
          <div className="flex-col gap-2 flex sm:items-center">
            <div
              className="text-2xl font-bold mt-8 sm:mt-[12vh] mb-4 sm:mb-8 cursor-pointer hover:text-blue-500 transition duration-1000 ease-in-out"
              onMouseOver={toggleLanguagesVisible}
              onTouchStart={toggleLanguagesVisible}
              onTouchEnd={toggleLanguagesVisible}
            >
              Languages
            </div>
            <CSSTransition
              in={languagesVisible}
              classNames="dropdown"
              timeout={300}
              unmountOnExit
            >
              <ul className="flex flex-col justify-center text-lg mt-2 items-center sm:items-start md:items-start">
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </CSSTransition>
          </div>
          <div className="flex-col gap-2 flex sm:items-center">
            <div
              className="text-2xl font-bold mt-8 sm:mt-[12vh] mb-4 sm:mb-8  cursor-pointer hover:text-blue-500 transition duration-1000 ease-in-out"
              onMouseOver={toggleLibrariesVisible}
              onTouchStart={toggleLibrariesVisible}
              onTouchEnd={toggleLibrariesVisible}
            >
              Libraries
            </div>

            <CSSTransition
              in={librariesVisible}
              classNames="dropdown"
              timeout={300}
              unmountOnExit
            >
              <ul className="flex flex-col justify-center text-lg mt-2 items-center sm:items-start md:items-start">
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>ReactJs</li>
                <li>Redux</li>
              </ul>
            </CSSTransition>
          </div>
          <div className="flex-col gap-2 flex sm:items-center">
            <div
              className="text-2xl font-bold mt-8 sm:mt-[12vh] mb-4 sm:mb-8 cursor-pointer hover:text-blue-500 transition duration-1000 ease-in-out"
              onMouseOver={toggleFrameworksVisible}
              onTouchStart={toggleFrameworksVisible}
              onTouchEnd={toggleFrameworksVisible}
            >
              Frameworks
            </div>
            
            <CSSTransition
              in={frameworksVisible}
              classNames="dropdown"
              timeout={300}
              unmountOnExit
            >
              <ul className="flex flex-col justify-center text-lg mt-2 items-center sm:items-start md:items-start">
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </CSSTransition>
          </div>
          <div className="flex-col gap-2 flex sm:items-center">
            <div
              className="text-2xl font-bold mt-8 sm:mt-[12vh] mb-4 sm:mb-8 cursor-pointer hover:text-blue-500 transition duration-1000 ease-in-out"
              onTouchStart={toggleDatabaseVisible}
              onTouchEnd={toggleDatabaseVisible}
              onMouseOver={toggleDatabaseVisible}
            >
              Database
            </div>
              <CSSTransition
                in={databaseVisible}
                classNames="dropdown"
                timeout={300}
                unmountOnExit
              >
                <ul className="flex flex-col justify-center text-lg mt-2 items-center sm:items-start md:items-start">
                  <li>MySQL</li>
                  <li>MongoDB</li>
                </ul>
              </CSSTransition>
            </div>
        </ul>
      )}
      <div className="text-4xl flex px-4 justify-center mt-8 sm:mt-[15vh] font-bold">
        Here's Some of My Work
      </div>
    </div>
  );
};

export default About;
