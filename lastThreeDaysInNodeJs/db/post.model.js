import mongoose from "mongoose";
import { model } from "mongoose";
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    postContent: {
        type: String,
        required: true,
    },
    receivedId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true,
});
const postModel = model("Post", postSchema);
export default postModel;
