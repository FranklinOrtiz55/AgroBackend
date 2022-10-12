
import { Router } from "express";
import { checkUsuarioOCorreoDuplicado, checkRolExiste } from "../middelwares/verificarSingup.js";   // se importan para verificar el usuario antes de crearse

const router = Router();

import * as authCtrl from "../controllers/auth.controller.js"

router.post('/singup', [checkUsuarioOCorreoDuplicado, checkRolExiste ], authCtrl.singUp);

router.post('/singin', authCtrl.singIn);


export default router;
