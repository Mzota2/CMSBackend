const express = require('express');
const router = express.Router();

const {
    createSettings,
    updateSettings,
    removeSettings,
    getSettings,
    getAllSettings
} = require('../Controllers/Settings');

router.route('/settings').post(createSettings).get(getAllSettings);
router.route('/settings/:id').put(updateSettings).delete(removeSettings).get(getSettings);

module.exports = router;