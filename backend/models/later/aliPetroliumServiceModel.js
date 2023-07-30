const mongoose = require("mongoose");

const aliPetrolium = new mongoose.Schema({
   
    sup1_currentReading: {
        type: String,
        required: true,
    },
    sup2_currentReading: {
        type: String,
        required: true,
    },
    sup3_currentReading: {
        type: String,
        required: true,
    },
    sup4_currentReading: {
        type: String,
        required: true,
    },
    hsd1_currentReading: {
        type: String,
        required: true,
    },
    hsd2_currentReading: {
        type: String,
        required: true,
    },
    psoCard: {
        type: String,
        required: true,
    },
    HBLCard: {
        type: String,
        required: true,
    },
    bankDeposit: {
        type: String,
        required: true,
    },
    lubricants: {
        type: String,
        required: true,
    },
    tucShop: {
        type: String,
        required: true,
    },
    miscPayment: {
        type: String,
        required: true,
    },
    miscOther: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
      },

})

module.exports = mongoose.model("aliPetrolium", aliPetrolium)