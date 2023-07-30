const express = require("express")
const {  addKhalidAndSonData,getKhalidAndSonData, updateKhalidAndSonData, deleteKhalidAndSon, getKhalidAndSonDataa, getKhalidAndSonDataDetails } = require("../controller/khalidAndSonController")
const router = express.Router()

router.route("/data").post(addKhalidAndSonData).get(getKhalidAndSonData)
router.route("/data/reverse").get(getKhalidAndSonDataa)
router.route("/data/:id").put(updateKhalidAndSonData).delete(deleteKhalidAndSon).get(getKhalidAndSonDataDetails)




module.exports = router 