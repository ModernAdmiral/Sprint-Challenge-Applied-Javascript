// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardsContainer = document.querySelector('.cards-container');
const javascript = document.createElement('div');
const bootstrap = document.createElement('div');
const technology = document.createElement('div');
const jquery = document.createElement('div');
const node = document.createElement('div');
const url = 'https://lambda-times-backend.herokuapp.com/articles';
javascript.classList.add('javascript', 'cards-container');
bootstrap.classList.add('bootstrap', 'cards-container');
technology.classList.add('technology', 'cards-container');
jquery.classList.add('jquery', 'cards-container');
node.classList.add('node', 'cards-container');
cardsContainer.appendChild(javascript);
cardsContainer.appendChild(bootstrap);
cardsContainer.appendChild(technology);
cardsContainer.appendChild(jquery);
cardsContainer.appendChild(node);


axios 
    .get(url)
    .then(response => {
        console.log(response.data.articles.javascript);
        response.data.articles.javascript.forEach(element => {
            const newArticle = Article(element);
            javascript.appendChild(newArticle);
        });
        return axios.get(url);
    })
    .then(response => {
        console.log(response.data.articles.bootstrap);
        response.data.articles.bootstrap.forEach(element => {
            const newArticle = Article(element);
            bootstrap.appendChild(newArticle);
        });
        return axios.get(url);
    })

    .then(response => {
        console.log(response.data.articles.technology);
        response.data.articles.technology.forEach(element => {
            const newArticle = Article(element);
            technology.appendChild(newArticle);
        });
        return axios.get(url);
    })

    .then(response => {
        console.log(response.data.articles.jquery);
        response.data.articles.jquery.forEach(element => {
            const newArticle = Article(element);
            jquery.appendChild(newArticle);
        });
        return axios.get(url);
    })

    .then(response => {
        console.log(response.data.articles.node);
        response.data.articles.node.forEach(element => {
            const newArticle = Article(element);
            node.appendChild(newArticle);
        });
        return axios.get(url);
    })
    .catch(error => console.log('u messed up', error))

const Article = (input) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = input.headline;
    img.src = input.authorPhoto;
    span.textContent = input.authorName;
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(span);

    return card;
}

// const javascriptButton = document.querySelectorAll('.tab');
// const bootstrapButton = document.querySelectorAll('.tab')[1];
// const technologyButton = document.querySelectorAll('.tab')[2];
// const jqueryButton = document.querySelectorAll('.tab')[3];
// const nodeButton = document.querySelectorAll('.tab')[4];

// javascript.style.display = 'none';
// bootstrap.style.display = 'none';
// technology.style.display = 'none';
// jquery.style.display = 'none';
// node.style.display = 'none';

// javascriptButton.addEventListener('click', (e) => {
//     e.style.display = "none";
// })



// console.log(javascriptButton)
// console.log(nodeButton)
// console.log(Article())