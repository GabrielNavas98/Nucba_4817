// CLOUSURE

const generarFuncion = () => {
    const nombre = 'Maxi'

    const mostrarNombre = () => {
        return console.log(`Hola, ${nombre}`)
    }

    return mostrarNombre
}

// console.log(generarFuncion())

// const nuevaFuncion = generarFuncion()

// nuevaFuncion()

// OBJETOS => colección de pares clave,valor, pueden tener propiedades o metodos

const persona = {
    nombre: 'Lionel',
    apellido: 'Messi',
    edad: 35,
    activo: true,
    equipos: ['Barcelona', 'PSG', 'Inter Miami'],
    trofeos: {
        copa: 'Champions',
        liga: 'Liga de España',
        selección: 'Mundial'
    }
}


// //acceder a las props
// console.log(persona.nombre);
// console.log(persona["edad"]);
// console.log(persona.trofeos.copa)

// //agregar propiedades
// persona.pais = 'Argentina'
// persona.edad = 37

// console.log(persona);


// METODOS => funciones dentro del objeto
let persona2 = {
    nombre: 'Lionel',
    apellido: 'Messi',
    edad: 37,
    activo: true,
    equipos: ['Barcelona', 'PSG', 'Inter Miami'],
    trofeos: {
        copa: 'Champions',
        liga: 'Liga de España',
        selección: 'Mundial'
    },
    saludar: function() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    },
    saludar2: () => {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}
//persona2.saludar() // correcto
//persona2.saludar2() // no vincula el this

// const entries =  Object.entries(persona2)// [[key, value], [key, value]]
// console.log(entries)

// const values =  Object.values(persona2) //[value, value]
// console.log(values)

// const keys =  Object.keys(persona2)// [key, key]
// console.log(keys)

//spread operator => ...

// const nums = [1, 2, 3]
// const str = ['Rojo', 'Amarillo']
// const copyNums = [...nums] 
// const arr = [...nums, ...str]

// console.log(nums)
// console.log(copyNums)
// console.log([...arr, 'Azul'])

// const auto = {
//     color: 'Rojo',
//     motor: '1.6'
// }

// const moto = {
//     color: 'Azul',
//     motor: '110',
//     ruedas: 2
// }

// console.log({...moto, ...auto})


//Rest Operator

// const restOperator = (a, b, ...args) => {
//     console.log(a)
//     console.log(b)
//     console.log(args)
// }

// restOperator('amarillo', true, 13, 'hoolis', 5, 5, 6, 7, 8)

// const sacarPromedio = ( nombre, apellido, ...notas) => {
//     //función para sacar promerio de las notas
//     console.log(`${nombre} ${apellido} tiene promedio tanto...`);
    
// }

//Destructuring

const array = [1,2,3,4,5]

//const a = array[0]
//const b = array[1]

const [a, b, ...rest] = array

console.log(a , b, rest);

const obj = {
    nombre: 'Lionel',
    age: 37,
    nacionalidad: 'Argentino'
}

// console.log(`Mi nombre es ${obj.nombre} tengo ${obj.age} años y soy de ${obj.nacionalidad}`)

const {nombre, age, nacionalidad } = obj

console.log(`Mi nombre es ${nombre} tengo ${age} años y soy de ${nacionalidad}`)