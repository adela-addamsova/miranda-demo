const blogPosts = [
  {
    bgImg: 'url(./assets/img/blog1.png)',
    extraClass: 'blog-1',
    date: '20.12.2021',
    title: 'Lorem Ipsum',
    author: 'Lukas',
    comments: 0
  },
  {
    bgImg: 'url(./assets/img/blog2.jpg)',
    extraClass: 'blog-2',
    date: '20.12.2021',
    title: 'Lorem Ipsum',
    author: 'Lukas',
    comments: 0
  },
  {
    bgImg: 'url(./assets/img/blog3.png)',
    extraClass: 'blog-3',
    date: '20.12.2021',
    title: 'Lorem Ipsum',
    author: 'Lukas',
    comments: 0
  },
  {
    bgImg: 'url(./assets/img/blog4.png)',
    extraClass: 'blog-4',
    date: '20.12.2021',
    title: 'Lorem Ipsum',
    author: 'Lukas',
    comments: 0
  },
  {
    bgImg: 'url(./assets/img/blog5.png)',
    extraClass: 'blog-5',
    date: '20.12.2021',
    title: 'Lorem Ipsum',
    author: 'Lukas',
    comments: 0
  },
]


const blogContainer = document.getElementById('blog-container');

blogPosts.forEach(post => {
  const card = document.createElement('div');
  card.className = `blog-post ${post.extraClass}`;
  card.style.backgroundImage = post.bgImg;
  card.style.backgroundSize = 'cover';
  card.style.backgroundPosition = 'center';


  card.innerHTML = `
  <div class="blog-text">
        <div class="post-date"><p>${post.date}</p></div>
        <h3 class="post-title">${post.title}</h3>
        <div class="post-meta">
        <span class="post-author"> <img src="./assets/img/iconoir_profile-circled-1.png" alt="user icon" class="icon" /> ${post.author}</span> | 
        <span class="post-comments">${post.comments} comments</span>
        </div>
     </div>
  `;

  blogContainer.appendChild(card);
});