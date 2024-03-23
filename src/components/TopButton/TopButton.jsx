import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { CgMenuGridO } from "react-icons/cg";
import { BsMoonStarsFill } from "react-icons/bs"

export const TopButton = () => {

  const {handleLogoutFromFirebase,user} = useOutletContext()

  return (
    <div className='flex flex-row gap-3 justify-between place-items-center'>
      <div className=''>
        <BsMoonStarsFill size={20}/>
      </div>
      <div className='flex flex-row items-center'>
        <h1 className='text-sm font-bold cursor-pointer'>{user.displayName}</h1>
        <details className="dropdown dropdown-bottom dropdown-end">
            <summary className="m-1 btn bg-black"><CgMenuGridO className='text-white'/></summary>
            <ul className="p-2 flex flex-col gap-2 items-start shadow menu dropdown-content z-[100] bg-base-100 rounded-box w-24">
              <li onClick={handleLogoutFromFirebase} className='text-white cursor-pointer p-2'>
                Log out
              </li>
              <li  className='text-white cursor-pointer p-2'>
                Setting
              </li>
            </ul>
        </details>
      </div>
    </div>
  )
}

