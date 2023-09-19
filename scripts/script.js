window.onload = function () {
  document.querySelector('.profileImage').style.opacity = 1;
};

document.addEventListener('DOMContentLoaded', function () {
  const darkModeButton = document.getElementById('toggleDarkMode');
  const body = document.body;

  darkModeButton.addEventListener('click', function () {
    body.classList.toggle('darkMode');
  });
});

const navigationLinks = document.querySelectorAll('.navigation-menu a');

navigationLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - document.querySelector('.top-bar').offsetHeight,
        behavior: 'smooth',
      });
    }
  });
});

const projects = document.querySelectorAll('.project');

for (const project of projects) {
  project.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-5px)';
  });
  project.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
  });
}