"use client";
import React, { useState } from "react";
import useCartStore from "../cartStore";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { montserrat, roboto_mono } from "../utils/fonts";

export default function Details({ product }) {
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);

  //const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: qty,
      color: selectedColor,
      size: selectedSize,
    });
    toast.success("Added to cart");
  };

  return (
    <>
      <div className="grid grid-cols-4 px-4 ">
        <div className="flex">
          <Image src={selectedImage} width="800" height="600" alt="producto" />
          {product?.extraImages?.map((image) => (
            <Image src={image} width="800" height="600" alt="Gallery" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 px-4 py-4 ">
        <div className="flex items-center">
          <h1
            className={`${montserrat.className} pr-12 text-3xl font-bold uppercase`}
          >
            {product?.name}
          </h1>
          <span className={`${roboto_mono.className} px-4  text-4xl`}>
            {product?.price} €
          </span>
        </div>
        <div className="flex items-center justify-start space-x-3">
          <h1 className="text-xs ">Color:</h1>
          {product?.colors?.map((color) => {
            switch (color) {
              case "Opal":
                return (
                  <div
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    key={color}
                    className={`${
                      color == selectedColor ? "border-2 border-black" : ""
                    } w-8 h-8 rounded-full bg-[#a09e9c] cursor-pointer`}
                  ></div>
                );
              case "Black":
                return (
                  <div
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    key={color}
                    className={`${
                      color == selectedColor ? "border-2 border-black" : ""
                    } w-8 h-8 rounded-full bg-[#2a2b2d] cursor-pointer `}
                  ></div>
                );
              case "Blue":
                return (
                  <div
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    key={color}
                    className={`${
                      color == selectedColor ? "border-2 border-black" : ""
                    } w-8 h-8 rounded-full bg-blue-800 cursor-pointer `}
                  ></div>
                );
              default:
                return (
                  <div
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    key={color}
                    className={`${
                      color == selectedColor ? "border-2 border-black" : ""
                    } w-8 h-8 rounded-full bg-gray-300 cursor-pointer  border-black`}
                  ></div>
                );
            }
          })}
          <div className="flex items-center pl-4 space-x-3">
            <h1 className="text-xs text-center ">Tallas:</h1>
            {product?.sizes?.map((size) => {
              switch (size) {
                case "S":
                  return (
                    <div
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      key={size}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center "
                          : ""
                      } w-8 h-8 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    >
                      <h1 className="text-center">S</h1>
                    </div>
                  );
                case "M":
                  return (
                    <div
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      key={size}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center"
                          : ""
                      } w-8 h-8 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    >
                      <h1>M</h1>
                    </div>
                  );
                case "L":
                  return (
                    <div
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      key={size}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center"
                          : ""
                      } w-8 h-8 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    >
                      <h1>L</h1>
                    </div>
                  );
                case "XL":
                  return (
                    <div
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      key={size}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center"
                          : ""
                      } w-8 h-8 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    >
                      <h1>XL</h1>
                    </div>
                  );
                case "XXL":
                  return (
                    <div
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      key={size}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center"
                          : ""
                      } w-8 h-8 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    >
                      <h1>XXL</h1>
                    </div>
                  );
                default:
                  return (
                    <div
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      key={size}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center"
                          : ""
                      } w-8 h-8 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    ></div>
                  );
              }
            })}
            <label className="text-xs" htmlFor="">
              Cantidad:
            </label>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-20 h-10 px-4 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center justify-end ">
          <div className="flex items-center justify-center pl-6 space-x-3"></div>
          <button className="text-2xl " onClick={handleAddToCart}>
            Añadir a la cesta
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 pt-8">
        <div className="px-4 ">
          <h1 className="pr-6 font-mono text-xs">Ref: {product?.ref} </h1>
        </div>
      </div>
    </>
  );
}
