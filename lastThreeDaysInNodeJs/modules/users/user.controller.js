import userModel from "../../db/user.model.js";
import bcrypt from 'bcrypt';
import Joi from "joi";

const getAllUsers = async (req, res) => {
    let getAllUsers = await userModel.find()
    res.json({message: "Hi", getAllUsers})
}

const signUp = async (req, res) => {
    try {
        // let {error} = signUpValidationSchema.validate(req.body, {abortEarly: false})
        // if(error) {
        //     res.status(400).json({message: "validation error", error})
        // }else {
            let {email} = req.body;
            let foundedUser = await userModel.findOne({email: email});
            if(foundedUser) {
                res.status(409).json({message: "already register"})
            } else {

                let hashPassword = bcrypt.hashSync(req.body.password, 7)
                let addedUser = await userModel.insertMany({...req.body, password: hashPassword});
                res.status(201).json({message: "added successfully", addedUser})
            }
        //}
    }catch (error) {
        res.status(400).json({message: "error", error})
    }
    
} 

const signIn = async(req, res) => {
    // let {error} = signInValidationSchema.validate(req.body);
    // if(error) {
    //     res.status(400).json({message: "validation error", error})
    // }else {
        let foundedUser = await userModel.findOne({email: req.body.email});
        if(foundedUser) {
            let matched = bcrypt.compareSync(req.body.password, foundedUser.password)
            if(matched) {
                res.status(200).json({message: "You are welcome"})
            }else {
                res.status(400).json({message: "Password is wrong"})
            }
        }else {
            res.status(404).json({message: "User not found , you have to sign up"})
        }
    }
//}   

export {
    signUp,
    getAllUsers,
    signIn
};