"use client";
import Image from "next/image";
import { montserrat, roboto_mono } from "../utils/fonts";
import Link from "next/link";
import ButtonShop from "./ButtonShop";

export default function Details({ product }) {
  return (
    <>
      <div className="flex items-center justify-center pt-12">
        <h1 className={`${roboto_mono.className} text-4xl`}>{product?.name}</h1>
      </div>
      <div className="flex justify-center border-black">
        <div className="pt-12 w-[600px]">
          <h1 className={`${montserrat.className} text-sm text-center py-4`}>
            {product?.description}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 px-4 pt-20 pb-6">
        <div className="px-4">
          <h1 className={`${montserrat.className} text-sm`}>
            {product?.descriptionOne}
          </h1>
        </div>
        <div>
          <Image
            src={product?.firstimage}
            width="1000"
            height="600"
            alt="Camiseta Axpea Lexardi"
            className=""
          />
          <h1 className={`${roboto_mono.className} text-sm`}>
            {product?.name}
          </h1>
        </div>
        <div>
          <Image
            src={product?.secondimage}
            width="1000"
            height="600"
            alt="Camiseta Axpea Lexardi"
            className=""
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 px-4">
        {product?.extraImages?.map((image) => (
          <Image
            src={image}
            width="800"
            height="600"
            alt="Camiseta Axpea Lexardi"
          />
        ))}
      </div>
      <div className="pt-2 pb-6">
        <Image
          src={product?.thirdimage}
          width="1000"
          height="600"
          alt="Camiseta Axpea Lexardi"
          className="w-full"
        />
      </div>
      <ButtonShop />
    </>
  );
}
