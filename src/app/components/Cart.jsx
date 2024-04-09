"use client";
import Image from "next/image";
import React from "react";
import { HiX } from "react-icons/hi";
import useCartStore from "../cartStore";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { createOrder } from "../../../sanity/lib/order-util.js";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [loading, setLoading] = React.useState(false);
  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const router = useRouter();

  console.log(cart);

  const stripe = useStripe();
  const elements = useElements();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const onSubmit = async () => {
    const cardElement = elements?.getElement("card");
    setLoading(true);

    try {
      if (!stripe || !cardElement) return null;
      const data = await axios.post("/api/stripe", {
        data: { amount: cartTotal.toFixed(0) },
      });

      console.log(data);
      const res = await stripe?.confirmCardPayment(data?.data?.intent, {
        payment_method: { card: cardElement },
      });
      //console.log(res.paymentIntent.status);
      const status = res?.paymentIntent?.status;
      if (status === "succeeded") {
        setLoading(false);
        toast.success("Payment Successful");
        const email = user?.emailAddresses[0]?.emailAddress;

        if (email) {
          const res = await createOrder(email, cart);
          if (res) {
            router.push("/order");
          }
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Payment Failed");
    }
  };

  return (
    <div className="">
      <h1 className="pt-6 pb-4 pl-4 text-xl font-semibold ">Carrito</h1>

      <div className="w-2/3 border-collapse ">
        <div>
          <div className="grid grid-cols-4 px-6 border-b border-gray-200">
            <div className="bg-red-200">
              <h1 className="">Articulo</h1>
              <div className="">
                {cart?.map((product) => (
                  <div
                    key={product?._id}
                    className="flex space-x-48 border-b border-gray-300"
                  >
                    <div className="flex items-center px-4 py-2">
                      <Image
                        className="mr-2"
                        src={product?.image}
                        width={50}
                        height={30}
                        alt="Imagen Producto"
                      />
                      <div className="px-4 py-2 ">
                        <h1>{product?.name}</h1>
                        <h1 className="pt-1 text-xs">Talla:{product?.size}</h1>
                        <h1 className="pt-1 text-xs">Color:{product?.color}</h1>
                      </div>
                    </div>
                    <h1 className="px-4 py-2">{product?.quantity}</h1>
                    <h1 className="px-4 py-2 text-center">{product?.price}</h1>
                    <h1 className="px-4 py-2">
                      <HiX
                        onClick={() => {
                          handleRemoveFromCart(product?._id);
                        }}
                        className="mx-auto cursor-pointer "
                      />
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-200">
              <h1 className="">Cantidad</h1>
            </div>
            <div className="bg-orange-200">
              <h1 className="">Precio</h1>
            </div>
            <div className="bg-slate-200">
              <h1 className="">Eliminar</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Total Section */}
      <div className="mt-4 ml-auto">
        <p className="mr-4 text-lg font-semibold text-right">
          Total: {cartTotal}€
        </p>
      </div>

      {cartTotal > 0 && <></>}

      <div className="max-w-sm mx-auto mt-6 space-y-4 text-black">
        {cartTotal > 0 && (
          <>
            <button
              disabled={cartTotal === 0}
              onClick={onSubmit}
              className="w-full px-4 py-2 mr-4 text-lg font-semibold text-center text-white bg-black border rounded "
            >
              <Link href="/order">Finalizar compra</Link>
            </button>
          </>
        )}

        <button className="w-full px-4 py-2 mr-4 text-lg font-semibold text-center text-black bg-white border border-black rounded">
          <Link className="" href="/tienda">
            Seguir comprando
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;
