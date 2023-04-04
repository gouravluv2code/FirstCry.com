
import FristNav from "../Navbar/FristNav";
import Catbar from "../Navbar/Catbar";
import Carousels from "../Carousels/Carousels";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const [order,setorder]=useState("")
  const [update, setUpdate] = useState(false)
  const toast = useToast()


  const getData = (id) => {
        return axios.get(`https://worried-costume-lion.cyclic.app/MenKids/${id}`).then((res) => {
            res = res.data;
            setUpdate(!update)
            res = { ...res, quantity: 1 };
            let LSdata = JSON.parse(localStorage.getItem("cartdata")) || [];
            localStorage.setItem("cartdata", JSON.stringify([...LSdata, res]));
            toast({
                title: `Item added Successfully`,
                status: "success",
                isClosable: true,
            });
        })   
}
  

  useEffect(() => {
    fetch('https://worried-costume-lion.cyclic.app/MenKids')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);


  useEffect (()=>{
    if(order){
      if(order=="asc"){
        const arr=[...products].sort((a,b)=>a.price-b.price);
        setProducts([...arr])
      }else if (order=="desc"){
        const arr=[...products].sort((a,b)=>b.price-a.price);
        setProducts([...arr])
      }
    }
    
    
    },[order])

const handleAddToCart=(id)=>{
  getData(id)
}
    

  return (
    <div> 
      <FristNav />
      <Catbar />
      <Carousels/>

      <div className="sortingButtons" style={{height:"90px",margin:"auto",display:"flex",width:"90%"}}>
        <button  className="sortByCostAsc" onClick={()=>setorder("asc")} style={{backgroundColor:"skyblue",width:"20%",margin:"auto",borderRadius:"8px",}}>
          Sort by Asc
        </button>
        <br/>
        <br/>
        <button  className="sortByCostDesc" m={2} onClick={()=>setorder("desc")} style={{backgroundColor:"skyblue",width:"20%",margin:"auto",borderRadius:"8px",}}>
          Sort by Desc
        </button>

        <input type="text" id="search" placeholder="SEARCH" style={{backgroundColor:"lightgray",width:"40%",margin:"auto",}}/>

        
      </div>
         <br/>
         <br/>

      
    <div className="ecommerce-website" style={{height:"500px",margin:"auto",display:"grid", gridTemplateColumns:" 1fr 1fr 1fr 1fr",
    width:"90%"}}>
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h2>{product.category}</h2>
            
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product.id)} >Add to Cart</button>
          </div>
        
        </div>
      ))}
    </div>
    <br/>
    <br/>

    
    


    </div>
  );
};

export default ProductPage;