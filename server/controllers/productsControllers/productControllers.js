import { createProductServices,getAllProductsServices,deleteProductServices,updateProductServices } from "../../services/productServices/productServices.js"


export const getProducts = async (req,res) => {
    
    const {uid} = req.user
    
    try {
        const allProducts = await getAllProductsServices(uid)
        res.status(201).send({
            status: "Successfull",
            data : {
                message : "All products has been successfully retrieved",
                result : allProducts
            }
        })
    } 
    
    
    
    catch (error) {
        res.status(error?.status || 500).send({
            status: "Unsuccessfull",
            data : {
                error : error?.message || error
            } 
        })
    }
}



export const createProduct = async (req,res) => {
    const {item,description,expiryDate} = req.body
    const {uid} = req.user
    console.log(req.file)

    try {
        if(!item){
            throw new Error("No item provided")
        }
        if(!description){
            throw new Error("No description provided")
        }
        if(!expiryDate){
            throw new Error("No date provided")
        }

        const createdProduct = await createProductServices(item,description,expiryDate,uid)
        res.status(201).send({
            status: "Successfull",
            data : {
                message : "product has been successfully created",
                result : createdProduct
            }
        })

    } 
    
    
    
    catch (error) {
        res.status(error?.status || 500).send({
            status: "Unsuccessfull",
            data : {
                error : error?.message || error
            } 
        })
    }}


export const deleteProduct = async (req,res) => {
    
    const {productID} = req.params

    try {
        const deleted = await deleteProductServices(productID)
        res.status(202).send({
            status: "Successfull",
            data : {
                message : "Product has been successfully deleted",
                result : deleted
            }
        })

    } 
    
    
    
    catch (error) {
        res.status(error?.status || 500).send({
            status: "Unsuccessfull",
            data : {
                error : error?.message || error
            } 
        })
    }}


export const updateProduct = async (req,res) => {
    const {item,description} = req.body
    const {productID} = req.params

    try {
        const updated = await updateProductServices(productID,item,description)
        res.status(202).send({
            status: "Successfull",
            data : {
                message : "Product has been successfully updated",
                result : updated
            }
        })

    } 
    
    
    
    catch (error) {
        res.status(error?.status || 500).send({
            status: "Unsuccessfull",
            data : {
                error : error?.message || error
            } 
        })
    }}