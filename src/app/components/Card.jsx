import Link from "next/link";

function Card({ product }) {
  return (
    <>
      <div className="relative cursor-pointer">
        <Link href={`/details/${product?.slug}`}>
          <img src={product?.image} width="700" height="500" alt="art" />
          <div className="absolute bottom-0 left-0">
            <h1 className="text-base font-semibold ">{product?.name}</h1>
          </div>
          <div className="absolute bottom-0 right-0">
            <h1 className="text-base font-semibold ">{product?.price} €</h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
