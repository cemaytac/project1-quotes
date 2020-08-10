// cached element references

const box = document.getElementById('boxDiv')
const inspireBtn = document.getElementById('inspireButton')
const adviceBtn = document.getElementById('adviceButton')
const luckyBtn = document.getElementById('luckyButton')

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
      quotes.push(data.slip.advice);
      console.log(data.slip.advice);
    })
    .catch((err) => {
      console.log(err)
    })
})
inspireBtn.addEventListener('click', () => {
  // promise
  fetch("https://api.quotable.io/random")
    // return promise
    .then((response) => {
      return response.json();
    })
    // get advice from object array and push it into quote array
    .then((data) => {
      quotes.push(data.content, data.author);
      console.log(data.content, data.author)
    })
    .catch((err) => {
      console.log(err)
    })
})

// functions
function appendDiv(advice) {
  let adviceDiv = document.createElement('div')
  adviceDiv.innerHTML = ` <div class='card' id='advice'>
  <div class='card-body'>
  <blockquote class='blockquote mb-0'>
  <p>${advice}</p>
  </blockquote>
  </div>
  </div>
  `

  box.appendChild(adviceDiv)
}

function render() {
  box.innerHTML = '';
  quotes.forEach((advice) => {
    appendDiv(advice)
  })
}