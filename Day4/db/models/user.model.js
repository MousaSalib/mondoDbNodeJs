
import { Schema, model } from "mongoose";
const userSchema = new Schema({
    userName: {
        type: String,
        minLength: [3, "min char is 3"],
        maxLength: [10, "max char is 10"]
    },
    email: {
        type: String,
        required: true,
        uniqe:true,
    },
    password: {
        type: String,
        required: true
    },
    phone: String,
}, {timestamps: true})

const userModel = model("User", userSchema);
export default userModel;