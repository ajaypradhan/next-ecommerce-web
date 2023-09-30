"use client";
import React, { useEffect, useState } from "react";
import Product from "./Product";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

function ProductFeed() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setProducts(data);
      } catch (error) {
        console.log("error getting products", error);
      }
    }

    fetchData();
  }, []);
  console.log(products);

  return (
    <div className="mx-6 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products?.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
}

export default ProductFeed;
