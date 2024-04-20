const Student = require('../Models/Student');
const bcrypt = require('bcrypt');

const AddStudent = async(req, res)=>{
    try {
        const {username, regNO, email, password, isClassRep, classId, modules, program} = req.body;
       // const hash = await bcrypt.hash(password, 10);
        const newStudent = await Student.create({
            username,
            regNO,
            email,
            password,
            isClassRep,
            classId,
            modules,
            program
        });

        res.json(newStudent);
        
    } catch (error) {
        console.log(error)
    }
}

const SignIn = async(req, res)=>{
    try {
        const {email, password} = req.body;
        const foundStudent = await Student.findOne({email:email});
      
        if(foundStudent){
            console.log('found');
            console.log(password);
            const match = await bcrypt.compare(password, foundStudent.password);
            console.log(match);
            if(password === foundStudent?.password){
                res.json(foundStudent);
            }
            else{
                res.status(403).json("wrong password");
            }
            
        }
        else{

            res.status(404).json("student not found");
        }
        
    } catch (error) {
        console.log(error)
    }
}

const updateStudent = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundStudent = await Student.findById(id);
        if(foundStudent){
            const {username, regNO, email, program, password, isClassRep, classId, modules} = req.body;
            
            let hash;
            if(password){
                hash = await bcrypt.hash(password, 10);
            }
          
            const student =  await Student.findOneAndUpdate({_id:id}, {
                username,
                regNO,
                email,
                password,
                isClassRep,
                classId,
                modules,
                program
           }, {returnOriginal:false});
    
            res.json(student);
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

const removeStudent = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundStudent = await Student.findById(id);

        if(foundStudent){
            await foundStudent.deleteOne();
            res.json('deleted successfully')
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

const getStudent = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundStudent = await Student.findById(id);
        if(foundStudent){
            res.json({name:foundStudent.name, regNO:foundStudent.regNO, email:foundStudent.email, classId:foundStudent.classId, isClassRep:foundStudent.isClassRep})
        }
        else{
            res.status(404);
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllStudents = async(req, res)=>{
    try {
        const allStudents = await Student.find();
        if(allStudents.length){
            res.json(allStudents)
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    AddStudent,
    SignIn,
    updateStudent,
    getStudent,
    removeStudent,
    getAllStudents
}