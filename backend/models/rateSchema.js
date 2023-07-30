const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
   
    sup_purchase_rate: {
        type: Number,
        required: true,
        default: 0,
    },
    sup_sale_rate: {
        type: Number,
        required: true,
        default: 0,
    },
    hsd_purchase_rate: {
        type: Number,
        required: true,
    },
    hsd_sale_rate: {
        type: Number,
        required: true,
    },
    
    createdDate: {
        type: Date,
        default: Date.now,
      },

})

module.exports = mongoose.model("rates", rateSchema)