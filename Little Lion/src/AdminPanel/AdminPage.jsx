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
        <div style={{width:"25%",margin:"0px 100px 0px 0px",borderRight:"2px solid black"}}>
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
        </div>
        <div style={{width:"60%"}}>
          <Productlist />
        </div>
      </DIV>
    </AdminPageContainer>
  );
};



const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #f1f1f1;
  font-size: 1rem;
  color: #333;
  ::placeholder {
    color: #999;
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #f1f1f1;
  font-size: 1rem;
  color: #333;
`;

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #555;
  }
`;







