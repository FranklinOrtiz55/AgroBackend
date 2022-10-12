/* este archivo se utilizara para importar en el cada uno de los middelwares 
y asi realizar una sola importacion en los demas archivos donde se nececiten*/

import * as authRoutes from "./auth.routes.js";
import * as productRoutes from "./products.routes.js";
import * as userRoutes from "./user.routes.js";
import * as cultivoRoutes from "./cultivo.routes.js";





export {authRoutes, productRoutes, userRoutes, cultivoRoutes};