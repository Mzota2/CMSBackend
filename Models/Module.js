const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
    
    programsId:{
        type:Array,
        default:[]
    },

    name:{
        type:String
    },

    code:{
        type:String
    },

    lecturer:{
        type:String
    },

    classDays:{
        type:Array
    },

    assignments:{
        type:Array
    },
    exams:{
        type:Array,
        default:[]
    }


}, {timestamps:true});

const moduleModel = mongoose.model('module', moduleSchema);
module.exports = moduleModel;