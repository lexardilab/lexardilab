import Image from "next/image";
import Link from "next/link";
import { montserrat, roboto_mono } from "../utils/fonts";

export default function ShopNAvbar() {
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
        <h1 className={`${montserrat.className} px-4 font-bold text-xl`}>
          Colección
        </h1>
        <h1 className={`${montserrat.className} px-4 font-bold text-xl`}>
          Marca
        </h1>
        <h1 className={`${montserrat.className} px-4 font-bold text-xl`}>
          Journal
        </h1>
      </div>
      <div className="flex items-center">
        <h1 className={`${roboto_mono.className} px-4  text-xs`}>Newsletter</h1>
        <h1 className={`${roboto_mono.className} px-4  text-xs`}>Buscar</h1>
        <h1 className={`${roboto_mono.className} px-4  text-xs`}>Idioma</h1>
        <h1 className={`${roboto_mono.className} px-4  text-xs`}>
          Inicio de Sesión
        </h1>
        <h1 className={`${roboto_mono.className} px-4  text-xs`}>Cesta()</h1>
      </div>
    </div>
  );
}
