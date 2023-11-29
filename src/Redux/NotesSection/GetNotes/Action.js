import axios from "axios"
import { getnotefail, getnotesreq, getnotessucc } from "./ActionTypes"
import { local } from "../../Api/Api"

export const getnotesrequest=()=>{
    return {type:getnotesreq}
}
export const getnotessuccess=(payload)=>{
    return {type:getnotessucc,payload}
}
export const getnotesfailure=()=>{
    return {type:getnotefail}
}
export const getnotes=(token,params)=>(dispatch)=>{
    // console.log(token)
    console.log(params)
    const {page}=params
    // console.log("getpage",page)
   const newparams= !page?({...params,page:1,limit:10}):({...params,page:+params.page,limit:10})
    // const newparams={...params,limit:10}
    // console.log(newparams,"newparams")
    // console.log(newparams,"getrequest")
dispatch(getnotesrequest())
return axios.get(`${local}/notes/getnotes`,{
    params:newparams,
    headers:{
        "Content-Type":"application/josn",
        "Authorization":`Bearer ${token}`
    }
})
}