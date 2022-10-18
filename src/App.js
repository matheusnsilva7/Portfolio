import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  const [language, setLanguage] = useState("ENG");

  const changeLanguage = (Language) => {
    setLanguage(Language);
  };

  return (
    <div className="App">
      <NavBar onchangeLanguage={changeLanguage} />
      <Home language={language} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </div>
  );
}

export default App;
