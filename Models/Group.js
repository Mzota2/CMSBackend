const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  
    classesId:{
        type:Array,
        default:[]
    },

    moduleId:{
        type:String
    },
    
    groups:{
        type:Array,
        default:[]
    },

    task:{
        type:String,
        required:true
    }

}, {timestamps:true});


const groupModel = mongoose.model('group', groupSchema);
module.exports = groupModel;