import axios from "axios"
import { createnotesfail, createnotesreq, createnotessucc } from "./ActionTypes"
import { local } from "../../Api/Api"

export const createnotesrequest=()=>{
    return {type:createnotesreq}

}
export const createnotessuccess=()=>{
    return {type:createnotessucc}
}
export const createnotesfailure=()=>{
   return {type:createnotesfail}
}

export const createnotes=(token,obj)=>(dispatch)=>{
    dispatch(createnotesrequest())
    console.log(token,"astoken")
    console.log(obj,"asnotedata")
  return axios.post(`${local}/notes/createnotes`,obj,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}