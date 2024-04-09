"use client";
import React, { useState, useEffect } from "react";
import SudaderaCard from "../components/SudaderaCard";
import { getAllSudaderas } from "../../../sanity/lib/sudadera-util";

function Sudaderas() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const sudaderas = await getAllSudaderas();
      setData(sudaderas);
    };
    fetchData();
  }, []);

  const fetchData = async () => {
    const sudaderas = await getAllSudaderas();
    setData(sudaderas);
  };

  // Logic for displaying current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentSudaderas = data.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="grid h-screen grid-cols-4 bg-slate-100">
      {currentSudaderas?.map((sudadera) => (
        <SudaderaCard key={sudadera._id} sudadera={sudadera} />
      ))}
    </div>
  );
}

export default Sudaderas;
