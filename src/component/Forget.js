import React, { useState } from 'react'
import { useRef } from 'react'
import { useAuth } from '../context/AuthCotext'
import {Alert} from "react-bootstrap"
import { Link } from 'react-router-dom'

const Forget = () => {
    const {currentUser,ResetPassword}=useAuth()
   
   
    const emailRef=useRef()
    const [message,setMessage]=useState()
    const [errors,setErrors]=useState()
    const [loding,setLoding]=useState(false)
//for signup
const PasswordReset=async (e)=>{
e.preventDefault()

try{
    setMessage('')
    setErrors("")
    setLoding(true)
    await ResetPassword(emailRef.current.value)
    setMessage('Check your email and follow the step')
}catch(error){
    setErrors(error.message)
    setMessage('')
}
setLoding(false)
}
  return (
    <div>
 <h1 className='text-center mb-4'>SignUp</h1>

 {errors&& <Alert variant="danger">{errors}</Alert>}
 {message&& <Alert variant="success">{message}</Alert>}
 <form onSubmit={(e)=>PasswordReset(e)}>

    <label className='inputs'>Email</label>
    <input  className='input w-100'  type="email"  ref={emailRef}  required/>
<br/>
    <button disabled={loding} className='w-100 btn1'>{loding?'Loding...':'Reset password'}</button>
    
    <h5   className='w-100 text-center mt-2'><Link to="/login">LogIn</Link> </h5>  
 </form>
<div  className='w-100 text-center mt-2'>

     <h5>Create New  acount?<Link to="/SignUp">SignUp</Link> </h5>   

</div>

    </div>
  )
}

export default Forget
