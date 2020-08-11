// cached element references

const box = document.getElementById('boxDiv')
const inspireBtn = document.getElementById('inspireButton')
const adviceBtn = document.getElementById('adviceButton')
const luckyBtn = document.getElementById('luckyButton')
const resetBtn = document.getElementById('resetButton')

// Variables
const quotes = [];

// event listeners
adviceBtn.addEventListener('click', () => {
  // promise
  fetch("https://api.adviceslip.com/advice")
    // return promise
    .then((response) => {
      return response.json();
    })
    // get advice from slip array and push it into quote array
    .then((data) => {
      let newQuote = {}
      newQuote.quote = data.slip.advice
      newQuote.author = 'Unknown'
      quotes.push(newQuote.quote, newQuote.author);
      render();
    })
    .catch((err) => {
      console.log(err)
    })
  // when button is clicked it must be disabled for about 4 seconds, because that's how long it takes for the API to call a different quote
  function buttonDelay() {
    adviceBtn.disabled = true;
    setTimeout(function () {
      adviceBtn.disabled = false;
    }, 4500);
  }
  buttonDelay();
})
inspireBtn.addEventListener('click', () => {
  // promise
  fetch("https://api.quotable.io/random")
    // return promise
    .then((response) => {
      return response.json();
    })
    // get content and author from array and push it into quote array
    .then((data) => {
      let newQuote = {}
      newQuote.content = data.content
      newQuote.author = data.author
      quotes.push(newQuote.content, newQuote.author);
      render();
    })
    .catch((err) => {
      console.log(err)
    })
})

// reset button
resetBtn.addEventListener('click', init)

// functions

function appendDiv(quote, author) {
  let mainDiv = document.createElement('div')
  // let inspireDiv = document.createElement('div')
  mainDiv.innerHTML = ` <div class='card'>
  <div class='card-body'>
  <blockquote class='blockquote mb-0'>
  <p>${quote}</p>
  <footer class="blockquote-footer">${author}</footer>
  </blockquote>
    </div>
  </div>
  `
  box.appendChild(mainDiv)
}

// to display everything on page 
function render() {
  box.innerHTML = '';
  quotes.forEach((quote, author) => {
    appendDiv(quote, author)
  })
}

// to reset page 
function init() {
  box.innerHTML = "";
  quotes.length = 0;
}
init();