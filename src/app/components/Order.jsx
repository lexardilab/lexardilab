import { getOrdersByEmail } from "../../../sanity/lib/order-util";

export default async function Order() {
  const user = await currentUser();

  if (!user) return <div>Not logged in</div>;

  const fetchedOrders = await getOrdersByEmail(
    user?.emailAddresses[0]?.emailAddress
  );

  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6] mb-6">
        Your Orders Page
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-[#5B20B6] border-b border-gray-200">
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Payment Status</th>
            <th className="px-4 py-2">Delivery Status</th>
          </tr>
        </thead>
        <tbody>
          {fetchedOrders.map((order) => (
            <tr
              key={order._id}
              className="hover:bg-gray-50 text-center border-b border-gray-300 text-[#5B20B6]"
            >
              <td className="flex items-center px-4 py-2">{order.name}</td>
              <td className="px-4 py-2">{order.qty}</td>
              <td className="px-4 py-2">${order.price}</td>
              <td className="px-4 py-2">
                {order.paid ? (
                  <span className="text-green-500">Paid</span>
                ) : (
                  <span className="text-red-500">Unpaid</span>
                )}
              </td>
              <td className="px-4 py-2">
                {order.delivered ? (
                  <span className="text-green-500">Delivered</span>
                ) : (
                  <span className="text-red-500">In transit</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
