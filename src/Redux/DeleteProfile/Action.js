import axios from "axios"
import { deletefail, deletereq, deletesucc } from "./ActionTypes"

export const deletprofrequest=()=>{
    return {type:deletereq}
}
export const deleteprofsuccess=()=>{
    return {type:deletesucc}
}
export const deleteproffailure=()=>{
    return {type:deletefail}
}

export const deleteprofile=(token,id)=>(dispatch)=>{
    dispatch(deletprofrequest())
    return axios.delete(`http://localhost:3000/profile/deleteprofile/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        
    }
    })
}