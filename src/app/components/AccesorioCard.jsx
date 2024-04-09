import Link from "next/link";

function AccesorioCard({ accesorio }) {
  return (
    <>
      <div className="h-screen cursor-pointer">
        <Link href={`/accesorios/${accesorio?.slug}`}>
          <div className="relative">
            <img src={accesorio?.image} width="800" height="600" alt="art" />
            <div className="absolute bottom-1 left-1">
              <h1 className="text-base font-semibold ">{accesorio?.name}</h1>
            </div>
            <div className="absolute bottom-1 right-1">
              <h1 className="text-base font-semibold ">{accesorio?.price} €</h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default AccesorioCard;
