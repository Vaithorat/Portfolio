import React from "react";

const Navbar = () => {
  const links = [
    { text: "About", url: "/" },
    { text: "Technologies", url: "/" },
    { text: "Contact", url: "/" },
  ];
  return (
    <div className="flex justify-end px-5 py-2 text-[#F6E8EA] items-center shadow-xl">
      <ul>
        <div className="flex gap-6 items-center my-3">
          <li className="flex gap-6">
            {links.map((link, index) => (
              <a key={index} href="link.url">
                {`• ${link.text}`}
              </a>
            ))}
          </li>
          <button className="border-2 px-4 py-1 rounded-lg border-">Resume</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
