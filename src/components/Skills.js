import { useEffect, useRef, useState } from "react";
import Data from "./data";

import Classes from "./Skills.module.css";

const Skills = ({ sectionObserver }) => {
  const [visible, setVisible] = useState(false);
  const target = useRef();

  useEffect(() => {
    const observer = sectionObserver(
      (e) => e["0"].isIntersecting && setVisible(true)
    );
    if (target.current) observer.observe(target.current);
  }, [target , sectionObserver]);

  return (
    <section
      ref={target}
      className={
        visible ? Classes.container + " " + Classes.show : Classes.container
      }
    >
      <h3>{`<Skills>`}</h3>
      <div className={Classes.skills}>
        {Data.skills.map((language, i) => {
          return (
            <div key={language.id + i} className={Classes.language}>
              <img src={language.href} alt={language.name} />
              <h4>{language.name}</h4>
            </div>
          );
        })}
      </div>
      <h3>{`</Skills>`}</h3>
    </section>
  );
};

export default Skills;
