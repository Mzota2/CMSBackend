const Group = require('../Models/Group');

const createGroup = async(req, res)=>{
    try {
        const {departmentId, classesId, modulesId, groups, task} = req.body;
        const newGroup = await Group.create({
            departmentId,
            classesId,
            modulesId,
            groups,
            task
        });

        res.json(newGroup);
    } catch (error) {
        console.log(error);
    }
}

const updateGroup = async(req, res)=>{
    try {
        const {departmentId, classesId, modulesId, groups, task} = req.body;
        const {id} = req.params;
        const foundGroup = await Group.findById(id);
        if(foundGroup){
            const updatedGroup = await foundGroup.updateOne({
                departmentId,
                classesId,
                modulesId,
                groups,
                task
            }, {new:true});

            res.json(updatedGroup);
        }
        else{
            res.status(404)
        }
    } catch (error) {
        console.log(error);
    }
}
const getGroup = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundGroup = await Group.findById(id);
        if(foundGroup){
            res.json(foundGroup)
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}
const removeGroup = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundGroup = await Group.findById(id);
        if(foundGroup){
            await foundGroup.deleteOne();
            res.json('removed successfully');
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

const getAllGroups = async(req, res)=>{
    try {
        const allGroups = await Group.find();
        if(allGroups.length){
            res.json(allGroups)
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createGroup,
    updateGroup,
    removeGroup,
    getGroup,
    getAllGroups
}