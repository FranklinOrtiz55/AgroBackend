
/*  archivo para generar un modelo para guardar el listado de labores  en la base de datos, 
las labores se guardan con el nombre que tiene el modelo exportado en plural, 
en este caso Labores*/

import  pkg from "mongoose";

//export const LABORES = ["Program","Cliente","Administrador", "Operario", "Contable", "Tecnico", "Auditor", "Implementador", "Promotor"]; // se exporta un listado de roles para la verificacion

const { Schema, model } = pkg;

const laborSchema = new Schema(
    {
tipo: String,
},
{
    versionKey: false,
}

) ;

export default model("Labore", laborSchema);