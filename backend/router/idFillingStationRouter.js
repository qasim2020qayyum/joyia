const express = require("express")
const {  addidFillingStationData,getidFillingStationData, updateidFillingStationData, deleteIdFillingStation, getidFillingStationDataa, getidFillingStationDataDetails } = require("../controller/idFillingStationController")
const router = express.Router()

router.route("/data").post(addidFillingStationData).get(getidFillingStationData)
router.route("/data/reverse").get(getidFillingStationDataa)
router.route("/data/:id").put(updateidFillingStationData).delete(deleteIdFillingStation).get(getidFillingStationDataDetails)




module.exports = router 