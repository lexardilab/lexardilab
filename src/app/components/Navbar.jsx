import Image from "next/image";
import { roboto_mono, montserrat } from "../utils/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-6 border-b-2 border-black">
      <Link href="/">
        <Image src="/borobil_yellow.svg" width="40" height="60" />
      </Link>
      <div className="flex ">
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
        <Link href="/blog">
          <h1
            className={`${montserrat.className} px-4 font-bold text-xl hover:underline cursor-pointer`}
          >
            Journal
          </h1>
        </Link>
      </div>
      <div className="flex">
        <h1 className={`${roboto_mono.className} px-2  text-sm cursor-pointer`}>
          Newsletter
        </h1>
        <h1 className={`${roboto_mono.className} px-2  text-sm cursor-pointer`}>
          Idioma
        </h1>
      </div>
    </div>
  );
}
