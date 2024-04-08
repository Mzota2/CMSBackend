const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programSchema = new Schema({
    name:{
        type:String
    },
    code:{
        type:String
    }
    ,
    year:{
        type:String
    },

    modules:{
        type:Array,
        default:[]
    },
    departmentId:{
        type:String,
        default:"electricalengineeringd2"
    }

    


}, {timestamps:true});

const programModel = mongoose.model('program', programSchema);

module.exports = programModel;