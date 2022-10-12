

import mongoose from "mongoose";


//mongoose.set("useCreateIndex", true)
mongoose.connect("mongodb://localhost/api1", {          // para conectarse a la bd se pone el nombre de la bd
    useNewUrlParser: true,
    useUnifiedTopology : true,
    //useFindandModify: true
}) 

    .then (db => console.log('Base de datos Conectada'))
    .catch (error => console.log(error))