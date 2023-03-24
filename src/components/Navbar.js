import React from "react";

const Navbar = () => {
  const links = [
    { text: "About", url: "/" },
    { text: "Technologies", url: "/" },
    { text: "Contact", url: "/" },
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
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
      <button
        onClick={handleResumeDownload}
        className="border-2 px-4 py-1 rounded-lg border-"
      >
        Resume
      </button>
    </div>
  );
};

export default Navbar;
