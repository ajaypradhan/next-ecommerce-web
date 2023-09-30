"use client";
import React from "react";

function Product({ product }) {
  return (
    <div className="relative flex flex-col border bg-white m-5 p-3">
      <p>{product?.category}</p>
      <div>
        <img className="w-32 h-32 object-contain" src={product.image} alt="" />
      </div>
      <h4 className="text-xs text-yellow-500 mt-1">
        {product?.rating?.rate} ratings
      </h4>
      <p className="text-sm line-clamp-2 mt-1">{product?.description}</p>
      <h3 className="text-md font-semibold mt-1">₹ {product?.price}</h3>
      <button className="p-2 mt-2 text-sm md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
