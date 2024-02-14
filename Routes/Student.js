const express = require('express');
const router = express.Router();

const {
    AddStudent,
    SignIn,
    updateStudent,
    getStudent,
    removeStudent,
    getAllStudents
} = require('../Controllers/Student');

router.route('/student').post(AddStudent).get(getAllStudents);
router.route('/student/:id').put(updateStudent).get(getStudent).delete(removeStudent);
router.route('/student/signin').post(SignIn);

module.exports = router;