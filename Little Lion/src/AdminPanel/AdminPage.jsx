import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../AdminRedux/ProductReducer/action"
import { Productlist } from "./ProductList"
import styled from 'styled-components';



const initialState={
    title:"",
    image:"",
    price:"",
    discount:"",
    gender:""
}

export const AdminPage = () => {
    const [product, setProduct] = useState(initialState);
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct((prev) => {
        return { ...prev, [name]: value };
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addProduct(product));
      setProduct(initialState);
    };
  
    return (
      <>
        <h1 style={{fontSizeAdjust:"from-font"}}>welcome to Admin panel</h1>
        <DIV>
            <div style={{width:"25%",margin:"0px 100px 0px 0px",borderRight:"2px solid black"}}>
                <h5>Add your Product Here</h5>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              value={product.title}
              onChange={handleChange}
              name="title"
              placeholder="Title"
            />
            <input
              type="text"
              value={product.image}
              onChange={handleChange}
              name="image"
              placeholder="Image URL"
            />
            <input
              type="text"
              value={product.price}
              onChange={handleChange}
              name="price"
              placeholder="Price"
            />
            <input
              type="text"
              value={product.discount}
              onChange={handleChange}
              name="discount"
              placeholder="Discount"
            />
            <select
              value={product.gender}
              name="gender"
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Men</option>
              <option value="female">Female</option>
              <option value="kids">Kids</option>
            </select>
            <button type="submit">Submit</button>
          </Form>
        </FormContainer>
        </div>
        <div style={{width:"60%"}}>
        <Productlist />
        </div>
        </DIV>
      </>
    );
  };
  
  
  
  
  
  
  







const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;

  input, select {
    margin: 1rem 0;
    padding: 0.5rem;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 1rem;
    outline: none;
  }

  button[type="submit"] {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #0062cc;
  }
`;
const DIV=styled.div`
display:flex;
margin:auto;
margin:70px 0px 0px 0px;

border:1px solid red


`
