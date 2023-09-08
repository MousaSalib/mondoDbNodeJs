import postModel from "../../db/post.model.js";
const addPost = async (req, res) => {
    let { id } = req.params;
    let {title, postContent} = req.body;
    let addedPost =  await postModel.insertMany({title, postContent, receivedId:id});
    res.status(201).json({message: "added", addedPost});

}
const getPosts = async (reg, res) => {
    let getAllPosts = await postModel.find().populate('receivedId');
    res.json({message: "Hi", getAllPosts})
}
export {
    addPost,
    getPosts
}
