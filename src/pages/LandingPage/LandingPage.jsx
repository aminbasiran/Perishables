import React from 'react'
import { Button } from '../../components'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='w-full h-screen grid place-items-center'>
        <main className='flex flex-col gap-4'>
            <div>
                <h1 className='text-5xl font-bold text-yellow-400 slide-in' >Perishables!</h1>
                <h2 className='font-semibold'>Track your products with us</h2>
            </div>
            <div className='flex flex-row gap-3 justify-center'>

                <Link to="/login">
                    <Button classname="px-2 py-3  text-black">Login</Button>
                
                </Link>
                <Link to="/register">
                    <Button classname="px-2 py-3 " variant="primary">Register</Button>
                
                </Link>
            </div>
        </main>
    </div>
  )
}

export default LandingPage
