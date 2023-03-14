import React from "react";

const Navbar = () => {
  const links = [
    { text: "About", url: "/" },
    { text: "Technologies", url: "/" },
    { text: "Contact", url: "/" },
  ];
  const handleResumeDownload = () => {
    // Replace the URL with the URL of your PDF file
    const pdfUrl = "https://drive.google.com/file/d/1MueAT6fVmV508OBt_dhDh8qrhof5O_qs/view?usp=share_link";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
  };
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
          <button onClick={handleResumeDownload} className="border-2 px-4 py-1 rounded-lg border-">Resume</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
