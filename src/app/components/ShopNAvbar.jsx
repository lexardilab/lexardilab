"use client";
import Image from "next/image";
import Link from "next/link";
import { montserrat, roboto_mono } from "../utils/fonts";
import useCartStore from "../cartStore";
import { useState } from "react";

export default function ShopNavbar() {
  const [open, setOpen] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems);
  return (
    <div className="flex items-center justify-between px-8 border-b-2 border-black bg-slate-100">
      <Link href="/">
        <Image
          className="py-6"
          src="/borobil_yellow.svg"
          width="40"
          height="40"
          alt=""
        />
      </Link>
      <div className="flex items-center justify-center">
        <Link href="/tienda">
          <h1
            className={`${montserrat.className} px-4 font-bold text-xl hover:underline`}
          >
            Colección
          </h1>
        </Link>
        <h1
          className={`${montserrat.className} px-4 font-bold text-xl hover:underline`}
        >
          Marca
        </h1>
        <Link href="/journal">
          <h1
            className={`${montserrat.className} px-4 font-bold text-xl hover:underline`}
          >
            Journal
          </h1>
        </Link>
      </div>
      <div className="flex items-center">
        <h1 className={`${roboto_mono.className} px-4  text-xs`}>Newsletter</h1>
        <h1 className={`${roboto_mono.className} px-4  text-xs`}>Buscar</h1>
        <h1 className={`${roboto_mono.className} px-4  text-xs`}>Idioma</h1>
        <h1 className={`${roboto_mono.className} px-4  text-xs`}>
          Inicio de Sesión
        </h1>
        <Link href="/cart">
          <h1 className={`${roboto_mono.className} px-4  text-xs`}>
            Cesta ({totalItems})
          </h1>
        </Link>
        {totalItems > 0 && (
          <div className="absolute flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full left-4 bottom-3">
            {totalItems}
          </div>
        )}
      </div>
    </div>
  );
}
