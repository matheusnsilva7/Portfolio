import Data from "./data";
import { useEffect, useRef, useState } from "react";
import Classes from "./Projects.module.css";

const Projects = ({ language, sectionObserver }) => {
  const data = Data[language].projects;
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
      id="Project"
      className={
        visible ? Classes.container + " " + Classes.show : Classes.container
      }
    >
      <h3>{`<${data.name}>`}</h3>
      <div className={Classes.projects}>
        {data.projects.map((project, i) => {
          return (
            <a
              key={project.id + i}
              className={Classes.project}
              rel="noopener noreferrer"
              href={project.link}
              target="_blank"
            >
              <img
                className={Classes.img}
                src={project.img}
                alt={project.name}
              />
              <h4>{project.name}</h4>
              <p>{project.text}</p>
            </a>
          );
        })}
      </div>
      <h3>{`</${data.name}>`}</h3>
    </section>
  );
};
export default Projects;
