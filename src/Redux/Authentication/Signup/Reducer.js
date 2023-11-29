import { signupfail, signupreq, signupsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false
}
export const signupreducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case signupreq:{
            return {
                ...state,isLoading:true,isError:false
            }
        }
        case signupsucc:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
        case signupfail:
        return {
            ...state,isLoading:false,isError:true
        }
        default:{
            return state
        }
    }
}