/*
    => Tipo de datos
    => Variables
    => typeof
    => prompt
    => alert
    => console.log
    => Hoisting => es el comportamiento de js donde anota todas las variables declaradas con var y las funciones y se las lleva al inicio del js 
    => scope
    => operadores asignación, aritmeticos, comparativos, logicos
    => if
    => switch
    => operadorTernario
    => for
    => Break y continue
    => while
    => do while
    => for of
    => funciones
    => arrow functions
    => recursivas
    => callbacks
*/

/*
    Number => 1 2 3654 1.5 3.14
    String => 'comillas simples' `back ticks` "comillas dobles"
    Boolean => true false
    undefined => ena variables que esta pero no sabe que tiene
    null => 
*/

/* variables */
// console.log(soyLet); //Cannot access 'soyLet' before initialization
console.log(soyVar); // undefined

let soyLet = "soy let";
soyLet = "jdb";
// let soyLet = 'jdgsjkf' // Error de redeclaracion

var soyVar = "soy var";
soyVar = "jdb"; // reasignacion
var soyVar = "klsdljk"; // redeclarando

const soyConst = "soy const";
// soyConst = 'sjbhsdk' // error variable constante

// console.log(typeof soyVar) // nos devuelve el tipo de variable

// const nombre = prompt('ingresa tu edad')
// console.log(nombre)
// alert('che estas seguro que queres salir?')

let num1 = 5;
num1 *= 5;
// console.log(num1)
/*
 
 == => compara el valor pero no el tipo de dato
 '18' == 18  => true

 === => compara el valor y tambien el tipo de dato
 '18' === 18 => false

    18 != '18' => false => compara el valor
    18 !== '18' => true => valor y tipo de dato

    >
    <
    >=
    <=


    and &&
    or  ||
    NOT !



*/

// console.log( true && true); // => true
// console.log( true && false); // => false
// console.log( false && true); // => false
// console.log( false && false); // => false

// console.log( true || true); // => true
// console.log( true || false); // => true
// console.log( false || true); // => true
// console.log( false ||  false); // => false

// console.log(!true) // => false
// console.log(!false) // => true

// const edad = prompt('Ingresa tu edad')

// if (edad >= 18) {
//     console.log('sos mayor')
// } else{
//     console.log('sos menor')
// }

// const colorFavorito = prompt('Ingresa tu color favorito')
// const colorSanitizado = colorFavorito.toLowerCase() //lleva las mayus a minus
/*
if(colorSanitizado === 'rojo'){  // rojo != Rojo
console.log('te gusta independiente')
}else if (colorSanitizado === 'amarillo'){
    console.log('te gsta boca')
}else if(colorSanitizado === 'verde'){
    console.log('te gusta sportivo desampardos')
}else{
    console.log('te gusta river')
}

switch (colorSanitizado) {
    case 'rojo':
        console.log('te gusta independiente')
        break;
    case 'amarillo':
        console.log('te gusta boca')
        break;
    case 'verde':
        console.log('te gusta sportivo desampardos')
        break;
    default:
        console.log('te gusta river')
        break;
}
*/
// const tenesHambre = prompt('Tenes hambre?')

// if(tenesHambre === 'SI'){
//     console.log('compra una burguer')
// }else{
//     console.log('a dormir')
// }

// Ternario
//  tenesHambre === 'SI' ?
//     console.log('compra una burguer'):
//     console.log('a dormir')

// let myArray = [1, 'sdkjhd', ['Rojo', 'Amarillo'], 54, true]

// 1. Usando un loop `for`, imprimir en la consola los números que sean pares del siguiente arreglo
//  indices        0  1  2  3
// let numbers = [ 1, 2, 3, 4 ]

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// console.log(numbers.length)

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 1){
//         continue;
//     }
//     console.log(numbers[i])
// }


// 2. Usar un loop `while` para contar de 10 hacia atrás, mostrando cada número en la consola.
let i = 10;

// while (i > 0) {
//     console.log(i)
//     //...
//     i--
// }

// do ..while siempre ejecuta una vez por lo menos
// do {
//     console.log(i)
//     i--
// } while (i > 0);

// 3. Dado un array de nombres, usar un `for...of` para imprimir cada nombre en la consola.
const names = ['Ana', 'Luis', 'Carlos', 'Marta', 'Juan'];

// for(let name of names){
//     console.log(name)
// }

const str = 'Hola como estas?'

// for(let caracter of str){
//     console.log(caracter)
// }

// Funciones => las funciones son bloques de codigo (instrucciones) que declaramos y la podemos usar en otra parte del codigo, procesa una entrada y devuelve una salida

function saludar (){
    console.log('Hola Mundo!')
}

// saludar()
// arrow functions => funciones anonimas

const suma = (a, b) => {
    return a + b
}

const mult = (a, b) => {
    console.log(a * b)
}

// suma(5, 6) * 5

//       a=11     b
// mult( suma(5, 6), 5  )

const returnArray = () => {
    const arr = []

    for(let i = 0; i < 20; i++){
        if(i % 2 === 1){
            continue
        }
        arr.push(i) // sirve para agregar valores a un arr
    }    
    return arr
}
// console.log(returnArray())

// 5. Factorial de un número:
// Escribir una función recursiva que calcule el factorial de un número dado pasado por parametro.
// funciones recursivas se llaman asi misma dentro de ellas
// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

const factorial = (num) => {

    if(num === 0 || num === 1){
        return 1
    }

    return num * factorial(num - 1)
}

// console.log(factorial(10))

// Secuencia de Fibonacci
    // F(n)=F(n−1)+F(n−2)
    // investigar y Escribir una función recursiva que devuelva el número de Fibonacci en la posición `n` ingresada.
    // f(1) = 1
    // f(0) = 0

    // f(6) = f(5)          +            f(4)
    //     F(4) + f(3)               F(3) + f(2)