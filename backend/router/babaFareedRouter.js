const express = require("express")
const {  addbabaFareedData,getbabaFareedData, updatebabaFareedData, deletebabaFareed, getbabaFareedDataa, getbabaFareedDataDetails } = require("../controller/babaFareedController")
const router = express.Router()

router.route("/data").post(addbabaFareedData).get(getbabaFareedData)
router.route("/data/reverse").get(getbabaFareedDataa)
router.route("/data/:id").put(updatebabaFareedData).delete(deletebabaFareed).get(getbabaFareedDataDetails)




module.exports = router 