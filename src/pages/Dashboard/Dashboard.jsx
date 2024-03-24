import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div className='w-full h-full flex flex-col gap-3'>
      <div>
        <h1 className='font-semibold text-xl text-left'>Hej,</h1>
        <h1 className='font-semibold text-xl text-left text-indigo-800'>amin basiran</h1>
        
      </div>
      <Link to="/home">
        <div className='w-full h-16 flex p-3  justify-between bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-md items-center cursor-pointer hover:bg-indigo-600 transition-all duration-500'>
          <h1 className=' text-white font-bold'>Expiry tracker</h1>
          <div className=''>
            <FaLongArrowAltRight color='white'/>
          </div> 
        </div>
      </Link>
      <Link to="/recipes">
        <div className='w-full h-16 flex p-3 justify-between bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-md items-center cursor-pointer hover:bg-indigo-600 transition-all duration-500'>
          <h1 className=' text-white font-bold'>Recipes</h1>
          <div className=''>
            <FaLongArrowAltRight color='white'/>
          </div> 
        </div>
      </Link>

    </div>
  )
}

export default Dashboard
