const Timetable  = require("../Models/Timetable");


const createTimeTable = async(req, res)=>{
    try {

        const {programId, day, time, venue} = req.body;

        const newTimeTable = await Timetable.create({
            programId,
            day, 
            time, 
            venue

        });

        res.json(newTimeTable);
        
    } catch (error) {
        console.log(error);
    }
}

const updateTimeTable = async(req, res)=>{
    try {

        const {id} = req.params;
        const foundTimetable = await Timetable.findById(id);

        const {programId, day, time, venue} = req.body;

        if(foundTimetable){
            await foundTimetable.updateOne({
                programId,
                day,
                time,
                venue
            });
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

const deleteTimeTable = async(req, res)=>{
    try {
        const {id} = req.params;

        const foundTimetable = await Timetable.findById(id);
        if(foundTimetable){
            await foundTimetable.deleteOne();
        }

        else{
            res.status(404);

        }
        
    } catch (error) {
        console.log(error);
    }
}

const getTimetable = async(req, res)=>{
    try {
        const timetable = await Timetable.find();

        if(timetable.length){
            res.json(timetable)
        }

        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error)
    }
}

const getModuleTimetable = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundModule = await Timetable.findById(id);
        if(foundModule){
            res.json(foundModule);
        }

        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getTimetable,
    createTimeTable,
    updateTimeTable,
    deleteTimeTable,
    getModuleTimetable
}