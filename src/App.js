import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

function App() {
  const [language, setLanguage] = useState("ENG");

  const sectionObserver = (callback) => {
    return new IntersectionObserver(callback, options);
  };

  const changeLanguage = (Language) => {
    setLanguage(Language);
  };

  return (
    <div className="App">
      <NavBar onchangeLanguage={changeLanguage} />
      <Home language={language} />
      <About language={language} sectionObserver={sectionObserver} />
      <Skills language={language} sectionObserver={sectionObserver} />
      <Projects language={language} sectionObserver={sectionObserver} />
      <Contact language={language} sectionObserver={sectionObserver} />
    </div>
  );
}

export default App;
