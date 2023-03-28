import React from "react";
import "./FristNav.css";
import { BsFillCartFill } from "react-icons/bs";
import {  Icon } from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assest/Kids fashion logo.png";
function FristNav() {
  return (
    <>
      <div style={{ width: "100%", bg: "#ffffff" }} className="allcontainer">
        <div className="leftsidecontnav">
          <Link to="/"><img className="logo1" src={logo} alt="img" /></Link>
        </div>
        <div>
          <input style={{border:" 1px solid grey", height:"30px", width:"470px", borderRadius:"9px",marginRight:"400px" }} type="text" placeholder="   Search Products...."  />
        </div>
     

        <div className="rightsidecontnav">
          <Icon className="IC" mt={1} fontSize="20px">
            <CiLocationOn />
          </Icon>
          <Link to={`/account`}>
            <p>My Account |</p>
          </Link>

  
          <Link to={"/login"}>
            <p style={{ cursor: "pointer" }}>Login /Register | </p>
          </Link>

          <Link to={"/cart"}>
            <p style={{ cursor: "pointer" }}>Cart</p>
          </Link>
          <Icon className="IC" fontSize="20px">
            <BsFillCartFill />
          </Icon>
        </div>
      </div>
    </>
  );
}

export default FristNav;
