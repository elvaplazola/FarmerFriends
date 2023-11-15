import React from "react";
import "./CSS/Admin.css";
import { Routes, Route } from "react-router-dom";
import Bar from "../Components/Bar/Bar";
import ListProd from "../Components/ListProduct/ListProduct";
import AddProd from "../Components/AddProduct/AddProduct";

function Admin() {
  return (
    <div className="admin">
      <Bar />
      <Routes>
        <Route path="/addproduct" element={<AddProd />} />
        <Route path="/listproduct" element={<ListProd />} />
      </Routes>
    </div>
  );
}

export default Admin;
