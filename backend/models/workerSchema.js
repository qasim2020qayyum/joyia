const mongoose = require("mongoose");


const workerSchema = new mongoose.Schema({        

    name: {
        type: String,
        required: true,        
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    idCard: {
        type: String,
        required: true,    
    },
    pumpName: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    advanceSalary: {
        type: Number,
    },
    remainingSalary: {
        type: Number,
    }
    


})

module.exports = mongoose.model("workers", workerSchema)