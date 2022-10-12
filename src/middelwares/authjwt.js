/* archivo que verifica si existe un token valido*/

import jwt from "jsonwebtoken";
import config  from "../config.js";
import User from "../models/users.js"
import Role from "../models/roles.js"
//import generarJWT from "../helpers/jwt.js"




export const verifyToken = async (req, res, next) => {

    try {


        const Token = req.headers["x-acces-token"];     // como se debe enviar en la peticion
        
    
        //console.log(Token);
    
        if (!Token) return res.status(403).json({message: "no se recibio un Token"}); // si no se recibe un token, no se continua
    
        //const decoded = jwt.verify(Token, config.SECRET);           // si se recibe   el token se comprueba que coincida con la clave secreta.
        const decoded = jwt.verify(Token, process.env.SECRET);           // si se recibe   el token se comprueba que coincida con la clave secreta.
    
        req.userId = decoded.uid;                                    // para poder utilizar el id en las demas funciones de validadcion
        req.nombre = decoded.nombre;                                    // para poder utilizar el nombre en las demas funciones de validadcion
        //console.log("userId = " , req.userId)
        //console.log("userId = " , decoded)

        const user = await User.findById(req.userId, {contrasena1: 0}); // se busca el usuario pero no se utiliza el pass
        //console.log(user);
    
        if (!user) return res.status(404).json({message: "no se encuentra el usuario"}); // si no se encuentra el usuario , no se continua
    
        //console.log(decoded);
    
        next();     // para continuar con la siguiente funcion.
        
    } catch (error) {
        return res.status(401).json({token: 'null', message: "No autorizado"});
        
    }

}


    /* funciones para verificar los roles */

    export const  isProgram = async (req, res, next) =>{// para verificar si es contable
        const user = await User.findById(req.userId);       // busca en todos los usuarios el usuario por el id recibido
        const roles = await Role.find({_id:{$in: user.roles}});     //  busca dentro de los roles si existe el de Contable
    
        for (let i = 0; i < roles.length; i++){
            if (roles[i].name === "Program"){         
                next();                                 // si existe continua con la siguiente funcion
                return;
            }
           
        }
        return res.status(403).json({message: "requiere rol de Programador"})     // si no existe, retorna un mensaje y no continua con la otra funcion
        };


        export const  isProductor = async (req, res, next) =>{// para verificar si es contable
            const user = await User.findById(req.userId);       // busca en todos los usuarios el usuario por el id recibido
            const roles = await Role.find({_id:{$in: user.roles}});     //  busca dentro de los roles si existe el de Contable
        
            for (let i = 0; i < roles.length; i++){
                if (roles[i].name === "Productor"){         
                    next();                                 // si existe continua con la siguiente funcion
                    return;
                }
               
            }
            return res.status(403).json({message: "requiere rol de Productor"})     // si no existe, retorna un mensaje y no continua con la otra funcion
            };


export const  isAdmin = async (req, res, next) =>{      // para verificar si es administrador
    const user = await User.findById(req.userId);       // busca en todos los usuarios el usuario por el id recibido
    const roles = await Role.find({_id:{$in: user.roles}});     //  busca dentro de los roles si existe el de Admin

    for (let i = 0; i < roles.length; i++){
        if (roles[i].name === "Administrador"){         
            next();                                 // si existe continua con la siguiente funcion
            return;
        }
       
    }
    return res.status(403).json({message: "requiere rol de administrador"})     // si no existe, retorna un mensaje y no continua con la otra funcion
    
};


export const  isOperario = async (req, res, next) =>{// para verificar si es operario
    const user = await User.findById(req.userId);       // busca en todos los usuarios el usuario por el id recibido
    const roles = await Role.find({_id:{$in: user.roles}});     //  busca dentro de los roles si existe el de Operario

    for (let i = 0; i < roles.length; i++){
        if (roles[i].name === "Operario"){         
            next();                                 // si existe continua con la siguiente funcion
            return;
        }
       
    }
    return res.status(403).json({message: "requiere rol de Operario"})     // si no existe, retorna un mensaje y no continua con la otra funcion
    
   

};


export const  isContable = async (req, res, next) =>{// para verificar si es contable
    const user = await User.findById(req.userId);       // busca en todos los usuarios el usuario por el id recibido
    const roles = await Role.find({_id:{$in: user.roles}});     //  busca dentro de los roles si existe el de Contable

    for (let i = 0; i < roles.length; i++){
        if (roles[i].name === "Contable"){         
            next();                                 // si existe continua con la siguiente funcion
            return;
        }
       
    }
    return res.status(403).json({message: "requiere rol de Contable"})     // si no existe, retorna un mensaje y no continua con la otra funcion
    };

    export const  isTecnico = async (req, res, next) =>{// para verificar si es contable
        const user = await User.findById(req.userId);       // busca en todos los usuarios el usuario por el id recibido
        const roles = await Role.find({_id:{$in: user.roles}});     //  busca dentro de los roles si existe el de Contable
    
        for (let i = 0; i < roles.length; i++){
            if (roles[i].name === "Tecnico"){         
                next();                                 // si existe continua con la siguiente funcion
                return;
            }
           
        }
        return res.status(403).json({message: "requiere rol de Tecnico"})     // si no existe, retorna un mensaje y no continua con la otra funcion
        };


        export const  isAuditor = async (req, res, next) =>{// para verificar si es contable
            const user = await User.findById(req.userId);       // busca en todos los usuarios el usuario por el id recibido
            const roles = await Role.find({_id:{$in: user.roles}});     //  busca dentro de los roles si existe el de Contable
        
            for (let i = 0; i < roles.length; i++){
                if (roles[i].name === "Auditor"){         
                    next();                                 // si existe continua con la siguiente funcion
                    return;
                }
               
            }
            return res.status(403).json({message: "requiere rol de Auditor"})     // si no existe, retorna un mensaje y no continua con la otra funcion
            };

            export const  isImplementador = async (req, res, next) =>{// para verificar si es contable
                const user = await User.findById(req.userId);       // busca en todos los usuarios el usuario por el id recibido
                const roles = await Role.find({_id:{$in: user.roles}});     //  busca dentro de los roles si existe el de Contable
            
                for (let i = 0; i < roles.length; i++){
                    if (roles[i].name === "Implementador"){         
                        next();                                 // si existe continua con la siguiente funcion
                        return;
                    }
                   
                }
                return res.status(403).json({message: "requiere rol de Implementador"})     // si no existe, retorna un mensaje y no continua con la otra funcion
                };

                export const  isPromotor = async (req, res, next) =>{// para verificar si es contable
                    const user = await User.findById(req.userId);       // busca en todos los usuarios el usuario por el id recibido
                    const roles = await Role.find({_id:{$in: user.roles}});     //  busca dentro de los roles si existe el de Contable
                
                    for (let i = 0; i < roles.length; i++){
                        if (roles[i].name === "Promotor"){         
                            next();                                 // si existe continua con la siguiente funcion
                            return;
                        }
                       
                    }
                    return res.status(403).json({message: "requiere rol de Promotor"})     // si no existe, retorna un mensaje y no continua con la otra funcion
                    };