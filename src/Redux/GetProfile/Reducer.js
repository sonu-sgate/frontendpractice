import { getprofilesrequest } from "./Action"
import { getproffail, getprofreq, getprofsucc } from "./ActionTypes"

const initialdata={
    getisLoading:false,
    getisError:false,
    data:[]
}
export const getprofilereducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getprofreq:{
            return {...state,getisLoading:true,getisError:false,data:[]}
        }
        case getprofsucc:{
            return {...state,getisLoading:false,getisError:false,data:payload.msg}
        }
        case getproffail:{
            return {...state,getisLoading:false,getisError:true,data:[]}
        }
        default:{
            return state
        }
    }
}