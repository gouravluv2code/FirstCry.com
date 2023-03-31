export const SET_AUTH_TOKEN="SET_AUTH_TOKEN";
 

import { SET_AUTH_TOKEN } from "./actionType";

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case SET_AUTH_TOKEN:
        return {
          ...state,
          isAuthenticated:true,
          user:action.payload.id,
          token: action.payload.token,
        };
      default:
        return state;
    }
  };
  
  // export default reducer;




  import axios from "axios";
import { SET_AUTH_TOKEN  } from "./actionType";

 
export const getToken=(email,password)=>(dispatch)=>{
  axios.post(`https://reqres.in/api/register`,{email,password}).then((res)=>{dispatch({type:SET_AUTH_TOKEN,payload:res.data})}).then((err)=>console.log(err));
  

}

 
  