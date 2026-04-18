import { ProductCard } from "../components";
import { useEffect, useState, useRef } from "react";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localstorage";

export default function WishList() {

    const [wishlist, setWishList] = useState([]);
    const initialised = useRef(false);

    useEffect(() => {
        setWishList(getFromLocalStorage("wishlist"));
        initialised.current = true;
    }, []);

    // Save whenever wishlist changes, but NOT on initial mount before data loads
    useEffect(() => {
        if (!initialised.current) return;
        saveToLocalStorage("wishlist", wishlist);
    }, [wishlist]);

    const handleRemove = (id) => {
        setWishList(prev => prev.filter(item => item.id !== id));
    };

    const handleAddtoCart = (product) => {
        const storedCart = getFromLocalStorage("cart");
        const alreadyExists = storedCart.find(item => item.id === product.id);
        if (!alreadyExists) {
            saveToLocalStorage("cart", [...storedCart, { ...product, quantity: 1 }]);
        }
    };

    const moveAllToBag = () => {
        const storedCart = getFromLocalStorage("cart");
        const cartIds = new Set(storedCart.map(i => i.id));
        const newItems = wishlist.filter(p => !cartIds.has(p.id)).map(p => ({ ...p, quantity: 1 }));
        saveToLocalStorage("cart", [...storedCart, ...newItems]);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#1a1a1a" }}>
                    Wishlist <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "#9CA3AF" }}>({wishlist.length})</span>
                </h1>
                <button
                    onClick={moveAllToBag}
                    className="btn-outline"
                    disabled={wishlist.length === 0}
                    style={{ opacity: wishlist.length === 0 ? 0.4 : 1 }}
                >
                    Move All To Bag
                </button>
            </div>

            {/* Grid or empty state */}
            {wishlist.length > 0 ? (
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "1.5rem",
                }}>
                    {wishlist.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onRemove={handleRemove}
                            onAddToCart={handleAddtoCart}
                        />
                    ))}
                </div>
            ) : (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "5rem 2rem",
                    border: "1.5px dashed #E5E7EB",
                    borderRadius: "12px",
                    textAlign: "center",
                    gap: "1rem",
                }}>
                    <p style={{ fontSize: "2rem" }}>🤍</p>
                    <p style={{ fontSize: "1rem", color: "#6B7280", fontWeight: 500 }}>Your wishlist is empty</p>
                    <p style={{ fontSize: "0.875rem", color: "#9CA3AF" }}>Save items you love to come back to them later</p>
                </div>
            )}
        </div>
    );
}