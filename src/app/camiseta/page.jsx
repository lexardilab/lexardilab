"use client";
import React, { useState, useEffect } from "react";
import CamisetaCard from "../components/CamisetaCard";
import { getAllCamisetas } from "../../../sanity/lib/camiseta-util";

function Camisetas() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const camisetas = await getAllCamisetas();
      setData(camisetas);
    };
    fetchData();
  }, []);

  const fetchData = async () => {
    const camisetas = await getAllCamisetas();
    setData(camisetas);
  };

  // Logic for displaying current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentCamisetas = data.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="grid h-screen grid-cols-4 bg-slate-100">
      {currentCamisetas?.map((camiseta) => (
        <CamisetaCard key={camiseta._id} camiseta={camiseta} />
      ))}
    </div>
  );
}

export default Camisetas;
