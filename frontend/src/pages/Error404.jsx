import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <section style={{
            minHeight: "calc(100vh - 140px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3rem 2rem",
        }}>
            <div style={{
                textAlign: "center",
                maxWidth: "480px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.25rem",
            }}>
                <nav style={{ fontSize: "0.8rem", color: "#9CA3AF", display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                    <Link to="/" style={{ color: "#9CA3AF" }}>Home</Link>
                    <span>/</span>
                    <span>404 Error</span>
                </nav>

                <h1 style={{
                    fontSize: "clamp(4rem, 12vw, 7rem)",
                    fontWeight: 900,
                    color: "#1a1a1a",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                }}>
                    404
                </h1>

                <p style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#1a1a1a",
                }}>
                    Oops! Page Not Found
                </p>

                <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="btn-primary"
                    style={{ marginTop: "0.75rem", padding: "0.85rem 2.5rem" }}
                >
                    Back to Home Page
                </Link>
            </div>
        </section>
    );
}