const toggle = document.getElementById('currency-toggle');
const dropdown = document.getElementById('currency-dropdown');
const navItem = toggle.closest('.nav-item');

// Toggle dropdown
toggle.addEventListener('click', (e) => {
  e.preventDefault();
  navItem.classList.toggle('open');
});

// Change currency on selection
dropdown.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const newCurrency = link.getAttribute('data-currency');
    toggle.innerText = `${newCurrency} ▾`;
    navItem.classList.remove('open');
  });
});
