import { loginfail, loginreq, loginsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    username:"",
    usertoken:"",
    useremail:"",
    dept_id:0
}

export const loginreducer=(state=initialdata,action)=>{
    const {type,paylaod}=action
switch(type){
    case loginreq:{
        return {...state,isLoading:true,isError:false,username:"",useremail:"",usertoken:"",dept_id:0,}
    }
    case loginsucc:{
       return {...state,isLoading:false,isError:false,dept_id:paylaod.dept_id,username:paylaod.username,useremail:paylaod.useremail,usertoken:paylaod.usertoken,}
    }
    case loginfail:{
        return {...state,isLoading:false,isError:true,username:"",useremail:"",usertoken:"",dept_id:0}
    }
    default:{
        return state
    }
}
}