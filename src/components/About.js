import Data from "./data";

import Classes from "./About.module.css";

const About = ({ language }) => {
  const data = Data[language].about;

  return (
    <section id="About" className={Classes.container}>
      <h3>{`<${data.name}>`}</h3>
      <p>{data.about}</p>
      <h3>{`</${data.name}>`}</h3>
    </section>
  );
};

export default About;
