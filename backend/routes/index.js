const express = require('express');

const router = express.Router();

const Register = require('../controllers/collegeRegister');

router.post('/college/register', Register.collegeRegister);
router.post('/student/register',Register.studentRegister);
router.get('/college',Register.getAllCollege);
router.get('/student',Register.getAllstudent);
router.get('/college/:id',Register.getCollegebyId);


module.exports = router;

