import axios from "axios"
import { Get_Product_Success, Patch_product_success, Product_Failure, Product_Req, Product_Success } from "./actionTypes"



export const addProduct=(data)=>(dispatch)=>{
dispatch({type:Product_Req})
axios.post(`http://localhost:8080/MenKids`,data).then(()=>{
dispatch({type:Product_Success})
}).catch(()=>{
dispatch({type:Product_Failure})
})
}

export const getProduct=(paramObj)=>(dispatch)=>{
dispatch({type:Product_Req})
    axios.get(`http://localhost:8080/MenKids`,paramObj).then((res)=>{
dispatch({type:Get_Product_Success,payload:res.data})
    }).catch(()=>{
dispatch({type:Product_Failure})
    })
}

export const Patchproduct=(dataObj,id)=>(dispatch)=>{
    dispatch({type:Product_Req})
    axios.patch(`http://localhost:8080/MenKids/${id}`,dataObj).then(()=>{
dispatch({type:Patch_product_success})
    }).catch(()=>{
        dispatch({type:Product_Failure})
    })
}

export const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };