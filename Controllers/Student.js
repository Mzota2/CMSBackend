const Student = require('../Models/Student');
const bcrypt = require('bcrypt');

const AddStudent = async(req, res)=>{
    try {
        const {name, regNO, email, password, isClassRep, classId} = req.body;
        const hash = await bcrypt.hashSync(password, 10);
        const newStudent = await Student.create({
            name,
            regNO,
            email,
            password:hash,
            isClassRep,
            classId
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
            
            if(match){
                res.json({name:foundStudent.name, regNO:foundStudent.regNO, email:foundStudent.email, classId:foundStudent.classId, isClassRep:foundStudent.isClassRep})
            }
            else{
                res.status(403);
            }
            
        }
        else{
            res.status(404);
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
            const {name, regNO, email, password, isClassRep, classId} = req.body;
            const hash = await bcrypt.hash(password, 10);
            const updatedStudent = await foundStudent.updateOne({
                name,
                regNO,
                password:hash,
                isClassRep,
                classId
            }, {new:true});

            res.json(updatedStudent);
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