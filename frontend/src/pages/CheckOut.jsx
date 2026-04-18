import { Link } from "react-router-dom";

export default function CheckOut() {
    return (
        <section style={{
            minHeight: "calc(100vh - 140px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3rem 2rem",
        }}>
            <div style={{
                width: "100%",
                maxWidth: "480px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.25rem",
            }}>
                <div style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "#FEF2F2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    marginBottom: "0.5rem",
                }}>
                    🛍️
                </div>
                <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a1a" }}>Checkout</h1>
                <p style={{ color: "#6B7280", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "340px" }}>
                    Checkout is coming soon! Thank you for shopping with <strong>Exclusive</strong>.
                </p>
                <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.75rem" }}>
                    <Link to="/cart" className="btn-outline">← Back to Cart</Link>
                    <Link to="/" className="btn-primary">Continue Shopping</Link>
                </div>
            </div>
        </section>
    );
}
