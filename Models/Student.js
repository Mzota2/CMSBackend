const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const studentsSchema = new Schema({
    name:{
        type:String
    },
    username:{
        type:String,
        unique:true
    },
    regNO:{
        type:String,
        unique:true
    },

    email:{
        type:String,
        unique:true
    },

    password:{
        type:String,
        required:true
    },


    isClassRep:{
        type:Boolean,
        default:false
    },

    modules:{
        type:Array,
        default:[]
    },

    program:{
        type:String
    }
}, {timestamps:true});

const studentsModel = mongoose.model('student', studentsSchema);

module.exports = studentsModel;