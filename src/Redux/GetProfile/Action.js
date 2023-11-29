import axios from "axios"
import { getproffail, getprofreq, getprofsucc } from "./ActionTypes"
import { useDispatch } from "react-redux"

export const getprofilesrequest=()=>{
    return {type:getprofreq}
}
export const getprofilesuccess=(payload)=>{
    return {type:getprofsucc,payload}
}

export const getprofilefailure=()=>{
    return {type:getproffail}
}
export const getprofile=(token)=>(dispatch)=>{
    // console.log(token)
    dispatch(getprofilesrequest())
   return  axios.get(`http://localhost:3000/profile/teacherprofile/`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
//     .then((res)=>{
//         // console.log(res)
//         // console.log(res)
//         dispatch(getprofilesuccess(res.data))

//     }).catch((err)=>{
// dispatch(getprofilefailure())
//     })
}