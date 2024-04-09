"use client";
import React, { useState, useEffect } from "react";
import AccesorioCard from "../components/AccesorioCard";
import { getAllAccesorios } from "../../../sanity/lib/accesorio-util";

function Accesorios() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const accesorios = await getAllAccesorios();
      setData(accesorios);
    };
    fetchData();
  }, []);

  const fetchData = async () => {
    const accesorios = await getAllAccesorios();
    setData(accesorios);
  };

  // Logic for displaying current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentAccesorios = data.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="grid h-screen grid-cols-4 bg-slate-100">
      {currentAccesorios?.map((accesorio) => (
        <AccesorioCard key={accesorio._id} accesorio={accesorio} />
      ))}
    </div>
  );
}

export default Accesorios;
