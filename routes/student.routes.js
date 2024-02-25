const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')

const { studentDelete, studentPost, studentsPut, asignarCoursesPut } = require('../controllers/student.controller')
const { existeStudent, existeStudentById } = require('../helpers/db-validator');
const { validarCourses } = require('../middlewares/validar-courses');

const router = Router();

router.put(
    "/:id",
    [
        check("id", "The id is not a valid MongoDB format").isMongoId(),
        check("id").custom(existeStudentById),
        validarCourses
    ], studentsPut);


router.put(
    "/:id",
    [
        check("id", "The id is not a valid MongoDB format").isMongoId(),
        check("id").custom(existeStudentById),
        validarCourses
    ], asignarCoursesPut);

router.delete(
    "/:id",
    [
        check("id", "The id is not a valid MongoDB format").isMongoId(),
        check("id").custom(existeStudentById),
        validarCourses
    ], studentDelete);

router.post(
    "/",
    [
        check("name", "The name is mandatory").not().isEmpty(),
        check("password", "The password must be greater than 7 characters").isLength({ min: 7 }),
        //check("subject", "subject is required"),
        check("email", "This is not a valid email").isEmail(),
        check("email").custom(existeStudent),
        validarCampos
    ], studentPost);

module.exports = router;

