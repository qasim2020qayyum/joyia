const User = require("../models/userModel")

// get 
const getUser = async(req, res)=>{
    let userData = await User.find()
    // let result = userData.json()
    if(userData.length > 0){
        res.send(userData)
    }else{
        res.send({msg: "No user Data found in Database"})
    }
}


// post 
// const postUser = async(req, res)=>{
//     let user = new User(req.body)
//     let result = await user.save();
//     res.send(result);  
// }


const postUser = async (req, res) => {
    const { name, email, phone, password } = req.body;
  
    // Check if the required fields are provided in the request body
    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "Name, email, phone, and password are required fields.",
      });
    }
  
    try {
      // Create a new User instance with the provided data
      const user = new User({
        name,
        email,
        phone,
        password,
      });
  
      // Save the new user to the database
      const result = await user.save();
  
      // Send the saved user data in the response
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({
        message: "Error occurred while saving the user.",
        error: error.message,
      });
    }
  };

// login 

const loginUser = async(req,res)=>{
    try{
        const LoginUser = await User.findOne({
            email:req.body.email,
            password:req.body.password
        })
        //assume condition true/ credentials matched
        if(LoginUser){
         res.json({message:"Login Successfully",LoginUser:LoginUser})
        }else{
            res.json("userName or password is invalid")
        }
    }
    catch (error) {
        res.status(500).send({
          message: "Some error occurred while login.",
          error: error.message,
        });
      }
}


// update
const updateUser = async(req,resp)=>{
    let data = await User.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )    
    resp.send(data)
}

// delete
const deleteUser = async(req,resp)=>{
    // resp.send(req.params)
    let user = await User.deleteOne({_id: req.params.id})
    if(user){
        resp.send(user)
    }else{
        resp.send({msg: "No record found"})
    }
}
// get user details

const getUserDetails = async(req,resp)=>{
    let result = await User.findOne({_id: req.params.id})
    if(result){
        resp.send(result)
    }else{
        resp.send({msg: "No user found"})
    }
} 

module.exports = {getUser, postUser,loginUser, updateUser, deleteUser, getUserDetails}