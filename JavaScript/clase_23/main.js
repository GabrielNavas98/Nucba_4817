// SetTimeout

const saludar = () => {
  // console.log("Hola!");
};

setTimeout(saludar, 2000);
// clearTimeout(timeoutID)
//setInterval

const contar = () => {
  // console.log("contando...");
};

const intervalID = setInterval(contar, 1000);

document
  .querySelector(".clearInterval")
  .addEventListener("click", () => clearInterval(intervalID));

//----------async

// console.log("Empezando el proceso");

// setTimeout(() => {
//   console.log("proceso asyncronico terminado");
// }, 2000);

// console.log("Continuamos con el resto del codigo");

// Promesas

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let numeroAleatorio = Math.random();
    if (numeroAleatorio > 0.5) {
      resolve("La promesa se resolvio correctamente");
    } else {
      reject(new Error("La promesa NO se resolvio correctamente"));
    }
  });
});

// console.log(promesa);

promesa
  .then((mensaje) => console.log(mensaje))
  .catch((err) => console.log(err));

//Manejo de errores
// console.log(fetch("https://nosirve.practicando")); => nos devuelve una promesa

// fetch("https://nosirve.practicando")
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));
// https://pokeapi.co/api/v2/pokemon/ditto

//ejemplo de promesa con una peticion a una api

fetch("https://pokeapi.co/api/v2/pokemon/eevee")
  .then((valorResuelto) => valorResuelto.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
