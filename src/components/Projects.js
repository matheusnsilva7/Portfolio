import Data from "./data";
import Classes from "./Projects.module.css";

const Projects = ({ language }) => {
  const data = Data[language].projects;

  return (
    <section id="Project" className={Classes.container}>
      <h3>{`<${data.name}>`}</h3>
      <div className={Classes.projects}>
        {data.projects.map((project, i) => {
          return (
            <div className={Classes.project}>
              <img
                className={Classes.img}
                src={project.img}
                alt={project.name}
              />
              <h4>{project.name}</h4>
              <p>{project.text}</p>
            </div>
          );
        })}
      </div>
      <h3>{`</${data.name}>`}</h3>
    </section>
  );
};
export default Projects;
