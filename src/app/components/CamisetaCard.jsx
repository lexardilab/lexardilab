import Link from "next/link";

function CamisetaCard({ camiseta }) {
  return (
    <>
      <div className="relative cursor-pointer">
        <Link href={`/camiseta/${camiseta?.slug}`}>
          <img src={camiseta?.image} width="700" height="500" alt="art" />{" "}
        </Link>
        <div className="absolute bottom-2 left-2">
          <h1 className="text-base font-semibold ">{camiseta?.name}</h1>
        </div>
        <div className="absolute bottom-2 right-2">
          <h1 className="text-base font-semibold ">{camiseta?.price} €</h1>
        </div>
      </div>
    </>
  );
}

export default CamisetaCard;
