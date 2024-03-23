import React from 'react'
import { HiDotsVertical } from "react-icons/hi";


import axios from 'axios';
import { auth } from '../../config/firebaseConfig';


export const Item = ({product,handleDeleteProduct}) => {

    

    return (
            <div className='rounded-md bg-black drop-shadow-lg flex flex-row p-2 gap-2 h-20'>
                <div className='bg-white w-16 rounded-md'>
                    
                </div>
                <div className='flex-grow flex flex-row items-center justify-between px-3'>
                    <div>
                        <div className='text-left text-lg text-white'>{product.item}</div>
                        {/* <div className='text-left text-white text-xs '>{product.description}</div> */}
                        <div className='text-left text-md text-white '>{product.expiryDate}</div>
                    </div>
                    <div>
                        <div onClick={()=>handleDeleteProduct(product._id)} className="cursor-pointer" >
                            <HiDotsVertical size={24} className='text-white' />
                        </div>
                    </div>
                </div>
            </div>
    )
}