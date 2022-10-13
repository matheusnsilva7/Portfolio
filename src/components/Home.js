import Classes from "./Home.module.css";

const Home = () => {
  return (
    <header className={Classes.container}>
      <div className={Classes.containerTitle}>
        <h1>
          Hello! I'm <span>This person</span>
        </h1>
        <p>
          A <span>Front-End Web Developer</span> passionate about creating
          interactive applications and experiences on the web.
        </p>
        <a href="#Project" className={Classes.btn}>
          PROJECTS
        </a>
      </div>
      <div className={Classes.containerImg}>
        <div className={Classes.img}></div>
      </div>
      <div className={Classes.down}>
        <h5>Scroll Down</h5>
        <svg xmlns="http://www.w3.org/2000/svg" height="17" width="20">
          <path d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z" />
        </svg>
      </div>
    </header>
  );
};

export default Home;
