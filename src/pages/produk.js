import React from "react";
import { useNavigate } from "react-router-dom";

function Produk() {
  const navigate = useNavigate();

  function goTambahData() {
    navigate("/produk/add");
  }

  return (
    <div>
      <button onClick={goTambahData}>Tambah data</button>
    </div>
  );
}

export default Produk;
