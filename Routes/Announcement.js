const express = require('express');
const router = express.Router();

const {
    createAnnouncement,
    updateAnnouncement,
    removeAnnouncement,
    getAnnouncement,
    getAllAnnouncements
} = require('../Controllers/Announcement');

router.route('/announcement').post(createAnnouncement).get(getAllAnnouncements);
router.route('/announcement/:id').put(updateAnnouncement).delete(removeAnnouncement).get(getAnnouncement);

module.exports = router;