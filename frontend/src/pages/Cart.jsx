import { CartItemStrip } from "../components";
import { useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localstorage";
import { Link } from "react-router-dom";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getFromLocalStorage("cart") || []);
    }, []);

    useEffect(() => {
        saveToLocalStorage("cart", cart);
    }, [cart]);

    const handleRemove = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    const subtotal = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const shipping = subtotal > 0 ? 50 : 0;
    const total = subtotal + shipping;

    return (
        <div className="space-y-10">

            {/* Header Row */}
            <div className="bg-white shadow-sm rounded-md p-4">
                <ul className="grid grid-cols-4 font-semibold text-sm text-gray-600">
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                </ul>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
                {cart.length > 0 ? (
                    cart.map(product => (
                        <CartItemStrip
                            key={product.id}
                            product={product}
                            onRemove={handleRemove}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-10">
                        Your cart is empty
                    </p>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
                <Link
                    to="/"
                    className="border px-6 py-2 rounded hover:bg-gray-100 transition"
                >
                    Return To Shop
                </Link>

                <button className="border px-6 py-2 rounded hover:bg-gray-100 transition">
                    Update Cart
                </button>
            </div>

            {/* Coupon + Totals Section */}
            <div className="grid md:grid-cols-2 gap-8">

                {/* Coupon */}
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        className="border px-4 py-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-black"
                    />
                    <button
                        type="submit"
                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
                    >
                        Apply Coupon
                    </button>
                </div>

                {/* Cart Totals */}
                <div className="border rounded-md p-6 space-y-4 h-fit">
                    <h2 className="text-lg font-semibold">Cart Total</h2>

                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>${subtotal}</span>
                        </li>

                        <li className="flex justify-between">
                            <span>Shipping:</span>
                            <span>${shipping}</span>
                        </li>

                        <li className="flex justify-between font-semibold text-base border-t pt-3">
                            <span>Total:</span>
                            <span>${total}</span>
                        </li>
                    </ul>

                    <Link
                        to="/checkout"
                        className="block text-center bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                    >
                        Process to Checkout
                    </Link>
                </div>

            </div>
        </div>
    );
}