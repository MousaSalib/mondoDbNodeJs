import express from 'express';
import { getAllUsers, signUp } from './user.controller.js';
import { signIn } from './user.controller.js';
import { signUpValidationSchema } from './user.validation.js';
import { signInValidationSchema } from './user.validation.js';
import validation from '../../middleWare/validation.js';
const userRoutes = express.Router();
userRoutes.get("/user", getAllUsers)
userRoutes.post("/user/signUp", validation(signUpValidationSchema), signUp);
userRoutes.post("/user/login", validation(signInValidationSchema), signIn)
export default userRoutes;