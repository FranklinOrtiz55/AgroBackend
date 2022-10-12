
/*  archivo para generar un modelo para guardar los productos en la base de datos, 
los productos se guardan con el nombre que tiene el modelo exportado en plural, 
en este caso roles*/

import  pkg from "mongoose";

export const ROLES = ["Program","Productor","Administrador", "Operario", "Contable", "Tecnico", "Auditor", "Implementador", "Promotor"]; // se exporta un listado de roles para la verificacion

const { Schema, model } = pkg;

const roleSchema = new Schema(
    {
name: String,
},
{
    versionKey: false,
}

) ;

export default model("Role", roleSchema);