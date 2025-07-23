document.addEventListener('DOMContentLoaded', async () => {
  let allProducts = [];
  let visibleCount = 4;
  let currentCategory = 'Novinky';

  const productList = document.getElementById('product-list');
  const tabs = document.querySelectorAll('.tab');
  const mainBtn = document.querySelector('.showmore');

  // Load products
  try {
    const res = await fetch('./assets/src/products.json');
    const data = await res.json();
    allProducts = data;
    renderProducts();
  } catch (err) {
    console.error('Chyba při načítání produktů:', err);
  }

  // Render products
  function renderProducts() {
    productList.innerHTML = '';

    const filtered = allProducts.filter(p => p.category === currentCategory);
    const productsToShow = filtered.slice(0, visibleCount);

    productsToShow.forEach(product => {
      const card = createProductCard(product);
      productList.appendChild(card);
    });

    mainBtn.style.display = (visibleCount >= filtered.length) ? 'none' : 'block';
  }

  // Create product card
  function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    let availabilityColor;
    if (product.availability === 'Skladem') {
      availabilityColor = '#63DA46';
    } else if (product.availability === 'Na objednávku') {
      availabilityColor = '#979797';
    } else {
      availabilityColor = '#F24D4D';
    }

    const flagsHTML = product.flags.map(flag => {
      let className = 'flag';
      if (flag === 'Novinka') className += ' flag-novinka';
      else if (flag === 'Výprodej') className += ' flag-vyprodej';
      else if (flag === 'Tip') className += ' flag-tip';
      return `<span class="${className}">${flag}</span>`;
    }).join(' ');

    card.innerHTML = `
      <img src="${product.imgSrc}" alt="${product.title}" />
      <h4>${product.title}</h4>
      <div class="product-text">
        <div>
          <p style="color: ${availabilityColor};">${product.availability}</p>
          <p>${product.price.toLocaleString('cs-CZ')} Kč</p>
        </div>
        <div class="cart-box">
          <img class="icon" src="./assets/img/shopping-cart.png" />
        </div>
      </div>
      <div class="flags">${flagsHTML}</div>
    `;
    return card;
  }

  // Active tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      currentCategory = tab.dataset.category;
      visibleCount = 4;
      renderProducts();
    });
  });

  // Show more products
  mainBtn.addEventListener('click', () => {
    visibleCount += 4;
    renderProducts();
  });
});
