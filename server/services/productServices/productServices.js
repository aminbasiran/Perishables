import product from "../../schema/productsSchema.js"


const getAllProductsServices = async (id) => {
    try {
        const allProductsRetrievedFromDatabase = await product.find({ownerID: id})
        return allProductsRetrievedFromDatabase
    } 
    
    catch (error) {
        throw new Error("Products retrieval failed", error)
    }
}

const createProductServices = async (item,description,expiryDate,ownerID,path) => {
    try {
        const productRegisteredInDatabase = await product.create({item,description,expiryDate,ownerID,path})
        return productRegisteredInDatabase
    } 
    
    
    catch (error) {
        throw new Error("Product creation failed", error)
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