import React from 'react'
import {useState,useEffect} from "react";

const ProductPage = () => {

  const[adata ,setData]=useState([]);
 
  const [order,setorder]=useState("");


  let getdata=async()=>{
    return fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=20`)
    .then((res)=> res.json())
   }
   let fetchdata=async()=>{
    
    let data=await getdata();
    
    setData(data.data)
    console.log(data.data)
   
   }
   useEffect(()=>{
    fetchdata();
   },[]);




   useEffect (()=>{
    if(order){
      if(order=="asc"){
        const arr=[...adata].sort((a,b)=>a.price_starts_from-b.price_starts_from);
        setData([...arr])
      }else if (order=="desc"){
        const arr=[...adata].sort((a,b)=>b.price_starts_from-a.price_starts_from);
        setData([...arr])
      }
    }
    
    
    },[order])
    
    


  return (
    <div>
      

      <div className="sortingButtons">
        <button  className="sortByCostAsc" onClick={()=>setorder("asc")}>
          Sort by Asc
        </button>
        <br/>
         <br/>
        <button  className="sortByCostDesc" m={2} onClick={()=>setorder("desc")}>
          Sort by Desc
        </button>
      </div>
         <br/>
         <br/>


      <div  style={{height:"500px",margin:"auto",display:"grid", gridTemplateColumns:" 1fr 1fr 1fr 1fr",
         width:"90%"}}>
       
       { adata.map((e)=>(
        <div >
          <img src={e.image} />
          <h1> {e.name}</h1>
         <h2> RS : {e.price_starts_from}</h2>
         
         <button> ADD TO CARD</button>
         <br />
         <br />
         <br />
          </div >
         
       ))}
      </div>




    </div>
  )

}

export default ProductPage