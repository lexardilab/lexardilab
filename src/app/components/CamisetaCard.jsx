import Link from "next/link";

function CamisetaCard({ camiseta }) {
  return (
    <>
      <div className="h-screen bg-red-200 cursor-pointer">
        <Link href={`/camiseta/${camiseta?.slug}`}>
          <div className="relative">
            <img src={camiseta?.image} width="800" height="600" alt="art" />
            <div className="absolute bottom-1 left-1">
              <h1 className="text-base font-semibold ">{camiseta?.name}</h1>
            </div>
            <div className="absolute bottom-1 right-1">
              <h1 className="text-base font-semibold ">{camiseta?.price} €</h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CamisetaCard;
