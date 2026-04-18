import { useProduct } from "../hooks/useProduct";
import { Link, Navigate } from "react-router-dom";
import { fav } from "../assets/icons";
import { useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localstorage";

export default function ProductDetail() {
    const { product, loading, error } = useProduct();
    const [qty, setQty] = useState(1);
    const [activeImg, setActiveImg] = useState(0);
    const [added, setAdded] = useState(false);

    if (loading) return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
            <div style={{
                width: "48px", height: "48px",
                border: "4px solid #E5E7EB",
                borderTopColor: "#DB4444",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );

    if (error || !product) return <Navigate to="/error404" replace />;

    const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);
    const showDiscount = product.discountPercentage > 0;
    const finalPrice = showDiscount ? discountedPrice : product.price.toFixed(2);
    const stockAmount = product.stock;
    const inStock = stockAmount > 0;

    const images = product.images?.length ? product.images : [product.thumbnail];

    const handleWishlist = () => {
        const stored = getFromLocalStorage("wishlist");
        const exists = stored.find(item => item.id === product.id);
        if (!exists) {
            saveToLocalStorage("wishlist", [...stored, { ...product, quantity: qty }]);
            setAdded(true);
            setTimeout(() => setAdded(false), 2000);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            {/* Breadcrumb */}
            <nav style={{ fontSize: "0.8rem", color: "#9CA3AF", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <Link to="/" style={{ color: "#9CA3AF" }} onMouseEnter={e => e.target.style.color = "#1a1a1a"} onMouseLeave={e => e.target.style.color = "#9CA3AF"}>Home</Link>
                <span>/</span>
                <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{product.title}</span>
            </nav>

            {/* Main grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>

                {/* LEFT — Images */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {/* Main image */}
                    <div style={{
                        border: "1.5px solid #E5E7EB",
                        borderRadius: "12px",
                        overflow: "hidden",
                        background: "#F9FAFB",
                        aspectRatio: "1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2rem",
                    }}>
                        <img
                            src={images[activeImg]}
                            alt={product.title}
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                    </div>

                    {/* Thumbnails */}
                    {images.length > 1 && (
                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                            {images.slice(0, 5).map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImg(i)}
                                    style={{
                                        width: "72px",
                                        height: "72px",
                                        border: `2px solid ${i === activeImg ? "#DB4444" : "#E5E7EB"}`,
                                        borderRadius: "8px",
                                        background: "#F9FAFB",
                                        overflow: "hidden",
                                        cursor: "pointer",
                                        padding: "4px",
                                        transition: "border-color 0.2s",
                                    }}
                                >
                                    <img src={img} alt={`View ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* RIGHT — Info */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

                    <div>
                        <h1 style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1.3, marginBottom: "0.5rem" }}>
                            {product.title}
                        </h1>
                        {product.brand && (
                            <p style={{ fontSize: "0.875rem", color: "#6B7280" }}>by <strong style={{ color: "#1a1a1a" }}>{product.brand}</strong></p>
                        )}
                    </div>

                    {/* Price */}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "2rem", fontWeight: 800, color: "#DB4444" }}>${finalPrice}</span>
                        {showDiscount && (
                            <>
                                <span style={{ fontSize: "1.1rem", color: "#9CA3AF", textDecoration: "line-through" }}>
                                    ${product.price.toFixed(2)}
                                </span>
                                <span style={{
                                    background: "#FEF2F2",
                                    color: "#DB4444",
                                    fontSize: "0.78rem",
                                    fontWeight: 700,
                                    padding: "3px 10px",
                                    borderRadius: "20px",
                                }}>
                                    -{Math.round(product.discountPercentage)}% OFF
                                </span>
                            </>
                        )}
                    </div>

                    {/* Stock badge */}
                    <div>
                        <span style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: inStock ? "#16A34A" : "#DC2626",
                            background: inStock ? "#F0FDF4" : "#FEF2F2",
                            padding: "0.3rem 0.8rem",
                            borderRadius: "20px",
                        }}>
                            <span style={{ fontSize: "0.5rem" }}>●</span>
                            {inStock ? `In Stock (${stockAmount} left)` : "Out of Stock"}
                        </span>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.7 }}>
                        {product.description}
                    </p>

                    {/* Divider */}
                    <div style={{ height: "1px", background: "#F3F4F6" }} />

                    {/* Qty + Actions */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        {/* Qty selector */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            border: "1.5px solid #E5E7EB",
                            borderRadius: "8px",
                            overflow: "hidden",
                        }}>
                            <button
                                onClick={() => setQty(prev => Math.max(1, prev - 1))}
                                disabled={qty <= 1}
                                style={{
                                    width: "40px",
                                    height: "44px",
                                    background: "#F9FAFB",
                                    border: "none",
                                    borderRight: "1px solid #E5E7EB",
                                    fontSize: "1.2rem",
                                    cursor: qty <= 1 ? "not-allowed" : "pointer",
                                    color: qty <= 1 ? "#D1D5DB" : "#1a1a1a",
                                    transition: "background 0.2s",
                                }}
                                onMouseEnter={e => { if (qty > 1) e.currentTarget.style.background = "#E5E7EB"; }}
                                onMouseLeave={e => e.currentTarget.style.background = "#F9FAFB"}
                            >−</button>
                            <span style={{ width: "50px", textAlign: "center", fontWeight: 700, fontSize: "0.95rem" }}>{qty}</span>
                            <button
                                onClick={() => setQty(prev => prev < stockAmount ? prev + 1 : prev)}
                                disabled={qty >= stockAmount}
                                style={{
                                    width: "40px",
                                    height: "44px",
                                    background: "#F9FAFB",
                                    border: "none",
                                    borderLeft: "1px solid #E5E7EB",
                                    fontSize: "1.2rem",
                                    cursor: qty >= stockAmount ? "not-allowed" : "pointer",
                                    color: qty >= stockAmount ? "#D1D5DB" : "#1a1a1a",
                                    transition: "background 0.2s",
                                }}
                                onMouseEnter={e => { if (qty < stockAmount) e.currentTarget.style.background = "#E5E7EB"; }}
                                onMouseLeave={e => e.currentTarget.style.background = "#F9FAFB"}
                            >+</button>
                        </div>

                        {/* Buy Now */}
                        <Link
                            to="/checkout"
                            className="btn-primary"
                            style={{ padding: "0.75rem 2rem" }}
                        >
                            Buy Now
                        </Link>

                        {/* Wishlist */}
                        <button
                            onClick={handleWishlist}
                            title={added ? "Added!" : "Add to Wishlist"}
                            style={{
                                width: "44px",
                                height: "44px",
                                borderRadius: "8px",
                                border: `1.5px solid ${added ? "#DB4444" : "#E5E7EB"}`,
                                background: added ? "#FEF2F2" : "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                transition: "all 0.2s",
                            }}
                        >
                            <img src={fav} alt="Wishlist" style={{ width: "22px", height: "22px" }} />
                        </button>
                    </div>

                    {added && (
                        <p style={{ fontSize: "0.8rem", color: "#16A34A", fontWeight: 500 }}>
                            ✓ Added to wishlist!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}