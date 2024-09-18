// FOR
// for (desde; hasta; actualizacion){
//     instrucciones a relaizar dentro del bucle
// }

// for(let i = 0; i < 10; i++ ){
//     console.log(i)
// }

// for(let i = 10; i > 0; i-- ){
//     console.log(i)
// }

/*
    1. Inicio, cramos la variable i(index) = 0
    2. Condicion, evalua la condicion
    3. si es true se ejecuta
    4. si es false sale bucle
    5. actualiza el index
    6. volvemos al 2
*/

//BREAK

// for(let i = 0; i < 10; i++){
//     if(i === 5){
//         break
//     }
//     console.log(`el numero es de i es ${i}`)
// }


//CONTINUE

// for(let i = 0; i < 10; i++){
//     if(i === 1){
//         continue
//     }
//     console.log(`el numero es de i es ${i}`)
// }

// for(let i = 0; i < 20; i++ ){
//     if(i % 2 === 0){
//         console.log(`el numero es i: ${i} es par`)
//         continue
//     }
// }


// WHILE
// while (condition) {
//     lo que queremos que se repita
// }
// let i = 0;

// while(i < 10){
//     console.log(`el numero es de i es ${i}`)
//     i++
// }


//DO WHILE 
//ejcuta primero y despues pregunta la condición
// let i = 10

// do{
//     console.log(`el numero de i es ${i}`)
//     i++
// } while(i < 10)


//ARAYS
let transportes = [
    'Auto',
    'Moto',
    'Avión',
    'Camion',
    'Bondi',
    'Barco',
    'Subte',
    'Taxi',
    'Uber'
]

//console.log(transportes) //devuelve el array completo
//console.log(transportes.length) //devuelve el largo (cantidad de elementos) dentro del array

//console.log(transportes[5]); //Barco

// LENGTH => Gallina Tiene Huevos

// for (let i = 0; i < transportes.length; i++) {
//     console.log(`en ${i} tenemos ${transportes[i]}`)
// }


//FOR OF

// for (let vehiculos of transportes){
//     console.log(vehiculos)
// }

// let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

// for(let day of days){
//     if(day === 'Sabado' || day === 'Domingo'){
//         console.log('findeee pa')
//         continue
//     }
//     console.log(day)
// }