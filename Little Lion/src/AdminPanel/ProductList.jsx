import { useEffect } from "react"
import {useSelector,useDispatch} from "react-redux"
import { getProduct } from "../redux/AdminReducer/action"
import { Productcard } from "./ProductCard"
import styled from "styled-components"
import { useLocation, useSearchParams } from "react-router-dom"
import { Delete_product_success } from "../redux/AdminReducer/actionTypes"

export const Productlist=()=>{
    const [searchParams]=useSearchParams()
    const dispatch =useDispatch()
    const location=useLocation()
    const {products}=useSelector((store)=>store.adminReducer)
    console.log(products)
    console.log(location)
    let obj={
        params:{
        gender:searchParams.getAll("category"),
        _sort:searchParams.get("order") && "price",
        _order:searchParams.get("order")
        }
    }
    useEffect(()=>{
dispatch(getProduct())
    },[])

    

    return (
        <ProductListWrapper>
            {products.length > 0 && products.map((el) => {
                return <Productcard key={el.id} {...el}  />
            })}
        </ProductListWrapper>
    )
}

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 50px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 30px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 20px;
  }
`;


