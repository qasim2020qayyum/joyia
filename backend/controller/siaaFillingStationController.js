const Pump = require("../models/siaaFillingStation")



exports.addSiaaFillingStationData = async (req, res) => {
  // let rateData = await Rates.find()
  let pumpData = await Pump.find()
  // last readings

  if (pumpData.length === 0) {
    const {
      // nosels 
      sup1_currentReading, sup2_currentReading, sup3_currentReading, sup4_currentReading, sup5_currentReading, sup6_currentReading, sup7_currentReading, sup8_currentReading,
      // get super rate 
      sup_purchase_rate, sup_sale_rate,
      // recieving 
      creditWasoli, lubricants, tucShop, cashFromOtherPumps,
      // payment 
      psoCard, HBLCard, bankDeposit, psoPayment, advanceSalary,
      // expense 
      miscPayment, miscOther,
      lastReadingSup1, lastReadingSup2, lastReadingSup3, lastReadingSup4, 
      lastReadingSup5, lastReadingSup6, lastReadingSup7, lastReadingSup8, 
      preClosing
    } = req.body;




    // date 
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const createdDate = `${day} ${month}, ${year}`


    if (
      // nosels 
      !sup1_currentReading || !sup2_currentReading || !sup3_currentReading || !sup4_currentReading ||
      !sup5_currentReading || !sup6_currentReading || !sup7_currentReading || !sup8_currentReading 
    ) {
      return res.status(400).send({
        message: "Please fill all the nosels",
      });
    }
    try {
      // computer sale calculation 
      // petrol 
      let comSaleSup1 = sup1_currentReading - lastReadingSup1;
      let comSaleSup2 = sup2_currentReading - lastReadingSup2;
      let comSaleSup3 = sup3_currentReading - lastReadingSup3;
      let comSaleSup4 = sup4_currentReading - lastReadingSup4;
      let comSaleSup5 = sup5_currentReading - lastReadingSup5;
      let comSaleSup6 = sup6_currentReading - lastReadingSup6;
      let comSaleSup7 = sup7_currentReading - lastReadingSup7;
      let comSaleSup8 = sup8_currentReading - lastReadingSup8;

      // sale amount calculations
      let allSupComSale = comSaleSup1 + comSaleSup2 + comSaleSup3 + comSaleSup4 + comSaleSup5 + comSaleSup6 + comSaleSup7 + comSaleSup8;

      // sup Sale Amount
      let supSaleAmount = allSupComSale * sup_sale_rate;
      let supPurchaseAmount = allSupComSale * sup_purchase_rate;

      // profit 
      let supProfit = supSaleAmount - supPurchaseAmount;
      // total Sale Amount
      let totalSaleAmount = supSaleAmount;
      // total Profit
      let totalProfit = supProfit;
      // other calculations 
      // total Expense
      let totalExpense = miscPayment + miscOther
      // total Recieving
      let totalRecieving = creditWasoli + lubricants + tucShop + preClosing + cashFromOtherPumps
      // total Payment
      let totalPayment = psoCard + HBLCard + bankDeposit + psoPayment + advanceSalary
      let netProfit = totalProfit - totalExpense
      // closing 
      let closingtotal = (totalSaleAmount + totalRecieving) - (totalExpense + totalPayment)
      let closing = Math.floor(closingtotal)


      const newPumpData = new Pump({
        // nosels 
        sup1_currentReading, sup2_currentReading, sup3_currentReading, sup4_currentReading, 
        sup5_currentReading, sup6_currentReading, sup7_currentReading, sup8_currentReading, 

        // last readings  this will come from database 
         lastReadingSup1, lastReadingSup2, lastReadingSup3, lastReadingSup4,
         lastReadingSup5, lastReadingSup6, lastReadingSup7, lastReadingSup8,

        // petrol and deisel rate
        sup_purchase_rate, sup_sale_rate, 

        // payment 
        psoCard, HBLCard, bankDeposit, psoPayment, advanceSalary,
        totalPayment,

        // recieving 
        creditWasoli, lubricants, tucShop, preClosing, cashFromOtherPumps,
        totalRecieving,
        // expense 
        miscPayment, miscOther, totalExpense,


        // computer sale 
        comSaleSup1, comSaleSup2, comSaleSup3, comSaleSup4,
        comSaleSup5, comSaleSup6, comSaleSup7, comSaleSup8,

        // sold quantity 
        supSoldQty: allSupComSale,

        // sale amount calculations
        supSaleAmount, 
        // profit 
        supProfit, totalSaleAmount, totalProfit,
        // other calculations 
        closing, netProfit,
        createdDate
      }
      );

      const pump = await newPumpData.save();

      res.send(pump);
      console.log("Pump Data Successfully Added");
      // }

    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the product.",
        text: "Error From Add Product to Controllers",
      });
    }

  } else {
    const {
      // nosels 
      sup1_currentReading, sup2_currentReading, sup3_currentReading, sup4_currentReading, 
      sup5_currentReading, sup6_currentReading, sup7_currentReading, sup8_currentReading, 
      // get super rate 
      sup_purchase_rate, sup_sale_rate,
      // recieving 
      creditWasoli, lubricants, tucShop, cashFromOtherPumps,
      // payment 
      psoCard, HBLCard, bankDeposit, psoPayment, advanceSalary,
      // expense 
      miscPayment, miscOther,
    } = req.body;
    let lastReadingSup1 = pumpData[pumpData.length - 1].sup1_currentReading
    let lastReadingSup2 = pumpData[pumpData.length - 1].sup2_currentReading
    let lastReadingSup3 = pumpData[pumpData.length - 1].sup3_currentReading
    let lastReadingSup4 = pumpData[pumpData.length - 1].sup4_currentReading
    let lastReadingSup5 = pumpData[pumpData.length - 1].sup5_currentReading
    let lastReadingSup6 = pumpData[pumpData.length - 1].sup6_currentReading
    let lastReadingSup7 = pumpData[pumpData.length - 1].sup7_currentReading
    let lastReadingSup8 = pumpData[pumpData.length - 1].sup8_currentReading

    // pre Closing
    let preClosing = pumpData[pumpData.length - 1].closing





    // date 
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const createdDate = `${day} ${month}, ${year}`


    if (
      // nosels 
      !sup1_currentReading || !sup2_currentReading || !sup3_currentReading || !sup4_currentReading ||
      !sup5_currentReading || !sup6_currentReading || !sup7_currentReading || !sup8_currentReading 
    ) {
      return res.status(400).send({
        message: "Please fill all the nosels",
      });
    }
    try {
      // computer sale calculation 
      // petrol 
      let comSaleSup1 = sup1_currentReading - lastReadingSup1;
      let comSaleSup2 = sup2_currentReading - lastReadingSup2;
      let comSaleSup3 = sup3_currentReading - lastReadingSup3;
      let comSaleSup4 = sup4_currentReading - lastReadingSup4;
      let comSaleSup5 = sup5_currentReading - lastReadingSup5;
      let comSaleSup6 = sup6_currentReading - lastReadingSup6;
      let comSaleSup7 = sup7_currentReading - lastReadingSup7;
      let comSaleSup8 = sup8_currentReading - lastReadingSup8;

      // sale amount calculations
      let allSupComSale = comSaleSup1 + comSaleSup2 + comSaleSup3 + comSaleSup4 + comSaleSup5 + comSaleSup6 + comSaleSup7 + comSaleSup8;

      // sup Sale Amount
      let supSaleAmount = allSupComSale * sup_sale_rate;
      let supPurchaseAmount = allSupComSale * sup_purchase_rate;

      // profit 
      let supProfit = supSaleAmount - supPurchaseAmount;
      // total Sale Amount
      let totalSaleAmount = supSaleAmount;
      // total Profit
      let totalProfit = supProfit;


      // other calculations 
      // total Expense
      let totalExpense = miscPayment + miscOther
      // total Recieving
      let totalRecieving = creditWasoli + lubricants + tucShop + preClosing + cashFromOtherPumps
      // total Payment
      let totalPayment = psoCard + HBLCard + bankDeposit + psoPayment + advanceSalary
      let netProfit = totalProfit - totalExpense
      // closing 
      let closingtotal = (totalSaleAmount + totalRecieving) - (totalExpense + totalPayment)
      let closing = Math.floor(closingtotal)


      const newPumpData = new Pump({
        // nosels 
        sup1_currentReading, sup2_currentReading, sup3_currentReading, sup4_currentReading, 
        sup5_currentReading, sup6_currentReading, sup7_currentReading, sup8_currentReading, 

        // last readings  this will come from database 
        lastReadingSup1, lastReadingSup2, lastReadingSup3, lastReadingSup4,
        lastReadingSup5, lastReadingSup6, lastReadingSup7, lastReadingSup8,

        // petrol and deisel rate
        sup_purchase_rate, sup_sale_rate, 

        // payment 
        psoCard, HBLCard, bankDeposit, psoPayment, advanceSalary,
        totalPayment,

        // recieving 
        creditWasoli, lubricants, tucShop, preClosing, cashFromOtherPumps,
        totalRecieving,
        // expense 
        miscPayment, miscOther, totalExpense,


        // computer sale 
        comSaleSup1, comSaleSup2, comSaleSup3, comSaleSup4,
        comSaleSup5, comSaleSup6, comSaleSup7, comSaleSup8,

        // sold quantity 
        supSoldQty: allSupComSale, 

        // sale amount calculations
        supSaleAmount, 
        // profit 
        supProfit, totalSaleAmount, totalProfit,
        // other calculations 
        closing, netProfit,
        createdDate
      }
      );

      const pump = await newPumpData.save();

      res.send(pump);
      console.log("Pump Data Successfully Added");
      // }

    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the product.",
        text: "Error From Add Product to Controllers",
      });
    }

  }




};

