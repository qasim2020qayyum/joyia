const express = require("express")
const {getUser, postUser,loginUser, updateUser, deleteUser, getUserDetails} = require("../controller/userController")
const router = express.Router()

router.route("/").get(getUser).post(postUser)
router.route("/login").post(loginUser)

router.route("/:id").put(updateUser).delete(deleteUser).get(getUserDetails)


module.exports = router