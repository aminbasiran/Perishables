import React from 'react'
import { Button } from '../Button'

export const Filter = ({setIsFilter}) => {
  return (
    <div className='w-full flex flex-row gap-2'>
      <Button onclick={()=> setIsFilter(false)} variant="primary">All</Button>
      <Button onclick={()=> setIsFilter(true)} variant="red" >Due soon</Button>
    </div>
  )
}

