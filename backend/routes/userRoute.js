import express from "express"
import { logIn,register } from "../controllers/userController.js"
const userRouter=express.Router()

userRouter.post("/login",logIn)
userRouter.post("/register",register)
export default userRouter;