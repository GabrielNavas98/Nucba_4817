/*
    Tipo de datos en Js
- Number: 1 / 35 / 3.14151617 / 454852
- String: "Hola mundo!" / 'Hola Mundo!' / `Hola Mundo!`
- Booleanos : true / false
- Undefined: algo no definido
- null: algo que esta declarado pero no tiene una asignación (no tiene valor)

*/

// Variables
var numeroA // declaración
numeroA = 5 // asiganación

var numeroB = 10

//console.log() lo usamos para mostrar algo en consola
console.log(numeroA)
console.log(numeroB)

//sumamos o concatenamos numeros
var resultado = numeroA + numeroB

console.log(resultado)

var numeroC
console.log(numeroC)//undefined

//concatenamos texto
var textoA = 'Harry';
var textoB = 'Potter';
console.log(textoA + " " + textoB);


console.log(numeroA + textoA); //'5Harry' transforma el numero a string

//Var
//podemos redeclarar las variables con el mismo nombre y asignar un nuevo valor
console.log(tipoVar); //undefined
var tipoVar = 'Hola Soy un var';
console.log(tipoVar);
var tipoVar = 'Otro ejemplo'
console.log(tipoVar)

//let
/*
no vamos a volver declarar variables con el mismo nombre y si podemos reasignar su valor
*/
let tipoLet = 'Hola soy un Let'
// tipoLet = 'Otro ejemplo' -> ✅ podemos reasignar
// let tipoLet = 'Otro ejemplo' -> ❌ no se puede redeclarar
console.log(tipoLet)

//const

const nombreConst = 'Gabriel'
console.log(nombreConst);
//nombreConst = 'Pablo' // ❌ no se puede reasignar una variable tipo constante


// typeof
/* podemos saber que tipo de datos estamos manejando*/

console.log(typeof 5)
console.log(typeof "5")
console.log(typeof false);
console.log(typeof 3.1415616);
console.log(typeof numeroA)


// Operadores 
/*

+   => sumas
-   => restas
*   => multiplicacion
/   => division
++  => incrementar en uno, suma 1
--  => decrementa en uno, resta 1
%   => modulos, nos da el resto 
**  => calcular la base a la potencia del exponte

*/
var numeroUno = 10;
var numeroDos = 5;

//sumar
console.log(numeroUno + numeroDos)
// resta
console.log(numeroUno - numeroDos)
//mult
console.log(numeroUno * numeroDos);
//division
console.log(numeroUno / numeroDos);
//incrementar
console.log(++numeroUno);
//decremantar
console.log(--numeroDos);



// prompt()

const nameUsuario = prompt('Ingresa tu Nombre:')
// console.log(+nameUsuario) => devuelve un numero por el signo mas que esta delante
// console.log(Number(nameUsuario)) => devuelve un numero
// console.log(nameUsuario) => devuelve un string
console.log(typeof nameUsuario)

//alert
alert(`Hola ${nameUsuario}!`)