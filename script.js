const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => links.classList.toggle('open'));
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') links.classList.remove('open');
});

document.getElementById('year').textContent = new Date().getFullYear();
