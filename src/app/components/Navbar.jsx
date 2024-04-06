"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-8 border-2 border-b border-black bg-slate-100">
      <div className="">
        <Link href="/">
          <Image
            className="py-6"
            src="/borobil_yellow.svg"
            width="40"
            height="40"
            alt=""
          />
        </Link>
      </div>
      <div
        className={`fixed top-0 left-0 h-screen w-screen transform z-50 bg-slate-100 px-12   ${
          open ? "-translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out `}
      >
        <div className="flex items-center h-20">
          <Image
            src="/borobil.svg"
            width="40"
            height="40"
            alt="Logo LexardiLab"
          />
        </div>
        <div className="flex flex-col pl-2 ">
          <Link
            href="/tienda"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            <h1 className="pb-4 mt-4 text-2xl font-bold text-background">
              Tienda
            </h1>
          </Link>
          <div className="border-t border-gray-600" />
          <Link
            href="/blog"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            <h1 className="pb-4 mt-4 text-2xl font-bold text-background">
              Blog
            </h1>
          </Link>
          <div className="border-t border-gray-600" />
        </div>
        <div className="absolute left-12 bottom-6">
          <div>
            <Image
              src="/borobil_light.svg"
              width="40"
              height="40"
              alt="Logo LexardiLab"
            />
          </div>
        </div>
        <div className="absolute right-12 bottom-6">
          <div>
            <Link href="mailto:lexardi.lab@gmail.com">
              <p className="text-xl font-bold font-mont">
                kaixo@lexardilab.com{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end w-9/12">
        <div
          className="z-50 flex flex-col items-center justify-between w-8 h-3 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-0.5 w-full transform transition duration-300 ease-in-out bg-[#f2d072] ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full  transform transition duration-300 ease-in-out bg-[#f2d072] ${
              open ? "-rotate-45 -translate-y-0.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
