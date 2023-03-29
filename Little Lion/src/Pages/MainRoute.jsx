import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminPage } from "../AdminPanel/AdminPage";

import Home from "../HomePage/Home";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
