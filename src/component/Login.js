import React, { useState } from 'react'
import { useRef } from 'react'
import { useAuth } from '../context/AuthCotext'
import {Alert} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
const Login = () => {
    const {currentUser}=useAuth()
    const {LogIn}=useAuth()
    const history=useHistory()
    const emailRef=useRef()
    const passwordRef=useRef()
    const [errors,setErrors]=useState()
    const [loding,setLoding]=useState(false)
//for signup
const handleSubmit=async (e)=>{
e.preventDefault()

try{
    setErrors("")
    setLoding(true)
    await LogIn(emailRef.current.value,passwordRef.current.value)
    history.push('/')
}catch(error){
    setErrors(error.message)
}
setLoding(false)
}
  return (
    <div>
 <h1 className='text-center mb-4'>SignUp</h1>
 {currentUser&&<h3>Email: {currentUser.email}</h3>} 
 {errors&& <Alert variant="danger">{errors}</Alert>}
 <form onSubmit={(e)=>handleSubmit(e)}>

    <label className='inputs'>Email</label>
    <input  className='input w-100'  type="email"  ref={emailRef}  required/>
<br/>

    <label className='inputs' >Password</label>
    <input  className='input w-100'  type="password" ref={passwordRef} required/> 
<br/>

    <button disabled={loding} className='w-100 btn1'>{loding?'Loding...':'LogIn'}</button>
     </form>
     <p   className='w-100 text-center mt-2'><Link to="/Forget">Forget Password</Link> </p>  
<div  className='w-100 text-center mt-2'>

     <h5>Create New  acount?<Link to="/SignUp">SignUp</Link> </h5>   

</div>

    </div>
  )
}

export default Login


