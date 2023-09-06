import postModel from "../../db/models/post.model.js";

const addPost = async (req, res) => {
    let {id} = req.params;
    let {title, postContent} = req.body;
    let addedPost = await postModel.insertMany({title, postContent, receivedId:id})
    res.status(201).json({message: "added", addedPost})
}
const getPosts = async (req, res) => {
    let allPosts = await postModel.find().populate("receivedId")
    res.json({message: "Hello", allPosts})
}
export {
    addPost,
    getPosts
}