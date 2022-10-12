import { authjwt, verificarSingup } from "../middelwares/index.js";

import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user.controller.js"

// se verifica antes de crear el usuario : que exista el token, que el que lo este creando sea admin, que no existan correos o usuarios con el mismo nombre y que existan los roles.

router.post('/crearUsuario', [authjwt.verifyToken, authjwt.isAdmin, verificarSingup.checkRolExiste, verificarSingup.checkUsuarioOCorreoDuplicado], userCtrl.CrearUsuario);

router.get('/',  userCtrl.ObtenerUsuarios);
router.get('/renovar', authjwt.verifyToken,  userCtrl.revalidarToken);

export default router;
