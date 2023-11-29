import { getnotefail, getnotesreq, getnotessucc } from "./ActionTypes"

const initialdata={
    getisLoading:false,
    getisError:false,
    notes:[],
    totalpages:0
}
export const getnotesreducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getnotesreq:{
            return {...state,getisLoading:true,getisError:false,notes:[],totalpages:0}
        }
        case getnotessucc:{
            return {...state,getisLoading:false,getisError:false,notes:payload.msg,totalpages:payload.totalPages}
        }
        case getnotefail:{
            return {...state,getisLoading:false,getisError:true,notes:[],totalpages:0}
        }
        default:{
            return state
        }
    }
}