const express = require("express")
const {  addAwanBrothersData,getAwanBrothersData, updateAwanBrothersData, deleteAwanBrothers, getAwanBrothersDataa, getAwanBrothersDataDetails } = require("../controller/awanBrothersController")
const router = express.Router()

router.route("/data").post(addAwanBrothersData).get(getAwanBrothersData)
router.route("/data/reverse").get(getAwanBrothersDataa)
router.route("/data/:id").put(updateAwanBrothersData).delete(deleteAwanBrothers).get(getAwanBrothersDataDetails)




module.exports = router 