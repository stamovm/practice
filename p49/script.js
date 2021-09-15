const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementsByClassName('todo-ul')[0]

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) todos.forEach((todo) => addTodo(todo))

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addTodo()
})

function addTodo(todo) {
  let todoText = input.value
  if (todo) todoText = todo.text
  if (todoText) {
    const todoEl = document.createElement('li')
    if (todo && todo.completed) todoEl.classList.add('completed')
    todoEl.innerText = todoText
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      saveTodos()
    })
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      todoEl.remove()
      saveTodos()
    })

    todoUL.appendChild(todoEl)
    input.value = ''
    saveTodos()
  }
}

function saveTodos() {
  const todosEL = document.querySelectorAll('li')
  const todos = []
  todosEL.forEach((li) => {
    todos.push({
      text: li.innerText,
      completed: li.classList.contains('completed'),
    })
  })
  localStorage.setItem('todos', JSON.stringify(todos))
}
