document.addEventListener('DOMContentLoaded', () => {
  const infoData = [
    {
      img: './assets/img/info1.png',
      text: 'Doprava zdarma na vše od 5 000 Kč'
    },
    {
      img: './assets/img/info2.png',
      text: 'Okamžitá fixace cen do 150 000 Kč'
    },
    {
      img: './assets/img/info3.png',
      text: 'Možnost platby pomocí QR kódu'
    },
    {
      img: './assets/img/info4.png',
      text: 'Vykupujeme historické i novodobé mince'
    },

  ];

  const infoContainer = document.getElementById('info-section');

  infoData.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'info-row';

    row.innerHTML = `
      <div class="info-inner">
        <img src="${item.img}"" class="info-icon" />
        <div class="info-text">
          <p>${item.text}</p>
        </div>
      </div>
      ${index < infoData.length - 1 ? '<div class="separator"></div>' : ''}
    `;

    infoContainer.appendChild(row);
  });
});
