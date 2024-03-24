import React,{useState} from 'react'
import { Link,useOutletContext,useNavigate} from 'react-router-dom'
import { auth } from '../../config/firebaseConfig'
import { useInput } from '../../hooks/useForm'
import { Button } from '../../components'
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const {handleLoginWithFirebase} = useOutletContext()
  const navigate = useNavigate()

  const email = useInput("")
  const password = useInput("")

  const handleLogin = async(e) => {
      e.preventDefault()  

      try {
          await handleLoginWithFirebase(auth,email.value,password.value) 
          navigate("/home")
      } 
      
      catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)
      }

      finally{
        email.handleReset()
        password.handleReset()
      }

  }

  return (
    <div className='w-full h-screen grid place-items-center'>
      <div>
        <Link to="/home">HOME</Link>
        <br />
        <Link to="/dashboard">DASHBOARD</Link>
        <h1 className='text-4xl font-bold mb-11'>Login</h1>
        <form className=' flex flex-col gap-3' onSubmit={handleLogin}>
          <div className='flex flex-col gap-1 place-items-start justify-center'>
              <label  className='text-xs font-semibold' htmlFor="email">Email</label>
              <input className="w-full appearance-none bg-transparent p-1 border-2 border-gray-400  rounded-md focus:outline-none" id="email" type="text" value={email.value} onChange={email.handleChange} autoComplete="email" />
          </div>
          <div className='flex flex-col gap-1 place-items-start'>
              <label  className='text-xs font-semibold' htmlFor="password">Password</label>
              <input className="w-full appearance-none bg-transparent p-1 border-2 border-gray-400  rounded-md focus:outline-none" id='password' name='password' type="password" value={password.value} onChange={password.handleChange} autoComplete="password" />
          </div>
          <Button variant="primary" type="submit">Login</Button>
        </form>
        <h1 className='text-xs mt-10'>Dont't have an account? <Link to="/register"><span className='font-bold'>Register here</span></Link></h1>
        <Link to="/landing"><h1 className='text-xs'>Go back</h1></Link>
      </div>
    </div>
  )
}

export default Login