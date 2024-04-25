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

      <div className="grid grid-cols-2 pt-8">
        <div className="px-4 ">
          <h1 className="pr-6 font-mono text-xs">Ref: {product?.ref} </h1>
        </div>
      </div>
    </>
  );
}
