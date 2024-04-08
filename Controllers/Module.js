const Module = require('../Models/Module');

const createModule = async(req, res)=>{
    try {
        const {classesId, name, code, lecturer, classDays, programsId} = req.body;
        const newModule = await Module.create({
            classesId,
            name,
            code,
            lecturer,
            classDays,
            programsId
        });

        res.json(newModule);
        
    } catch (error) {
        console.log(error)
    }
}

const updateModule = async(req, res)=>{
    try {
        const {classesId, exams, assignments, name, code, lecturer, classDays, programsId} = req.body;
        const {id}= req.params;
        const foundModule= await Module.findById(id);
        if(foundModule){
            const updatedModule = await Module.findOneAndUpdate({_id:id}, {
                classesId,
                code,
                name,
                lecturer,
                classDays,
                programsId,
                exams,
                assignments
            }, {returnOriginal:false});

            res.json(updatedModule);
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

const getModule = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundModule = await Module.findById(id);
        if(foundModule){
            res.json(foundModule)
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);s
    }
}

const removeModule = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundModule = await Module.findById(id);
        if(foundModule){
            await foundModule.deleteOne();
            res.json('deleted successfully');
        }

        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

const getAllModules = async(req, res)=>{
    try {
        const allModules = await Module.find();
        if(allModules.length){
            res.json(allModules)
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createModule,
    updateModule,
    getModule,
    removeModule,
    getAllModules
}