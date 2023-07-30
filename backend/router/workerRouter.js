const express = require("express")
const {getWorker, postWorker, updateWorker, deleteWorker, getWorkerDetails} = require("../controller/workerController")
const router = express.Router()

router.route("/").get(getWorker).post(postWorker)

router.route("/:id").put(updateWorker).delete(deleteWorker).get(getWorkerDetails)


module.exports = router