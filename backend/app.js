const express = require("express");
const bodyParser = require('body-parser');
const connectDB = require("./db/conn");
const cors = require("cors")
const env = require("dotenv").config()

const port = process.env.PORT || 6000;

const app = express();

// app.use(express.json())
app.use(bodyParser.json());
app.use(cors());


app.use(express.urlencoded({extended:false}))
connectDB()
app.use("/joiya/user", require("./router/userRouter"))
app.use("/joiya/pump", require("./router/pumpRouter"))
app.use("/joiya/awanbrothers", require("./router/awanBrothersRouter"))
app.use("/joiya/babafareed", require("./router/babaFareedRouter"))
app.use("/joiya/bhattiPetrolium", require("./router/bhattiPetroliumRouter"))
app.use("/joiya/go09", require("./router/go09Router"))
app.use("/joiya/go45", require("./router/go45Router"))
app.use("/joiya/idFillingStation", require("./router/idFillingStationRouter"))
app.use("/joiya/jahangirPetrolium", require("./router/jahangirPetroliumRouter"))
app.use("/joiya/khalidAndSon", require("./router/khalidAndSonRouter"))
app.use("/joiya/noorPetrolium", require("./router/noorPetroliumRouter"))
app.use("/joiya/alSiddique", require("./router/alSiddiqueRouter"))
app.use("/joiya/nadirFillingStations", require("./router/nadirFillingStationsRouter"))
app.use("/joiya/siaaFillingStation", require("./router/siaaFillingStationRouter"))

app.use("/joiya/petrolrate", require("./router/rateRouter"))
app.use("/joiya/worker", require("./router/workerRouter"))

app.listen(port, ()=> console.log(`server is running of port ${port}`))


