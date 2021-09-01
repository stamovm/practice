const search = document.querySelector('.search')
const button = document.querySelector('.button')
const input = document.querySelector('.input')
button.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})
input.addEventListener('keyup', (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    window.open('https://www.google.com/search?q=' + input.value)
  }
})
