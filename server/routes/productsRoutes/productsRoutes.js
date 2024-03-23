import express from "express"
import { getProducts,createProduct, deleteProduct } from "../../controllers/productsControllers/productControllers.js"

export const productsRoutes = express.Router()

productsRoutes.get("/",getProducts)


productsRoutes.post("/create",createProduct)


productsRoutes.delete("/delete/:productID",deleteProduct)
