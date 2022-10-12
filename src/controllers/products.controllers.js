

import producto from '../models/products.js'
import productosgenerale from '../models/productosgenerales.js';
import inventario from '../models/inventario.js';
//import { producto, productosGenerales } from '../models/products.js';


//*** funcion para crear los productos */

export const crearProductos = async (req, res) =>{
    //console.log (req.body);     // para mirar lo que llega en la peticion
    const {nombre, categoria, imagen, precio} = req.body;           // se extraen los datos del body del requerimiento
    const nuevoProducto = new producto ({nombre, categoria, imagen, precio});   // se crea un nuevo producto

    const productoGuardado =  await nuevoProducto.save();           // se guarda el producto creado en una variable.

    res.status(201).json(productoGuardado);     // se devuelve al cliente el producto guardado. incluye _id  y las fechas de creacion y actualizacion.

}



//*** funcion para obtener  los productos  de la base de datos */

export const obtenerProductos = async (req, res) =>{
    //res.json('obteniendo productos ss');

    const listado = await producto.find();
    res.status(200).json(listado);

}


export const crearProductosGenerales = async (req, res) =>{
    //console.log (req.body);     // para mirar lo que llega en la peticion
    const {fecha, productoTipo, valueProductoTipo, productoTipo2,  valueProductoTipo2,  nombreComercial, ingrediente, concentracion, numeroRegistroIca, periodoR, periodoC} = req.body;           // se extraen los datos del body del requerimiento
    const nuevoProductoGeneral = new productosgenerale ({fecha, productoTipo, valueProductoTipo, productoTipo2,  valueProductoTipo2,  nombreComercial, ingrediente, concentracion, numeroRegistroIca, periodoR, periodoC});   // se crea un nuevo producto

    const productoGuardado =  await nuevoProductoGeneral.save();           // se guarda el producto creado en una variable.

    res.status(201).json(productoGuardado);     // se devuelve al cliente el producto guardado. incluye _id  y las fechas de creacion y actualizacion.

}


export const obtenerProductosGenerales = async (req, res) =>{
    //res.json('obteniendo productos ss');

    const listado = await productosgenerale.find();  // devuelve todo el objeto 
    res.status(200).json({"data" : listado});
    
    
    //const listado = await productosgenerale.find();  // devuelve todo el objeto 
    //res.status(200).json(listado);                   // devuelve todo el objeto 

    //const listado = await productosgenerale.distinct("nombreComercial");  // devuelve solo los nombres
    //res.status(200).json(listado);                   // devuelve solo los nombres comerciales



}

//** funcion para crear un producto en el inventario  */
export const crearInventario = async (req, res) =>{
    //console.log (req.body);     // para mirar lo que llega en la peticion
    const {fecha, 
        productoTipo, 
        valueProductoTipo, 
        productoTipo2,  
        valueProductoTipo2,  
        nombreComercial, 
        ingrediente, 
        concentracion, 
        registroIca, 
        periodoC, 
        periodoR, 
        fechaIngreso,
        fechaVence,
        lote,
        cantidad,
        productoUnidad,
        valueProductoUnidad,
        costo,
        factura,
        saldototal,
        ValorSaldo,
        responsable} = req.body;           // se extraen los datos del body del requerimiento
    const nuevoInventario = new inventario ({
        fecha, 
        productoTipo, 
        valueProductoTipo, 
        productoTipo2,  
        valueProductoTipo2,  
        nombreComercial, 
        ingrediente, 
        concentracion, 
        registroIca, 
        periodoC, 
        periodoR, 
        fechaIngreso,
        fechaVence,
        lote,
        cantidad,
        productoUnidad,
        valueProductoUnidad,
        costo,
        factura,
        saldototal,
        ValorSaldo,
        responsable
    });   // se crea un nuevo producto en el inventario

    const inventarioGuardado =  await nuevoInventario.save();           // se guarda el producto creado en una variable.

    res.status(201).json(inventarioGuardado);     // se devuelve al cliente el producto guardado. incluye _id  y las fechas de creacion y actualizacion.

}




//*** funcion para obtener  un  producto  de la base de datos utilizando el Id */


export const obtenerProductoById = async(req, res) =>{

    const resultado = await producto.findById(req.params.productId);
    res.status(200).json(resultado);
    //console.log(req.params);

}



//*** funcion para actualizar  un  producto  de la base de datos utilizando el Id */

export const actualizarProductoById = async(req, res) =>{
    const productoActualizado = await producto.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(200).json(productoActualizado);
}



//*** funcion para borrar  un  producto  de la base de datos utilizando el Id */

export const borrarProductoById = async(req, res) =>{
    await producto.findByIdAndDelete(req.params.productId);
    res.status(200).json({message:"producto Borrado de la base de datos"}); // el codigo 204 no devuelve respuesta

}