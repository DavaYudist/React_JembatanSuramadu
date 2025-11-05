import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Produk from "../pages/produk";
import Kategori from "../pages/kategori";
import Contact from "../pages/contact";
import Add from "../pages/produk/add";
function Routing() {
  return (
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Produk" element={<Produk />} />
      <Route path="produk/add" element={<Add />} />
      <Route path="Kategori" element={<Kategori />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  );
}
export default Routing;
