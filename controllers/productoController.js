const { validationResult } = require("express-validator");
const {Producto}=require("../models/Producto");

const verProductos = async (req,res)=>{
    const productos=await Producto.find();
    res.json({productos});
};

const crearProducto=async(req, res) =>{
    try{
    const producto=new Producto(req.body);
    await producto.save();
    res.status(201).json({msg:"El producto ha sido guardado exitosamente.",
producto: producto,
});
} catch (error){
    console.log(error.message)
}
};

const actualizarProducto = async (req,res)=>{
    try {
        const error=validationResult(req);
        if (error.isEmpty()) {
            await Producto.findByIdAndUpdate(req.params.id, req.body);
            res.status(201).json({msg: "Producto actualizado"});
        } else{
            res.status(501).json({msg: error})
        }
    } catch (error) {
        console.log(error.message);
    }
}

const borrarProducto = async(req, res) => {
    try {
        const porducto=await Producto.findByIdAndDelete(req.params.id);
        res.json({msg: "Producto eliminado", producto})
    } catch (error) {
        consle.log(error.message);
    }
} 

module.exports={verProductos, crearProducto, actualizarProducto, borrarProducto}