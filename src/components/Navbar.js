import React from "react";
import { Link } from "react-scroll";
import { FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { text: "About", to: "about" },
    { text: "Technologies", to: "technologies" },
    { text: "Contact", to: "contact" },
  ];

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1MueAT6fVmV508OBt_dhDh8qrhof5O_qs/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="flex justify-between px-5 py-2 text-[#F6E8EA] items-center shadow-xl flex-col md:flex-row">
      <ul className="flex gap-6 items-center my-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to} smooth={true} duration={500}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={handleResumeDownload}
        className="border-2 px-4 py-1 flex rounded-lg items-center"
      >
        <FaFileDownload className="mr-2" />
        Resume
      </button>
    </div>
  );
};

export default Navbar;
