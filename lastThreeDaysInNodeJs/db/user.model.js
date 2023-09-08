import { Schema, model } from "mongoose";
const userSchema = new Schema({
    userName: {
        type: String,
        minLength: [3, "char at least 3"],
        maxLength: [10, "char no more than 10"]
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: String,
}, {
    timestamps: true,
});
const userModel = model("User", userSchema);
export default userModel;