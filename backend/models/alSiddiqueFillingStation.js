const mongoose = require("mongoose");

const alSiddiqueSchema = new mongoose.Schema({
    // 2 sup 2 hsd
    // sup current rading 
    sup1_currentReading: {
        type: Number,
        required: true,
    },
    sup2_currentReading: {
        type: Number,
        required: true,
    },
    // sup last reading 
    lastReadingSup1: {
        type: Number, 
        required: true,
    },
    lastReadingSup2: {
        type: Number,
        required: true,
    },
    // sup computer sale 
    comSaleSup1: {
        type: Number,
        required: true,
    },
    comSaleSup2: {
        type: Number,
        required: true,
    },
    // sup sold quantity 
    supSoldQty: {
        type: Number,
        required: true,
    },
    // sup Sale Amount
    supSaleAmount: {
        type: Number,
        required: true,
    },
    // sup Profit
    supProfit: {
        type: Number,
        required: true,
    },
    // hsd current reading 
    hsd1_currentReading: {
        type: Number,
        required: true,
    },
    hsd2_currentReading: {
        type: Number,
        required: true,
    },
    // hsd last reading 
    lastReadingHsd1: {
        type: Number,
        required: true,
    },
    lastReadingHsd2: {
        type: Number,
        required: true,
    },
    // hsd computer sale 
    comSalehsd1: {
        type: Number,
        required: true,
    },
    comSalehsd2: {
        type: Number,
        required: true,
    },
    // hsd sold quantity 
    hsdSoldQty: {
        type: Number,
        required: true,
    },
    // hsd Sale Amount
    hsdSaleAmount: {
        type: Number,
        required: true,
    },
    // hsd profit 
    hsdProfit: {
        type: Number,
        required: true,
    },
    //    total Sale Amount
    totalSaleAmount: {
        type: Number,
        required: true,
    },
    // sumup all other things
    psoCard: {          // payment
        type: Number,
        required: true,
    },
    HBLCard: {          // payment
        type: Number,
        required: true,
    },
    bankDeposit: {      // payment
        type: Number,
        required: true,
    },
    psoPayment: {       // payment
        type: Number,
        required: true,
    },
    advanceSalary: {       // payment
        type: Number,
        required: true,
    },
    totalPayment: {       // payment
        type: Number,
        required: true,
    },
    // totalPayment = psoCard + HBLCard + bankDeposit + psoPayment + advanceSalary 
    creditWasoli: {           // recieving
        type: Number,
        required: true,
    },
    lubricants: {           // recieving
        type: Number,
        required: true,
    },
    tucShop: {              // recieving
        type: Number,
        required: true,
    },
    // pre Closing
    preClosing: {       // recieving
        type: Number,
        required: true,
    },
    cashFromOtherPumps: {       // recieving
        type: Number,
        required: true,
    },
    totalRecieving: {       // recieving
        type: Number,
        required: true,
    },
    // totalRecieving = creditWasoli + lubricants + tucShop + preClosing + cashFromOtherPumps 
    miscPayment: {          // expense
        type: Number,
        required: true,
    },
    miscOther: {         // expense
        type: Number,
        required: true,
    },
    // total Expense
    totalExpense: {      // expense
        type: Number,
        required: true,
    },
    // totalExpense = miscOther + miscPayment 

    // closing = (totalSaleAmount + totalRecieving) - (totalExpense + totalPayment)

    // total Profit

    totalProfit: {
        type: Number,
        required: true,
    },
    // closing 
    closing: {
        type: Number,
        required: true,
    },
    netProfit: {
        type: Number,
        required: true,
    },
    // sale and purchase rate of petrol and diesel 
    sup_purchase_rate: {
        type: Number,
        required: true,
    },
    sup_sale_rate: {
        type: Number,
        required: true,
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
        type: String,
        required: true,
    },
})



module.exports = mongoose.model("alSiddiques", alSiddiqueSchema)