import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminPage } from "../AdminPanel/AdminPage";

import Home from "../HomePage/Home";
import Login from "../Login/Login";
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
<<<<<<< HEAD
        <Route path="/login" element={<Login/>} />
=======
        <Route path="/admin" element={<AdminPage />} />
>>>>>>> 740d4b7c89700f14ebcf0e1fef52e72b1eae42ac
      </Routes>
    </div>
  );
};

export default MainRoute;
