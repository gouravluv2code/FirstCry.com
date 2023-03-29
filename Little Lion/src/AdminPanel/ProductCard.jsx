import { Link } from "react-router-dom"
import styled from "styled-components"
export const Productcard=({image,title,brand,price,discount,gender,id})=>{
return <DIV>
    <img src={image}></img>
    <h3>Title:  {title}</h3>
    <h3>Brand:  {brand}</h3>
    <p>Price:   {price}</p>
    <p>Discount:  {discount}</p>
    <p>Gender:  {gender}</p>
    <button>
        <Link  to={`/edit/${id}`}  >Edit</Link>
    </button>
    </DIV>
}

const DIV=styled.div`
border:1px solid grey;
textalign:center
padding:10px;
width:270px;
img {
    width:100%
}
`