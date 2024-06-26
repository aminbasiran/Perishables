import React from 'react'
import { Link } from 'react-router-dom'
import { useInput } from '../../hooks/useForm'
import { Button } from '../../components'
import { useOutletContext } from 'react-router-dom'

const Register = () => {

  const fname  = useInput("")
  const lname  = useInput("")
  const email  = useInput("")
  const password  = useInput("")
  const confirmPassword  = useInput("")

  const {handleRegisterWithFirebase} = useOutletContext()

  const handleRegister = (e) => {
    e.preventDefault();

    try {
      handleRegisterWithFirebase(fname.value, lname.value, email.value, password.value, confirmPassword.value)
    } 
    
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    }

    finally{
        fname.handleReset()
        lname.handleReset()
        email.handleReset()
        password.handleReset()
        confirmPassword.handleReset()
    }
  };

  return (
    <div className='w-full h-screen grid place-items-center' >
      <div>
        <h1 className='text-4xl font-bold mb-11'>Register</h1>
        <form className='flex flex-col gap-3' onSubmit={handleRegister}>
          <div className='flex flex-col gap-1 place-items-start'>
              <label className='text-xs font-semibold' htmlFor="firstname">First name</label>
              <input className="appearance-none bg-transparent p-1 border-2 border-gray-400 rounded-md focus:outline-none" id='firstname' name='firstname' type="text" value={fname.value}  onChange={fname.handleChange} autoComplete="firstname" />
          </div>
          <div className='flex flex-col gap-1 place-items-start'>
              <label className='text-xs font-semibold'  htmlFor="lastname">Last name</label>
              <input className="appearance-none bg-transparent p-1 border-2 border-gray-400 rounded-md focus:outline-none" id="lastname" name='lastname' type="text" value={lname.value}  onChange={lname.handleChange} autoComplete="lastname"/>
          </div>
          <div className='flex flex-col gap-1 place-items-start'>
              <label  className='text-xs font-semibold' htmlFor="email">Email</label>
              <input className="appearance-none bg-transparent p-1 border-2 border-gray-400  rounded-md focus:outline-none" id='email' name='email' type="text" value={email.value}  onChange={email.handleChange} autoComplete="email"/>
          </div> 
          <div className='flex flex-col gap-1 place-items-start'>
              <label  className='text-xs font-semibold' htmlFor="password">Password</label>
              <input className="appearance-none bg-transparent p-1 border-2 border-gray-400  rounded-md focus:outline-none" id='password' name='password' type="password" value={password.value}  onChange={password.handleChange} autoComplete="password"/>
          </div>
          <div className='flex flex-col gap-1 place-items-start'>
              <label  className='text-xs font-semibold' htmlFor="confirm-password">Confirm password</label>
              <input className="appearance-none bg-transparent p-1 border-2 border-gray-400  rounded-md focus:outline-none" id='confirm-password' name='confirm-password' type="password" value={confirmPassword.value}  onChange={confirmPassword.handleChange} autoComplete="confirm-password"/>
          </div>
          <Button variant="primary" type="submit">Register</Button>
        </form>
        <h1 className='text-xs mt-10'>Already have an account <Link to="/login"><span className='font-bold'>Login here</span></Link></h1>
        <Link to="/landing"><h1 className='text-xs'>Go back</h1></Link>
      </div>
    </div>
  )
}


export default Register