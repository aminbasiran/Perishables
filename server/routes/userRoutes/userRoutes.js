import express from "express"
import { registerUser } from "../../controllers/userControllers/userControllers.js"

export const userRoutes = express.Router()

userRoutes.post("/register",registerUser)