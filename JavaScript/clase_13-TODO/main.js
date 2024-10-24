//obtenemos elementos del document
const taskContainer = document.querySelector('.tasks-list')
const deleteAllBtn = document.querySelector('.deleteAll-btn')
const addForm = document.querySelector('.add-form')
const taskInput =  document.querySelector('.input-text')
const deleteBtn = document.querySelector('.delete-btn')

//inicializamos la variable principal
let taskList = JSON.parse(localStorage.getItem('tasks')) || []

const taskEjemplo = {
  name: 'Tarea1',
  id: 'Aca iria el Date.now()'
}

//funcion que genera el html de cada tarea
const createTaskTemplate = (task) => {
  return `
    <li>
      ${task.name}
        <img
          class="delete-btn"
          src="./img/delete.svg"
          alt="boton de borrar"
          data-id=${task.id}
        />
    </li>
  `
}

//sanitizamos el input del usuario
const correctInputValue = () => {
  return taskInput.value.trim().replace(/\s+/g, ' ')
}

//valida el input
const isValidTask = (taskName) => {
  let isValid = true
  if(!taskName.length){
    alert('Tarea incorrecta, esta vacia')
    isValid = false 
  }else if(
    taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase() )
  ){
    alert('Ya existe la tarea con este nombre')
    isValid = false
  }

  return isValid
}

//guardamos en el localStorage
const saveLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(taskList) )
}

//handler que renderiza en el contenedor
const renderTaskList = () => {
  taskContainer.innerHTML = taskList.map((task) => createTaskTemplate(task)).join('')
}

//revisamos si hay tareas para renderizar el boton de borrado
const toogleDeleteAllButton = () => {
  if(!taskList.length){
    deleteAllBtn.classList.add('hidden')
    return
  }
  deleteAllBtn.classList.remove('hidden')
}

//agregamos tarea
const addTask = (event) => {
  event.preventDefault()
  const taskName = correctInputValue()
  if(isValidTask(taskName)){
    taskList = [
      ...taskList,
      {
        name: taskName,
        id: Date.now()
      }
    ]
    addForm.reset()
    refreshTasks()
  }
}

const removeTask = (e) => {
  if(!e.target.classList.contains("delete-btn")) return
  
  const filterId = Number(e.target.dataset.id)
  taskList = taskList.filter((task) => task.id !== filterId )
  refreshTasks()
}

const removeAll = () => {
  taskList = []
  refreshTasks()
}


const refreshTasks = () => {
  renderTaskList()
  saveLocalStorage()
  toogleDeleteAllButton()
}

const init = () => {
  // las instrucciones que necesitamos correr al inicializar la app
  document.addEventListener('DOMContentLoaded', renderTaskList )
  document.addEventListener('DOMContentLoaded', toogleDeleteAllButton)
  addForm.addEventListener('submit', addTask)
  taskContainer.addEventListener('click', removeTask)
  deleteAllBtn.addEventListener('click', removeAll)
}
init()


// principio de responsabilidad unica
// principio Dry