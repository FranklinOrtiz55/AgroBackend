
import { Router } from "express";
import * as productCtr from '../controllers/products.controllers.js';   // se importan todos los controladores.
//import { verifyToken } from "../middelwares/authjwt.js";
import { authjwt } from "../middelwares/index.js";  // mediante el index se exportan todos los middelwares.

const router = Router();

router.get ('/', productCtr.obtenerProductos);   // ruta para obtener el listado de productos, se llama al controlador 
router.get ('/productosGenerales', productCtr.obtenerProductosGenerales);   // ruta para obtener el listado de productos, se llama al controlador 
router.post ('/productosGenerales', productCtr.crearProductosGenerales);   // ruta para crear un producto General , se llama al controlador 

/*  ruta para el inventario crear, actualizar.*/ 

router.post ('/inventario', productCtr.crearInventario);   // ruta para crear un producto en el inventario  , se llama al controlador 


router.post ('/',[authjwt.verifyToken, authjwt.isAdmin],  productCtr.crearProductos);  // se utiliza el middelware para verificar el token y verificar si es admin para crear

router.get ('/:productId', productCtr.obtenerProductoById); // obtiene el producto segun el Id

router.put ('/:productId', [authjwt.verifyToken, authjwt.isAdmin], productCtr.actualizarProductoById);  // actualiza un producto segun el Id

router.delete ('/:productId', [authjwt.verifyToken, authjwt.isAdmin], productCtr.borrarProductoById);   // borra el producto con el Id indicado.



export default router;
