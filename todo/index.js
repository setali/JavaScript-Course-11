var root = document.getElementById('root')

var todoList = document.createElement('ol')

var form = document.createElement('form')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  var value = input.value

  if (!value) return

  addTodo(value)
  saveTodo(value)

  input.value = ''
})

var input = document.createElement('input')
input.setAttribute('placeholder', 'Todo')

var button = document.createElement('button')
button.setAttribute('type', 'submit')
button.textContent = 'Add'

form.appendChild(input)
form.appendChild(button)

root.appendChild(form)
root.appendChild(todoList)

function addTodo (value) {
  var todo = document.createElement('li')
  todo.textContent = value

  var deleteIcon = deleteIconGenerator(value)
  todo.appendChild(deleteIcon)

  todoList.appendChild(todo)
}

function deleteIconGenerator (value) {
  var deleteIcon = document.createElement('span')
  deleteIcon.textContent = 'x'
  deleteIcon.style.color = 'red'
  deleteIcon.style.margin = '10px'
  deleteIcon.style.cursor = 'pointer'

  deleteIcon.addEventListener('click', function (event) {
    event.target.parentElement.remove()
    removeTodo(value)
  })

  return deleteIcon
}

function getTodos () {
  var todos = localStorage.getItem('todos')
  if (!todos) {
    return []
  } else {
    return JSON.parse(todos)
  }
}

function saveTodo (value) {
  var todos = getTodos()
  todos.push(value)
  saveTodos(todos)
}

function saveTodos (todos) {
  todosString = JSON.stringify(todos)
  localStorage.setItem('todos', todosString)
}

function removeTodo (value) {
  var todos = getTodos()
  var newTodos = todos.filter(function (todo) {
    return todo !== value
  })

  saveTodos(newTodos)
}

;(function () {
  var todos = getTodos()
  todos.forEach(addTodo)
})()
