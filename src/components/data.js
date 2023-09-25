import HTMl from "../img/Html.png";
import CSS from "../img/Css.png";
import sass from "../img/Sass.png";
import Js from "../img/JavaScript.png";
import r from "../img/react.png";
import Next from "../img/NextJs.png";
import code from "../img/code.jpg";
import typeScript from "../img/TypeScript.png";
import nodejs from "../img/nodejs.png";
import pug from "../img/pug.png";
import mongodb from "../img/mongodb.png";

import Travel from "../img/travelwebsite.png";
import management from "../img/management.png";
import weeklyPlanning from "../img/weeklyplanning.png";
import Form from "../img/Form.png";
import todoList from "../img/todoList.png";
import lemonade from "../img/Lemonade.png";
import recipes from "../img/recipes.png";

const Data = {
  ENG: {
    nav: [
      { id: 1, name: "Home", href: "#Home" },
      { id: 2, name: "Project", href: "#Project" },
      { id: 3, name: "Contact", href: "#Contact" },
    ],
    home: {
      introduction: "Hello! I'm Matheus",
      area: "Full Stack Developer",
      information:
        "I'm a BYUI Software Development student, passionate about creating interactive applications and experiences on the web.",
      btn: "My Projects",
    },
    projects: {
      name: "Projects",
      projects: [
        {
          id: 3,
          name: "Management",
          text: "The Project Management Website offers a complete solution for organizing projects, tasks, and users. From user authentication to task status tracking, this application covers all aspects of effective project management.",
          img: management,
          link: "https://project-management-smoky.vercel.app/",
          github: "https://github.com/matheusnsilva7/Project-management",
          icon: [nodejs, pug, mongodb],
        },
        {
          id: 1,
          name: "Recipes",
          text: "The Favorite Recipes App is a convenient way to keep track of your preferred recipes. It allows you to search for recipes, save your favorites, and view detailed information about each recipe.",
          img: recipes,
          link: "https://recipes-matheusnsilva7.netlify.app/",
          github: "https://github.com/matheusnsilva7/Recipe",
          icon: [typeScript, Next],
        },
        {
          id: 2,
          name: "Lemonade",
          text: "Lemonade Stand Store is a delightful web application that allows customers to explore a range of lemonade flavors, find nearby store locations, and place orders for quick pickups. The user-friendly interface ensures a seamless experience for both customers and store owners.",
          img: lemonade,
          link: "https://lemonadestand-matheusnsilva7.netlify.app/",
          github: "https://github.com/matheusnsilva7/Lemonade",
          icon: [typeScript, Next],
        },
        {
          id: 6,
          name: "To Do List",
          text: "The Weekly To-Do List app is designed to assist you in efficiently managing your tasks throughout the week. With features like task tracking, a weekly overview, and progress visualization, staying on top of your to-do list has never been easier.",
          img: todoList,
          link: "https://todolist-matheusnsilva7.netlify.app/",
          github: "https://github.com/matheusnsilva7/Todo-List",
          icon: [Next],
        },
        {
          id: 4,
          name: "Form",
          text: "Simple authentication form with login, account creation, and password recovery pages using React and Redux. This project demonstrates how to create a form that enables users to log in through local storage.",
          img: Form,
          link: "https://form-matheusnsilva7.netlify.app",
          github: "https://github.com/matheusnsilva7/Form",
          icon: [r],
        },
        {
          id: 5,
          name: "Weekly Planning",
          text: "Organize your week efficiently with the Week Planning Website. This single-page application allows you to create, edit, and arrange tasks using a drag-and-drop interface.",
          img: weeklyPlanning,
          link: "https://weeklyplanning-matheusnsilva7.netlify.app",
          github: "https://github.com/matheusnsilva7/weekly-planning",
          icon: [HTMl, sass, Js],
        },
        {
          id: 7,
          name: "Travel",
          text: "Welcome to the Travel Website! This simple website showcases various travel destinations, providing a glimpse of the places you can explore.",
          img: Travel,
          link: "https://travel-matheusnsilva7.netlify.app/",
          github: "https://github.com/matheusnsilva7/Travel",
          icon: [HTMl, sass, Js],
        },
      ],
    },
    contact: {
      name: "contact",
      note: "Thank you very much for visiting my portfolio website, i hope you enjoyed it, if there is any improvement suggestion please let me know through my LinkedIn.",
    },
  },
  POR: {
    nav: [
      { id: 1, name: "Home", href: "#Home" },
      { id: 2, name: "Projetos", href: "#Project" },
      { id: 3, name: "Contato", href: "#Contact" },
    ],
    home: {
      introduction: "Olá, eu sou Matheus ",
      area: "Desenvolvedor Full Stack",
      information:
        "Sou um estudante de Desenvolvimento de Software na BYUI, apaixonado por criar aplicações e experiências interativas na web.",
      btn: "PROJETOS",
    },
    projects: {
      name: "Projetos",
      projects: [
        {
          id: 3,
          name: "Gestão",
          text: "O Website de Gestão de Projetos oferece uma solução completa para organizar projetos, tarefas e usuários. Desde autenticação de usuário até rastreamento de status de tarefas, esta aplicação abrange todos os aspectos de uma gestão de projetos eficaz.",
          img: management,
          link: "https://project-management-smoky.vercel.app/",
          github: "https://github.com/matheusnsilva7/Project-management",
          icon: [nodejs, pug, mongodb],
        },
        {
          id: 1,
          name: "Receitas",
          text: "O Aplicativo de Receitas Favoritas é uma forma conveniente de acompanhar suas receitas preferidas. Ele permite que você procure receitas, salve suas favoritas e veja informações detalhadas sobre cada receita.",
          img: recipes,
          link: "https://recipes-matheusnsilva7.netlify.app/",
          github: "https://github.com/matheusnsilva7/Recipe",
          icon: [typeScript, Next],
        },
        {
          id: 2,
          name: "Limonada",
          text: "A Loja de Limonada é um encantador aplicativo da web que permite aos clientes explorar uma variedade de sabores de limonada, encontrar lojas próximas e fazer pedidos para retirada rápida. A interface de usuário amigável garante uma experiência perfeita tanto para os clientes quanto para os proprietários das lojas.",
          img: lemonade,
          link: "https://lemonadestand-matheusnsilva7.netlify.app/",
          github: "https://github.com/matheusnsilva7/Lemonade",
          icon: [typeScript, Next],
        },
        {
          id: 6,
          name: "Lista de Tarefas",
          text: "O aplicativo de Lista de Tarefas Semanal foi projetado para ajudá-lo a gerenciar suas tarefas de forma eficiente durante a semana. Com recursos como rastreamento de tarefas, uma visão semanal e visualização de progresso, manter-se em cima da sua lista de afazeres nunca foi tão fácil.",
          img: todoList,
          link: "https://todolist-matheusnsilva7.netlify.app/",
          github: "https://github.com/matheusnsilva7/Todo-List",
          icon: [Next],
        },
        {
          id: 4,
          name: "Formulário",
          text: "Formulário de autenticação simples com páginas de login, criação de conta e recuperação de senha usando React e Redux. Este projeto demonstra como criar um formulário que permite aos usuários fazer login através do armazenamento local.",
          img: Form,
          link: "https://form-matheusnsilva7.netlify.app",
          github: "https://github.com/matheusnsilva7/Form",
          icon: [r],
        },
        {
          id: 5,
          name: "Planejamento Semanal",
          text: "Organize sua semana de forma eficiente com o Website de Planejamento Semanal. Esta aplicação de página única permite criar, editar e organizar tarefas usando uma interface de arrastar e soltar.",
          img: weeklyPlanning,
          link: "https://weeklyplanning-matheusnsilva7.netlify.app",
          github: "https://github.com/matheusnsilva7/weekly-planning",
          icon: [HTMl, sass, Js],
        },
        {
          id: 7,
          name: "Viagem",
          text: "Bem-vindo ao Website de Viagens! Este site simples apresenta vários destinos de viagem, oferecendo um vislumbre dos lugares que você pode explorar.",
          img: Travel,
          link: "https://travel-matheusnsilva7.netlify.app/",
          github: "https://github.com/matheusnsilva7/Travel",
          icon: [HTMl, sass, Js],
        },
      ],
    },
    contact: {
      name: "Contato",
      note: "Muito obrigado por visitar o site do meu portfólio, espero que tenha gostado, se houver alguma sugestão de melhoria, por favor me avise através do meu LinkedIn.",
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
    { id: 8, name: "nodeJs", href: nodejs },
  ],
};

export default Data;
