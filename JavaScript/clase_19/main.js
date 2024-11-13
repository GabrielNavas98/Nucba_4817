//Opción 1 - Importar todo el módulo
import * as funciones from "./funciones.js";

funciones.saludar("Mundo");
console.log(funciones.nombre);
funciones.despedir("Mundo");

//Opción 2 - Import una funcion específica y renombrarla
import { saludar as saludo, despedir as despedida } from "./funciones.js";

saludo("Lucas");
despedida("Lucas");

//Opción 3 - Importar una función

import { saludar, despedir, nombre } from "./funciones.js";

saludar("Mundo2");
despedir("Mundo2");
console.log(nombre);
