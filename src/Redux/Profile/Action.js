import axios from "axios"
import { createprofilefail, createprofilereq, createprofilesucc } from "./ActionTypes"

export const createprofilerequest=()=>{
    return {type:createprofilereq}
}

export const createprofilesuccess=()=>{
    return {type:createprofilesucc}
}

export const createprofilefailure=()=>{
    return {type:createprofilefail}
}

export const createprofile=(token,obj)=>(dispatch)=>{


    dispatch(createprofilerequest())
return axios.post("http://localhost:3000/profile/add",obj,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
})
    
}