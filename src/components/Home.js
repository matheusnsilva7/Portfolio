import Data from "./data";

import Classes from "./Home.module.css";

const Home = ({ language }) => {
  const data = Data[language].home;

  return (
    <header id="Home" className={Classes.container}>
      <div className={Classes.containerTitle}>
        <h1>
          {data.introduction}
          <br />
          <span>{data.name}</span>
        </h1>
        <p>
          <span>{data.area}</span> {data.information}
        </p>
        <a href="#Project" className={Classes.btn}>
          {data.btn}
        </a>
      </div>
      <div className={Classes.containerImg}>
        <img className={Classes.img} src={Data.home} alt="code" />
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
