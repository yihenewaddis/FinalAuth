import React, { useState } from 'react'
import { useAuth } from '../context/AuthCotext'
import {Alert} from "react-bootstrap"
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
const Dashbord = () => {

    const {currentUser,Logout}=useAuth()
    const [errors,setErrors]=useState()
    const history=useHistory()
    //log out
    const HandleLogOut=async(e)=>{
        e.preventDefault()
     try{
        setErrors('')
        await Logout()
        history.push('/login') 
     }catch(error){
        setErrors(error.message)
     }
    }
    const HandleLogIn=()=>{
        history.push('/login') 
    }
  return (
    <>
    <div className='dashbord'>
        <h1>profiles</h1>
        {errors&& <Alert variant="danger">{errors}</Alert>}
       {currentUser&&<h3>Email: {currentUser.email}</h3>} 
       <button className='w-100 btn1'>Change Profile</button><br/><br/>
       <button className='w-100 btn1' onClick={(e)=>HandleLogOut(e)}>Log Out</button>
       
    </div>
    
    </>
  )
}

export default Dashbord
