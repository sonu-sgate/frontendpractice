import axios from "axios"
import { loginfail, loginreq, loginsucc } from "./ActionTypes"

export const loginrequest=()=>{
    return {type:loginreq}
}
export const loginsuccess=(paylaod)=>{
    return {type:loginsucc,paylaod}
}
export const loginfailure=()=>{
    return {type:loginfail}
}
export const login=(obj)=>(dispatch)=>{

    dispatch(loginrequest())
    // console.log(obj)
    return axios.post("http://localhost:3000/teacher/login",obj)
}