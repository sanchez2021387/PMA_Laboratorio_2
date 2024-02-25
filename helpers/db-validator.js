const Student = require('../models/students');

const existeStudent = async (correo = '') => {
    const existeStudent = await Student.findOne({correo});
    if(existeStudent) {
        throw new Error(`The email ${correo} has already been registered`);
    }
}
const existeStudentById = async (id = '') => {
    const existeStudentById = await Student.findOne({id});
    if(existeStudentById) {
        throw new Error(`The student with the id ${id} does not exist`);
    }    
}
module.exports = {
    existeStudent,
    existeStudentById,
}