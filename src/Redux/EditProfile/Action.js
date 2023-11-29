import axios from "axios"
import { editproffail, editprofreq, editprofsucc } from "./ActionTypes"

export const editprofrequest=()=>{
    return {type:editprofreq}
}
export const editprofsuccess=()=>{
    return {type:editprofsucc}
}
export const editproffailure=()=>{
    return {type:editproffail}
}

export const editprofile=(token,obj,id)=>(dispatch)=>{
    dispatch(editprofrequest())
    return axios.patch(`http://localhost:3000/profile/edit/${id}`,obj,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}