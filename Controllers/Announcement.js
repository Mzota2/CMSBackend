const Announcement = require('../Models/Announcement');

const createAnnouncement = async(req, res)=>{
    try {
        const {date, time,agenda}=req.body;
        const newAnnouncement= await Announcement.create({
            date,
            time,
            agenda,
        });

        res.json(newAnnouncement);
    } catch (error) {
        console.log(error);
    }
}

const updateAnnouncement = async(req, res)=>{
    try {
        const {date, time,agenda}= req.body;
        const {id} = req.params;
        const foundAnnouncement = await Announcement.findById(id);
        if(foundAnnouncement){
            const updatedAnnouncement = await Announcement.findOneAndUpdate({_id:id},{
                date,
                time,
                agenda
            }, {new:true});

            res.json(updatedAnnouncement);
        }
        else{
            res.status(404);
        }

        
    } catch (error) {
        console.log(error);
    }
}
const removeAnnouncement = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundAnnouncement = await Announcement.findById(id);
        if(foundAnnouncement){
            await foundAnnouncement.deleteOne();
            res.json('deleted successfully');
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

const getAnnouncement = async(req, res)=>{
    try {
        const {id} = req.params;
        const foundAnnouncement = await Announcement.findById(id);
        if(foundAnnouncement){
            res.json(foundAnnouncement)
        }

        else{
            res.json(404);
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllAnnouncements = async(req, res)=>{
    try {
        const allAnnouncements = await Announcement.find();
        if(allAnnouncements.length){
            res.json(allAnnouncements)
        }
        else{
            res.status(404);
        }
        
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    createAnnouncement,
    updateAnnouncement,
    getAnnouncement,
    removeAnnouncement,
    getAllAnnouncements
}