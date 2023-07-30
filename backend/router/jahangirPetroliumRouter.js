const express = require("express")
const {  addJahangirPetroliumData,getJahangirPetroliumData, updateJahangirPetroliumData, deleteJahangirPetrolium, getJahangirPetroliumDataa, getJahangirPetroliumDataDetails } = require("../controller/jahangirPetroliumController")
const router = express.Router()

router.route("/data").post(addJahangirPetroliumData).get(getJahangirPetroliumData)
router.route("/data/reverse").get(getJahangirPetroliumDataa)
router.route("/data/:id").put(updateJahangirPetroliumData).delete(deleteJahangirPetrolium).get(getJahangirPetroliumDataDetails)




module.exports = router 