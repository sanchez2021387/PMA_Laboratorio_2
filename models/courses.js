const { Schema, model } = require("mongoose");
const CoursesSchema = Schema({


    name: {
        type: String,
        required: [true, 'The course name is mandatory']
    },
    estado: {
        type: Boolean,
        default: true
    }
})

module.exports = model('Courses', CoursesSchema)