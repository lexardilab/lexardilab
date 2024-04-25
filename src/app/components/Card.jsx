import Image from "next/image";
import Link from "next/link";
import { montserrat, roboto_mono } from "../utils/fonts";
function Card({ product }) {
  return (
    <>
      <div className="flex px-4">
        <Link href={`/productos/${product?.slug}`}>
          <div className="relative cursor-pointer">
            <Image
              src={product?.image}
              width="800"
              height="600"
              alt="camiseta"
            />
            <div className="absolute pb-6 bottom-1 left-1">
              <h1 className={`${roboto_mono.className} px-4  text-sm`}>
                {product?.name}
              </h1>
            </div>
            <div className="absolute bottom-1 left-1">
              <h1 className={`${roboto_mono.className} px-4  text-sm`}>
                {product?.price} €
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
