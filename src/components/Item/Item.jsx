import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import axios from 'axios';
import { auth } from '../../config/firebaseConfig';


export const Item = ({product,handleDeleteProduct}) => {

    const handleDelete = async(id) => {

        
        try {
            const url = `http://localhost:3000/api/v1/products/delete/${id}`;
            const token = await auth.currentUser.getIdToken()
            
            if(!token){
                throw new Error("No auth token")
            }

            const response = await axios.delete(url,{headers:  
                {authorization: `Bearer ${token}` }})
                
            // console.log(response.data.data.response._id)
            handleDeleteProduct(response.data.data.response._id)
        } 
        
        
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        }

    }

    return (
        <div className='w-full aspect-square rounded-md bg-gradient-to-br from-indigo-300 to-indigo-500 drop-shadow-lg flex flex-col place-items-start p-2'>
            <div className='text-left text-white  text-xs mb-auto'>{product.item}</div>
            <div className="cursor-pointer" onClick={()=>handleDelete(product._id)}>
                <FaRegTrashAlt />
            </div>
            <div className='text-left text-white text-xs '>{product.description}</div>
            <div className='text-left text-white text-xs '>{product.expiryDate}</div>
        </div>
    )
}