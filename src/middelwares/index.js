/* este archivo se utilizara para importar en el cada uno de los middelwares 
y asi realizar una sola importacion en los demas archivos donde se nececiten*/

import * as authjwt from "./authjwt.js";
import * as verificarSingup from "./verificarSingup.js"




export {authjwt, verificarSingup};