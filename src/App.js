import About from "./components/About";
import { Email } from "./components/Email";
import GetInTouch from "./components/GetInTouch";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Work />
      <GetInTouch />
      <Email />
    </>
  );
}

export default App;
