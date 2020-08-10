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
  fetch("https://quotesondesign.com/wp-json/wp/v2/posts?_fields=")
    // return promise
    .then((response) => {
      return response.json();
    })
    // get advice from content array and push it into quote array
    .then((data) => {
      // let newInspire = {}
      // newInspire.object.content = data.content
      quotes.push(data.content);
      console.log(data.content)
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