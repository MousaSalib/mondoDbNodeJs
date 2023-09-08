import express from "express";
import { addPost, getPosts } from "./post.controller.js";
const postRoutes = express.Router();
postRoutes.get("/posts", getPosts)
postRoutes.post('/post/:id', addPost);


export default postRoutes;


