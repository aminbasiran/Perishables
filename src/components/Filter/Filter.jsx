import React from 'react'

export const Filter = () => {
  return (
    <div className='w-full flex flex-row gap-3 p-2 bg-gray-300 rounded-md drop-shadow-md'>
      <div className='text-xs font-bold bg-gray-500 text-white py-1 px-2  rounded-md'>All</div>
      <div className='text-xs bg-gray-500 text-white py-1 px-2 rounded-md'>Due soon</div>
    </div>
  )
}

