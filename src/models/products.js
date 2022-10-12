
/*  archivo para generar un modelo para guardar los productos en la base de datos, 
los productos se guardan con el nombre que tiene el modelo exportado en plural, 
en este caso productos*/


import  pkg from "mongoose";

const { Schema, model } = pkg;

const producSchema = new Schema ({
    nombre: String,
    categoria: String,
    imagen: String,
    precio: Number
}, {
    timestamps : true,
    versionKey: false
})

export default model('producto', producSchema);   // se exporta el modelo, segun el esquema anterior.

