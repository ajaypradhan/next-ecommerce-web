"use client";
import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white py-4 drop-shadow-md">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        {/* left part */}
        <div>
          <span className="text-xl cursor-pointer font-bold ml-2">
            E-commerce{" "}
            <span className="text-blue-500 font-bold">Marketplace</span>
          </span>
        </div>
        {/* middle part */}
        <div className="hidden sm:flex flex-row space-x-4">
          <p>Offers</p>
          <p>Products</p>
          <p>Our Deals</p>
        </div>
        {/* right part */}
        <div className="flex space-x-4 items-center">
          <button className="hidden md:inline-block text-bl border border-blu px-4 py-2 rounded-mg hover:bg-blue-50">
            Your Cart
          </button>
          <Link href="/cart">
            <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
