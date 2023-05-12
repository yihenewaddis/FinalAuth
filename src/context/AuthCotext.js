import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword,signOut } from 'firebase/auth'

//for creating context provider
const AuthContext=createContext()

//function use to wrap all children
export function AuthProvider ({children})  {

//to create new user by using sign up
const signup=async(email,password)=>{
  await  createUserWithEmailAndPassword(auth,email,password)
}

//for login
const LogIn=async(email,password)=>{
   await signInWithEmailAndPassword(auth,email,password)
}
//to Reset password

const ResetPassword=async(email)=>{
  await sendPasswordResetEmail(auth,email)
}
//for logout

const Logout=async()=>{
    signOut(auth)
}
const [currentUser,setCurrentUser]=useState()

//used to set current usestate
useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,(user)=>{
    setCurrentUser(user)
})
return unsubscribe
},[])

const value={
currentUser, 
LogIn,
Logout,
setCurrentUser,
ResetPassword,
signup
}
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

//function use to accept each props
export function useAuth(){
    return useContext(AuthContext)
}

