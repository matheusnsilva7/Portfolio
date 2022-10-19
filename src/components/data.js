import HTMl from "../img/Html.png";
import CSS from "../img/Css.png";
import sass from "../img/Sass.png";
import Js from "../img/JavaScript.png";
import r from "../img/react.png";
import Next from "../img/NextJs.png";

import maisUmCode from "../img/Projectmaisumcode.png";
import weeklyPlanning from "../img/weeklyplanning.png";
import travel from "../img/travelwebsite.png";
import Form from "../img/Form.png";
import todoList from "../img/todoList.png";

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
          text: "Final project from MaisUmCode, using HTML | CSS | JavaScript",
          img: maisUmCode,
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
        {
          id: 2,
          name: "Weekly Planning",
          text: "Weekly planning that allows you to add, remove, drag and drop events in your week, using HTML | SASS | JavaScript",
          img: weeklyPlanning,
          link: "https://weeklyplanning-matheusnsilva7.netlify.app/",
        },
        {
          id: 3,
          name: "Travel",
          text: "travel website, using HTML | SASS | JavaScript",
          img: travel,
          link: "https://travel-matheusnsilva7.netlify.app/",
        },
        {
          id: 4,
          name: "Form",
          text: "Form with a login, create and change password page, using React | Redux",
          img: Form,
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
        {
          id: 5,
          name: "To Do List",
          text: "weekly to-do list with a page with all the tasks for the week and other page showing the tasks you've done and the ones you need to do, using NextJs",
          img: todoList,
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
      ],
    },
    contact: {
      name: "contact",
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      links: [
        {
          id: 1,
          name: "LinkedIn",
          profile: "matheus7",
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
        {
          id: 1,
          name: "Github",
          profile: "matheus7",
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
      ],
    },
  },
  POR: {
    nav: [
      { id: 1, name: "Home", href: "#Home" },
      { id: 2, name: "Sobre", href: "#About" },
      { id: 3, name: "Projetos", href: "#Project" },
      { id: 3, name: "Contato", href: "#Contact" },
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
          name: "Projeto Final",
          text: "Projeto final do MaisUmCode, em HTML | CSS | JavaScript",
          img: maisUmCode,
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
        {
          id: 2,
          name: "Planejamento semanal",
          text: "Planejamento semanal que permite adicionar, remover, arrastar e soltar eventos em sua semana, usando HTML | SASS | JavaScript",
          img: weeklyPlanning,
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
        {
          id: 3,
          name: "Site de viagens",
          text: "site de viagens, usando HTML | SASS | JavaScript",
          img: travel,
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
        {
          id: 4,
          name: "Formulário",
          text: "form with a login, create and change password page, usando React | Redux",
          img: Form,
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
        {
          id: 5,
          name: "Lista De Afazeres",
          text: "lista de tarefas semanais com uma página com todas as tarefas da semana e outras páginas mostrando as tarefas que você fez e as que você precisa fazer, usando NextJs",
          img: todoList,
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
      ],
    },
    contact: {
      name: "Contato",
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      links: [
        {
          id: 1,
          name: "LinkedIn",
          profile: "matheus7",
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
        {
          id: 1,
          name: "Github",
          profile: "matheus7",
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
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
