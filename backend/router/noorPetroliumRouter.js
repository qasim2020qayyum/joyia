const express = require("express")
const {  addNoorPetroliumData,getNoorPetroliumData, updateNoorPetroliumData, deleteNoorPetrolium, getNoorPetroliumDataa, getNoorPetroliumDataDetails } = require("../controller/noorPetroliumController")
const router = express.Router()

router.route("/data").post(addNoorPetroliumData).get(getNoorPetroliumData)
router.route("/data/reverse").get(getNoorPetroliumDataa)
router.route("/data/:id").put(updateNoorPetroliumData).delete(deleteNoorPetrolium).get(getNoorPetroliumDataDetails)



 
module.exports = router 