// get 
exports.getSiaaFillingStationData = async (req, res) => {
  let pumpData = await Pump.find()
  if (pumpData.length > 0) {
    res.send(pumpData) 
  } else {
    res.send({ msg: "No user Data found in Database" })
  }
}


//  get in reverse
exports.getSiaaFillingStationDataa = async (req, res) => {
  try {
    let pumpData = await Pump.find().sort({ _id: -1 });
    if (pumpData.length > 0) {
      res.send(pumpData);
    } else {
      res.send({ msg: "No user Data found in Database" });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error fetching data from the database.",
    });
  }
};

// get pump data details
exports.getSiaaFillingStationDataDetails = async (req, res) => {
  let result = await Pump.findOne({ _id: req.params.id })
  if (result) {
    res.send(result)
  } else {
    res.send({ msg: "No user found" })
  }
}

// update 
exports.updateSiaaFillingStationData = async (req, res) => {
  const pumpId = req.params.id; // Assuming you pass the pump ID in the URL parameter

  try {
    // Fetch the existing pump data from the database
    let PumpResult = await Pump.findOne({ _id: req.params.id })
    let pumpData = await Pump.findById(pumpId);

    if (!pumpData) {
      return res.status(404).send({
        message: "Pump data not found",
      });
    }

    // Update the pump data fields with the values from the request body
    pumpData.sup1_currentReading = req.body.sup1_currentReading;
    pumpData.sup2_currentReading = req.body.sup2_currentReading;
    pumpData.sup3_currentReading = req.body.sup3_currentReading;
    pumpData.sup4_currentReading = req.body.sup4_currentReading;
    pumpData.sup5_currentReading = req.body.sup5_currentReading;
    pumpData.sup6_currentReading = req.body.sup6_currentReading;
    pumpData.sup7_currentReading = req.body.sup7_currentReading;
    pumpData.sup8_currentReading = req.body.sup8_currentReading;

    pumpData.lastReadingSup1 = PumpResult.lastReadingSup1
    pumpData.lastReadingSup2 = PumpResult.lastReadingSup2
    pumpData.lastReadingSup3 = PumpResult.lastReadingSup3
    pumpData.lastReadingSup4 = PumpResult.lastReadingSup4
    pumpData.lastReadingSup5 = PumpResult.lastReadingSup5
    pumpData.lastReadingSup6 = PumpResult.lastReadingSup6
    pumpData.lastReadingSup7 = PumpResult.lastReadingSup7
    pumpData.lastReadingSup8 = PumpResult.lastReadingSup8




    // recieving 
    pumpData.creditWasoli = req.body.creditWasoli;
    pumpData.lubricants = req.body.lubricants;
    pumpData.tucShop = req.body.tucShop;
    pumpData.cashFromOtherPumps = req.body.cashFromOtherPumps;

    pumpData.totalRecieving = req.body.tucShop + PumpResult.preClosing + req.body.creditWasoli + req.body.lubricants + req.body.cashFromOtherPumps
    // payment 
    pumpData.psoCard = req.body.psoCard;
    pumpData.HBLCard = req.body.HBLCard;
    pumpData.bankDeposit = req.body.bankDeposit;
    pumpData.psoPayment = req.body.psoPayment;
    pumpData.advanceSalary = req.body.advanceSalary;

    pumpData.totalPayment = req.body.psoCard + req.body.HBLCard + req.body.bankDeposit + req.body.psoPayment + req.body.advanceSalary

    // expense 
    pumpData.miscPayment = req.body.miscPayment;
    pumpData.miscOther = req.body.miscOther;
    pumpData.totalExpense = req.body.miscPayment + req.body.miscOther;
    // other calculations 
    // total Expense


    pumpData.comSaleSup1 = req.body.sup1_currentReading - PumpResult.lastReadingSup1;
    pumpData.comSaleSup2 = req.body.sup2_currentReading - PumpResult.lastReadingSup2;
    pumpData.comSaleSup3 = req.body.sup3_currentReading - PumpResult.lastReadingSup3;
    pumpData.comSaleSup4 = req.body.sup4_currentReading - PumpResult.lastReadingSup4;
    pumpData.comSaleSup5 = req.body.sup5_currentReading - PumpResult.lastReadingSup5;
    pumpData.comSaleSup6 = req.body.sup6_currentReading - PumpResult.lastReadingSup6;
    pumpData.comSaleSup7 = req.body.sup7_currentReading - PumpResult.lastReadingSup7;
    pumpData.comSaleSup8 = req.body.sup8_currentReading - PumpResult.lastReadingSup8;
    // Perform any necessary calculations here (similar to your existing post method)
    // sale amount calculations

    pumpData.allSupComSale = pumpData.comSaleSup1 + pumpData.comSaleSup2 + pumpData.comSaleSup3 + pumpData.comSaleSup4 +pumpData.comSaleSup5 + pumpData.comSaleSup6 + pumpData.comSaleSup7 + pumpData.comSaleSup8

    // sup Sale Amount

    pumpData.supSaleAmount = pumpData.allSupComSale * PumpResult.sup_sale_rate;
    pumpData.supPurchaseAmount = pumpData.allSupComSale * PumpResult.sup_purchase_rate;

    // pumpData.sup_sale_rate = req.body.sup_sale_rate
    // pumpData.sup_purchase_rate = req.body.sup_purchase_rate
    // pumpData.supSaleAmount = pumpData.allSupComSale * req.body.sup_sale_rate;
    // pumpData.supPurchaseAmount = pumpData.allSupComSale *  req.body.sup_purchase_rate;
    // profit 
    pumpData.supProfit = pumpData.supSaleAmount - pumpData.supPurchaseAmount;

    // total Sale Amount
    pumpData.totalSaleAmount = pumpData.supSaleAmount;

    // total Profit
    pumpData.totalProfit = pumpData.supProfit;
    pumpData.netProfit = pumpData.totalProfit - pumpData.totalExpense;

    // closing 
    pumpData.closing = (pumpData.totalSaleAmount + pumpData.totalRecieving) - (pumpData.totalExpense + pumpData.totalPayment)
    // Save the updated pump data
    const updatedPumpData = await pumpData.save();

    res.send(updatedPumpData);
    console.log("Pump Data Successfully Updated");
  } catch (error) {
    res.status(500).send({
      message: "Some error occurred while updating the pump data.",
      error: error.message,
    });
  }
};

// delete
exports.deleteSiaaFillingStation = async (req, res) => {
  // res.send(req.params)
  let pumpData = await Pump.deleteOne({ _id: req.params.id })
  if (pumpData) {
    res.send(pumpData)
  } else {
    res.send({ msg: "No record found" })
  }
}