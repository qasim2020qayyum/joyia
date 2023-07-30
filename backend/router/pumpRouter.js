const express = require("express")
const {  addPumpData,getPumpData, updatePumpData, deletePump, getPumpDataa, getpumpDataDetails } = require("../controller/pumpController")
const router = express.Router()

router.route("/data").post(addPumpData).get(getPumpData)
router.route("/data/reverse").get(getPumpDataa)
router.route("/data/:id").put(updatePumpData).delete(deletePump).get(getpumpDataDetails)




module.exports = router 