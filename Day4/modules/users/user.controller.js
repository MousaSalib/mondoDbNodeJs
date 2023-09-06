import userModel from "../../db/models/user.model.js";
import bcrypt from 'bcrypt'
const getAllUsers =async (req, res) => {
    let allUsers = await userModel.find()
    res.json({message:"Hello", allUsers})
}
const signUp = async (req, res) => {
    try {
        let {email} = req.body;
        let foundedUser = await userModel.findOne({email:email})
        if(foundedUser) {
            res.status(409).json({message: "already is founded"})
        }else{
            let hashPassword = bcrypt.hashSync(req.body.password, 7)
            let addedUser = userModel.insertMany({...req.body, password: hashPassword})
            res.status(201).json({message: "added successfully", addedUser})
        }
        
    } catch (error) {
        res.status(400).json({message: "hello", error});
    }
    
}

const signIn = async (req, res) => {
    let foundedUser = await userModel.findOne({email: req.body.email});
    if(foundedUser) {
        let matched = bcrypt.compareSync(req.body.password, foundedUser.password)
        if(matched) {
            res.status(200).json({message: "welcome"})
        }
    }else{
        res.status(400).json({message: "password is wrong"})
    }
}




export {
    getAllUsers,
    signUp,
    signIn
}