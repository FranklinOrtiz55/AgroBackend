
/*  archivo para generar un modelo para guardar los usuarios en la base de datos, 
los productos se guardan con el nombre que tiene el modelo exportado en plural, 
en este caso users*/

import  pkg from "mongoose";
//import bcrypt from "bcrypt.js";
import bcryptjs from "bcryptjs";

const { Schema, model } = pkg;


import Role from "./roles.js";

const userSchema = new Schema ({
    fecha: {
        type: Date,
        required: true
    },
    nombre: {
        type : String,
        required: true

    },
    apellido: {
        type : String,
        required: true

    },
    correo: {
        type : String,
        unique: true
    },
    contrasena1: {
        type: String,
        required: true
    },
    roles :[{
        ref: "Role",
        type: Schema.Types.ObjectId
    }],
    cultivo: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

// metodo para encriptar las claves.

userSchema.statics.encryptPass = async (contrasena1) => {

const salt = await bcryptjs.genSalt(10);
return await bcryptjs.hash(contrasena1, salt);


}     

// metodo para comparar si la clave es valida o coincide con la guardada.

userSchema.statics.compararPass = async (contrasena1, receivedPass) => {
    return await bcryptjs.compare(contrasena1, receivedPass);
}      




export default model ("User", userSchema);

//export default userSchema;