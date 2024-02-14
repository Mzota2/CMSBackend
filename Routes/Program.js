const express = require('express');
const router = express.Router();

const {
    createProgram,
    updateProgram,
    removeProgram,
    getProgram,
    getAllPrograms
} = require('../Controllers/Program');

router.route('/program').post(createProgram).get(getAllPrograms);
router.route('/program/:id').put(updateProgram).delete(removeProgram).get(getProgram);

module.exports = router;