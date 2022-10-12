
/*  archivo para generar un modelo para guardar los productos en la base de datos, 
los productos se guardan con el nombre que tiene el modelo exportado en plural, 
en este caso productos*/


import  pkg from "mongoose";

const { Schema, model } = pkg;


const productoGeneralSchema = new Schema ({
    fecha:Date,
    //TipoProducto:Array,
    productoTipo: String,
    valueProductoTipo : Object,
    productoTipo2: String,
    valueProductoTipo2 : Object,
    nombreComercial:String,
    ingrediente:String,
    concentracion:String,
    numeroRegistroIca:String,
    periodoR:Number,
    periodoC:Number
}, {
    timestamps : true,
    versionKey: false
})

export default model('productosGenerale', productoGeneralSchema);   // se exporta el modelo, segun el esquema anterior.
