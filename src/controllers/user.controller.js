
import generarJWT from "../helpers/jwt.js";
import User from "../models/users.js";


export const ActualizarUsuario = async(req, res)=>{

    let usuarioActualizado = await User.updateOne({
        _id: req.body.usuario
    }, {
        $set: {
            cultivo: true
                    }
    }
    )
     
     res.json({message: "Usuario Actualizado"});
     
    };

   



export const CrearUsuario = async(req, res)=>{
/*  const {userName, email, password, roles}= req.body;
 console.log (req.body);

 const newUser = new User ({
     userName,
     email,
     password: await User.encryptPass(password)
     //roles
 })  */

 res.json({message: "Creando Usuario"});
 
};

export const ObtenerUsuarios = async(req, res) =>{

    const resultado = await User.find({}, {contrasena1: false});            // no se busca la contraseña, se pueden eliminar otros campos tambien
    res.status(200).json(resultado);
    console.log('resultado = ', resultado);

};



    /* fncion para revalidar el token*/

    export const revalidarToken = async (req, res) => {

        const uid = req.userId;
        const nombre = req.nombre;

        // generar un nuevo token para devolver al usuario

        const token = await generarJWT(uid, nombre);

        res.json ({
          ok : true,
          uid: uid,
          nombre, 
          token
        })

    }

