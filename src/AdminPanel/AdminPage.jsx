import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct, getProduct } from "../redux/AdminReducer/action"
import { Productlist } from "./ProductList"
import styled from 'styled-components';
import { useToast } from "@chakra-ui/react";


const initialState={
  title:"",
  image:"",
  price:"",
  mrp:"",
  brand:"",
  gender:"Boy"
}

export const AdminPage = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const toast = useToast();

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
    toast({
      title: "Product Added Successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    dispatch(getProduct())
    
  };

  return (
    <AdminPageContainer>
      <Heading>welcome to Admin panel</Heading>
      <DIV>
        <DAV>
          <h5>Add your Product Here</h5>
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                value={product.title}
                onChange={handleChange}
                name="title"
                placeholder="Title"
              />
              <Input
                type="text"
                value={product.image}
                onChange={handleChange}
                name="image"
                placeholder="Image URL"
              />
              <Input
                type="text"
                value={product.price}
                onChange={handleChange}
                name="price"
                placeholder="Price"
              />
              <Input
                type="text"
                value={product.mrp}
                onChange={handleChange}
                name="mrp"
                placeholder="mrp"
              />
              <Select
                value={product.brand}
                name="brand"
                onChange={handleChange}
              >
                <option value="">Select Brand</option>
                <option value="Angel & Rocket">Angel & Rocket</option>
                <option value="Anthrilo">Anthrilo</option>
                <option value="Honeyhap">Honeyhap</option>
                <option value="Pine Kids">Pine Kids</option>
              </Select>
              <Button type="submit">Submit</Button>
            </Form>
          </FormContainer>
        </DAV>
        <DEV >
          <Productlist />
        </DEV>
      </DIV>
    </AdminPageContainer>
  );
};
export const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

export const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 2rem;
  width: 100%;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  margin-top: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  font-size: 1.2rem;
  
  @media only screen and (max-width: 576px) {
    max-width: 90%;
    font-size: 1rem;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  font-size: 1.2rem;
  @media only screen and (max-width: 576px) {
    max-width: 90%;
    
  }
 
`;


export const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }

  @media only screen and (max-width: 576px) {
    font-size: 1rem;
    width:90%
  }
`;
export const DAV = styled.div`
  
  width: 30%;
  

  @media only screen and (max-width: 576px) {
   width:100%
  }
`;
export const DEV = styled.div`
  
  width: 70%;
  
  @media only screen and (max-width: 576px) {
   width:100%
  }
`;