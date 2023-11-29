import { editproffail, editprofreq, editprofsucc } from "./ActionTypes"

const initialdata={
    editisLoading:false,
    editisErrr:false
}
export const editprofilereducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case editprofreq:{
            return {...state,editisLoading:true,editisErrr:false}
        }
        case editprofsucc:{
            return {...state,editisLoading:false,editisErrr:false}
        }
        case editproffail:{
            return {...state,editisLoading:true,editisErrr:true}
        }
        default:{
            return state
        }
    }
}