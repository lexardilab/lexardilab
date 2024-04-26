"use client";
import Image from "next/image";
import { montserrat, roboto_mono } from "../utils/fonts";

export default function JournalDetails({ journal }) {
  return (
    <>
      <div className="flex items-center justify-center pt-12">
        <h1 className={`${roboto_mono.className} text-4xl`}>{journal?.name}</h1>
      </div>
      <div className="flex justify-center border-black">
        <div className="pt-12 w-[600px]">
          <h1 className={`${montserrat.className} text-sm text-center py-4`}>
            {journal?.description}
          </h1>
        </div>
      </div>
      <div>
        <Image
          src={journal?.firstimage}
          width="1000"
          height="600"
          alt="Camiseta Axpea Lexardi"
          className=""
        />
        <h1 className={`${roboto_mono.className} text-sm`}>{journal?.name}</h1>
      </div>
    </>
  );
}
