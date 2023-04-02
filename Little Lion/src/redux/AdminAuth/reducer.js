import { Login_Failure, Login_Req, Login_Success } from "./actionType"

const initialState={
    isLoading:false,
    isError:false,
    user:null,
    auth:false
}


export const reducer =(state=initialState,{type,payload})=>{
    switch(type){
        case Login_Req:
            return {...state,isLoading:true}
            case Login_Success:{
                return {...state,isLoading:false,auth:true,token:payload}
            }
            case Login_Failure:{
                return{...state,isLoading:false,isError:true}
            }
        
            default:{
                return {...state}
            }
    }
return <>
</>

}