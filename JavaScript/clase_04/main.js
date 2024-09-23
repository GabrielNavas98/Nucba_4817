// FUNCIONES
function saludar () {
    console.log('Hola, soy una función')
}

// saludar();

function sumar(){
    let num1 = 5
    let num2 = 2

    let result = num1 + num2
    console.log(result)
}

// sumar()

// Parametros son "variables" que se pueden utilizar dentro de la funcion
function saludoPersonal(nombre){
    console.log(`Hola ${nombre}`)
}

// saludoPersonal('Agustin')

//parametros por defecto
function descripcionPersonal(nombre, edad = 35){
    console.log(`Hola soy ${nombre} y tengo ${edad} años`);
}

// descripcionPersonal('pepito')
// descripcionPersonal('pepito', 18)

//RETURN
function sumarV2(num1, num2) {
    return num1 + num2
}

// console.log(sumarV2(5, 6))


function imprimirNumeroSiEsMenor(num){
    if(num > 10 ){
        return;
    }
    
    console.log(num)
}


// imprimirNumeroSiEsMenor(50)

function multiplicar(a, b) {
    return a * b
}

// console.log(sumarV2(multiplicar(5,2), 3));

// arrow function
//sintaxis
// const restar = (parametros) => {
    //codigo a ejectutar
// }

const restar = (a, b) => {
    return a - b
}
// console.log(restar(60, 25))

//In Line
const dividir = (a, b) => a / b
// console.log(dividir(50, 5))


// funcion recursiva => una funcion que se llama a si misma
const cuentaAtras = (numero) => {
    if(numero === 0){
        return
    }
    console.log(numero)
    return cuentaAtras(numero - 1)
}

// cuentaAtras(50)

/*
    1. la entrada es 5
    2. pregunta, 5 es igual a 0 ?
    3. no, imprimi 5
    4. se llama otra vez a la funcion 5-1
    ---
    1. la entrada es 4
    2. pregunta, 4 es igual a 0 ?
    3. no, imprimi 4
    4. se llama otra vez a la funcion 4-1 

    asi hasta cero, y en 3 retornaria
*/
const duplicar = (num) => {
    num = num * 2
    console.log(num)
    
    if(num > 100){
        return console.log('Te fuiste')
    }

    return duplicar(num)
}
// duplicar(1)

//pa la casa Fibonacci => invesigar y realizar con recursividad


//CALLBACK => una funcion que recibe como parametro otra funcion 

const alertHola = (nombre) => {
    alert(`hola ${nombre}`)
}
// alertHola('Juan')
const consoleHola = (nombre) => {
    console.log(`hola ${nombre}`)
}
// consoleHola('Valentin')

const procesarEntrada = (callback) => {
    const nombre = prompt('Ingresa tu nombre pls') 
    callback(nombre)
    //alertHola(nombre)
}

// procesarEntrada(alertHola)
procesarEntrada(consoleHola)
