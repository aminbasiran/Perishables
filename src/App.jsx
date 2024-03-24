import { useState,Suspense,useEffect } from 'react'
import { auth } from './config/firebaseConfig';
import { Outlet } from 'react-router-dom'
import { useAuthListener, } from './hooks/useAuthListener';
import {signInWithEmailAndPassword,signOut  } from "firebase/auth";
import axios from 'axios';
import './App.css'

function App() {
    const [user,setUser] = useState(null)

    const handleRegisterWithFirebase = async (fname,lname,email,password,confirmPassword) => {
      const url = "http://localhost:3000/api/v1/auth/register"; 
      
      const requestBody = {
        firstname: fname,
        lastname:lname,
        email,
        password,
        confirmPassword
      }
      
      const registeredUser = await axios.post(url,requestBody)
      console.log("User registered: ", registeredUser)
    }
    
    const handleLoginWithFirebase = async() => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
      } 
      
      catch (error) {
        console.log(error)
      }
    }
    
    const handleLogoutFromFirebase = async() => {
      try {
        await signOut(auth)
      } 
      
      catch (error) {
        console.log(error)
      }
    }


    const handleCurrentUser = (user) => {
      setUser(user)
    }
    
    useAuthListener(auth,handleCurrentUser)
    
    const value = {
      user,
      handleRegisterWithFirebase,
      handleLoginWithFirebase,
      handleLogoutFromFirebase
    }
    
    
    return (
      <div className='w-full h-full'>
        <Suspense>
          <Outlet context={value}/>
        </Suspense>
      </div>
    )
}

export default App
