import { deletefail, deletereq, deletesucc } from "./ActionTypes"

const initialdata={
    deleteisLoading:false,
    deleteisError:false
}

export const deleteprofilereducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case deletereq:{
            return {...state,deleteisLoading:true,deleteisError:false}
        }
        case deletesucc:{
            return {...state,deleteisLoading:false,deleteisError:false}
        }
        case deletefail:{
            return {...state,isLoading:false,isError:false}
        }
        default:{
            return state
        }
    }
}