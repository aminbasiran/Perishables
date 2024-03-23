import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { GiTrashCan } from "react-icons/gi";
import { MdModeEdit } from "react-icons/md";
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
                        <div className='text-left text-md text-white '>{product.expiryDate}</div>
                    </div>
                    <details className="dropdown dropdown-top dropdown-end">
                        <summary className="m-1 btn bg-black"><HiDotsVertical className='text-white'/></summary>
                        <ul className="p-2 flex flex-col items-start gap-2 shadow menu dropdown-content z-50 bg-base-100 rounded-box w-24">
                            <li onClick={()=>handleDeleteProduct(product._id)} className='text-white cursor-pointer p-2'>
                                Delete
                            </li>
                            <li  className='text-white cursor-pointer p-2'>
                                Edit
                            </li>
                        </ul>
                    </details>
                </div>
            </div>
    )
}