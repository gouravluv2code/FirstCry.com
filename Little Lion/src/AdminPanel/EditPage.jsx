import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams,useHistory } from "react-router-dom"
import { Patchproduct } from "../redux/AdminReducer/action"
import styled from "styled-components"
import { Navigate } from 'react-router-dom';
import { getProduct } from "../redux/AdminReducer/action"
import { useToast } from "@chakra-ui/react"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: none;
`;

const Select = styled.select`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: none;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const Editpage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [data, setData] = useState("")
  const toast = useToast();
  
  const product = useSelector((store) => store. adminReducer.products)
  
  const handleChange = (e) => {
    const { name, value } = e.target 
    setData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(Patchproduct(data, id))
    toast({
      title: "Product Edit Successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    <Navigate to="/admin" replace />
  }

  useEffect(() => {
   
    const data = product.find((el) => el.id === +id)
    setData(data)
    
  }, [])

  return (
    <Container>
      <h3>Edit Product: {id}</h3>
      <Form onSubmit={handleEdit}>
        <label>title:</label>
        <Input type="text" name="title" placeholder="Title" onChange={handleChange} value={data.title} />
        <label>Image:</label>
        <Input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={data.image} />
        <label>SellingPrice:</label>
        <Input type="number" name="price" placeholder="Price" onChange={handleChange} value={data.price} />
        <label>MRP:</label>
        <Input type="text" name="mrp" placeholder="MRP" onChange={handleChange} value={data.mrp} />
        <label>Brand:</label>
        <Select name="brand" onChange={handleChange} value={data.brand}>
        <option value="">Select Brand</option>
              <option value="Angel & Rocket">Angel & Rocket</option>
              <option value="Anthrilo">Anthrilo</option>
              <option value="Honeyhap">Honeyhap</option>
              <option value="Pine Kids">Pine Kids</option>
        </Select>
        <Button type="submit">Edit</Button>
      </Form>
    </Container>
  )
}
