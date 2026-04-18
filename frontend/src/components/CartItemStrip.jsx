import { vector } from "../assets/icons";

export default function CartItemStrip({ product, onRemove }) {
    const totalPrice = (product.quantity * product.price).toFixed(2);

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 100px 120px 100px",
            alignItems: "center",
            padding: "1.25rem 1.5rem",
            borderBottom: "1px solid #F3F4F6",
            gap: "1rem",
            background: "#fff",
            transition: "background 0.15s",
        }}
            onMouseEnter={e => e.currentTarget.style.background = "#FAFAFA"}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
        >
            {/* Product info cell */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <button
                    onClick={() => onRemove(product.id)}
                    aria-label="Remove item"
                    title="Remove"
                    style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        border: "1px solid #E5E7EB",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        flexShrink: 0,
                        transition: "background 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#FEF2F2"; e.currentTarget.style.borderColor = "#DB4444"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#E5E7EB"; }}
                >
                    <img src={vector} alt="remove" style={{ width: "10px", height: "10px" }} />
                </button>

                <div style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    overflow: "hidden",
                    background: "#F9FAFB",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <img
                        src={product.thumbnail || product.image}
                        alt={product.title}
                        style={{ width: "100%", height: "100%", objectFit: "contain", padding: "4px" }}
                    />
                </div>

                <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#1a1a1a", lineHeight: 1.4 }}>
                    {product.title}
                </span>
            </div>

            {/* Price */}
            <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#DB4444" }}>
                ${product.price}
            </div>

            {/* Quantity */}
            <div style={{
                display: "inline-flex",
                alignItems: "center",
                border: "1.5px solid #E5E7EB",
                borderRadius: "6px",
                overflow: "hidden",
                width: "fit-content",
            }}>
                <span style={{ padding: "0.35rem 1rem", fontSize: "0.875rem", fontWeight: 600, borderRight: "1px solid #E5E7EB" }}>
                    {product.quantity}
                </span>
            </div>

            {/* Subtotal */}
            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1a1a1a" }}>
                ${totalPrice}
            </div>
        </div>
    );
}