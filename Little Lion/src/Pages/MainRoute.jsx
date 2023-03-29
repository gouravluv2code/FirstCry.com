import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../HomePage/Home";
import Login from "../Login/Login";
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default MainRoute;
