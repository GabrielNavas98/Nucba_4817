import { suma, resta } from "./assets/utilitiesNumber.js";
console.log(suma(5, 6));
console.log(resta(5, 6));

import {
  capitalize as mayusStr,
  reverseString,
} from "./assets/utilitiesStr.js";

console.log(mayusStr("Hola Mundo"));
console.log(reverseString("Hola Mundo!"));

import * as utilidades from "./assets/utilitiesNumber.js";
console.log(utilidades.suma(5, 9));

//Loadash
import _ from "lodash";
console.log(_.capitalize("hola mundo!"));
console.log(_.kebabCase("Hola mundo!"));
console.log(_.snakeCase("Hola mundo!"));
