//Metodos de strings

// Metodo => es una funcion dentro un objeto

let miString = 'Hola Mundo!'
// console.log(miString);
//Length
// console.log(miString.length); //11

// toUpperCase() / toLowerCase()

// console.log(miString.toLowerCase());//hola mundo!
// console.log(miString.toUpperCase()); //HOLA MUNDO!

//.replace() => devuelve un string nuevo

let nuevoString = 'Hola soy un string, y soy largo'

const replaceString = nuevoString.replace('soy','somos')
// console.log(replaceString);

// .replaceAll() cambia todas las ocurrencias
// console.log(nuevoString.replaceAll(' ', '-'))

//let resultado = nuevoString.replace('hola', 'buenas') //no lo cambia por que es js caseSensitive

//solución
let resultado = nuevoString.toLowerCase().replace('hola','buenas')

// console.log(resultado); 

//.indexof() => nos devuelve el indice que ocupa el caracter recibido por parametro, dentro del string

let texto = 'Hola mundo!, amamos JS'

// console.log(texto.indexOf('!'));//10
// console.log(texto.indexOf('Hola'));//0
// console.log(texto.indexOf('hola'));// -1
// console.log(texto.indexOf(',', 12));//-1
// console.log(texto.indexOf(',', 10));//11

//.trim()
// let nombre = prompt('Igresa tu nombre')
// console.log(nombre);
// console.log(nombre.trim());


//.split()
let stringSplit = 'Hola soy Lionel Andres Messi campeón de mundo'

console.log(stringSplit.split(' '));//['Hola', 'soy', 'Lionel', 'Andres', 'Messi', 'campeón', 'de', 'mundo']
console.log(stringSplit.split('o'));


//typeof => nos devuelve el tipo de dato

let num = 5
let str =  'jkjshf'
let bool = false
let miArray = [1,2,3,4,5,7]

// console.log(typeof num);//number
// console.log(typeof str);//string
// console.log(typeof bool);//boolean
// console.log(typeof miArray); //object

//.repeat(n)
let nombre = 'Francisco ,'
// console.log(nombre.repeat(3));

//.charAt(index)
// console.log(nombre.charAt(50));// ''
// console.log(nombre.charAt(5));// 'i'
// console.log(nombre.charAt(nombre.length - 1));// ','

//.concat()

let stringConcat = 'Lionel'
// console.log(stringConcat.concat(' Messi'));
// console.log(stringConcat.concat([1, 2, 3, () => {}]));
// console.log([1,2,3].concat('Messi'));
// console.log([1,2,3].concat([1, 2, 4]));

//StartsWith()
// let textoStart = 'Veamos la consola'
// console.log(textoStart.startsWith('Vea'));//true
// console.log(textoStart.startsWith('Veamos'));//true
// console.log(textoStart.toLowerCase().startsWith('veamos'));//true
// console.log(textoStart.startsWith(' '));//false

//endWith()
// console.log(textoStart.endsWith('Vea'));//false
// console.log(textoStart.endsWith('a'));//true
// console.log(textoStart.endsWith('la'));//true
// console.log(textoStart.endsWith('consola'));//true

//.includes()
const stringInclude = 'Hola soy un string y incluyo caracteres'
// console.log(stringInclude.includes('H'));//true
// console.log(stringInclude.includes('?'));//false
// console.log(stringInclude.includes('Chau'));//false

const arrayIncludes = ['rojo', 'azul', 'Violeta']

// console.log(arrayIncludes.includes('rojo'));
// console.log(arrayIncludes.includes('violeta'));



const textoSlice = 'Veamos la consola'
//extraer una seccion de un string y nos devuelve un string nuevo (incluye el caracter de inicio pero no el de final)
console.log(textoSlice.length);//17
console.log(textoSlice.slice(0));
console.log(textoSlice.slice(5));
console.log(textoSlice.slice(5, 8));
console.log(textoSlice.slice(5, 18));
console.log(textoSlice.slice(10, 16));


//crear una funcion que reciba dos parametros, el primero es un string y el segundo  es un string pero debemos de buscarlo en el primero, si se encuentra que lo consoleguee y si no que diga que no lo encontro


const checkString = (stringUno, stringDos) => {
    let stringUnoMinus = stringUno.toLowerCase()
    let stringDosMinus = stringDos.toLowerCase()

    const isInString = stringUnoMinus.includes(stringDosMinus)

    isInString ? 
    console.log(`Se encontro el ${stringDos} dentro del string ${stringUno}`)
    :
    console.log(`no se encontro ${stringDos}, intenta con otro string`);
}

checkString('Hola soy un string', 'hola')

