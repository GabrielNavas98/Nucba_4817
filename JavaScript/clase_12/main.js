let card = document.createElement('div')
card.classList.add('card')

const cardImg = document.createElement('img')
cardImg.src = 'https://via.placeholder.com/150'
cardImg.classList.add('card-img')

let cardTitle = document.createElement('h3')
cardTitle.classList.add('card-title')
cardTitle.innerText = 'Titulo de la tarjeta'

let cardBody = document.createElement('div')
cardBody.classList.add('card-body')
cardBody.innerText = 'Contenido de la tarjeta'

let cardButton  = document.createElement('button')
cardButton.classList.add('card-button')
cardButton.innerText = 'Click'

card.appendChild(cardImg)
card.appendChild(cardTitle)
card.appendChild(cardBody)
card.appendChild(cardButton)

const cardContainer = document.querySelector('.card-container')
cardContainer.appendChild(card)

const parrafo = document.querySelector('.parrafo')
// parrafo.innerHTML = 'Este es el nuevo contenido'
// parrafo.innerHTML = 'Este es el nuevo contenido <strong>Holas</strong>'

const caja = document.querySelector('.caja')
// caja.innerHTML = '<h2>ESte es el nuevo contenido de la caja</h2>'

//innerHtml + template string
const titulo = 'Titulo de la caja'
const animales = ['Perro', 'Gato', 'Pez', 'Tortuga']

caja.innerHTML = `
  <h2>${titulo}</h2>
  <p>lorem inpsun</p>
  ${animales.map((animal) => {
    return `<p>- ${animal}</p>`
  }).join('')}
  <button>Clickeame</button>
`


//obtuvimos el contenedor
const contenedorGeneradora = document.querySelector('.fn-generadora')

//fn generadora para un solo objeto
const cardInfo = {
  title: 'Titulo de la card',
  description: 'Card description',
  image: 'https://picsum.photos/250/200'
}

const createCardTemplate = (card) => {
  const {title, description, image} = card
  return `
    <div class='card'>
      <img src='${image}' alt='image card' class='card-img'>
      <h3 class='card-title'>${title}</h3>
      <p>${description}</p>
    </div>
  `
}

contenedorGeneradora.innerHTML = createCardTemplate(cardInfo)


//Funcion generadora para array
const animalesInfo = [
  {
    name: 'Perro',
    description: 'es una animal que ladra'
  },
  {
    name: 'Gato',
    description: 'es una animal que maulla'
  },{
    name: 'pez',
    description: 'es una animal que nada'
  },
  {
    name: 'Lagarto',
    description: 'es una animal que lagartea'
  }
]
const createCardTemplateArray = (animal) => {
  const {name, description} = animal
  return `
    <div class='card'>
      <h3 class='card-title'>${name}</h3>
      <p>${description}</p>
    </div>
  `
}

const cardsTemplate = animalesInfo.map(createCardTemplateArray).join('')

contenedorGeneradora.innerHTML += cardsTemplate

//JSON stringyfy
const persona = {
  name: 'Juan',
  age: 38
}
// console.log(JSON.stringify(persona)); //convertimos a json nuestro objeto

//JSON parse
const objectParse = JSON.parse('{"name":"Juan","age":38}')
// console.log(objectParse);

//LocalStorage
// localStorage.setItem('usuario', 'Juan123')
// localStorage.Curso = 'FullStack Dev'


const user = localStorage.getItem('usuario')

const localStorageP = document.querySelector('.localStorage')
localStorageP.innerText = `Tu usuario es ${user}`


//sessionStorage
// sessionStorage.Equipo = 'Boca'

