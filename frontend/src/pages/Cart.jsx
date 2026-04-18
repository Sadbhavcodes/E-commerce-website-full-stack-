import { CartItemStrip } from "../components";
import { useEffect, useState, useRef } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localstorage";
import { Link } from "react-router-dom";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [coupon, setCoupon] = useState("");
    const initialised = useRef(false);

    useEffect(() => {
        setCart(getFromLocalStorage("cart") || []);
        initialised.current = true;
    }, []);

    useEffect(() => {
        if (!initialised.current) return;
        saveToLocalStorage("cart", cart);
    }, [cart]);

    const handleRemove = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 50 : 0;
    const total = subtotal + shipping;

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

            {/* Page heading */}
            <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#1a1a1a" }}>Shopping Cart</h1>

            {/* Table */}
            <div style={{ border: "1.5px solid #E5E7EB", borderRadius: "12px", overflow: "hidden" }}>

                {/* Header */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 100px 120px 100px",
                    gap: "1rem",
                    padding: "1rem 1.5rem",
                    background: "#F9FAFB",
                    borderBottom: "1.5px solid #E5E7EB",
                }}>
                    {["Product", "Price", "Quantity", "Subtotal"].map(h => (
                        <span key={h} style={{ fontSize: "0.82rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                            {h}
                        </span>
                    ))}
                </div>

                {/* Rows */}
                {cart.length > 0 ? (
                    cart.map(product => (
                        <CartItemStrip key={product.id} product={product} onRemove={handleRemove} />
                    ))
                ) : (
                    <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
                        <p style={{ color: "#9CA3AF", fontSize: "1rem", marginBottom: "1.5rem" }}>
                            Your cart is empty
                        </p>
                        <Link to="/" className="btn-primary">
                            Continue Shopping
                        </Link>
                    </div>
                )}
            </div>

            {/* Footer row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link to="/" className="btn-outline">← Return To Shop</Link>
                <button
                    className="btn-outline"
                    onClick={() => {
                        const fresh = getFromLocalStorage("cart");
                        setCart([...fresh]);
                    }}
                >
                    Update Cart
                </button>
            </div>

            {/* Coupon + Totals */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start" }}>

                {/* Coupon */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        value={coupon}
                        onChange={e => setCoupon(e.target.value)}
                        style={{
                            flex: 1,
                            border: "1.5px solid #E5E7EB",
                            borderRadius: "6px",
                            padding: "0.7rem 1rem",
                            fontSize: "0.875rem",
                            outline: "none",
                            transition: "border-color 0.2s",
                        }}
                        onFocus={e => e.target.style.borderColor = "#1a1a1a"}
                        onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                    />
                    <button
                        type="button"
                        className="btn-primary"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        Apply Coupon
                    </button>
                </div>

                {/* Totals panel */}
                <div style={{
                    border: "1.5px solid #E5E7EB",
                    borderRadius: "12px",
                    padding: "1.75rem 2rem",
                }}>
                    <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem" }}>Cart Total</h2>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                        <li style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", paddingBottom: "0.9rem", borderBottom: "1px solid #F3F4F6" }}>
                            <span style={{ color: "#6B7280" }}>Subtotal:</span>
                            <span style={{ fontWeight: 600 }}>${subtotal.toFixed(2)}</span>
                        </li>
                        <li style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", paddingBottom: "0.9rem", borderBottom: "1px solid #F3F4F6" }}>
                            <span style={{ color: "#6B7280" }}>Shipping:</span>
                            <span style={{ fontWeight: 600 }}>
                                {shipping > 0 ? `$${shipping}` : <span style={{ color: "#16A34A" }}>Free</span>}
                            </span>
                        </li>
                        <li style={{ display: "flex", justifyContent: "space-between", fontSize: "1rem" }}>
                            <span style={{ fontWeight: 700 }}>Total:</span>
                            <span style={{ fontWeight: 700, color: "#DB4444" }}>${total.toFixed(2)}</span>
                        </li>
                    </ul>

                    <Link
                        to="/checkout"
                        className="btn-primary"
                        style={{ display: "block", textAlign: "center", marginTop: "1.5rem", width: "100%", padding: "0.85rem" }}
                    >
                        Proceed to Checkout →
                    </Link>
                </div>
            </div>
        </div>
    );
}