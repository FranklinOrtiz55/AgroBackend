
// archivo para generar el jwt que sera utilizado para la revalidacion del token cada cierto tiempo y al momento de crear o de ingresar un usuario
// funciona com o una promesa. 

import jwt from "jsonwebtoken";

const generarJWT = (uid, nombre) => {
    return new Promise ((resolve, reject) => {

        const payload = {uid, nombre};

        jwt.sign(payload, process.env.SECRET, {                                // se utiliza la clave de las variables de entorno.
            expiresIn: "2h"                                                 // uracion del token 2 horas
        }, (error, token)=>{                                                // callback

            if (error){                                                     // si ocurre un error 
                console.log(error);
                reject("No se pudo generar el token");
            }
            resolve(token);                                                 // sino, se devuelve el token.
        })                                              

    })

}


export default (generarJWT);
/* 

module.exports = {
    generarJWT
}
 */
