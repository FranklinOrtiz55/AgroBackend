


//import { isObjectIdOrHexString } from 'mongoose';
import cultivos from '../models/cultivos.js';
import cultivo from '../models/cultivos.js';



//import { producto, productosGenerales } from '../models/products.js';


//*** funcion para crear los productos */

export const crearCultivos = async (req, res) =>{
    //console.log (req.body);     // para mirar lo que llega en la peticion
    const {
        Fecha,
        usuario, 
        nombreCultivo,
        nombreCertificacion,
        valuePais,
        pais,
        valueDepartamento,
        departamento,
        valueMunicipio,
        municipio,
        corregimiento,
        valueCultivoTipoProducto,
        tipoProducto,
        valueCultivoLotes,
        cantidadLotes,
        
        
        nombreLote1,
        cantidadArbolesLote1,
        fechaLote1,
        distanciaArbolesLote1,
        distanciaSurcosLote1,
        valueCultivoTipoTrazoLote1,
        tipoTrazoLote1,
    
        nombreLote2,
        cantidadArbolesLote2,
        fechaLote2,
        distanciaArbolesLote2,
        distanciaSurcosLote2,
        valueCultivoTipoTrazoLote2,
        tipoTrazoLote2,
    
        nombreLote3,
        cantidadArbolesLote3,
        fechaLote3,
        distanciaArbolesLote3,
        distanciaSurcosLote3,
        valueCultivoTipoTrazoLote3,
        tipoTrazoLote3,
        
       
        nombreLote4,
        cantidadArbolesLote4,
        fechaLote4,
        distanciaArbolesLote4,
        distanciaSurcosLote4,
        valueCultivoTipoTrazoLote4,
        tipoTrazoLote4,
        
       
        nombreLote5,
        cantidadArbolesLote5,
        fechaLote5,
        distanciaArbolesLote5,
        distanciaSurcosLote5,
        valueCultivoTipoTrazoLote5,
        tipoTrazoLote5} = req.body;           // se extraen los datos del body del requerimiento


    const nuevoCultivo = new cultivo ({
        Fecha,
        usuario,

        nombreCultivo,
        nombreCertificacion,
        valuePais,
        pais,
        valueDepartamento,
        departamento,
        valueMunicipio,
        municipio,
        corregimiento,
        valueCultivoTipoProducto,
        tipoProducto,
        valueCultivoLotes,
        cantidadLotes,
        
        
        nombreLote1,
        cantidadArbolesLote1,
        fechaLote1,
        distanciaArbolesLote1,
        distanciaSurcosLote1,
        valueCultivoTipoTrazoLote1,
        tipoTrazoLote1,
    
        nombreLote2,
        cantidadArbolesLote2,
        fechaLote2,
        distanciaArbolesLote2,
        distanciaSurcosLote2,
        valueCultivoTipoTrazoLote2,
        tipoTrazoLote2,
    
        nombreLote3,
        cantidadArbolesLote3,
        fechaLote3,
        distanciaArbolesLote3,
        distanciaSurcosLote3,
        valueCultivoTipoTrazoLote3,
        tipoTrazoLote3,
        
       
        nombreLote4,
        cantidadArbolesLote4,
        fechaLote4,
        distanciaArbolesLote4,
        distanciaSurcosLote4,
        valueCultivoTipoTrazoLote4,
        tipoTrazoLote4,
        
       
        nombreLote5,
        cantidadArbolesLote5,
        fechaLote5,
        distanciaArbolesLote5,
        distanciaSurcosLote5,
        valueCultivoTipoTrazoLote5,
        tipoTrazoLote5});   // se crea un nuevo Cultivo

    const cultivoGuardado =  await nuevoCultivo.save();           // se guarda el cultivo  creado en una variable.

    res.status(201).json({"data": cultivoGuardado, mensaje: "Cultivo guardado"});     // se devuelve al cliente el producto guardado. incluye _id  y las fechas de creacion y actualizacion.
    console.log ("cultivo guardado");
}



//*** funcion para obtener  los productos  de la base de datos */

export const obtenerCultivos = async (req, res) =>{
    //res.json('obteniendo productos ss');

    const nombre = req.query.userId;                                    // se usa query porque para usar params se debe poner el parametro en la ruta ejem datosCultivo/:userId
    //console.log("nombre = ", name);
    //console.log("params = ", req.query);
    //console.log("params = ", req.query);
    const listado = await cultivos.find( 
        
       {'usuario': nombre },
       
      //  {}
    );
    res.status(200).json({"data": listado});
    console.log(listado);

}



//*** funcion para actualizar  un  cultivo   de la base de datos utilizando el Id */

export const actualizarCultivoById = async(req, res) =>{
    const cultivoActualizado = await cultivo.findByIdAndUpdate(req.params.cultivoId, req.body, {
        new: true
    })
    res.status(200).json(cultivoActualizado);
}



//*** funcion para borrar  un  cultivo  de la base de datos utilizando el Id */

export const borrarCultivoById = async(req, res) =>{
    await cultivo.findByIdAndDelete(req.params.cultivoId);
    res.status(200).json({message:"cultivo Borrado de la base de datos"}); // el codigo 204 no devuelve respuesta

}