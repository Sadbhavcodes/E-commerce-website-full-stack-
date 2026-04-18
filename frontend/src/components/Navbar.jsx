import { Link, useLocation } from "react-router-dom";
import { search, fav, cart } from "../assets/icons";

export default function Navbar() {
    const { pathname } = useLocation();

    const navLinks = [
        { label: "Home",    to: "/" },
        { label: "Contact", to: "/contact" },
        { label: "About",   to: "/about" },
        { label: "Sign Up", to: "/signup" },
    ];

    return (
        <header style={{
            borderBottom: "1.5px solid #E5E7EB",
            background: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 50,
        }}>
            <nav style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 2rem",
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
            }}>
                {/* Logo */}
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1a1a1a", flexShrink: 0 }}>
                    Exclusive
                </h2>

                {/* Nav links */}
                <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center" }}>
                    {navLinks.map(({ label, to }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    color: pathname === to ? "#DB4444" : "#1a1a1a",
                                    transition: "color 0.2s",
                                    paddingBottom: "4px",
                                    borderBottom: pathname === to ? "2px solid #DB4444" : "2px solid transparent",
                                }}
                                onMouseEnter={e => e.target.style.color = "#DB4444"}
                                onMouseLeave={e => e.target.style.color = pathname === to ? "#DB4444" : "#1a1a1a"}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Search + Icons */}
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                    {/* Search box */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        border: "1.5px solid #E5E7EB",
                        borderRadius: "8px",
                        padding: "0.45rem 0.75rem",
                        background: "#F9FAFB",
                        transition: "border-color 0.2s",
                    }}
                        onFocusCapture={e => e.currentTarget.style.borderColor = "#1a1a1a"}
                        onBlurCapture={e => e.currentTarget.style.borderColor = "#E5E7EB"}
                    >
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            style={{
                                outline: "none",
                                fontSize: "0.82rem",
                                width: "190px",
                                background: "transparent",
                                border: "none",
                                color: "#1a1a1a",
                            }}
                        />
                        <button type="button" style={{ display: "flex", alignItems: "center", padding: 0, background: "none", border: "none", cursor: "pointer" }} aria-label="search">
                            <img src={search} alt="" style={{ width: "16px", height: "16px", opacity: 0.6 }} />
                        </button>
                    </div>

                    {/* Wishlist icon */}
                    <Link
                        to="/wishlist"
                        aria-label="Wishlist"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            transition: "background 0.2s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "#FEF2F2"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                        <img src={fav} alt="Wishlist" style={{ width: "22px", height: "22px" }} />
                    </Link>

                    {/* Cart icon */}
                    <Link
                        to="/cart"
                        aria-label="Cart"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            transition: "background 0.2s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "#FEF2F2"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                        <img src={cart} alt="Cart" style={{ width: "22px", height: "22px" }} />
                    </Link>
                </div>
            </nav>
        </header>
    );
}