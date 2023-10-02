"use client";
import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { MinusSmallIcon } from "@heroicons/react/24/outline";

import { PlusSmallIcon } from "@heroicons/react/24/outline";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/CartReducer";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const taxes = 65;
  const total = cart
    ?.map((cartItem) => cartItem.price * cartItem.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  const grandTotal = total + 65;

  const dispatch = useDispatch();
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };

  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };

  const deleteItem = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div>
      <Header />
      <div className="relative grid grid-cols-8  h-screen bg-gray-200">
        {/* left part */}
        <div className="flex flex-col col-span-5  mt-16 ml-20">
          <h2 className="text-xl font-bold ">Your Shopping Cart</h2>
          {cart?.map((item, index) => (
            <div
              key={index}
              className="border rounded-md p-3 bg-white shadow-md flex flex-row space-x-4 my-4"
            >
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
                  <p
                    onClick={() => deleteItem(item)}
                    className="text-sm font-semibold text-cyan-600 cursor-pointer"
                  >
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
                    <MinusSmallIcon
                      onClick={() => decreaseQuantity(item)}
                      className="text-white h-4 w-4"
                      class="h-6 w-6 text-white"
                    />
                  </button>

                  <span className="text-gray-500">{item?.quantity}</span>

                  <button className="rounded-full bg-gray-500">
                    <PlusSmallIcon
                      onClick={() => increaseQuantity(item)}
                      className="text-white h-4 w-4"
                      class="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* right part */}
        <div className="col-span-2 mt-16 ml-20">
          <h1 className="mb-2">Choose a delivery address</h1>
          <div>
            <div className="bg-white p-4 rounded-sm mt-2 ">
              <h4 className="text-xs text-gray-400">Select Location</h4>
              <p className="text-xs text-gray-400">
                Please select location, so that we can find a place that
                delivers to you
              </p>
              <button className="rounded-sm py-1 mt-2 text-sm font-semibold text-gray-600">
                Add Address
              </button>
            </div>
          </div>
          <h3 className="mt-4">Offers</h3>
          <div>
            <div className="bg-white rounded-sm p-4 mt-2">
              <h4 className="text-xs text-gray-400">Apply Coupon</h4>
              <p className="text-xs text-gray-400">
                Get Discount with you order
              </p>
            </div>
          </div>

          <h3 className="mt-1">Price Details</h3>
          <div className="bg-white rounded-sm mt-2 p-3 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs ">Sub Total</h4>
              <p className="text-sm font-normal">₹ {total.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-xs ">Discount</h4>
              <p className="text-sm font-normal">₹ -</p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-xs ">taxes and Charges</h4>
              <p className="text-sm font-normal">₹ {taxes}</p>
            </div>
            <hr className="w-full mt-1 decoration-dotted" />
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold">Grand Total</h4>
              <p className="text-sm font-normal">₹ {grandTotal.toFixed(2)}</p>
            </div>
            <button className="bg-yellow-500 text-center font-normal rounded-md text-white py-2 px-3 w-full">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
