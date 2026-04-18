import { useProducts } from "../hooks";
import { ProductCard } from "../components";
import { useRef } from "react";
import { HeroBanner, leftarrow, rightarrow, phone,
    computer, camera, headphone, gaming, smartwatch } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localstorage";
import Error404 from "./Error404";

const categories = [
    { name: "Phones",     id: 1, image: phone },
    { name: "Computers",  id: 2, image: computer },
    { name: "SmartWatch", id: 3, image: smartwatch },
    { name: "Camera",     id: 4, image: camera },
    { name: "Headphones", id: 5, image: headphone },
    { name: "Gaming",     id: 6, image: gaming },
];

export default function HomePage() {
    const { products, error, loading } = useProducts({ limit: 10 });
    const navigate = useNavigate();
    const productsRef = useRef(null);
    const categoriesRef = useRef(null);

    const handleAddToCart = (product) => {
        const storedCart = getFromLocalStorage("cart");
        const alreadyExists = storedCart.find(item => item.id === product.id);
        if (!alreadyExists) {
            saveToLocalStorage("cart", [...storedCart, { ...product, quantity: 1 }]);
        }
    };

    const scroll = (ref, dir) => {
        if (ref.current) ref.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    };

    const viewProducts = () => navigate("/products");

    if (loading) return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "50vh" }}>
            <div style={{ textAlign: "center" }}>
                <div style={{
                    width: "48px", height: "48px", border: "4px solid #E5E7EB",
                    borderTopColor: "#DB4444", borderRadius: "50%",
                    animation: "spin 0.8s linear infinite", margin: "0 auto 1rem",
                }} />
                <p style={{ color: "#6B7280", fontSize: "0.9rem" }}>Loading products…</p>
            </div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );

    if (error || !products) return <Error404 />;

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>

            {/* ── HERO SECTION ── */}
            <section style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                gap: "0",
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                overflow: "hidden",
                minHeight: "380px",
            }}>
                {/* Sidebar */}
                <aside style={{
                    borderRight: "1px solid #E5E7EB",
                    padding: "1.5rem 0",
                    background: "#fff",
                }}>
                    <nav>
                        <ul style={{ listStyle: "none" }}>
                            {[
                                "Woman's Fashion", "Man's Fashion", "Electronics",
                                "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Health & Beauty"
                            ].map(item => (
                                <li key={item}>
                                    <a href="#" style={{
                                        display: "block",
                                        padding: "0.6rem 1.5rem",
                                        fontSize: "0.875rem",
                                        color: "#374151",
                                        transition: "background 0.15s, color 0.15s",
                                    }}
                                        onMouseEnter={e => { e.target.style.background = "#FEF2F2"; e.target.style.color = "#DB4444"; }}
                                        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#374151"; }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Hero Banner */}
                <div style={{ background: "#000", overflow: "hidden", position: "relative" }}>
                    <img
                        src={HeroBanner}
                        alt="Hero Banner"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            </section>

            {/* ── FLASH SALES ── */}
            <section>
                {/* Row: label + arrows */}
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2rem" }}>
                    <div>
                        <div className="section-label">
                            <span>Today's</span>
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>Flash Sales</h2>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                        <button
                            onClick={() => scroll(productsRef, -1)}
                            style={arrowBtnStyle}
                            aria-label="Scroll left"
                            onMouseEnter={e => e.currentTarget.style.background = "#1a1a1a"}
                            onMouseLeave={e => e.currentTarget.style.background = "#F3F4F6"}
                        >
                            <img src={leftarrow} alt="" style={{ width: "18px", height: "18px", filter: "brightness(0)" }} />
                        </button>
                        <button
                            onClick={() => scroll(productsRef, 1)}
                            style={arrowBtnStyle}
                            aria-label="Scroll right"
                            onMouseEnter={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.querySelector("img").style.filter = "brightness(10)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "#F3F4F6"; e.currentTarget.querySelector("img").style.filter = "brightness(0)"; }}
                        >
                            <img src={rightarrow} alt="" style={{ width: "18px", height: "18px", filter: "brightness(0)" }} />
                        </button>
                    </div>
                </div>

                {/* Scrollable product strip */}
                <div
                    ref={productsRef}
                    style={{
                        display: "flex",
                        gap: "1.25rem",
                        overflowX: "auto",
                        paddingBottom: "0.5rem",
                        scrollbarWidth: "none",
                    }}
                >
                    {products.map((product) => (
                        <div key={product.id} style={{ flexShrink: 0, width: "220px" }}>
                            <ProductCard product={product} onAddToCart={handleAddToCart} />
                        </div>
                    ))}
                </div>

                {/* View All */}
                <div style={{ textAlign: "center", marginTop: "3rem" }}>
                    <button onClick={viewProducts} className="btn-primary" style={{ minWidth: "200px" }}>
                        View All Products
                    </button>
                </div>
            </section>

            {/* ── CATEGORIES ── */}
            <section>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2rem" }}>
                    <div>
                        <div className="section-label">
                            <span>Categories</span>
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>Browse By Category</h2>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                        <button onClick={() => scroll(categoriesRef, -1)} style={arrowBtnStyle} aria-label="Scroll left"
                            onMouseEnter={e => e.currentTarget.style.background = "#1a1a1a"}
                            onMouseLeave={e => e.currentTarget.style.background = "#F3F4F6"}
                        >
                            <img src={leftarrow} alt="" style={{ width: "18px", height: "18px", filter: "brightness(0)" }} />
                        </button>
                        <button onClick={() => scroll(categoriesRef, 1)} style={arrowBtnStyle} aria-label="Scroll right"
                            onMouseEnter={e => e.currentTarget.style.background = "#1a1a1a"}
                            onMouseLeave={e => e.currentTarget.style.background = "#F3F4F6"}
                        >
                            <img src={rightarrow} alt="" style={{ width: "18px", height: "18px", filter: "brightness(0)" }} />
                        </button>
                    </div>
                </div>

                <div
                    ref={categoriesRef}
                    style={{
                        display: "flex",
                        gap: "1rem",
                        overflowX: "auto",
                        scrollbarWidth: "none",
                        paddingBottom: "0.5rem",
                    }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            style={{
                                flexShrink: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0.75rem",
                                width: "160px",
                                height: "140px",
                                border: "1.5px solid #E5E7EB",
                                borderRadius: "10px",
                                background: "#fff",
                                cursor: "pointer",
                                transition: "border-color 0.2s, background 0.2s, transform 0.2s",
                                padding: "1rem",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = "#DB4444"; e.currentTarget.style.borderColor = "#DB4444"; e.currentTarget.style.transform = "translateY(-3px)"; Array.from(e.currentTarget.children).forEach(c => c.style.color = "#fff"); }}
                            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.transform = "translateY(0)"; Array.from(e.currentTarget.children).forEach(c => c.style.color = "#1a1a1a"); }}
                        >
                            <img src={cat.image} alt={cat.name} style={{ width: "52px", height: "52px", objectFit: "contain" }} />
                            <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a" }}>{cat.name}</span>
                        </button>
                    ))}
                </div>
            </section>

        </div>
    );
}

// Shared style for left/right scroll arrow buttons
const arrowBtnStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "none",
    background: "#F3F4F6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background 0.2s",
    flexShrink: 0,
};

// A page should NOT care about Navbar / Footer / layout.
// So HomePage.jsx = only the content between navbar & footer.