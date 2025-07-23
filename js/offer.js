const offerBoxes = [
  {
    text: 'Investiční',
    title: 'Zlaté mince',
    image: './assets/img/nabidka1.png',
  },
  {
    text: 'Investiční',
    title: 'Zlaté slitky',
    image: './assets/img/nabidka2.png',
  },
  {
    text: 'Historické',
    title: 'Zlaté mince',
    image: './assets/img/nabidka3.jpg',
  },
  {
    text: 'Pamětní',
    title: 'Zlaté mince ČNB',
    image: './assets/img/nabidka4.png',
  },
];

const containerOffer = document.getElementById('offer-inner');

const isMobile = window.innerWidth < 768;
const visibleBoxes = isMobile ? offerBoxes.slice(0, 2) : offerBoxes;

visibleBoxes.forEach(box => {
  const offerBoxDiv = document.createElement('div');
  offerBoxDiv.className = 'offer-box';
  offerBoxDiv.style.backgroundImage = `url(${box.image})`;

  offerBoxDiv.innerHTML = `
    <div class="offer-text-overlay">
      <p>${box.text}</p>
      <div class="arrow-hover-box">
        <h3>${box.title}</h3>
        <img src="../assets/img/white-arrow.png" alt="arrow" class="hover-arrow" />
      </div>
    </div>
  `;

  containerOffer.appendChild(offerBoxDiv);
});
