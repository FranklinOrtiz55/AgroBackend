//console.log ("trabajando");
import 'dotenv/config' ;
import express  from "express";
//import { json } from "express/lib/response";
//import res from "express/lib/response.js";
import morgan from "morgan";    // para visualizar las peticiones en la consola.
//import pkg from '../package.json';
import cors from "cors";
import productRoutes from './routes/products.routes.js';
import authRoutes from "./routes/auth.routes.js";
import { crearRoles, crearLabores } from "./libs/initialSetup.js";
import userRoutes from "./routes/user.routes.js"
import cultivoRoutes from "./routes/cultivo.routes.js"


//console.log(process.env.SECRET)
//import { DotenvConfigOptions } from "dotenv";
//import pkg from 'dotenv';

//import { cultivoRoutes, userRoutes, authRoutes, productRoutes } from "./routes/index.js";   // no se pueden hacer las importaciones asi, pone error.

const app = express();
crearRoles();               // se crean los roles al iniciar el servidor
crearLabores();             // se crea la lista de labores al iniicar el servidor
app.use (morgan('dev'));
app.use(express.json());
app.use(cors({origin: "*",}));
//app.set('pkg', pkg);

app.get('/', (req, res) =>{
  /*   res.json ({
        name: app.get ('pkg').name,
        author: app.get('pkg').author,
        descripcion: app.get('pkg').descripcion,
        version: app.get('pkg').version

    }) */

    res.json ({
        name: 'nombre proyecto',
        author: 'Franklin'
        
    })

    
} )


app.use('/api/productos', productRoutes);   // todas las rutas de productsRoutes van a iniciar con /productos
app.use('/api/auth', authRoutes);   // todas las rutas de autenticacion  van a iniciar con /api/auth
app.use('/api/usuario', userRoutes);   // todas las rutas de usuarios  van a iniciar con /api/usuario
app.use('/api/cultivo', cultivoRoutes);   // todas las rutas de cultivos  van a iniciar con /api/cultivo

export default app;