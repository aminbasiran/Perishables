import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='flex flex-row gap-2 justify-between  items-center p-2 bg-white shadow-md'>
        <Link to="/dashboard">
          <h1 className='text-md font-bold'>Dashboard</h1>    
        </Link>
        <div className="avatar">
            <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
    </div>
  )
}