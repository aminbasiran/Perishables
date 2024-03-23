import product from "../../schema/productsSchema.js"



const createProductServices = async (item,description,expiryDate,ownerID) => {
    try {
        const productRegisteredInDatabase = await product.create({item,description,expiryDate,ownerID})
        return productRegisteredInDatabase
    } 
    
    
    catch (error) {
        throw new Error("Product creation failed", error)
    } 
}




const getAllProductsServices = async (ownerID) => {
    try {
        const allProductsRetrievedFromDatabase = await product.find({ownerID})
        return allProductsRetrievedFromDatabase
    } 
    
    catch (error) {
        throw new Error("Products retrieval failed", error)
    }
}


const deleteProductServices = async (productID) => {
    try {
        const deleteOneFromDatabase = await product.findOneAndDelete({ _id: productID})
        return deleteOneFromDatabase
    } 
    
    
    catch (error) {
        throw new Error("Product deletion failed", error)
    }
}


export {createProductServices,getAllProductsServices,deleteProductServices}