import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import crypto from "./components/images/2.jfif";
import ai from "./components/images/1.jfif";
import social from "./components/images/3.jfif";
import About from "./components/About";
import GetInTouch from "./components/GetInTouch";
import { Email } from "./components/Email";
import { Dna } from "react-loader-spinner";
import { useEffect, useState } from "react";

const source = [
  {
    name: "crypto",
    github: "https://github.com/Vaithorat/CryptoCurrency-Dashboard",
    imageUrl: crypto,
    deployment: "https://cryptodashboard-alma.netlify.app/",
    intro:
      "A crypto-currency dashboard that shows realtime chart data for cryptocurrencies ",
  },
  {
    name: "ai",
    github: "https://github.com/Vaithorat/AiImageGenerator",
    imageUrl: ai,
    deployment: "https://dalleimggen.netlify.app/",
    intro:
      "A Dall-E Api based image generator that either generates a random prompt or takes prompt from user to generate images",
  },
  {
    name: "social",
    github: "https://github.com/Vaithorat/SocialMediaApp",
    imageUrl: social,
    deployment: "https://retrogramsocial.netlify.app/",
    intro:
      "A social media app that allows user to register/login, post images and add friends",
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App bg-[#131022] h-full flex">
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <Dna visible={true} height="120" width="120" ariaLabel="dna-loading" />
        </div>
      ) : (
        <>
          <div>
            <Sidebar />
          </div>
          <div className="w-full">
            <Navbar />
            <Main />
            <About />
            <div className="flex flex-wrap justify-center gap-12 md:justify-center">
              {source.map((item) => (
                <Projects
                  key={item.name}
                  src={item.name}
                  imageUrl={item.imageUrl}
                  intro={item.intro}
                  github={item.github}
                  deployment={item.deployment}
                />
              ))}
            </div>

            <GetInTouch />
            <Email />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
