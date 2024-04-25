import Image from "next/image";
import Link from "next/link";

export default function ButtonShop() {
  return (
    <>
      <div className="flex justify-center px-6 py-12">
        <button className="px-4 py-2 font-semibold text-black bg-transparent border border-black hover:bg-black hover:text-white hover:border-transparent">
          <Link
            href="https://buy.stripe.com/fZe17T9bK8Qp50caEE"
            target="_blank"
          >
            Comprar
          </Link>
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 ">
          <div className="flex items-center justify-center ">
            <Image
              src="/certificados/Certificado_Gots.svg"
              width="70"
              height="70"
            />
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src="/certificados/Certificado_OekoTex.svg"
              width="70"
              height="70"
            />
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src="/certificados/Certificado_Peta.svg"
              width="170"
              height="70"
            />
          </div>

          <div className="flex items-center justify-center pl-12 ">
            <Image
              src="/certificados/Certificado_Wear_Fair.svg"
              width="170"
              height="70"
            />
          </div>
        </div>
      </div>
    </>
  );
}
