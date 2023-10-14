// ***********************
// дата

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ***********************
// сжатие страницы (для меню)

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
  // linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ***********************
// закрепляется менюшка, меняются цвета

const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');

// "слушает", будет ли такое событие

window.addEventListener("scroll", function() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

// ***********************
// стрелка наверх

  if (scrollHeight > 500) {
    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});