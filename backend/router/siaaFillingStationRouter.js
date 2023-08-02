const express = require("express")
const {  addSiaaFillingStationData,getSiaaFillingStationData, updateSiaaFillingStationData, deleteSiaaFillingStation, getSiaaFillingStationDataa, getSiaaFillingStationDataDetails } = require("../controller/siaaFillingStationController")
const router = express.Router()

router.route("/data").post(addSiaaFillingStationData).get(getSiaaFillingStationData)
router.route("/data/reverse").get(getSiaaFillingStationDataa)
router.route("/data/:id").put(updateSiaaFillingStationData).delete(deleteSiaaFillingStation).get(getSiaaFillingStationDataDetails)




module.exports = router 