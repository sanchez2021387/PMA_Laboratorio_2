const {Router} = require('express');
const {check} = require('express-validator');
const{validarCampos} = require('../middlewares/validar-campos');

const {existeStudent, existeStudentById} = require('../helpers/db-validator');

const router = Router();

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("password", "el password debe de ser mayor a 6 caracteres").isLength({ min: 5 }),
        //check("asignatura", "Asignaturas es obligatorio"),
        check("correo", "Este no es un correo valido").isEmail(),
        check("correo").custom(existeStudent),
        validarCampos
    ], studentPost);

module.exports = router;

