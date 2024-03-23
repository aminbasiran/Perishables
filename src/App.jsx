import { useState,Suspense,useEffect } from 'react'
import { auth } from './config/firebaseConfig';
import { Outlet } from 'react-router-dom'
import { useAuthListener } from './hooks/useAuthListener';
import axios from 'axios';
import './App.css'

function App() {

    const [currentUser, setCurrentUser] = useState(null)
    const [isAddItem, setIsAddItem] = useState(false)

    
    
    
    const openModal = () => {
      setIsAddItem(prev => !prev)
    }
    
    const handleCurrentUser = (currentUser) => {
      setCurrentUser(currentUser)
    }
   

    useAuthListener(auth,handleCurrentUser)

    const value = {
      openModal,
      isAddItem,
      handleCurrentUser,
      currentUser,
    }



  return (
    <div>
      <Suspense>
        <Outlet context={value}/>
      </Suspense>
    </div>
  )
}

export default App
