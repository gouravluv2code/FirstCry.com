
import FristNav from "../Navbar/FristNav";
import Catbar from "../Navbar/Catbar";
import Carousels from "../Carousels/Carousels";
import React, { useState, useEffect } from 'react';

const ProductPage = () => {
  const [products, setProducts] = useState([]);



  

  useEffect(() => {
    fetch(' http://localhost:8080/MenKids')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);


    

  return (
    <div> 
      
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
            <button onClick={()=>alert("Product add successfully in card  ")} >Add to Cart</button>
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