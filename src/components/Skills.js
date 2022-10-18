import Data from "./data";

import Classes from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={Classes.container}>
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
