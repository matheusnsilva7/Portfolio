import Classes from "./Projects.module.css"

const Projects = () => {
    return<section className={Classes.container}>
        <h3>{`<Projects>`}</h3>
        <div className={Classes.projects}>
             <div className={Classes.project}>
             <div className={Classes.img}></div>
                <h4>To do List</h4>
                <p>html javascript</p>
             </div>
             <div className={Classes.project}>
             <div className={Classes.img}></div>
                <h4>To do List</h4>
                <p>html javascript</p>
             </div>
             <div className={Classes.project}>
             <div className={Classes.img}></div>
                <h4>To do List</h4>
                <p>html javascript</p>
             </div>
        </div>
        <h3>{`<Projects>`}</h3>
    </section>
};
export default Projects;
