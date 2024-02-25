const {response, json} = require('express');
const bcryptjs = require('bcryptjs');
const Student = require('../models/students');

const studentPost = async (req, res) => {
    const {name, email, password, subject } = req.body;
    const student = new Student({name, email, password, subject});
    
    const salt = bcryptjs.genSaltSync(password, salt);
    student.password = bcryptjs.hashSync(password, salt);

    await student.save();
    res.status(200).json({
        student
    })
}

const studentDelete = async(req, res) => {
    const {id} =req.params;
    await Student.findByIdAndUpdate(id, {estado: false})
    const student = await Student.findOne ({_id: id});

    res.status(200).json({
        msg: 'Student successfully removed',
        student
    });
}

const studentsPut = async (req, res) => {
    const { id } = req.params;
    const { _id, password, email, role, ...resto } = req.body;

    await Student.findByIdAndUpdate(id, resto);
    const student = await Student.findOne({ _id: id });

    res.status(200).json({
        msg: 'Student successfully updated',
        student
    });
}

const asignarCoursesPut = async (req, res) => {
    const {id} = req.params; 
    const {_id, password, email, role, name, ...resto} = req.body;


    await Student.findByIdAndUpdate(id, resto);

    const student = await Student.findOne ({_id: id});

    res.status(200).json({
        msg: 'successfully assigned to courses',
        student
    });

    
}

module.exports = {
    studentPost,
    studentsPut,
    studentDelete,
    asignarCoursesPut
}