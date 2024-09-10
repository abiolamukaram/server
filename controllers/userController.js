// all functions that handles user request are defined here
const User = require("../models/userModel.js")
const registerUser = async (req,res) => {
    const { firstName, lastName, email, phone, password} = req.body
    const userExist = await User.findOne({email})
    if(userExist){
        return res.status(400).json({message: "user already exist"})
    }
    const user = await User.create({ firstName, lastName, email, phone, password, isAdmin:true})
    if(User){
        return res.status(201).json({message: "user registered succesfully"})
    } else{
        res.status(400).json({error: "invalid user data"})
    }
}

const registerAdmin = async (req,res) => {
    const { firstName, lastName, email, phone, password} = req.body
    const userExist = await User.findOne({email})
    if(userExist){
        return res.status(400).json({message: "user already exist"})
    }
    const user = await User.create({ firstName, lastName, email, phone, password, isAdmin:true})
    if(User){
        return res.status(201).json({message: "user registered succesfully"})
    } else{
        res.status(400).json({error: "invalid user data"})
    }
}


module.exports = {
    registerUser,
    registerAdmin
}