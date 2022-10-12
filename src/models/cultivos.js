
/*  archivo para generar un modelo para guardar los datos del cultivo y los lotes  en la base de datos, 
los cultivos se guardan con el nombre que tiene el modelo exportado en plural, 
en este caso cultivos*/


import  pkg from "mongoose";

const { Schema, model } = pkg;

const cultivoSchema = new Schema ({

    Fecha: Date,

    usuario :{                                  // se utiliza para guardar el id del usuario dueño del cultivo
        require: true,
        ref: "User",
        type: Schema.Types.ObjectId
    }, 
    //usuario2: String,

    nombreCultivo: String,
    nombreCertificacion: Array,
    valuePais: Object,
    pais: String,
    valueDepartamento: Object,
    departamento: String,
    valueMunicipio: Object,
    municipio: String,
    corregimiento: String,
    valueCultivoTipoProducto: Object,
    tipoProducto: String,
    valueCultivoLotes: Object,
    cantidadLotes: String,
    
    
    nombreLote1: String,
    cantidadArbolesLote1: Number,
    fechaLote1: Date,
    distanciaArbolesLote1: Number,
    distanciaSurcosLote1: Number,
    valueCultivoTipoTrazoLote1: Object,
    tipoTrazoLote1: String,

    nombreLote2: String,
    cantidadArbolesLote2: Number,
    fechaLote2: Date,
    distanciaArbolesLote2: Number,
    distanciaSurcosLote2: Number,
    valueCultivoTipoTrazoLote2: Object,
    tipoTrazoLote2: String,

    nombreLote3: String,
    cantidadArbolesLote3: Number,
    fechaLote3: Date,
    distanciaArbolesLote3: Number,
    distanciaSurcosLote3: Number,
    valueCultivoTipoTrazoLote3: Object,
    tipoTrazoLote3: String,
    
   
    nombreLote4: String,
    cantidadArbolesLote4: Number,
    fechaLote4: Date,
    distanciaArbolesLote4: Number,
    distanciaSurcosLote4: Number,
    valueCultivoTipoTrazoLote4: Object,
    tipoTrazoLote4: String,
    
   
    nombreLote5: String,
    cantidadArbolesLote5: Number,
    fechaLote5: Date,
    distanciaArbolesLote5: Number,
    distanciaSurcosLote5: Number,
    valueCultivoTipoTrazoLote5: Object,
    tipoTrazoLote5: String,
    
 
   
}, {
    timestamps : true,
    versionKey: false
})

export default model('cultivo', cultivoSchema);   // se exporta el modelo, segun el esquema anterior.

