const { validationResult } = require('express-validator');

const Courses = require('../models/courses')


const validarCourses = async (req, res, next) => {
    const { subject } = req.body;
    const error = validationResult(req);
    const coursesDuplicados = subject.filter((course, index) => subject.indexOf(course) !== index);
    const coursesExistentes = await Courses.find({ name: { $in: subject } });

    if (!error.isEmpty()) {
        return res.status(400).json(error);
    }


    //
    if (!Array.isArray(subject) || subject.length > 3) {
        return res.status(400).json({ errors: [{ msg: 'You can only be assigned to 3 courses as a limit.' }] });
    }


    //
    if (coursesDuplicados.length > 0) {
        return res.status(400).json({
            msg: `You cannot be assigned to a course twice: ${coursesDuplicados.join(', ')}`
        })
    }


    //

    if (coursesExistentes.length !== subject.length) {
        const coursesInexistentes = subject.filter(course => !coursesExistentes.find(c => c.name === course));
        return res.status(400).json({
            msg: `The following courses do not exist : ${coursesInexistentes.join(', ')}`
        })
    }

    next();

}


module.exports = { validarCourses }