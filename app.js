const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

//routes
const moduleRoutes = require('./Routes/Module');
const programRoutes = require('./Routes/Program');
const studentRoutes = require('./Routes/Student');
const groupRoutes = require('./Routes/Group');
const timeTableRoutes = require("./Routes/Timetable");
const announcementRoutes = require("./Routes/Announcement");

//middlewares
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:['http://localhost:3000','http://localhost:2000', 'https://electrical-department-d2-cms.onrender.com']
}));
app.use(cookieParser());

//routes

app.use('/cms', moduleRoutes);
app.use('/cms', programRoutes);
app.use('/cms', studentRoutes);
app.use('/cms', groupRoutes);
app.use('/cms', timeTableRoutes);
app.use('/cms', announcementRoutes);

const MONGODB_URL= process.env.MONGODB_URL;
const PORT = process.env.PORT || 2000;
const connectDB =async()=>{
    try {
       const response =  await mongoose.connect(MONGODB_URL, {});
       app.listen(PORT, ()=>{
        console.log(`Listening to port ${PORT}`);
       });
        
    } catch (error) {
        console.log(error);
    }
    
}

connectDB();