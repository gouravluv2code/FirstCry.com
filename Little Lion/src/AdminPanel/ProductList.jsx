import { useEffect } from "react"
import {useSelector,useDispatch} from "react-redux"
import { getProduct } from "../AdminRedux/ProductReducer/action"
import { Productcard } from "./ProductCard"
import styled from "styled-components"
import { useLocation, useSearchParams } from "react-router-dom"

export const Productlist=()=>{
    const [searchParams]=useSearchParams()
    const dispatch =useDispatch()
    const location=useLocation()
    const {products}=useSelector((store)=>store.productReducer)
    console.log(location)
    let obj={
        params:{
        gender:searchParams.getAll("category"),
        _sort:searchParams.get("order") && "price",
        _order:searchParams.get("order")
        }
    }
    useEffect(()=>{
dispatch(getProduct(obj))
    },[location.search])

    return (
        <ProductListWrapper>
            {products.length > 0 && products.map((el) => {
                return <Productcard key={el.id} {...el} />
            })}
        </ProductListWrapper>
    )
}

const ProductListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    
    grid-gap: 50px;
    margin-top: 20px;
    
`;
