import axios from "axios"
import { Login_Failure, Login_Req, Login_Success } from "./actionType"



export const login=(userData)=>(dispatch)=>{
    dispatch({type:Login_Req})
    axios.post("https://reqres.in/api/login",userData).then((res)=>{
dispatch({type:Login_Success,payload:res.data.token})
    }).catch(()=>{
dispatch({type:Login_Failure})
    })

}