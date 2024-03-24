import express from "express"
import { userRoutes } from "./userRoutes/userRoutes.js"
import { productsRoutes } from "./productsRoutes/productsRoutes.js"
import { checkIfAuthenticated } from "../middlewares/RequireAuth.js"


export const globalRoutes = express.Router()



globalRoutes.use("/auth", userRoutes)
globalRoutes.use("/products", checkIfAuthenticated, productsRoutes)