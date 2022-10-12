/* codigo para crear los roles, la primera vez que se ejecuta el servidor.*/

import Role from "../models/roles.js"
import Labor from "../models/labores.js";

export const crearRoles = async ()=> {

    try {
        
        const contador =  await Role.estimatedDocumentCount();          // se verifica que la coleccion no este creada y se crea con el listado

        if (contador > 0 ) return;

        const valores = await Promise.all ([
            new Role ({name: "Program"}).save(),
            new Role ({name: "Productor"}).save(),
            new Role ({name: "Administrador"}).save(),
            new Role ({name: "Operario"}).save(),
            new Role ({name: "Contable"}).save(),
            new Role ({name: "Tecnico"}).save(),
            new Role ({name: "Auditor"}).save(),
            new Role ({name: "Implementador"}).save(),
            new Role ({name: "Promotor"}).save()
        ]);
        
        console.log(valores);



} catch (error) {
    console.error(error);
}


}

export const crearLabores = async ()=> {

    try {
        
        const contador =  await Labor.estimatedDocumentCount();          // se verifica que la coleccion no este creada y se crea con el listado

        if (contador > 0 ) return;

        const valores = await Promise.all ([
            new Labor ({tipo: "Calibración Equipos"}).save(),
            new Labor ({tipo: "Mantenimiento y desinfección  Equipos"}).save(),
            new Labor ({tipo: "Abonada - Fertilización"}).save(),
            new Labor ({tipo: "Monitoreo de plagas"}).save(),
            new Labor ({tipo: "Cosecha"}).save(),
            new Labor ({tipo: "Poda"}).save(),
            new Labor ({tipo: "Plateo"}).save(),
            new Labor ({tipo: "Ahoyada"}).save(),
            new Labor ({tipo: "Siembra"}).save(),
            new Labor ({tipo: "Resiembra"}).save(),
            new Labor ({tipo: "Aspersión - fumigación"}).save(),
            new Labor ({tipo: "Drench"}).save(),
            new Labor ({tipo: "Encalada"}).save(),
            new Labor ({tipo: "Limpieza"}).save(),
            new Labor ({tipo: "Desyerba"}).save()
        ]);
        
        console.log(valores);



} catch (error) {
    console.error(error);
}


}