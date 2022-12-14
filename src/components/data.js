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
import Form from "../img/Form.png";
import todoList from "../img/todoList.png";
import lemonade from "../img/Lemonade.png";
import recipes from "../img/recipes.png";

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
          name: "Recipes",
          text: "Project that allow you to search and mark your favorite recipes,and also have a place for you to put your recipes, using Nextjs | TypeScript",
          img: recipes,
          link: "https://recipes-matheusnsilva7.netlify.app/",
        },
        {
          id: 2,
          name: "Lemonade Stand",
          text: "Lemonade stand project, with a menu, store, and pickup order page, using Nextjs | TypeScript",
          img: lemonade,
          link: "https://lemonadestand-matheusnsilva7.netlify.app/",
        },
        {
          id: 3,
          name: "Final project",
          text: "Final project from MaisUmCode, using HTML | CSS | JavaScript",
          img: maisUmCode,
          link: "https://matheusnsilva7.github.io/Final-project-MaisUmCode/",
        },
        {
          id: 4,
          name: "Form",
          text: "Form with a login, create and change password page, using React | Redux",
          img: Form,
          link: "https://form-matheusnsilva7.netlify.app",
        },
        {
          id: 5,
          name: "Weekly Planning",
          text: "Weekly planning that allows you to add, remove, drag and drop events in your week, using HTML | SASS | JavaScript",
          img: weeklyPlanning,
          link: "https://weeklyplanning-matheusnsilva7.netlify.app",
        },
        {
          id: 6,
          name: "To Do List",
          text: "Weekly to-do list with a page with all the tasks for the week and other page showing the tasks you've done and the ones you need to do, using NextJs",
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
      introduction: "Ol??, eu sou ",
      name: "Matheus Nascimento",
      area: "Front-End Web Developer",
      information:
        "apaixonado por criar aplicativos e experi??ncias interativas na web.",
      scroll: "Scroll Down",
      btn: "PROJETOS",
    },
    about: {
      name: "Sobre",
      about:
        "Sou um desenvolvedor web front-end apaixonado por criar aplicativos e experi??ncias interativas na web. Comecei a aprender sobre desenvolvedor web depois que alguns amigos meus me recomendaram, na ??poca eu nem sabia o que era um desenvolvedor web. Depois de algumas pesquisas, eu realmente me interessei muito pela ??rea, e com a ajuda de meus amigos e um mentor comecei a aprender sobre desenvolvedores web front-end. Desde ent??o, tento aprender e me especializar cada dia mais.",
    },
    projects: {
      name: "Projetos",
      projects: [
        {
          id: 1,
          name: "Recipes",
          text: "Projeto que permite pesquisar e marcar suas receitas favoritas, al??m de ter um local para voc?? colocar suas receitas, usando o Nextjs | TypeScript",
          img: recipes,
          link: "https://recipes-matheusnsilva7.netlify.app/",
        },
        {
          id: 2,
          name: "Lemonade Stand",
          text: "Projeto de barraca de limonada, com card??pio, loja e p??gina de pedido de retirada, utilizando Nextjs | TypeScript",
          img: lemonade,
          link: "https://lemonadestand-matheusnsilva7.netlify.app/",
        },
        {
          id: 3,
          name: "Projeto Final",
          text: "Projeto final do MaisUmCode, em HTML | CSS | JavaScript",
          img: maisUmCode,
          link: "https://matheusnsilva7.github.io/Final-project-MaisUmCode/",
        },
        {
          id: 4,
          name: "Formul??rio",
          text: "Form with a login, create and change password page, usando React | Redux",
          img: Form,
          link: "https://form-matheusnsilva7.netlify.app",
        },
        {
          id: 5,
          name: "Planejamento semanal",
          text: "Planejamento semanal que permite adicionar, remover, arrastar e soltar eventos em sua semana, usando HTML | SASS | JavaScript",
          img: weeklyPlanning,
          link: "https://weeklyplanning-matheusnsilva7.netlify.app",
        },
        {
          id: 6,
          name: "Lista De Afazeres",
          text: "Lista de tarefas semanais com uma p??gina com todas as tarefas da semana e outras p??ginas mostrando as tarefas que voc?? fez e as que voc?? precisa fazer, usando NextJs",
          img: todoList,
          link: "https://todolist-matheusnsilva7.netlify.app/",
        },
      ],
    },
    contact: {
      name: "Contato",
      note: "Muito obrigado por visitar o site do meu portf??lio, espero que tenha gostado, se houver alguma sugest??o de melhoria, por favor me avise atrav??s do meu LinkedId.",
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
