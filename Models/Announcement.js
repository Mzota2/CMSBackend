const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
    agenda:{
        type:String
    },

    date:{
        type:String
    },

    time:{
        type:String
    },
    description:{
        type:String
    },
    duration:{
        type:Number
    }

}, {timestamps:true});


const announcementModel = mongoose.model('announcement', announcementSchema);
module.exports = announcementModel;