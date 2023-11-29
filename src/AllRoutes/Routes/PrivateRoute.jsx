import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const logindata=useSelector((state)=>state.loginreducer)
    const {usertoken}=logindata
    const location=useLocation()
    if(!usertoken){
        return <Navigate to={"/login"} state={location.pathname} replace/>
    }
    return children

}
