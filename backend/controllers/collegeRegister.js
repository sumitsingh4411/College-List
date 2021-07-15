const Joi = require('joi');
const collegeSchema = require('../models/College');
const studentSchema = require('../models/Student');
const Register = {
    collegeRegister(req, res, next) {
        const collegeS = Joi.object({
            collegeId: Joi.string().min(4).max(7).required(),
            name: Joi.string().min(5).max(50).required(),
            founded_year: Joi.string().min(4).max(10),
            city: Joi.string().min(3),
            state: Joi.string().min(3),
            country: Joi.string().min(3),
            students: Joi.number(),
            courses: Joi.array(),
        });

        const { error } = collegeS.validate(req.body);

        if (error) {
            return next(error);
        }
        const { collegeId, name, founded_year, city, state, country, students, courses } = req.body;
        const college = new collegeSchema({
            collegeId,
            name,
            founded_year,
            city, state, country, students, courses
        });
        try {
            const data = college.save();
            console.log(data);
        }
        catch (err) {
            return next(err);
        };
        res.json({ msg: "success" });
    },
    studentRegister(req, res, next) {
        const studentS = Joi.object({
            studentId: Joi.string().min(4).max(7).required(),
            collegeId: Joi.string().min(4).max(7).required(),
            name: Joi.string().min(5).max(50).required(),
            year_of_batch: Joi.string().min(4).max(10),
            skills: Joi.array(),
        });

        const { error } = studentS.validate(req.body);
        if (error) {
            return next(error);
        }
        const { collegeId, name, year_of_batch, studentId, skills } = req.body;
        const student = new studentSchema({
            collegeId,
            name,
            year_of_batch,
            skills,
            studentId
        });
        try {
            const data = student.save();
            console.log(data);
        }
        catch (err) {
            return next(err);
        };
        res.json({ msg: "success " });
    },
    getCollegebyId(req, res, next) {
        let p = req.params.id;
        if (p.codePointAt(0) >= 97 && p.codePointAt(0) <= 122) {
            try {
                collegeSchema.find({ name: p }, (err, result) => {
                    if (err) return next(err);
                    res.json({ msg: "success", data: result });
                })
            } catch (err) {
                return next(err);
            }
        }
        else {
            try {
                collegeSchema.find({ collegeId: p }, (err, result) => {
                    if (err) return next(err);
                    res.json({ msg: "success", data: result });
                })
            } catch (err) {
                return next(err);
            }
        }

    },
    getAllCollege(req, res, next) {
        try {
            collegeSchema.find({}, (err, result) => {
                if (err) return next(err);
                res.json({ msg: "success", data: result });
            })
        } catch (err) {
            return next(err);
        }

    },
    getAllstudent(req, res, next) {
        try {
            studentSchema.find({}, (err, result) => {
                if (err) return next(err);
                res.json({ msg: "success", data: result });
            })
        } catch (err) {
            return next(err);
        }

    }
}
module.exports = Register;