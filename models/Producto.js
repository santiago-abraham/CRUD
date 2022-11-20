const mongoose = require("mongoose");

const Schema=mongoose.Schema;
const productoSchema=new Schema({
    codigo: {
        type: Number,
        require: true,
        unique: true
    },
    descripcion: {
        type: String,
        require: true
    },
    marca: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    estaEnOferta: {
        type: Boolean,
        require: false,
    }
});

const Producto=mongoose.model("Producto", productoSchema);

module.exports={Producto};