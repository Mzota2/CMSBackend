const Settings = require('../Models/Settings');

const createSettings = async(req, res)=>{
    try {
        const {openingDate, closingDate, startExams, endExams, startMidsemester, endMidsemester}=req.body;
        const newSettings= await Settings.create({
            openingDate,
            closingDate,
            startExams,
            endExams,
            startMidsemester,
            endMidsemester
        });

        res.json(newSettings);
    } catch (error) {
        console.log(error);
    }
}

const updateSettings = async(req, res)=>{
    try {
        const {openingDate, closingDate, startExams, endExams, startMidsemester, endMidsemester}= req.body;
        const {id} = req.params;
        const foundSettings = await Settings.findById(id);
        if(foundSettings){
            const updatedSettings = await Settings.findOneAndUpdate({_id:id},{
                openingDate,
                closingDate,
                startExams,
                endExams,
                startMidsemester,
                endMidsemester
            }, {new:true});

            res.json(updatedSettings);
        }
        else{
            res.status(404);
        }

        
    } catch (error) {
        console.log(error);
    }
}
const removeSettings = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundSettings = await Settings.findById(id);
        if(foundSettings){
            await foundSettings.deleteOne();
            res.json('deleted successfully');
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

const getSettings = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundSettings = await Settings.findById(id);
        if(foundSettings){
            res.json(foundSettings)
        }

        else{
            res.json(404);
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllSettings = async(req, res)=>{
    try {
        const allSettings = await Settings.find();
        if(allSettings){
            res.json(allSettings)
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}


module.exports ={
    createSettings,
    updateSettings,
    getSettings,
    removeSettings,
    getAllSettings
}