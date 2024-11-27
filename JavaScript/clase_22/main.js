//CallStack
// Stack/CallStack (Pila de platos): Va apilando de forma organizada las diferentes instrucciones que se llamen. Lleva un rastro de donde esta nuestra app y en que punto de ejecución nos encontramos.

const hola = () => {
  chau();
  console.log("hola");
};

const nucba = () => {
  console.log("nucba");
};

const chau = () => {
  console.log("chau");
};

const init = () => {
  hola();
  nucba();
};

// init();

//MEmory Heap
// Memory Heap: De forma desorganizada guarda la info de las variables/funciones, etc

const obj1 = { value: 1 }; // asigna en la memoria un hash hsg5284er

const obj2 = obj1; //la memoria nos devuleve unb hash hsg5284er

console.log(obj1);
console.log(obj2);

obj2.value = 2; // modificamos la referencia en la memoria (obj1 y obj2)

console.log(obj1.value);
// console.log(obj2.value);

// console.log(obj1 === obj2); // apunta a la misma memoria

const obj3 = { ...obj1 };

// console.log(obj3);
// console.log(obj3 === obj1); //apunta a distinta referencia en la memoria

obj3.value = 3;

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

const numeroEjemplo1 = 20;
const numeroEjemplo2 = 30;

// console.log(numeroEjemplo1 === numeroEjemplo2); // nos datos primitivos nos trae el valor perse

const objEmplo1 = {
  nombre: "Lionel",
  apellido: "Messi",
};

const objEmplo2 = {
  nombre: "Lionel",
  apellido: "Messi",
};

// console.log(objEmplo1 === objEmplo2); //=> falso tienen distinta referencia

//EventLoop => nos permite realizar tareas como si fuese multi hilo pero es un solo hilo

// Cola de tareas (task qeue): Son las tareas que estan listas para pasar a la pila de llamadas y ejecutarse.

console.log("Hola");

setTimeout(() => {
  console.log("Nucba");
}, 3000);

console.log("Probando event loop");

const response = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
console.log(response);
