import Classes from "./Skills.module.css";
import HTMl from "../img/Html.png";
import CSS from "../img/Css.png";
import Js from "../img/JavaScript.png";
import sass from "../img/Sass.png";
import r from "../img/react.png";
import Next from "../img/NextJs.png";

const Skills = () => {
  return (
    <section className={Classes.container}>
      <h3>{`<Skills>`}</h3>
      <div className={Classes.skills}>
        <div className={Classes.language}>
          <img src={HTMl} alt="HTML" />
          <h4>HTML</h4>
        </div>
        <div className={Classes.language}>
          <img src={CSS} alt="CSS" />
          <h4>CSS</h4>
        </div>
        <div className={Classes.language + " " + Classes.sass}>
          <img src={sass} alt="JS" />
          <h4>Sass</h4>
        </div>
        <div className={Classes.language}>
          <img src={Js} alt="JS" />
          <h4>JavaScript</h4>
        </div>
        <div className={Classes.language}>
          <img src={r} alt="JS" />
          <h4>React</h4>
        </div>
        <div className={Classes.language}>
          <img src={Next} alt="JS" />
          <h4>NextJS</h4>
        </div>
      </div>
      <h3>{`</Skills>`}</h3>
    </section>
  );
};

export default Skills;
