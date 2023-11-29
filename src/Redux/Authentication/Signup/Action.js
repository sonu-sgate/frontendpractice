import axios from "axios"
import { signupfail, signupreq, signupsucc } from "./ActionTypes"

export const signuprequest=()=>{
    return {type:signupreq}
}

export const signupsuccess=()=>{
    return {type:signupsucc}
}
export const signupfailure=()=>{
    return {type:signupfail}
}
export const signup=(obj)=>(dispatch)=>{
    dispatch(signuprequest())
    return axios.post("http://localhost:3000/teacher/register",obj)
}