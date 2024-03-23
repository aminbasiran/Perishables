import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import axios from 'axios';
import { auth } from '../../config/firebaseConfig';


export const Item = ({product,handleDeleteProduct}) => {

    

    return (
        <div className='w-full aspect-square rounded-md bg-gradient-to-br from-indigo-300 to-indigo-500 drop-shadow-lg flex flex-col place-items-start p-2'>
            <div className='text-left text-white  text-xs mb-auto'>{product.item}</div>
            <div className='w-full flex justify-between'>
                <div onClick={()=>handleDeleteProduct(product._id)} className="cursor-pointer" >
                    <FaRegTrashAlt />
                </div>
                <div className="cursor-pointer" >
                    <MdEdit />
                </div>
            </div>
            <h1></h1>
            <div className='text-left text-white text-xs '>{product.description}</div>
            <div className='text-left text-white text-xs '>{product.expiryDate}</div>
        </div>
    )
}