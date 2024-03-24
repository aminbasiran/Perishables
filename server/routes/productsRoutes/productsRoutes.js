import { getProducts, createProduct, deleteProduct, updateProduct} from "../../controllers/productsControllers/productControllers.js"
import { storage } from "../../config/cloudinaryConfig.js"
import express from "express"
import multer from "multer"


export const productsRoutes = express.Router()



const upload = multer({ storage });




productsRoutes.get("/",getProducts)

productsRoutes.post("/create",upload.single("file"),createProduct)


productsRoutes.delete("/delete/:productID",deleteProduct)


productsRoutes.put("/update/:productID",updateProduct)
