const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { courseDelete, coursesPost, courseGet, coursesPut, getCoursesByid } = require('../controllers/courses.controller');

const { existeCourse, existeCourseById } = require('../helpers/db-validator');

const router = Router();

router.get("/", courseGet)

router.put(
    "/:id",
    [
        check("id", "The id is not a valid MongoDB format").isMongoId(),
        check("id").custom(existeCourseById),
        validarCampos
    ], coursesPut);

router.delete(
    "/:id",
    [
        check("id", "The id is not a valid MongoDB format").isMongoId(),
        check("id").custom(existeCourseById),
        validarCampos
    ], courseDelete);

router.post(
    "/",
    [
        check("name", "The name is mandatory").not().isEmpty(),
        validarCampos
    ], coursesPost);

module.exports = router;