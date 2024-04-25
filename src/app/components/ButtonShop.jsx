import Link from "next/link";

export default function ButtonShop() {
  return (
    <div className="flex justify-end px-6">
      <button className="px-4 py-2 font-semibold text-black bg-transparent border border-black hover:bg-black hover:text-white hover:border-transparent">
        <Link href="https://buy.stripe.com/fZe17T9bK8Qp50caEE" target="_blank">
          Comprar
        </Link>
      </button>
    </div>
  );
}
