"use client";
import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Image from "next/image";
import { MinusSmallIcon } from "@heroicons/react/24/outline";

import { PlusSmallIcon } from "@heroicons/react/24/outline";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div>
      <Header />
      <div className="relative grid grid-cols-8  h-screen bg-gray-200-200">
        {/* left part */}
        <div className="flex flex-col col-span-5  mt-16 ml-20">
          <h2 className="text-xl font-bold ">Your Shopping Cart</h2>
          {cart?.map((item, index) => (
            <div key={index} className="border rounded-md p-3 bg-white shadow-md flex flex-row space-x-4 my-4">
              <Image
                width={80}
                height={80}
                objectFit="contain"
                src={item?.image}
              />
              <div className="flex-grow">
                <p className="text-sm line-clamp-2">{item?.title}</p>
                <p className="font-semibold text-xl">Price: ₹{item?.price}</p>
                {item?.description ? (
                  <p className="text-xs line-clamp-2 font-normal">
                    {item?.description}
                  </p>
                ) : (
                  <div>
                    <p className="text-xs line-clamp-2 font-normal">
                      Color: {item?.color}
                    </p>{" "}
                    <p className="text-xs line-clamp-2 font-normal">
                      Size: {item?.size}
                    </p>
                  </div>
                )}
                <div className="flex flex-row space-x-2 mt-1">
                  <p className="text-sm font-semibold text-cyan-600 cursor-pointer">
                    Delete
                  </p>
                  <p className="text-sm font-semibold text-cyan-600 cursor-pointer">
                    Save for later
                  </p>
                  <p className="text-sm font-semibold text-cyan-600 cursor-pointer">
                    See more like this
                  </p>
                  <p className="text-sm font-semibold text-cyan-600 cursor-pointer">
                    Share
                  </p>
                </div>

                <div className="flex items-center space-x-2 mt-1">
                  <button className="rounded-full bg-gray-500">
                    <MinusSmallIcon className="text-white h-4 w-4"  class="h-6 w-6 text-gray-500" />
                  </button>

                  <span className="text-gray-500">{item?.quantity}</span>

                  <button className="rounded-full bg-gray-500">
                    <PlusSmallIcon  className="text-white h-4 w-4" class="h-6 w-6 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* right part */}
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}

export default Cart;
