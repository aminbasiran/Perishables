import React from 'react'
import { CiSettings } from "react-icons/ci";
import { useOutletContext } from 'react-router-dom';
import { Button } from '../index';
import { signOut } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';


export const TopButton = () => {

  const {openModal}= useOutletContext()

  const handleSignOut = async() => {
    try {
        await signOut(auth)
        setUser(null)
        
    } catch (error) {
        console.log(error)
    }
}
  
  return (
    <div className='flex flex-row gap-3 justify-between place-items-center'>
      <div className='mr-auto'>
        <CiSettings size={20}/>
      </div>
      <h1 onClick={handleSignOut} className='text-xs font-bold cursor-pointer'>Logout</h1>
      <Button variant="green" onclick={openModal}>+ Add</Button>
      {/* <div className='py-1 px-2 text-xs text-white font-semibold cursor-pointer bg-green-500 rounded-md' onClick={openModal}> + Add</div> */}
    </div>
  )
}

