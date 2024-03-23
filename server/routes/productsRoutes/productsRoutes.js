import express from "express"
import { getProducts,createProduct, deleteProduct, updateProduct} from "../../controllers/productsControllers/productControllers.js"

export const productsRoutes = express.Router()

productsRoutes.get("/",getProducts)


productsRoutes.post("/create",createProduct)


productsRoutes.delete("/delete/:productID",deleteProduct)


productsRoutes.put("/update/:productID",updateProduct)
