const express = require('express');
const { verProductos, crearProducto, actualizarProducto, borrarProducto } = require('../controllers/productoController');
const router = express.Router();

const{ validarId } = require("../middlewares/validarid");
const { check } = require("express-validator")


/* Get (ver productos). */
router.get('/ver', verProductos);

//Post (crear producto)
router.post('/crear', 
[
    check("codigo")
        .not()
        .isEmpty()
        .withMessage("El codigo debe cargarse")
        .isNumeric()
        .withMessage("El codigo debe ser de tipo numerico"),
    check("marca")
        .not()
        .isEmpty()
        .withMessage("La marca debe cargarse"),
    check("precio")
        .isNumeric()
        .withMessage("El precio debe ser de tipo numerico")
        .isLength({min:0, max:5})
        .withMessage("El precio ingresado debe ser de maximo 5 digitos")
] ,crearProducto);

//Put (actualizar producto)
router.put('/actualizar/:id', 
validarId,
[
    check("codigo")
        .not()
        .isEmpty()
        .withMessage("El codigo debe cargarse")
        .isNumeric()
        .withMessage("El codigo debe ser de tipo numerico"),
    check("marca")
        .not()
        .isEmpty()
        .withMessage("La marca debe cargarse"),
    check("precio")
        .isNumeric()
        .withMessage("El precio debe ser de tipo numerico")
        .isLength({min:0, max:5})
        .withMessage("El precio ingresado debe ser de maximo 5 digitos")
] ,actualizarProducto);

//Delete (borrar producto)
router.delete("/borrar/:id", validarId, borrarProducto)


module.exports = router;