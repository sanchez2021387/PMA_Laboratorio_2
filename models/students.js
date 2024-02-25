const { Schema, model} = require('mongoose');
const StudentSchema = Schema({
    
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    email: {
        type: String,
        required: [true, 'The Email is required']
    },

    password: {
        type: String,
        required: [true, 'The password is required']
    },
    subject: {
        type: [String]
    },
    role: {
        type:String,
        default: "STUDENT_ROLE" 
    }
});

module.exports = model('Student', StudentSchema)