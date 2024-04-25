"use client";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { getAllProducts } from "../../../sanity/lib/product-util";

function Products() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProducts();
      setData(products);
    };
    fetchData();
  }, []);

  // Logic for displaying current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page

  return (
    <div className="grid h-screen grid-cols-4 bg-slate-100">
      {currentProducts?.map((product) => (
        <Card key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Products;
