const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const settingsSchema = new Schema({
    openingDate:{
        type:String
    },

    closingDate:{
        type:String
    },

    startExams:{
        type:String
    },

    endExams:{
        type:String
    },

    startMidsemester:{
        type:String
    },

    endMidsemester:{
        type:String
    }

}, {timestamps:true});


const settingsModel = mongoose.model('setting', settingsSchema);
module.exports = settingsModel;