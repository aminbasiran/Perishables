import React from 'react'
import { MdOutlineFastfood } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";

import { Link } from 'react-router-dom';




export const Footer = () => {
    return (
        <div className='place-items-end w-full h-16 bg-[#FFFFFF] flex flex-row justify-around px-3 items-center shadow-md shadow-top'>
            <div className='flex flex-col items-center'>
                <MdOutlineFastfood/>
                <Link to="/home">
                    <p className='text-xs font-semibold'>Track</p>
                </Link>
            </div>
            <div className='flex flex-col items-center relative'> 
                <div className='w-12 aspect-square rounded-full bg-black grid place-items-center absolute bottom-5'>
                    <IoAdd color='white' size={35}/>
                </div>
                
                <p className='text-xs font-semibold'>Add item</p>
            </div>
            <div className='flex flex-col items-center'>
                <BiFoodMenu/>
                <p className='text-xs font-semibold'>Recipe</p>
            </div>
        
        </div>
    )
}