"use client";
import React, { useState } from "react";
import useCartStore from "../cartStore";
import { toast } from "react-hot-toast";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";

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
  const MyLink = React.forwardRef(
    (
      { as, children, href, replace, scroll, shallow, passHref, ...rest }, // extract all next/link props and pass the rest to the anchor tag
      ref
    ) => (
      <Link as={as} href={href} passHref={passHref} replace={replace}>
        <href {...rest} ref={ref}>
          {children}
        </href>
      </Link>
    )
  );

  const Arrow = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
      <div
        className="flex items-center flex-shrink-0 cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <MyLink href="/">
          {isHovering ? <HiOutlinePlusSmall /> : <HiArrowSmallRight />}
        </MyLink>
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-4 px-4">
        <div className="flex">
          <img src={selectedImage} width="800" height="600" alt="producto" />
          {product?.extraImages?.map((image) => (
            <img src={image} width="800" height="600" alt="Gallery" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 py-2">
        <div className="flex items-center px-4">
          <h1 className="pr-12 text-2xl">{product?.name}</h1>
          <span className="font-mono text-4xl text-right">
            {product?.price} €
          </span>
        </div>

        <div className="flex justify-end px-4">
          <button className="text-2xl " onClick={handleAddToCart}>
            Añadir a la cesta
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex items-center px-4 pt-6">
          <div className="flex items-center space-x-3">
            <h1 className="text-xs text-right ">Color:</h1>
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
            </div>
          </div>
          <div className="flex items-center justify-center pl-6 space-x-3">
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

        <div className="flex justify-end px-1"></div>
      </div>
      <div className="grid grid-cols-2 pt-8">
        <div className="px-4 ">
          <h1 className="pr-6 font-mono text-xs">Ref: {product?.ref} </h1>
        </div>

        <div className="px-1 ">
          <div className="flex items-center">
            <span>
              <Arrow />
            </span>
            <h1 className="pl-1 font-mono text-xs uppercase hover:underline ">
              Composición
            </h1>
          </div>
          <div className="flex items-center">
            <span>
              <Arrow />
            </span>
            <h1 className="pl-1 font-mono text-xs uppercase hover:underline ">
              Descripción
            </h1>
          </div>
          <div className="flex items-center">
            <span>
              <Arrow />
            </span>
            <h1 className="pl-1 font-mono text-xs uppercase hover:underline ">
              Guia de tallas
            </h1>
          </div>
          <div className="flex items-center">
            <span>
              <Arrow />
            </span>
            <h1 className="pl-1 font-mono text-xs uppercase hover:underline ">
              Envios y devoluciones
            </h1>
          </div>
          <div className="flex items-center">
            <span>
              <Arrow />
            </span>
            <h1 className="pl-1 font-mono text-xs uppercase hover:underline ">
              Preguntas frecuentes
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
Details.displayName = "Details";
