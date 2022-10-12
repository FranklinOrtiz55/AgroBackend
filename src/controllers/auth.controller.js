
import User from "../models/users.js";
import config from "../config.js";
import jwt from "jsonwebtoken"
import Roles from "../models/roles.js"
import generarJWT from "../helpers/jwt.js"

export const singUp = async(req, res)=>{

    const {fecha, nombre, apellido, correo, contrasena1, roles}= req.body;
    console.log (req.body);

    const newUser = new User ({
        fecha, 
        nombre,
        apellido,
        correo,
        contrasena1: await User.encryptPass(contrasena1),
        roles
    })

    console.log(newUser);


    // codigo para verificar si se esta recibiendo un rol valido y guardarlo no con el nombre sino con el o los id

    if (roles){
        const foundRole = await Roles.find({name: {$in: roles}});    // se busca si existe el rol o roles
        newUser.roles = foundRole.map(role=> role._id);             // se asignan los id de cada rol. 
    } else {
        const role = await Roles.findOne({name: "Operario"});       // si no llega ningun rol
        newUser.roles = [role._id];                             // se asigna el de Operario.
    }


    const savedUser = await newUser.save();

    //const token = jwt.sign({id: savedUser._id }, config.SECRET, {expiresIn: 86400})
    const token = await generarJWT(savedUser.id, savedUser.nombre);   // jwt.sign({id: savedUser._id }, config.SECRET, {expiresIn: 86400})

    console.log(savedUser);

    res.status(200).json({mensaje: "Registro Creado Correctamente", token: token, nombreUsuario: savedUser.nombre, rolesUsuario: savedUser.roles});         // devuelve al front el ususario y el token para ser utilizado en el ingreso a la proxima pantalla.
    //res.json("sing Up");
};



// codigo para el login de usuarios ya registrados

export const singIn = async(req, res)=>{

    const userFound = await User.findOne({correo: req.body.correo}).populate("roles");      // se busca el correo en la bd
    if (!userFound) return res.status(400).json({ token: 'null', message: " usuario incorrectos"}) // si no esta se deveulve el error "usuario no encontrado"

    const matchPass = await User.compararPass(req.body.contrasena1, userFound.contrasena1)
    
    if (!matchPass) return res.status(401).json({token: 'null', message: "clave incorrecta"})     //"clave Invalida"
    
    console.log(userFound);                                                         // si se encuentra se devuelve el dato 

    //const token = jwt.sign({id: userFound._id}, config.SECRET, {expiresIn: 86400})
    //const token = jwt.sign({id: userFound._id, nombre: userFound.nombre}, config.SECRET, {expiresIn: 400})     // cambio de expiracion
    const token = await generarJWT(userFound.id, userFound.nombre);

    res.json({mensaje:"usuario Correcto", token: token, nombreUsuario: userFound.nombre, rolesUsuario: userFound.roles, userId: userFound.id})                                                           // sa debe devolver un token si el usuario existe

};
