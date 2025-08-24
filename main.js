const reviews = [
  {
    id: 1,
    img: "./images/html.png",
    title: "html",
    desc: "HTML (Hypertext Markup Language) is the standard markup language for creating web pages. 1  It uses tags to define the structure and content of a webpage, 2  including text, images, links, and other multimedia. 3  Browsers interpret HTML to display web pages visually.",
  },

  {
    id: 2,
    img: "./images/css.png",
    title: "css",
    desc: "CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of HTML elements. It dictates the visual aspects of a webpage, such as colors, fonts, layout, and responsiveness across different devices. CSS separates content from design, making websites more maintainable.",
  },

  {
    id: 3,
    img: "./images/js.png",
    title: "javascript",
    desc: "JavaScript is a versatile scripting language that adds interactivity to web pages. It enables dynamic content updates, animations, user interface enhancements, and handling user input. JavaScript runs in web browsers (client-side) and also on servers (server-side) using Node.js, making it a full-stack technology.",
  },
  {
    id: 4,
    img: "./images/react.svg",
    title: "react",
    desc: "React.js is a popular JavaScript library for building user interfaces, developed by Facebook. It uses a component-based approach, making code reusable and easier to maintain. With its virtual DOM, React efficiently updates only the necessary parts of a webpage, enabling fast performance. It’s widely used for modern web applications.",
  },

  {
    id: 5,
    img: "./images/tailwind-css.png",
    title: "tailwind",
    desc: "Tailwind CSS is a utility-first CSS framework. Instead of pre-designed components, it provides low-level utility classes like text-center, bg-blue-500, and p-4 to rapidly style HTML directly in your markup. This approach allows for highly customized designs without writing custom CSS.",
  },
  {
    id: 6,
    img: "./images/bootstrap.png",
    title: "bootstrap",
    desc: "Bootstrap is a popular front-end framework that simplifies web development. 1  It provides ready-made HTML, CSS, and JavaScript components, such as navigation bars, buttons, forms, and grids, enabling developers to quickly build responsive and mobile-first websites with a consistent look and feel.",
  },
  {
    id: 7,
    img: "./images/git.png",
    title: "git/github",
    desc: "Git is a distributed version control system that tracks changes in source code during software development. GitHub is a web-based platform that hosts Git repositories, enabling collaboration, code sharing, and version control management. Developers use Git locally and push changes to GitHub for collaboration and backup.",
  },
];
// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// -------------responsive navbar---------------

const navbar = document.getElementById("navbar");
const openButton = document.getElementById("open-sidebar-button");

const media = window.matchMedia("(Width < 600px)");

media.addEventListener("change", (e) => updateNavbar(e));

function updateNavbar(e) {
  const isMobile = e.matches;
  if (isMobile) {
    navbar.setAttribute("inert", "");
  } else {
    //desktop device
    navbar.removeAttribute("inert");
  }
}

function openSidebar() {
  navbar.classList.add("show");
  openButton.setAttribute("aria-expanded", "true");
  navbar.removeAttribute("inert");
}

function closeSidebar() {
  navbar.classList.remove("show");
  openButton.setAttribute("aria-expanded", "false");
  navbar.setAttribute("inert", "");
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});

updateNavbar(media);

const img = document.querySelector(".lang");
const name = document.querySelector(".title");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.title;
  info.textContent = item.desc;
});

// show skill based on item
function showSkill(skill) {
  const item = reviews[skill];
  img.src = item.img;
  name.textContent = item.title;
  info.textContent = item.desc;
}

// show next skill
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showSkill(currentItem);
});

// show prev skill
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showSkill(currentItem);
});

// show random skill
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showSkill(currentItem);
});

// scroll top button
const scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  let scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    scrollTop.classList.add("show-scroll-top");
  } else {
    scrollTop.classList.remove("show-scroll-top");
  }
});
