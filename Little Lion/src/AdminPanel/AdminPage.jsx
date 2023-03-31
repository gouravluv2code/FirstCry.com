import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../redux/AdminReducer/action"
import { Productlist } from "./ProductList"
import styled from 'styled-components';

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
    alert("Product Added Successfully!!")
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





const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
`;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

const Select = styled.select`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

const Button = styled.button`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

const AdminPageContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 1200px;
`;

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  margin-top: 2rem;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const NoProductText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 2rem;
`;

const ErrorText = styled.p`
  font-size: 1rem;
  color: red;
  margin: 0.5rem 0;
`;

const SuccessText = styled.p`
  font-size: 1rem;
  color: green;
  margin: 0.5rem 0;
`;
