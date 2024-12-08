const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navItem = document.querySelectorAll(".nav__item"),
header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
navMenu.classList.toggle("nav__menu--open");
changeIcon();
});

const scrollToHireMe = () => {
  const hireMeSection = document.getElementById("hireMe");
  hireMeSection.scrollIntoView({ behavior: "smooth" });
};

// roles

const roles = [
  "MERN Stack Developer",
  "Software Developer",
  "Problem Solver",
  "Data Analyst"
];

let currentRoleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
  const currentRole = roles[currentRoleIndex];
  const displayedText = isDeleting
      ? currentRole.substring(0, charIndex--)
      : currentRole.substring(0, charIndex++);

  typewriterElement.textContent = displayedText;

  // Adjust speed for typing and deleting
  const speed = isDeleting ? 50 : 100;

  // If the text is fully displayed and we are not deleting
  if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
  }

  // If the text is fully deleted
  if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role
  }

  setTimeout(typeEffect, speed);
}

// Start the typewriter effect
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
item.addEventListener("click", () => {
  if (navMenu.classList.contains("nav__menu--open")) {
    navMenu.classList.remove("nav__menu--open");
  }
  changeIcon();
});
});

// Change nav toggle icon
function changeIcon() {
if (navMenu.classList.contains("nav__menu--open")) {
  navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
} else {
  navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
}
}

// Downloading Resume
// document.getElementsByClassName("btn btn--primary").addEventListener("click", function() {
//   window.location.href = "../../assets/Calvin Mwangi.pdf"
// })


// Testimonial Slide

const testimonialSlide = new Swiper(".testimonial__wrapper", {
loop: true,
spaceBetween: 30,
centeredSlides: true,
effect: "coverflow",
grabCursor: true,
slidesPerView: 1,
coverflowEffect: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},

breakpoints: {
  520: {
    slidesPerView: "auto",
  },
},
});

// header scroll animation
window.addEventListener("scroll", () => {
if (window.scrollY > 40) {
  header.classList.add("header--scroll");
} else {
  header.classList.remove("header--scroll");
}
});

// ScrollReveal animations
const sr = ScrollReveal({
duration: 2000,
distance: "100px",
delay: 400,
reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content",
{
  delay: 500,
  interval: 100,
}
);

sr.reveal(".qualification__footer-text, .contact__content", {
origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });

document.addEventListener('DOMContentLoaded', () => {
const yearSpan = document.querySelector('.footer__copyright');
const currentYear = new Date().getFullYear();
yearSpan.innerHTML = yearSpan.innerHTML.replace('{currentYear}', currentYear);
});



// dark mode light mode

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on load
document.documentElement.setAttribute('data-theme', currentTheme);

// Update toggle icon
themeToggle.querySelector('.toggle-icon').textContent = currentTheme === 'dark' ? '🌙' : '🌞';

// Toggle theme on click
themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update toggle icon
    themeToggle.querySelector('.toggle-icon').textContent = theme === 'dark' ? '🌙' : '🌞';
});
