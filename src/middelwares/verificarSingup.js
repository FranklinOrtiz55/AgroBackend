
import {ROLES} from "../models/roles.js"
import User from "../models/users.js"



export const checkUsuarioOCorreoDuplicado = async (req, res, next) => {

   // const user =  await User.findOne({nombre : req.body.nombre})
   // console.log ("usuario = " , user)

   // if (user) return res.status(400).json({mensaje: "Ya existe un Usuario con ese nombre  "})
   
    const correo = await User.findOne({correo : req.body.correo})

    if (correo) return res.status(400).json({mensaje: "Ya existe un Usuario con ese correo  "})

    next();
};


export const checkRolExiste = (req, res, next) => {

    if (req.body.roles){

        for (let i = 0; i < req.body.roles.length; i++ ){
            if (!ROLES.includes(req.body.roles[i])){
                return res.status(400).json ({
                    message: `el Rol ${req.body.roles[i]} no existe `
                })
            }
        }
    }
    next();
};