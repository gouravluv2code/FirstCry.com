import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import { AdminPage } from "../AdminPanel/AdminPage";
import Home from "../HomePage/Home";
import Login from "../Login/Login";
import ProductPage from "../Productpage/ProductPage";
import { Editpage } from "../AdminPanel/EditPage";
import AdminAuth from "../AdminPanel/AdminAuth";
import { PrivateRoute } from "./PrivateRoute";

const MainRoute = () => {
  return (
    <div>
      <Routes>
      {/* <Router> */}

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<AdminAuth />} />

        <Route
          path="/cart"
          
          element={
          
          <Cart/>
             
        }
        
          />

        <Route path="/admin" element={ <PrivateRoute>  <AdminPage /></PrivateRoute>} />
        
        <Route
          path="/product"
          element={<ProductPage/>}
        />
      


        <Route path="/edit/:id"  element={<Editpage />} />

      </Routes>
      {/* </Router> */}
    </div>
  );
};

export default MainRoute;
