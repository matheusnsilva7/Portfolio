import { useEffect, useRef, useState } from "react";
import Data from "./data";

import Classes from "./About.module.css";

const About = ({ language, sectionObserver }) => {
  const data = Data[language].about;
  const [visible, setVisible] = useState(false);
  const target = useRef();

  useEffect(() => {
    const observer = sectionObserver(
      (e) => e["0"].isIntersecting && setVisible(true)
    );
    if (target.current) observer.observe(target.current);
  }, [target, sectionObserver]);

  return (
    <section
      ref={target}
      id="About"
      className={
        visible ? Classes.container + " " + Classes.show : Classes.container
      }
    >
      <h3>{`<${data.name}>`}</h3>
      <p>{data.about}</p>
      <h3>{`</${data.name}>`}</h3>
    </section>
  );
};

export default About;
