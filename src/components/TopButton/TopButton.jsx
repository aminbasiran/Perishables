import React from 'react'
import { CiSettings } from "react-icons/ci";
import { useOutletContext } from 'react-router-dom';
import { Button } from '../index';
import { signOut } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';


export const TopButton = () => {

  const {handleLogoutFromFirebase} = useOutletContext()

  return (
    <div className='flex flex-row gap-3 justify-between place-items-center'>
      <div className='mr-auto'>
        <CiSettings size={20}/>
      </div>
      <h1 onClick={handleLogoutFromFirebase} className='text-xs font-bold cursor-pointer'>Logout</h1>
    </div>
  )
}

