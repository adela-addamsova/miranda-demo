function setupCurrencyToggle(toggleId, dropdownId) {
  const toggle = document.getElementById(toggleId);
  const dropdown = document.getElementById(dropdownId);
  if (!toggle || !dropdown) return;

  const navItem = toggle.closest('.nav-item') || toggle.parentElement;

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
}

setupCurrencyToggle('currency-toggle', 'currency-dropdown');
setupCurrencyToggle('currency-toggle-mobile', 'currency-dropdown-mobile');
