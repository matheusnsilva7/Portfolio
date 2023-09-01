import Data from "./data";
import { useRef, useState } from "react";
import Links from "./Links";
import Classes from "./Projects.module.css";

const Projects = ({ language }) => {
  const data = Data[language].projects;
  const [seeMore, setSeemore] = useState(false);
  const target = useRef();

  return (
    <section ref={target} id="Project" className={Classes.container}>
      <h3>{`${data.name}`}</h3>
      <div className={Classes.projects}>
        {data.projects.map((project, i) => {
          if (i <= 3 || seeMore) {
            return (
              <div key={project.id + i} className={Classes.project}>
                <img
                  className={Classes.img}
                  src={project.img}
                  alt={project.name}
                />
                <h4>{project.name}</h4>
                <div className={Classes.containerImg}>
                  {project.icon.map((e, i) => {
                    return (
                      <img
                        key={i}
                        className={Classes.miniImg}
                        src={e}
                        alt="icon"
                      />
                    );
                  })}
                </div>
                <p>{project.text}</p>
                <div className={Classes.containerLinks}>
                  <Links live={project.link} github={project.github} />
                </div>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
      <button onClick={() => setSeemore((e) => !e)} className={Classes.btn}>
        {seeMore ? "View less" : "View more"}
      </button>
    </section>
  );
};
export default Projects;
