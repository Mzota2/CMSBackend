const express = require('express');
const router = express.Router();

const {
    createTimeTable,
    updateTimeTable,
    getTimetable,
    getModuleTimetable,
    deleteTimeTable
} = require('../Controllers/Timetable');

router.route('/timetable').post(createTimeTable).get(getTimetable);
router.route('/timetable/:id').delete(deleteTimeTable).get(getModuleTimetable).put(updateTimeTable);

module.exports = router;