
/*  archivo para generar un modelo para guardar los productos en la base de datos, 
los productos se guardan con el nombre que tiene el modelo exportado en plural, 
en este caso productos*/


import  pkg from "mongoose";

const { Schema, model } = pkg;


const inventario_esquema = new Schema ({
    fecha:Date,
    //TipoProducto:Array,
    productoTipo: String,
    valueProductoTipo : Object,
    productoTipo2: String,
    valueProductoTipo2 : Object,
    nombreComercial:String,
    ingredienteActivo:String,
    concentracion:String,
    numeroRegistroIca:String,
    periodoR:Number,
    periodoC:Number,
    fechaIngreso: Date,
    fechaVence : Date,
    lote : String,
    cantidad : Number,
    productoUnidad: String,
    valueProductoUnidad: Object,
    costo : Number,
    factura : String,
    saldototal: Number,
    ValorSaldoTotal: Number,
    responsable: String,
    movimientos: {  fecha: Date,
                    salida: Number,
                    costoSalida: Number,
                    Saldo: Number,
                    ValorSaldo: Number,
                    responsable: String,
                }
}, {
    timestamps : true,
    versionKey: false
})

export default model('Inventario', inventario_esquema);   // se exporta el modelo, segun el esquema anterior.



