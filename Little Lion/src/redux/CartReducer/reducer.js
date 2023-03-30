
const initialState={
    isLoading:false,
    isError:false,
    cart: [],
}

export const reducer=(state=initialState,{type,payload})=>{
   
    switch(type){
        // case ADD_TO_CART:{
        //     return{
        //         ...state,
        //         cart:[...state.cart,payload]
        //     }
        // }
        default:{
            return state
          }
    }
      
}