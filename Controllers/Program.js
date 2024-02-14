const Program = require('../Models/Program');

const createProgram = async(req, res)=>{
    try {
        const {name, code, year, departmentId}=req.body;
        const newProgram= await Program.create({
            name,
            code,
            year,
            departmentId
        });

        res.json(newProgram);
    } catch (error) {
        console.log(error);
    }
}

const updateProgram = async(req, res)=>{
    try {
        const {name, code, year, departmentId}=req.body;
        const id = req.params;
        const foundProgram = await Program.findById(id);
        if(foundProgram){
            const updatedProgram = await foundProgram.updateOne({
                name,
                code,
                year,
                departmentId
            }, {new:true});

            res.json(updatedProgram);
        }
        else{
            res.status(404);
        }

        
    } catch (error) {
        console.log(error);
    }
}
const removeProgram = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundProgram = await Program.findById(id);
        if(foundProgram){
            await foundProgram.deleteOne();
            res.json('deleted successfully');
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

const getProgram = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundProgram = await Program.findById(id);
        if(foundProgram){
            res.json(foundProgram)
        }

        else{
            res.json(404);
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllPrograms = async(req, res)=>{
    try {
        const allPrograms = await Program.find();
        if(allPrograms.length){
            res.json(allPrograms)
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    createProgram,
    updateProgram,
    getProgram,
    removeProgram,
    getAllPrograms
}