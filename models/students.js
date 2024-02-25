const { Schema, model} = require('mongoose');
const StudentSchema = Schema({
    
    nombre: {
        type: String,
        required: [true, 'The name is required']
    },
    correo: {
        type: String,
        required: [true, 'The Email is required']
    },

    password: {
        type: String,
        required: [true, 'The password is required']
    },
    asignatura: {
        type: [String]
    },
    role: {
        type:String,
        default: "STUDENT_ROLE" 
    }
});

module.exports = model('Student', StudentSchema)