import { Link } from "react-router-dom"
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/AdminReducer/action";
import { Delete_product_success } from "../redux/AdminReducer/actionTypes";
import { useToast } from "@chakra-ui/react";

export const Productcard = ({ image, title, brand, price, mrp, gender, id,  }) => {
    
    const dispatch =useDispatch()
    const toast = useToast();
const handleDelete=()=>{
    dispatch(deleteProduct(id))
    toast({
        title: "Product Delete Successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
}
    return (
        <Card>
            <img src={image} alt={title} />
            <h3>Title: {title}</h3>
            <h3>Brand: {brand}</h3>
            
            <p>MRP: {mrp}</p>
            <p>SellingPrice: {price}</p>
            <p>Gender: {gender}</p>
            <Button>
                <Link to={`/edit/${id}`}>Edit</Link>
            </Button>
            <Button style={{marginLeft:"10px"}} onClick={handleDelete}  >Delete</Button>
        </Card>
    );
};

const Card = styled.div`
  border: 1px solid grey;
  text-align: center;
  padding: 10px;
  width: 270px;
  margin: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    margin: 5px 0;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
  margin:10px

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background-color: #3e8e41;
  }

  &:first-child {
    margin-right: 10px;
  }
`;
