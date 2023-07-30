const express = require("express")
const {  addBhattiPetroliumData,getBhattiPetroliumData, updateBhattiPetroliumData, deleteBhattiPetrolium, getBhattiPetroliumDataa, getBhattiPetroliumDataDetails } = require("../controller/bhattiPetroliumController")
const router = express.Router()

router.route("/data").post(addBhattiPetroliumData).get(getBhattiPetroliumData)
router.route("/data/reverse").get(getBhattiPetroliumDataa)
router.route("/data/:id").put(updateBhattiPetroliumData).delete(deleteBhattiPetrolium).get(getBhattiPetroliumDataDetails)




module.exports = router 