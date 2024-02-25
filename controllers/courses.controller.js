const { response, json } = require('express');
const Courses = require('../models/courses');

const courseGet = async (req, res = response) => {
    const { limite, desde } = req.query;
    const query = { estado: true };

    const [total, courses] = await Promise.all([
        Courses.countDocuments(query),
        Courses.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        courses
    })
}

const getCoursesByid = async (req, res) => {
    const { id } = req.params;
    const courses = await Courses.findOne({ _id: id });

    res.status(200).json({
        courses
    })
}

const coursesPost = async (req, res) => {
    const { name } = req.body;
    const courses = new Courses({ name });

    await courses.save();
    res.status(200).json({
        courses
    });
}

const courseDelete = async (req, res) => {
    const { id } = req.params;
    await Courses.findByIdAndUpdate(id, { estado: false });
    const courses = await Courses.findOne({ _id: id });

    res.status(200).json({
        msg: 'Courses successfully removed',
        courses
    });
}

const coursesPut = async (req, res) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    await Courses.findByIdAndUpdate(id, resto);

    const courses = await Courses.findOne({ _id: id });

    res.status(200).json({
        msg: 'Courses successfully updated',
        courses
    });
}

module.exports = {
    courseDelete,
    courseGet,
    coursesPost,
    coursesPut,
    getCoursesByid
}