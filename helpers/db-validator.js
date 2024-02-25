const Student = require('../models/students');
const Courses = require('../models/courses')

const existeStudent = async (email = '') => {
    const existeStudent = await Student.findOne({email});
    if(existeStudent) {
        throw new Error(`The email ${email} has already been registered`);
    }
}

const existeStudentById = async (id = '') => {
    const existeStudentById = await Student.findOne({id});
    if(existeStudentById) {
        throw new Error(`The student with the id ${id} does not exist`);
    }    
}

const existeCourse = async (name = '') => {
    const existeCourse = await Courses.findOne({ name });
    if (existeCourse){
        throw new Error(` The course ${name} has already been registered`);
    }
}
const existeCourseById = async (id = "") => {
    const exiteCourseById = await Courses.findOne({ id });
    if (exiteCourseById) {
        throw new Error(`The Course with id ${id} does not exist`);
    }
}


module.exports = {
    existeStudent,
    existeStudentById,
    existeCourse,
    existeCourseById,
}