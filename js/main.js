// cached element references

const box = document.getElementById('boxDiv')
const inspireBtn = document.getElementById('inspireButton')
const adviceBtn = document.getElementById('adviceButton')
const luckyBtn = document.getElementById('luckyButton')
const darkBtn = document.getElementById('darkButton')

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
      let newAdvice = {}
      newAdvice.advice = data.advice
      quotes.push(newAdvice);
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
})
inspireBtn.addEventListener('click', () => {
  // promise
  fetch("https://quotesondesign.com/wp-json/wp/v2/posts/")
    // return promise
    .then((response) => {
      return response.json();
    })
    // get advice from content array and push it into quote array
    .then((data) => {
      let newInspire = {}
      newInspire.content = data.content
      quotes.push(newInspire);
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
})

// functions 