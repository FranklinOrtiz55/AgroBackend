
import { Router } from "express";
//import { checkUsuarioOCorreoDuplicado, checkRolExiste } from "../middelwares/verificarSingup.js";   // se importan para verificar el usuario antes de crearse

const router = Router();

import * as cultivoCtrl from "../controllers/cultivos.controllers.js"

//router.post('/datosCultivo', cultivoCtrl.crearCultivos);
router.post('/datosCultivo', cultivoCtrl.actualizarCultivos);           // para actualizar si existe o crear si no existe un cultivo con ese usuario

router.get('/datosCultivo', cultivoCtrl.obtenerCultivos);


export default router;
