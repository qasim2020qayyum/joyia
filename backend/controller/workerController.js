const Worker = require("../models/workerSchema")

// get 
const getWorker = async(req, res)=>{
    let userData = await Worker.find()
    // let result = userData.json()
    if(userData.length > 0){
        res.send(userData)
    }else{
        res.send({msg: "No user Data found in Database"})
    }
}

// post 
const postWorker = async (req, res) => {
    const { name, mobileNumber, idCard, pumpName,salary,advanceSalary } = req.body;
  
    // Check if the required fields are provided in the request body
    if (!name || !mobileNumber || !idCard || !pumpName || !salary  ) {
      return res.status(400).json({
        message: "Name, mobileNumber, idCard,pumpName and salary are required fields.",
      });
    }
  
    try {
        remainingSalary = salary - advanceSalary;
      // Create a new User instance with the provided data
      const worker = new Worker({
        name,
        mobileNumber,
        idCard,
        pumpName,
        salary,
        advanceSalary,
        remainingSalary
      });
      // Save the new user to the database
      const result = await worker.save();
  
      // Send the saved user data in the response
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({
        message: "Error occurred while saving the user.",
        error: error.message,
      });
    }
  };



// update
const updateWorker = async(req,res)=>{
    const workerId = req.params.id;
    try{
        let workerData = await Worker.findById(workerId);
        if (!workerData) {
            return res.status(404).send({
              message: "worker data not found",
            });
          }

    workerData.name = req.body.name
    workerData.mobileNumber = req.body.mobileNumber
    workerData.idCard = req.body.idCard
    workerData.pumpName = req.body.pumpName
    workerData.salary = req.body.salary
    workerData.advanceSalary = req.body.advanceSalary

    workerData.remainingSalary = req.body.salary - req.body.advanceSalary
        
    const updatedWorkerData = await workerData.save();
  
      res.send(updatedWorkerData);
      console.log("Worker Data Successfully Updated");
    }catch (error) {
        res.status(500).send({
          message: "Some error occurred while updating the pump data.",
          error: error.message,
        });
      }
}

// delete
const deleteWorker = async(req,resp)=>{
    // resp.send(req.params)
    let user = await Worker.deleteOne({_id: req.params.id})
    if(user){
        resp.send(user)
    }else{
        resp.send({msg: "No record found"})
    }
}
// get user details

const getWorkerDetails = async(req,resp)=>{
    let result = await Worker.findOne({_id: req.params.id})
    if(result){
        resp.send(result)
    }else{
        resp.send({msg: "No user found"})
    }
} 

module.exports = {getWorker, postWorker, updateWorker, deleteWorker, getWorkerDetails}