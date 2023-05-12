import React, { useState } from 'react'
import { useRef } from 'react'
import { useAuth } from '../context/AuthCotext'
import {Alert} from "react-bootstrap"
import { Link,useHistory } from 'react-router-dom'
const SignUp = () => {
    const history=useHistory()
    const {signup}=useAuth()

    const emailRef=useRef()
    const passwordRef=useRef()
    const confirmRef=useRef()
    const [errors,setErrors]=useState()
    const [loding,setLoding]=useState(false)
//for signup
const handleSubmit=async (e)=>{
e.preventDefault()

if(passwordRef.current.value !=confirmRef.current.value){
    return setErrors("the password doese not match")
    //here why we say return in order to terminate excution of other code inside handle submit function
}
try{
    setErrors("")
    setLoding(true)
    await signup(emailRef.current.value,passwordRef.current.value)
    history.push('/')
}catch(error){
    setErrors(error.message)
}
setLoding(false)
}
  return (
    <div>
 <h1 className='text-center mb-4'>SignUp</h1>

 {errors&& <Alert variant="danger">{errors}</Alert>}
 <form onSubmit={(e)=>handleSubmit(e)}>

    <label className='inputs'>Email</label>
    <input  className='input w-100'  type="email"  ref={emailRef}  required/>
<br/>

    <label className='inputs' >Password</label>
    <input  className='input w-100'  type="password" ref={passwordRef} required/>


    <label className='label w-100' >Password Confirmation</label>
    <input className='input w-100'  type="password"  ref={confirmRef}  required/>
<br/>

    <button disabled={loding} className='w-100 btn1'>{loding?'Loding...':'SignUp'}</button>
     </form>
<div  className='w-100 text-center mt-2'>

     <h5>alredy have an acount?<Link to="/login">LogIn</Link> </h5>   

</div>

    </div>
  )
}

export default SignUp
