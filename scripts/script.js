window.onload = function() {
    document.querySelector('.profileImage').style.opacity = 1;
};

const toggle = document.querySelector('#toggleDarkMode');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
  body.classList.toggle('darkMode');
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