import HTMl from "../img/Html.png";
import CSS from "../img/Css.png";
import sass from "../img/Sass.png";
import Js from "../img/JavaScript.png";
import r from "../img/react.png";
import Next from "../img/NextJs.png";
import code from "../img/code.jpg";
import typeScript from "../img/TypeScript.png";

import maisUmCode from "../img/Projectmaisumcode.png";
import weeklyPlanning from "../img/weeklyplanning.png";
import travel from "../img/travelwebsite.png";
import Form from "../img/Form.png";
import todoList from "../img/todoList.png";
import lemonade from "../img/Lemonade.png";

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
        "I'm a self-taught front-end web developer passionate about creating interactive applications and experiences on the web. I started learning about web developer after some friends of mine recommended me, at the time I didn't even know what a web developer was. After some research, I really got interested about it, and with the help of my friends and a mentor I started to learn about front-end web developers. Since then, I try to learn and specialize more every day.",
    },
    projects: {
      name: "Projects",
      projects: [
        {
          id: 1,
          name: "Lemonade Stand",
          text: "Projeto final do MaisUmCode, em HTML | CSS | JavaScript",
          img: lemonade,
          link: "https://lemonadestand-matheusnsilva7.netlify.app/",
        },
        {
          id: 2,
          name: "Final project",
          text: "Final project from MaisUmCode, using HTML | CSS | JavaScript",
          img: maisUmCode,
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
        {
          id: 3,
          name: "Form",
          text: "Form with a login, create and change password page, using React | Redux",
          img: Form,
          link: "https://form-matheusnsilva7.netlify.app",
        },
        {
          id: 4,
          name: "Weekly Planning",
          text: "Weekly planning that allows you to add, remove, drag and drop events in your week, using HTML | SASS | JavaScript",
          img: weeklyPlanning,
          link: "https://weeklyplanning-matheusnsilva7.netlify.app",
        },
        {
          id: 5,
          name: "Travel",
          text: "travel website, using HTML | SASS | JavaScript",
          img: travel,
          link: "https://travel-matheusnsilva7.netlify.app/",
        },
        {
          id: 6,
          name: "To Do List",
          text: "weekly to-do list with a page with all the tasks for the week and other page showing the tasks you've done and the ones you need to do, using NextJs",
          img: todoList,
          link: "https://todolist-matheusnsilva7.netlify.app/",
        },
      ],
    },
    contact: {
      name: "contact",
      note: "Thank you very much for visiting my portfolio website, i hope you enjoyed it, if there is any improvement suggestion please let me know through my LinkedId.",
      links: [
        {
          id: 1,
          name: "LinkedIn",
          profile: "matheus-nascimento7",
          link: "https://www.linkedin.com/in/matheus-nascimento7/",
        },
        {
          id: 1,
          name: "Github",
          profile: "matheusnsilva7",
          link: "https://github.com/matheusnsilva7",
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
        "Sou um desenvolvedor web front-end apaixonado por criar aplicativos e experiências interativas na web. Comecei a aprender sobre desenvolvedor web depois que alguns amigos meus me recomendaram, na época eu nem sabia o que era um desenvolvedor web. Depois de algumas pesquisas, eu realmente me interessei muito pela área, e com a ajuda de meus amigos e um mentor comecei a aprender sobre desenvolvedores web front-end. Desde então, tento aprender e me especializar cada dia mais.",
    },
    projects: {
      name: "Projetos",
      projects: [
        {
          id: 1,
          name: "Lemonade Stand",
          text: "Projeto final do MaisUmCode, em HTML | CSS | JavaScript",
          img: lemonade,
          link: "https://lemonadestand-matheusnsilva7.netlify.app/",
        },
        {
          id: 2,
          name: "Projeto Final",
          text: "Projeto final do MaisUmCode, em HTML | CSS | JavaScript",
          img: maisUmCode,
          link: "https://matheusnsilva7.github.io/projeto-final-maisumcode/",
        },
        {
          id: 3,
          name: "Formulário",
          text: "form with a login, create and change password page, usando React | Redux",
          img: Form,
          link: "https://form-matheusnsilva7.netlify.app",
        },
        {
          id: 4,
          name: "Planejamento semanal",
          text: "Planejamento semanal que permite adicionar, remover, arrastar e soltar eventos em sua semana, usando HTML | SASS | JavaScript",
          img: weeklyPlanning,
          link: "https://weeklyplanning-matheusnsilva7.netlify.app",
        },
        {
          id: 5,
          name: "Site de viagens",
          text: "site de viagens, usando HTML | SASS | JavaScript",
          img: travel,
          link: "https://travel-matheusnsilva7.netlify.app/",
        },

        {
          id: 6,
          name: "Lista De Afazeres",
          text: "lista de tarefas semanais com uma página com todas as tarefas da semana e outras páginas mostrando as tarefas que você fez e as que você precisa fazer, usando NextJs",
          img: todoList,
          link: "https://todolist-matheusnsilva7.netlify.app/",
        },
      ],
    },
    contact: {
      name: "Contato",
      note: "Muito obrigado por visitar o site do meu portfólio, espero que tenha gostado, se houver alguma sugestão de melhoria, por favor me avise através do meu LinkedId.",
      links: [
        {
          id: 1,
          name: "LinkedIn",
          profile: "matheus-nascimento7",
          link: "https://www.linkedin.com/in/matheus-nascimento7/",
        },
        {
          id: 1,
          name: "Github",
          profile: "matheusnsilva7",
          link: "https://github.com/matheusnsilva7",
        },
      ],
    },
  },
  home: code,
  skills: [
    { id: 1, name: "HTML", href: HTMl },
    { id: 2, name: "CSS", href: CSS },
    { id: 3, name: "SASS", href: sass },
    { id: 4, name: "JavaScript", href: Js },
    { id: 5, name: "React", href: r },
    { id: 6, name: "NextJs", href: Next },
    { id: 7, name: "TypeScript", href: typeScript },
  ],
};

export default Data;
