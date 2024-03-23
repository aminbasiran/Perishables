import React from 'react'
import { Button } from '../index'

export const DeleteConfirmation = () => {
    return (
        <div className='w-full h-screen absolute bg-zinc-200/20 backdrop-blur-sm top-0 left-0'>
            <div className=' absolute w-full bottom-0 left-0 bg-white rounded-t-xl py-6 px-8 flex flex-col gap-2 slide-from-bottom '>
                <div>
                    <Button>Cancel</Button>
                    <Button variant="primary">Confirm</Button>
                </div>
            </div>
        </div>
    )
}
