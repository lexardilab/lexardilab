import Link from "next/link";

function SudaderaCard({ sudadera }) {
  return (
    <>
      <div className="h-screen cursor-pointer">
        <Link href={`/sudaderas/${sudadera?.slug}`}>
          <div className="relative">
            <img src={sudadera?.image} width="800" height="600" alt="art" />
            <div className="absolute bottom-1 left-1">
              <h1 className="text-base font-semibold ">{sudadera?.name}</h1>
            </div>
            <div className="absolute bottom-1 right-1">
              <h1 className="text-base font-semibold ">{sudadera?.price} €</h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SudaderaCard;
