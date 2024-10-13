import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Order } from "../types/order"

const Orders = () => {
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/orders`)
            .then(response => setOrders(response.data))
            .catch(error => console.error("Error fetching orders:", error))
            .finally(() => setLoading(false))
    }, [])
    
    return (
        <div className=" p-10 min-h-screen">
            <h1 className="text-5xl font-bold mb-8">Orders</h1>
            {loading ? (
                // Loading Spinner
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                </div>
            ) : (
                // Orders
                <div className="space-y-6">
                    {orders.map(order => (
                        <div
                            key={order.id}
                            className="header shadow-lg rounded-lg p-6 flex justify-between items-center"
                        >
                            <div className="text-xl flex flex-col gap-5">
                                <p className="text-2xl font-semibold text-white">Price: ${order.price}</p>
                                <p className="text-white"><span className="font-semibold pr-2">Meal:</span> {order.meal}</p>
                                <p className="text-white"><span className="font-semibold pr-2">Side:</span> {order.side}</p>
                                <p className="text-white"><span className="font-semibold pr-2">Drink:</span> {order.drink}</p>
                                <p className="text-white"><span className="font-semibold pr-2">Dessert:</span> {order.dessert}</p>
                            </div>
                            <div className="flex flex-col gap-10">
                                <Link
                                    to={`/orders/${order.id}/edit`}
                                    className="bg-transparent text-2xl text-white px-4 pr-5 py-2 rounded-md"
                                >
                                    Edit Order
                                </Link>
                                <button
                                    className="bg-transparent text-2xl text-white px-4 pr-5 py-2 rounded-md "
                                    onClick={() => {
                                        axios
                                            .delete(`${import.meta.env.VITE_API_URL}/orders/${order.id}`)
                                            .then(() => setOrders(orders.filter(o => o.id !== order.id)))
                                            .catch(error => console.error("Error deleting order:", error))
                                    }}
                                >
                                    Delete Order
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Orders
