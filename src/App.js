import { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import About from "./components/About";
import { Email } from "./components/Email";
import GetInTouch from "./components/GetInTouch";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center bg-[#0a192f] ">
          <Dna height="100" width="100" />
        </div>
      ) : (
        <>
          <Navbar />
          <Main />
          <About />
          <Skills />
          <Work />
          <GetInTouch />
          <Email />
        </>
      )}
    </>
  );
}

export default App;
