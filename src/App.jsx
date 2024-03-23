import { useState,Suspense,useEffect } from 'react'
import { auth } from './config/firebaseConfig';
import { Outlet } from 'react-router-dom'
import { useAuthListener } from './hooks/useAuthListener';
import axios from 'axios';
import './App.css'

function App() {

  return (
    <div>
      <Suspense>
        <Outlet/>
      </Suspense>
    </div>
  )
}

export default App
