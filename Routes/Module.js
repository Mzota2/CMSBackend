const {
    createModule,
    updateModule,
    getModule,
    removeModule,
    getAllModules
}= require('../Controllers/Module');

const express = require('express');
const router = express.Router();

router.route('/module').post(createModule).get(getAllModules);
router.route('/module/:id').put(updateModule).delete(removeModule).get(getModule);


module.exports= router;