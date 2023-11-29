import { createnotesfail, createnotesreq, createnotessucc } from "./ActionTypes"

const initialdata={
    "createnotesisLoading":false,
    'createnotesisError':false
}

export const createnotesreducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
         case createnotesreq:{
            return {...state,createnotesisLoading:true,createnotesisError:false}
         }
         case createnotessucc:{
            return {...state,createnotesisLoading:false,createnotesisError:false}
         }
case createnotesfail:{
    return {...state,createnotesisLoading:false,createnotesisError:true}
}
default:{
    return state
}
    }
}