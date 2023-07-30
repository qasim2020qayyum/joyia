const express = require("express")
const {  addAlSiddiqueData,getAlSiddiqueData, updateAlSiddiqueData, deleteAlSiddique, getAlSiddiqueDataa, getAlSiddiqueDataDetails } = require("../controller/alSiddiqueFillingController")
const router = express.Router()

router.route("/data").post(addAlSiddiqueData).get(getAlSiddiqueData)
router.route("/data/reverse").get(getAlSiddiqueDataa)
router.route("/data/:id").put(updateAlSiddiqueData).delete(deleteAlSiddique).get(getAlSiddiqueDataDetails)



 
module.exports = router 