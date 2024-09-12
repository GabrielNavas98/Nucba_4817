// Hosting: es el compartamiento de JS de mover las declaraciones de var y las funciones al inicio de nuestro archivo
/*
console.log(nombre);
var nombre = 'Gabriel' //es como que corta "var nombre" y la lleva al principio, no sucede lo mismo con let
*/

// Scope

// var a = 'Estoy Global'

// {
//     var b = 'Estoy dentro de un bloque' //se hace global por hosting
//     console.log(a)
// }

// {
//     let d = 'Estoy dentro de un bloque' // vivir dentro de este bloque
//     const e = 'Tambien toy'
//     // scope local
//     console.log('d', d)
//     console.log('e', e)
//     console.log('a', a)
// }

// console.log(a); //Estoy Global
// console.log(b); //Estoy dentro de un bloque
// console.log(c); //Estoy dentro de un bloque
// console.log(d); //ReferenceError: d is not defined
// console.log(e); // ReferenceError: e is not defined


/*=========Operadores==========*/
//console.log(18 == '18') //true compara solo valor
//console.log(18 === '18') //false estricto compara valor y tipo de dato
// console.log(18 != '18') // false
// console.log(18 !== '18') // true

// console.log(9 > 9) //false
// console.log(9 >= 9) //true

// console.log(7 < 9) //true
// console.log(7 <= 5) //false

// && => AND

//console.log(5 == '5' && 10 < 11); //(true && true) => true
//console.log(18 > 7 && 9 < 9 ); //(true && false) => false

// || => OR
// console.log(18 > 7 || 9 < 9 ); //(true && false) => true

// ! => NOT
// console.log(!true) //false
// console.log(!false) //true


/* Estructura if (sintaxis)

if(condicion){
    codigo a ejecutar si condicion es true
}

if(condicion){
    codigo a ejecutar si condicion es true
}else{
    codigo a ejecutar si condicion es false
}

*/

// let llueve = true

// if(llueve) {
//     console.log('Che sali con piloto')
// }else{
//     console.log('Sali tranqui')
// }
// console.log('estoy fuera')

// let series = prompt(
//     '¿Que serie te gusta mas? (Braking Bad, Vikingos, La casa de papel)'
// )

// if(series === 'Braking Bad'){
//     console.log('buenisima la serie')
// } else if(series === 'Vikingos'){
//     console.log('Re sangrienta')
// }else if(series === 'La casa de papel'){
//     console.log('me llamo paris')
// } else{
//     console.log('Che te di opciones')
// }

// let series = prompt(
//     '¿Que serie te gusta mas? (Braking Bad, Vikingos, La casa de papel)'
// )
/*Sintaxis de del switch */
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// switch(series){
//     case 'Braking Bad':
//         console.log('buenisima la serie')
//         break;
//     case 'Vikingos':
//         console.log('Re sangriento')
//         break
//     case 'La casa de papel':
//         console.log('Soy 2° francia')
//         break;
//     default:
//         console.log('Che te di opciones')
//         break
// }

let datoIngresado = prompt(
    'Ingresa tu edad'
)

let edad = +datoIngresado // fuerzo a numero

if(isNaN(edad)){
    console.log('che ingresa un numero')
}else {
    edad >= 18 
    ? console.log('Sos mayor') 
    : console.log('sos menor')
}
