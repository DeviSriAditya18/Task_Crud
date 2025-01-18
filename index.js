const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');
const tasksRouter = require('./routers/tasksRouter');

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected..");
}).catch(err=>{
    console.log(err);
});


const app=express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));


const PORT = process.env.PORT;


app.use('/api/auth', authRouter);
app.use('/api/tasks', tasksRouter);


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
