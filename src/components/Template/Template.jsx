import React from 'react'
import { Outlet,useOutletContext } from 'react-router'
import { Footer,Header } from '../index'

export const Template = () => {
    const value = useOutletContext()

    return (
        <div className='w-full h-full flex flex-col '>
            <Header/>
            <div className='flex-grow p-2 h-full w-full'>
                <Outlet context={value}/>
            </div>
            <Footer/>
        </div>
    )
}

