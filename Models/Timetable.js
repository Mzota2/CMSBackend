const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timetableSchema = new Schema({
    programId:{
        type:String
    },

    module:{
        type:String
    },

    day:{
        type:String
    }
    ,
    time:{
        type:String
    },

    venue:{
        type:String,
       
    }

}, {timestamps:true});

const timetableModel = mongoose.model('timetable', timetableSchema);

module.exports = timetableModel;