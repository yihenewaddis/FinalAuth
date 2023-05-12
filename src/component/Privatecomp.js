import React from 'react'
import { useAuth } from '../context/AuthCotext'
import { Route,Redirect} from 'react-router-dom'

const Privatecomp= ({component:Component,...rest}) => {
    const {currentUser}=useAuth()
  return (
    <Route {...rest} render={props=>{
     return currentUser?<Component {...props}/>:<Redirect to="/SignUp"/>
    }}></Route>
  )
}

export default Privatecomp
