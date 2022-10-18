import HTMl from "../img/Html.png";
import CSS from "../img/Css.png";
import sass from "../img/Sass.png";
import Js from "../img/JavaScript.png";
import r from "../img/react.png";
import Next from "../img/NextJs.png";

import maisUmCode from "../img/Projectmaisumcode.png";

const Data = {
  ENG: {
    nav: [
      { id: 1, name: "Home", href: "#Home" },
      { id: 2, name: "About", href: "#About" },
      { id: 3, name: "Project", href: "#Project" },
      { id: 3, name: "Contact", href: "#Contact" },
    ],
    home: {
      introduction: "Hello! I'm ",
      name: "Matheus Nascimento",
      area: "Front-End Web Developer",
      information:
        "passionate about creating interactive applications and experiences on the web.",
      scroll: "Scroll Down",
      btn: "PROJECTS",
    },
    about: {
      name: "About",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    projects: {
      name: "Projects",
      projects: [
        {
          id: 1,
          name: "Final project",
          text: "this is the final project for MaisUmCode",
          img: maisUmCode,
        },
      ],
    },
  },
  POR: {
    nav: [
      { id: 1, name: "Home", href: "#Home" },
      { id: 2, name: "Sobre", href: "#Sobre" },
      { id: 3, name: "Projetos", href: "#Projetos" },
      { id: 3, name: "Contato", href: "#Contato" },
    ],
    home: {
      introduction: "Olá, eu sou ",
      name: "Matheus Nascimento",
      area: "Front-End Web Developer",
      information:
        "apaixonado por criar aplicativos e experiências interativas na web.",
      scroll: "Scroll Down",
      btn: "PROJETOS",
    },
    about: {
      name: "Sobre",
      about:
        "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, essencialmente inalterada. Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos.",
    },
    projects: {
      name: "Projetos",
      projects: [
        {
          id: 1,
          name: "Final project",
          text: "this is the final project for MaisUmCode",
          img: maisUmCode,
        },
      ],
    },
  },
  skills: [
    { id: 1, name: "HTML", href: HTMl },
    { id: 2, name: "CSS", href: CSS },
    { id: 3, name: "SASS", href: sass },
    { id: 4, name: "JavaScript", href: Js },
    { id: 5, name: "React", href: r },
    { id: 6, name: "NextJs", href: Next },
  ],
};

export default Data;
