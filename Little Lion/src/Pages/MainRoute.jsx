import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import { AdminPage } from "../AdminPanel/AdminPage";
import Home from "../HomePage/Home";
import Login from "../Login/Login";
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route path="/admin" element={<AdminPage />} />

      </Routes>
    </div>
  );
};

export default MainRoute;
