// Nabidka box
const nabidkaBoxes = [
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
    text: 'historické',
    title: 'Zlaté mince',
    image: './assets/img/nabidka3.jpg',
  },
  {
    text: 'Pamětní',
    title: 'Zlaté mince ČNB',
    image: './assets/img/nabidka4.png',
  },
];

const containerNabidka = document.getElementById('nabidka-inner');

nabidkaBoxes.forEach(box => {
  const nabidkaBoxDiv = document.createElement('div');
  nabidkaBoxDiv.className = 'nabidka-box';
  nabidkaBoxDiv.style.backgroundImage = `url(${box.image})`;

  nabidkaBoxDiv.innerHTML = `
    <div class="nabidka-text-overlay">
      <p>${box.text}</p>
      <h2>${box.title}</h2>
    </div>
    
  `;

  containerNabidka.appendChild(nabidkaBoxDiv);
});