const {Producto} = require("../models/Producto");

const validarId = async (req, res, next) => {
    const item = await Producto.findById(req.params.id);
    if (item !== null) {
        next()
    } else {
        res.status(500).json({msg: "ID no econtrado..."});
    }
};

module.exports={ validarId }