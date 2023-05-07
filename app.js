const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
    
    loader.classList.add('fondu-out');
    
})

const pagecontent = document.querySelector('h1')

new Typewriter(pagecontent, {
    //loop: true,

})
.changeDelay(50)
.typeString('<font size="5pt">recette <strong>zelda breath of the wild</font>')
.pauseFor(450)
.deleteChars(24)
.typeString('<font size="5pt"><strong><span style="color: #92c582">zelda breath of the wild</span></font>')
.start()

let generateQuoteBtn = document.querySelector('#generate-quote');
let quoteText = document.querySelector('#quote-text');
let quoteAuthor = document.querySelector('#quote-author');

let handleCopyClick = document.querySelector('#copy-quote');

generateQuoteBtn.addEventListener('click', () => {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `- ${data.author}`;
    });
});