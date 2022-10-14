import User from "../models/users.js";



export const ActualizarUsuario2 = async(Id)=>{

    let usuarioActualizado = await User.updateOne({
        _id: Id
    }, {
        $set: {
            cultivo: true
                    }
    }
    )
     
     //res.json({message: "Usuario Actualizado"});
     
    };