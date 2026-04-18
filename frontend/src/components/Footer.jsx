import { Link } from "react-router-dom";
import {
    send, qr, google, apple,
    insta, facebook, linkin, twitter, copyright,
} from "../assets/icons";

const SOCIAL_LINKS = [
    { icon: facebook, url: "https://facebook.com",  label: "Facebook" },
    { icon: twitter,  url: "https://twitter.com",   label: "Twitter" },
    { icon: insta,    url: "https://instagram.com", label: "Instagram" },
    { icon: linkin,   url: "https://linkedin.com",  label: "LinkedIn" },
];

const APP_LINKS = [
    { icon: google, url: "https://play.google.com",         label: "Google Play" },
    { icon: apple,  url: "https://www.apple.com/app-store/", label: "App Store" },
];

export default function Footer() {
    return (
        <footer style={{ background: "#1a1a1a", color: "#D1D5DB", marginTop: "auto" }}>
            {/* Main footer grid */}
            <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "3.5rem 2rem" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "3rem",
                }}>

                    {/* Brand column */}
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <li>
                            <h2 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                                Exclusive
                            </h2>
                        </li>
                        <li>
                            <Link to="/subscribe" style={{ color: "#9CA3AF", fontSize: "0.875rem", fontWeight: 500, transition: "color 0.2s" }}
                                onMouseEnter={e => e.target.style.color = "#fff"}
                                onMouseLeave={e => e.target.style.color = "#9CA3AF"}
                            >
                                Subscribe
                            </Link>
                        </li>
                        <li style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "#9CA3AF" }}>
                            Get 10% off your first order
                        </li>
                        <li>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #374151",
                                borderRadius: "6px",
                                overflow: "hidden",
                            }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    style={{
                                        flex: 1,
                                        background: "transparent",
                                        border: "none",
                                        outline: "none",
                                        padding: "0.55rem 0.75rem",
                                        fontSize: "0.8rem",
                                        color: "#D1D5DB",
                                    }}
                                />
                                <button style={{
                                    background: "transparent",
                                    border: "none",
                                    padding: "0.55rem 0.75rem",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    transition: "background 0.2s",
                                }}
                                    onMouseEnter={e => e.currentTarget.style.background = "#374151"}
                                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                                >
                                    <img src={send} alt="Subscribe" style={{ width: "16px", height: "16px", filter: "brightness(2)" }} />
                                </button>
                            </div>
                        </li>
                    </ul>

                    {/* Support */}
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                        <li><h2 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>Support</h2></li>
                        <li style={{ fontSize: "0.82rem", lineHeight: 1.7 }}>111 Bijoy sarani, Dhaka,<br />DH-1515, Bangladesh</li>
                        <li style={{ fontSize: "0.82rem" }}>exclusive@gmail.com</li>
                        <li style={{ fontSize: "0.82rem" }}>+88015-88888-9999</li>
                    </ul>

                    {/* Account */}
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li><h2 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>Account</h2></li>
                        {[
                            { label: "My Account", to: "/account" },
                            { label: "Login / Register", to: "/login" },
                            { label: "Cart", to: "/cart" },
                            { label: "Wishlist", to: "/wishlist" },
                            { label: "Shop", to: "/shop" },
                        ].map(({ label, to }) => (
                            <li key={to}>
                                <Link to={to} style={{ fontSize: "0.82rem", color: "#9CA3AF", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.target.style.color = "#fff"}
                                    onMouseLeave={e => e.target.style.color = "#9CA3AF"}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Quick Link */}
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li><h2 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>Quick Link</h2></li>
                        {[
                            { label: "Privacy Policy", to: "/privacypolicy" },
                            { label: "Terms Of Use",   to: "/termofuse" },
                            { label: "FAQ",            to: "/faq" },
                            { label: "Contact",        to: "/contact" },
                        ].map(({ label, to }) => (
                            <li key={to}>
                                <Link to={to} style={{ fontSize: "0.82rem", color: "#9CA3AF", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.target.style.color = "#fff"}
                                    onMouseLeave={e => e.target.style.color = "#9CA3AF"}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Download App */}
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <li><h2 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>Download App</h2></li>
                        <li style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>Save $3 with App — New User Only</li>
                        <li>
                            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                <img src={qr} alt="QR Code" style={{ width: "76px", height: "76px", borderRadius: "8px" }} />
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {APP_LINKS.map(({ icon, url, label }) => (
                                        <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                                            style={{ transition: "opacity 0.2s" }}
                                            onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                                            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                                        >
                                            <img src={icon} alt={label} style={{ height: "38px" }} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: "flex", gap: "1rem", paddingTop: "0.5rem" }}>
                                {SOCIAL_LINKS.map(({ icon, url, label }) => (
                                    <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                                        style={{
                                            width: "34px",
                                            height: "34px",
                                            borderRadius: "50%",
                                            background: "#374151",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "background 0.2s",
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = "#DB4444"}
                                        onMouseLeave={e => e.currentTarget.style.background = "#374151"}
                                    >
                                        <img src={icon} alt={label} style={{ width: "16px", height: "16px", filter: "brightness(10)" }} />
                                    </a>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Bottom bar */}
            <section style={{ borderTop: "1px solid #374151" }}>
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "1.25rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                }}>
                    <img src={copyright} alt="" style={{ width: "14px", height: "14px", opacity: 0.4 }} />
                    <p style={{ fontSize: "0.8rem", color: "#6B7280" }}>
                        Copyright Rimel 2022. All rights reserved.
                    </p>
                </div>
            </section>
        </footer>
    );
}
// use array [{},{}] when multiple elements
// never put anything else than li inside ul
// provide <a> for external links and <Link> for internal pages