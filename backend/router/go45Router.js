const express = require("express")
const {  addGo45Data,getGo45Data, updateGo45Data, deleteGo45, getGo45Dataa, getGo45DataDetails } = require("../controller/go45Controller")
const router = express.Router()

router.route("/data").post(addGo45Data).get(getGo45Data)
router.route("/data/reverse").get(getGo45Dataa)
router.route("/data/:id").put(updateGo45Data).delete(deleteGo45).get(getGo45DataDetails)



 
module.exports = router 