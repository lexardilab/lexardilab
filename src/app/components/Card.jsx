import Image from "next/image";
import Link from "next/link";
import { montserrat, roboto_mono } from "../utils/fonts";
function Card({ product }) {
  return (
    <>
      <div className="flex px-4 py-6">
        <Link href={`/productos/${product?.slug}`}>
          <div className="cursor-pointer ">
            <div className="">
              <h1 className={`${roboto_mono.className}  text-sm`}>
                {product?.name}
              </h1>
            </div>
            <Image
              src={product?.image}
              width="800"
              height="600"
              alt="camiseta"
            />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
