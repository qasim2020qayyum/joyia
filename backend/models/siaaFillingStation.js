const mongoose = require("mongoose");

const siaaFillingStationSchema = new mongoose.Schema({
    // sup current rading 
    sup1_currentReading: {
        type: Number,
        required: true,
    },
    sup2_currentReading: {
        type: Number,
        required: true,
    },
    sup3_currentReading: {
        type: Number,
        required: true,
    },
    sup4_currentReading: {
        type: Number,
        required: true,
    },
    sup5_currentReading: {
        type: Number,
        required: true,
    },
    sup6_currentReading: {
        type: Number,
        required: true,
    },
    sup7_currentReading: {
        type: Number,
        required: true,
    },
    sup8_currentReading: {
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
    lastReadingSup3: {
        type: Number,
        required: true,
    },
    lastReadingSup4: {
        type: Number,
        required: true,
    },
    lastReadingSup5: {
        type: Number,
        required: true,
    },
    lastReadingSup6: {
        type: Number,
        required: true,
    },
    lastReadingSup7: {
        type: Number,
        required: true,
    },
    lastReadingSup8: {
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
    comSaleSup3: {
        type: Number,
        required: true,
    },
    comSaleSup4: {
        type: Number,
        required: true,
    },
    comSaleSup5: {
        type: Number,
        required: true,
    },
    comSaleSup6: {
        type: Number,
        required: true,
    },
    comSaleSup7: {
        type: Number,
        required: true,
    },
    comSaleSup8: {
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
    createdDate: {
        type: String,
        required: true,
    },
})



module.exports = mongoose.model("siaaFilling", siaaFillingStationSchema)