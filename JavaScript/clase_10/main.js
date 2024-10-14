//getElementById() => nos trae el elemento según el id que le pasemos como argumento.

const logo = document.getElementById('logo')
// console.log(logo);

// console.dir(logo)


//getElementsByClassName() => nos trae un HTMLCollection de elementos segun el nombre de clase especificado.

const links = document.getElementsByClassName('link')
// const nombre = prompt('Ingresa tu nombre')

// links[0].innerHTML = `hola! ${nombre}`

// console.log(links)
// console.log(links[0])
// console.log([...links])

//ERROR => no se puede por que no es un array.
// links.forEach(link => {
//     console.log(link);
// });

const linksArray = [...links]
// linksArray.forEach((link) => console.log(link));

// linksArray[0].innerHTML = 'Hola soy un array ahora si'

//getElementsByTagName() => nos trae un HTMLCollection de elementos segun el nombre de tiqueta.

const pTag = document.getElementsByTagName('p')
// console.log(pTag);
// console.log(pTag[2])



//querySelector() => nos trae el primer elemento que coincida con el argumento pasado

// const header = document.querySelector('.header') //clase header
// console.log(header);

// const header = document.querySelector('header') //eqtiqueta header
// console.log(header);

// const unP = document.querySelector('#soyP') //id 
// console.dir(unP)


//querySelectorAll() => un nodeList

// const pTag2 = document.querySelectorAll('p')
// console.dir(pTag2) // si conoce el forEach pero no es un array
// console.dir([...pTag2])

// pTag2.forEach(p => {
//     console.log(p);
// });

const container = document.getElementById('container') //optimizamos la busqueda
const pInContainer = container.querySelectorAll('p')
console.dir(pInContainer[1])