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
          <span>{data.area}</span>
        </h1>
        <p>{data.information}</p>
        <a href="#Project" className={Classes.btn}>
          {data.btn}
        </a>
      </div>
      <div className={Classes.containerImg}>
        <img className={Classes.img} src={Data.home} alt="code" />
      </div>
    </header>
  );
};

export default Home;
