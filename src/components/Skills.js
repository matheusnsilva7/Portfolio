import {useRef} from "react";
import Data from "./data";

import Classes from "./Skills.module.css";

const Skills = () => {
  const target = useRef();

  return (
    <section ref={target} className={Classes.container}>
      <div className={Classes.skills}>
        <div className={Classes.slide}>
          {Data.skills.map((language, i) => {
            return (
              <img
                key={language.id + i}
                src={language.href}
                className={Classes.img}
                alt={language.name}
              />
            );
          })}
          {Data.skills.map((language, i) => {
            return (
              <img
                key={language.id + i}
                src={language.href}
                className={Classes.img}
                alt={language.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
