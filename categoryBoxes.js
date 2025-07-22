// Category boxes
const categoryBoxes = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    image: './assets/img/cat1.png',
    buttonText: 'Nakupuj'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    image: './assets/img/cat2.png',
    buttonText: 'Nakupuj'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    image: './assets/img/cat3.png',
    buttonText: 'Nakupuj'
  }
];

const container = document.getElementById('categories');

categoryBoxes.forEach(box => {
  const boxDiv = document.createElement('div');
  boxDiv.className = 'box';
  boxDiv.style.backgroundImage = `url(${box.image})`;

  boxDiv.innerHTML = `
    <div class="text-overlay">
      <h2>${box.title}</h2>
    </div>
    
  `;

  container.appendChild(boxDiv);
});


