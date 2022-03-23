// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// html elements
const allHearts = document.querySelector(".like-glyph")
const errorModal = document.querySelector("#modal")
errorModal.classList.add('.hidden')

allHearts.forEach(heart => heart.addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      if (heart.textContent === EMPTY_HEART) {
        heart.classList.add(EMPTY_HEART)
        heart.textContent = FULL_HEART
      } else if (heart.textConent === EMPTY_HEART) {
        heart.classList.remove(FULL_HEART)
        heart.textContent = EMPTY_HEART
      }
    })
    .catch(() =>{
      errorModal.classList.remove(".hidden")
      setTimeout(() => error.classList.add('.hidden'), 3000)
    })  


}))


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
