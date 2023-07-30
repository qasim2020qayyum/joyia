const Rate = require("../models/rateSchema")

// get 
const getRate = async(req, res)=>{
    let rateData = await Rate.find()
    // let result = userData.json()
    if(rateData.length > 0){
        res.send(rateData)
    }else{
        res.send({msg: "No user Data found in Database"})
    }
}


// post 
const postRate = async(req, res)=>{
    let rate = new Rate(req.body)
    let result = await rate.save();
    res.send(result);  
}



// update
const updateRate = async(req,resp)=>{
    let rate = await Rate.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )    
    resp.send(rate)
}

// get single 
const getRateDetails = async(req,resp)=>{
    let result = await Rate.findOne({_id: req.params.id})
    if(result){
        resp.send(result)
    }else{
        resp.send({msg: "No data found"})
    }
} 

module.exports = {getRate, postRate, updateRate, getRateDetails}   