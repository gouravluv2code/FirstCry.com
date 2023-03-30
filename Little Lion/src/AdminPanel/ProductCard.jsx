import { Link } from "react-router-dom"
import styled from "styled-components"
import { useDispatch } from "react-redux";

export const Productcard = ({ image, title, brand, price, mrp, gender, id, handleDelete }) => {
    

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
        </Card>
    );
};

const Card = styled.div`
    border: 1px solid grey;
    text-align: center;
    padding: 10px;
    width: 270px;

    img {
        width: 100%;
    }
`;

const Button = styled.button`
    background-color: #4caf50;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    margin-top: 10px;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s;

    a {
        color: white;
        text-decoration: none;
    }

    &:hover {
        background-color: #3e8e41;
    }
`;
