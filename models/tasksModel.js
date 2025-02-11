const mongoose = require('mongoose');

const taskSchema=mongoose.Schema({
    title:{
        type: String,
        required: [true,'title is required'],
        trim: true,
    },
    description:{
        type: String,
        required: [true,'description is required'],
        trim: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status:{
        type: String,
        required: [true,'status is required'],
        trim: true,
    },

},{timestamps: true});

module.exports=mongoose.model("Task", taskSchema);