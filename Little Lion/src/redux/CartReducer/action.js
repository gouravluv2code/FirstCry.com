import axios from "axios";
import { CART_FAILURE, CART_REQUEST, GET_CART_SUCCESS } from "./actionType";

export const getCartProducts=(id)=>(dispatch)=>{
    dispatch({type:CART_REQUEST})
    axios.get(`http://localhost:8080/MenKids/${id}`).then((res)=>{
        dispatch({type:GET_CART_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:CART_FAILURE})
    })
}