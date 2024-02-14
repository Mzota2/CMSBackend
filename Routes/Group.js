const express = require('express');
const router = express.Router();

const {
    createGroup,
    updateGroup,
    getGroup,
    removeGroup,
    getAllGroups
} = require('../Controllers/Group');

router.route('/group').post(createGroup).get(getAllGroups);
router.route('/group/:id').delete(removeGroup).get(getGroup).put(updateGroup);

module.exports = router;