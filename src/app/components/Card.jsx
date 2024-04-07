import Link from "next/link";

function Card({ product }) {
  return (
    <>
      <div className="flex h-screen">
        <Link href={`/details/${product?.slug}`}>
          <div className="relative cursor-pointer">
            <img src={product?.image} width="800" height="600" alt="camiseta" />
            <div className="absolute bottom-1 left-1">
              <h1 className="text-base font-semibold ">{product?.name}</h1>
            </div>
            <div className="absolute bottom-1 right-1">
              <h1 className="text-base font-semibold ">{product?.price} €</h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
