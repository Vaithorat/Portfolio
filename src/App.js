import About from "./components/About";
import { Email } from "./components/Email";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-[#0a192f] h-full">
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Work />
      <Email />
    </div>
  );
}

export default App;
