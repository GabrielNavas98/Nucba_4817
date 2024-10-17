// getElementById() => captuirar un elemento por id

const h2Alert =document.getElementById('h2Alert')


// h2Alert.addEventListener('click', () => {
//   alert('Holas soy otro h2')
// })

const mostrarAlert = () => {
  alert('Holas soy otro h2')
}

h2Alert.addEventListener('click', mostrarAlert)


//Focus / blur

const inputBlur = document.getElementById('inputBlur')

const focusFunction = () => {
  inputBlur.style.backgroundColor = 'yellow'
}

inputBlur.addEventListener('focus', focusFunction)

inputBlur.addEventListener('blur', () => {
  inputBlur.style.backgroundColor = ''
})

//change
const inputChange = document.getElementById('comida')
const changeFunction = () => {
  console.log('cambie')
}

inputChange.addEventListener('change', changeFunction )


//event
const boton = document.getElementById('boton')

boton.addEventListener('click', (event) => {
  console.dir(event.target);//nos muestra el elemento que disparo al evento
})

inputBlur.addEventListener('change', (event) => {
  console.log(event.target.value);// podemos acceder al valor del elemento
})

//e.preventDefault()
const form = document.getElementById('form')
const user = document.getElementById('user')
const pass = document.getElementById('pass')



form.addEventListener('submit', (e) => {
  e.preventDefault() //previene el comportamiento por defecto del submit
  console.log(user.value);
  console.log(pass.value);
  form.reset()
})

//stopPropagation()

const boton2 = document.getElementById('boton2')
const container = document.getElementById('container')

container.addEventListener('click', (e) => {
  console.log('hice el click en el container')
})

boton2.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('hice el click en el boton')
})


//cmabiar estilos

//boton.addEventListener('click' , () => {
//  boton.classList.add('btn-primary')
//  boton.classList.remove('btn-primary')
// })

  boton.addEventListener('click' , (e) => {
    console.dir(e.target)
  boton.classList.toggle('btn-primary')
})

const img = document.getElementById('img')
const imgChange = document.getElementById('imgChange')

//cambiar atributos
const cambioImgan = () => {
  // img.setAttribute('src', './img/messi1.jpg')
  // img.src = './img/messi1.jpg'
  img.src = `./img/messi${Math.floor(Math.random() * 3)}.jpg`
}

imgChange.addEventListener('click', cambioImgan)










