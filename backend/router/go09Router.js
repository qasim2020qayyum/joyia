const express = require("express")
const {  addGo09Data,getGo09Data, updateGo09Data, deleteGo09, getGo09Dataa, getGo09DataDetails } = require("../controller/go09Controller")
const router = express.Router()

router.route("/data").post(addGo09Data).get(getGo09Data)
router.route("/data/reverse").get(getGo09Dataa)
router.route("/data/:id").put(updateGo09Data).delete(deleteGo09).get(getGo09DataDetails)




module.exports = router 