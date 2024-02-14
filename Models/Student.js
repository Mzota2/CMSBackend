const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

async function generatePWD(){
    const defaultPwd =  await bcrypt.hash('MUBAS%20@23', 10);
    return defaultPwd;
}

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
        default:generatePWD()
    },


    isClassRep:{
        type:Boolean,
        default:false
    },

    classId:{
        type:String
    }
}, {timestamps:true});

const studentsModel = mongoose.model('student', studentsSchema);

module.exports = studentsModel;