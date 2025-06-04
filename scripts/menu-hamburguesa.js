
  document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.botonera');

    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('active');
      toggleBtn.classList.toggle('active');
    });
  })