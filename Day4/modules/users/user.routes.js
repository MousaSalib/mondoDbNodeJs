import express from "express";
import { getAllUsers } from "./user.controller.js";
import { signUp } from "./user.controller.js";
import { signIn } from "./user.controller.js";

const userRoutes = express.Router();

userRoutes.get("/user", getAllUsers)
userRoutes.post("/user/signUp", signUp)
userRoutes.post("/user/signIn", signIn)











export default userRoutes