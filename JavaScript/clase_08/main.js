// Metodos de Array
// length => nos devulve el largo de un array

const array = [1,2,3,4,'hola']
// console.log(array.length); // 5

//.indexOf() => le pasamos un valor y nos devuelve el indice correspondiente

const arrayIndexOf = [1,2,3,4,5,6, 'hola', 'perro']
// console.log(arrayIndexOf.indexOf(3));//2
// console.log(arrayIndexOf.indexOf('perro'));//7


//.toString() => nos devuelve un array de la concatenacion de los elementos separados por coma

const animales = ['perro', 'gato', 'caballo', 'rinoceronte']
const stringArray = animales.toString()
// console.log(stringArray);

//.concat() => concatena dos o mas arrays

const masAnimales = ['iguana', 'hamster', 'pez']
// console.log(animales.concat(masAnimales, array));

//.push() => agregamos un elemento al final

// console.log(animales.push('gorila'));//5
// console.log(animales.push('serpiente'));//6
// console.log(animales);

//.pop() => eliminamos el ultimo elemento y lo retorna

// const animalEliminado = animales.pop()
// console.log(animalEliminado);
// console.log(animales);

//.unshift() => agregar un elemento al principio

// animales.unshift('tortuga')
// console.log(animales);

//.shift() => eliminamos y retornamos el primer elemento del array

// const animalEliminado = animales.shift()
// console.log(animales);
// console.log(animalEliminado);//tortuga

//.join()
// console.log(animales.join(' - '));

//.reverse() => modifica el array original y lo invierte
// console.log(animales.reverse());

//Ejercicio
// const string = 'Quiero invertir este string!'
// // console.log(string.reverse()); error
// console.log(string.split('').reverse().join(''));

//.slice() => corta un pedazo del array y devuelve uno nuevo
// animales.push('serpiente');
// console.log(animales);
// console.log(animales.slice(1, 3));
// console.log(animales.slice(-3));
// console.log(animales.slice(1, -2));

//Metodos avanzados => reciben una funcion de callback

//.forEach() => la acción por cada iteración

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//queremos consologuear número por numero
// numeros.forEach( (numero, index) =>{
//     console.log(`Hola soy el número ${numero} en el indice ${index}`);
// })

//.map() => reccore y ejectuta una accion por cada elemento y retorna un nuevo array

// const duplicado = numeros.map( (numero) => {
//     return numero * 2
// })
// console.log(duplicado);

// .filter() => recorre un array, ejecuta una funcion y devuelve un nuevo array con los elementos que cumplan una condición

// const pares = numeros.filter(numero => {
//     return numero % 2 === 0
// })
// console.log(pares);

//.find()

const users = ['Valentin', 'Brian', 'Gabriel', 'Agustin']

// const userFind = users.find((user) => {
//     return user === 'Pepito'
// })

// console.log(userFind);

//.every() => recorre el array, devuelve true si todos los elementos cumplen la condicion de cb
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(numeros.every((numero) =>{
//     return numero > 0
// }));

// console.log(numeros.every((numero) =>{
//     return numero > 5
// }));

//.some() => recorre el array, devuelve true si por lo menos uno de los elementos cumple la condicion de cb
// console.log(numeros.some((numero) =>{
//     return numero > 0
// }));
    
// console.log(numeros.some((numero) =>{
//     return numero > 15
// }));

//.sort() => ordena los elementos de un array

const numerosDesordenados = [10,2,54,56,45,23,58,74,98,25,78]

// console.log(numerosDesordenados.sort()); //ordena segun unicode

// console.log(
//     numerosDesordenados.sort((a, b) => {
//         return a - b 
//     })
// );

//return a - b => positivo => intercambia
//return a - b => negativo => lo tal cual
//return a - b => cero son iguales

// console.log(
//     users.sort()
// );


    
//.reduce() => reduce un array a un unico valor
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const suma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero
}, 10)

console.log(suma);

const palabras = ['Hola', 'Mundo', '!']

const frase = palabras.reduce((acc, val) => {
    return acc + ' ' + val
}, '¡')

console.log(frase);
