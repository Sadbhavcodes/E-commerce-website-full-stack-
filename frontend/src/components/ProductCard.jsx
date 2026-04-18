import { bin, cart1 } from "../assets/icons";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onRemove, onAddToCart }) {
    const hasDiscount = product.discountPercentage > 0;

    return (
        <div style={{
            border: "1.5px solid #E5E7EB",
            borderRadius: "10px",
            overflow: "hidden",
            background: "#fff",
            transition: "box-shadow 0.25s, transform 0.25s",
            display: "flex",
            flexDirection: "column",
        }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.09)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
            {/* Image area */}
            <div style={{ position: "relative", background: "#F9FAFB", padding: "1.25rem" }}>

                {/* Discount badge */}
                {hasDiscount && (
                    <span style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        background: "#DB4444",
                        color: "#fff",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: "4px",
                    }}>
                        -{Math.round(product.discountPercentage)}%
                    </span>
                )}

                {/* Remove button */}
                {onRemove && (
                    <button
                        onClick={() => onRemove(product.id)}
                        title="Remove"
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            background: "#fff",
                            border: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
                            cursor: "pointer",
                            transition: "background 0.2s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "#FEF2F2"}
                        onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                    >
                        <img src={bin} alt="Remove" style={{ width: "14px", height: "14px" }} />
                    </button>
                )}

                {/* Product image — links to detail page */}
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.thumbnail || product.image}
                        alt={product.title}
                        style={{ width: "100%", height: "160px", objectFit: "contain" }}
                    />
                </Link>
            </div>

            {/* Add to cart */}
            <button
                onClick={() => onAddToCart && onAddToCart(product)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    background: "#1a1a1a",
                    color: "#fff",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    padding: "0.6rem 1rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.2s",
                    letterSpacing: "0.02em",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#DB4444"}
                onMouseLeave={e => e.currentTarget.style.background = "#1a1a1a"}
            >
                <img src={cart1} alt="" style={{ width: "16px", height: "16px", filter: "brightness(10)" }} />
                Add To Cart
            </button>

            {/* Info */}
            <div style={{ padding: "0.9rem 1rem 1rem" }}>
                <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none" }}
                >
                    <p style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#1a1a1a",
                        marginBottom: "0.4rem",
                        lineHeight: 1.4,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}>
                        {product.title}
                    </p>
                </Link>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#DB4444" }}>
                        ${product.price}
                    </span>
                    {hasDiscount && (
                        <span style={{ fontSize: "0.78rem", color: "#9CA3AF", textDecoration: "line-through" }}>
                            ${(product.price / (1 - product.discountPercentage / 100)).toFixed(0)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
// on remove we used only product id because we only need that id to remove the whole product
// but on add to cart we used product because we need the whole detail of product to store