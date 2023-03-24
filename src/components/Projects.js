import React from "react";
import { Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center">
      <div className="flex-col justify-center gap-6 my-16 w-full md:w-[25vw] font-mono text-sm text-[#F6E8EA] mx-4">
        <div className="max-w-3xl w-full px-4 sm:px-8 md:px-0">
          <img
            src={props.imageUrl}
            alt={props.name}
            className="rounded-xl hover:w-full md:hover:w-[30vw]"
          />
        </div>
        <div className="mt-2">{props.intro}</div>
        <div className="flex justify-around mt-4 mx-8 md:mx-0 gap-8">
          <div className="border-2 p-2 rounded-xl w-full hover:bg-[#191629]">
            <Link
              to={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center text-sm"
            >
              Github
            </Link>
          </div>
          <div className="border-2 p-2 rounded-xl w-full hover:bg-[#191629]">
            <Link
              to={props.deployment}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center text-sm"
            >
              Deployment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
