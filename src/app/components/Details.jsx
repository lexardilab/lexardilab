"use client";
import React, { useState } from "react";
import useCartStore from "../cartStore";
import { toast } from "react-hot-toast";

function Details({ product }) {
  const [selectedImage, setSelectedImage] = useState(product?.image);

  //const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addToCart({ product, quantity: qty });
    toast.success("Added to cart");
  };

  return (
    <div className="">
      <div className="grid grid-cols-4 ">
        <div className="">
          <img src={selectedImage} width="600" height="400" alt="art" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center px-4 py-8">
          <h1 className="pr-24 text-4xl">{product?.name}</h1>
          <span className="text-4xl">{product?.price} €</span>
        </div>

        <div className="flex justify-end">
          <button className="text-4xl " onClick={handleAddToCart}>
            Añadir a la cesta
          </button>
        </div>
      </div>

      {/* Below Main Image - Small Image List */}
      <div className="mt-2">
        <ul className="flex gap-4 overflow-x-auto">
          <li
            onClick={() => {
              setSelectedImage(product?.image);
            }}
            className={`${
              selectedImage == product?.image ? "border-4 border-[#5b20b6]" : ""
            } w-20 relative overflow-hidden aspect-ratio-1 cursor-pointer hover:border-4 border-[#5b20b6]`}
          >
            <img
              src={product?.image}
              layout="fill"
              objectfit="cover"
              alt="small_art1"
            />
          </li>
          {product?.extraImages?.map((image) => (
            <li
              key={image}
              onClick={() => {
                setSelectedImage(image);
              }}
              className={`${
                selectedImage == image ? "" : ""
              } w-20 relative overflow-hidden aspect-ratio-1 cursor-pointer hover:border-4 border-[#5b20b6]`}
            >
              <img
                src={image}
                layout="fill"
                objectfit="cover"
                alt="small_art1"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
