const express = require("express")
const {  addNadirFillingStationData,getNadirFillingStationData, updateNadirFillingStationData, deleteNadirFillingStation, getNadirFillingStationDataa, getNadirFillingStationDataDetails } = require("../controller/nadirFillingStationController")
const router = express.Router()

router.route("/data").post(addNadirFillingStationData).get(getNadirFillingStationData)
router.route("/data/reverse").get(getNadirFillingStationDataa)
router.route("/data/:id").put(updateNadirFillingStationData).delete(deleteNadirFillingStation).get(getNadirFillingStationDataDetails)




module.exports = router 