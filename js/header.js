  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');

  burger.addEventListener('click', () => {
    document.body.classList.toggle('mobile-menu-open');
    mobileMenu.classList.toggle('open');
  });

  // Optional: Close menu on outside click or Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.body.classList.remove('mobile-menu-open');
      mobileMenu.classList.remove('open');
    }
  });