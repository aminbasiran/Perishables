import product from "../../schema/productsSchema.js"



const createProductServices = async (item,description,expiryDate) => {
    try {
        const productRegisteredInDatabase = await product.create({item,description,expiryDate})
        return productRegisteredInDatabase
    } 
    
    
    catch (error) {
        throw new Error("Product creation failed", error)
    } 
}




const getAllProductsServices = async () => {
    try {
        const allProductsRetrievedFromDatabase = await product.find()
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

const updateProductServices = async (productID,item,description) => {
    try {
        const updateOneFromDatabase = await product.findOneAndUpdate({ _id: productID},{ $set: { item: item,description:description }},{new:true})
        return updateOneFromDatabase
    } 
    
    
    catch (error) {
        throw new Error("Product deletion failed", error)
    }
}


export {createProductServices,getAllProductsServices,deleteProductServices,updateProductServices}