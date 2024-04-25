"use client";
import Image from "next/image";
import Link from "next/link";
import { montserrat, roboto_mono } from "../utils/fonts";

export default function ShopNavbar() {
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
            className={`${montserrat.className} px-4 font-bold text-xl hover:underline cursor-pointer`}
          >
            Colección
          </h1>
        </Link>
        <h1
          className={`${montserrat.className} px-4 font-bold text-xl hover:underline cursor-pointer`}
        >
          Marca
        </h1>
        <Link href="/journal">
          <h1
            className={`${montserrat.className} px-4 font-bold text-xl hover:underline cursor-pointer`}
          >
            Journal
          </h1>
        </Link>
      </div>
      <div className="flex items-center">
        <h1 className={`${roboto_mono.className} px-4  text-xs cursor-pointer`}>
          Newsletter
        </h1>
        <h1 className={`${roboto_mono.className} px-4  text-xs cursor-pointer`}>
          Idioma
        </h1>
      </div>
    </div>
  );
}
