"use client";
import React, { useState } from "react";
import useCartStore from "../cartStore";
import { toast } from "react-hot-toast";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";

function Sudadera({ sudadera }) {
  const [selectedImage, setSelectedImage] = useState(sudadera?.image);

  //const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addToCart({ sudadera, quantity: qty });
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
      <div className="grid grid-cols-4">
        <div className="flex">
          <img src={selectedImage} width="800" height="600" alt="producto" />
          {sudadera?.extraImages?.map((image) => (
            <img src={image} width="800" height="600" alt="Gallery" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 py-4">
        <div className="flex items-center px-1">
          <h1 className="text-2xl pr-36">{sudadera?.name}</h1>
          <span className="text-2xl text-right">{sudadera?.price} €</span>
        </div>

        <div className="flex justify-end px-1">
          <button className="text-2xl " onClick={handleAddToCart}>
            Añadir a la cesta
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 py-4">
        <div className="flex items-center px-1">
          <h1 className="text-base pr-36">Color:</h1>
          <span className="text-base text-right">Talla:</span>
        </div>

        <div className="flex justify-end px-1"></div>
      </div>
      <div className="grid grid-cols-2 py-6">
        <div className="px-1 ">
          <h1 className="font-mono text-xs pr-36">Ref: {sudadera?.ref} </h1>
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

export default Sudadera;
