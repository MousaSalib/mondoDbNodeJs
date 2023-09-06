import express from 'express';
import { addPost } from './post.conroller.js';
import { getPosts } from './post.conroller.js';
const postRoutes = express.Router();

postRoutes.post("/post/:id",addPost);
postRoutes.get("/posts", getPosts)

export default postRoutes;