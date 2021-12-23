const output = document.getElementById('output')
let count = 0

function btn1Click() {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)

  xhr.onload = function () {
    //   console.log(xhr)
    if (xhr.status === 200) {
      let response = JSON.parse(this.response)
      output.innerText = response.title
    }
  }
  xhr.send()
}

function btn2Click() {
  setTimeout(updateCount, 1000)
}

function changeColor() {
  document.querySelector('#btn2').classList.toggle('altColor')
}

function updateCount() {
  count++
  changeColor()
  output.innerText = count
  if (count < 10) setTimeout(updateCount, 1000)
}

function btn3Click() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(json)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

function btn4Click() {
  const print = async () => {
    return 'print this text'
  }
  print().then((response) => {
    console.log(response)
  })
  ////////////////
  getData().then((data) => {
    output.innerText = data.title
  })
}

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()
  return data
}
