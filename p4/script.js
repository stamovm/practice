const search = document.querySelector('.search')
const button = document.querySelector('.button')
const input = document.querySelector('.input')
button.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})
input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    window.open('https://www.google.com/search?q=' + input.value)
  }
})
