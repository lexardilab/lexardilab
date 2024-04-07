"use client";
import React, { useState } from "react";

function Camiseta({ camiseta }) {
  const [selectedImage, setSelectedImage] = useState(camiseta?.image);

  return (
    <div className="">
      <div className="grid grid-cols-4 ">
        <div className="">
          <img src={selectedImage} width="800" height="400" alt="art" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center px-4 py-8">
          <h1 className="pr-24 text-4xl">{camiseta?.name}</h1>
          <span className="text-4xl">{camiseta?.price} €</span>
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
              setSelectedImage(camiseta?.image);
            }}
            className={`${
              selectedImage == camiseta?.image
                ? "border-4 border-[#5b20b6]"
                : ""
            } w-20 relative overflow-hidden aspect-ratio-1 cursor-pointer hover:border-4 border-[#5b20b6]`}
          >
            <img
              src={camiseta?.image}
              layout="fill"
              objectfit="cover"
              alt="small_art1"
            />
          </li>
          {camiseta?.extraImages?.map((image) => (
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

export default Camiseta;
