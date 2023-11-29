import { createprofilefail, createprofilereq, createprofilesucc } from "./ActionTypes"

const initialdata={
    createisLoading:false,
    createisError:false
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case createprofilereq:{
            return {...state,createisLoading:true,createisError:false}
        }
        case createprofilesucc:{
            return {...state,createisLoading:false,createisError:false}
        }
        case createprofilefail:{
            return {...state,createisLoading:false,createisError:true}
        }
        default:{
            return state
        }
    }
}