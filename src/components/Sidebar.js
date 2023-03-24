import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed bottom-2 left-2 flex flex-col text-[#F6E8EA] text-3xl gap-4">
      <Link
        to="https://github.com/Vaithorat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub className="opacity-30 hover:opacity-100" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/vaibhav-thorat/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin className="opacity-30 hover:opacity-100" />
      </Link>
      <div
        className="ml-3 opacity-30 "
        style={{
          writingMode: "vertical-lr",
          borderLeft: "2px solid [#F6E8EA]  ",
          paddingLeft: "10px",
          height: "50px",
          opacity: "0.5",
        }}
      ></div>
    </div>
  );
};

export default Sidebar;
