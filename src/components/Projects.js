import React from "react";
import { Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <div>
      <div className="flex-col justify-center gap-6 my-16 w-[25vw] font-mono text-sm text-[#F6E8EA] ">
        <img src={props.imageUrl} alt={props.name} className=" rounded-xl hover:w-[30vw]" />
        <div className="mt-2 ">{props.intro}</div>
        <div className="flex justify-around mt-4 mx-8 gap-8">
          <div className="border-2 p-2 rounded-xl w-full hover:bg-[#191629]">
            <Link to={props.github} target="_blank" rel="noopener noreferrer" className="flex justify-center ">
              Github
            </Link>
          </div>
          <div className="border-2 p-2 rounded-xl w-full hover:bg-[#191629]">
            <Link to={props.deployment} target="_blank" rel="noopener noreferrer"  className="flex justify-center">
              Deployment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
