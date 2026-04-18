import { beatsnoop } from "../assets/icons";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section style={{
            minHeight: "calc(100vh - 140px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div style={{
                width: "100%",
                maxWidth: "960px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
                alignItems: "center",
                padding: "2rem",
            }}>
                {/* Illustration */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src={beatsnoop}
                        alt="Login visual"
                        style={{ maxWidth: "420px", width: "100%", objectFit: "contain", borderRadius: "12px" }}
                    />
                </div>

                {/* Form */}
                <div style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.5rem" }}>
                            Log in to Exclusive
                        </h1>
                        <p style={{ color: "#6B7280", fontSize: "0.9rem" }}>
                            Enter your details below
                        </p>
                    </div>

                    <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <div style={{ position: "relative" }}>
                            <input
                                type="email"
                                placeholder="Email or Phone Number"
                                style={{
                                    width: "100%",
                                    borderBottom: "2px solid #E5E7EB",
                                    borderTop: "none",
                                    borderLeft: "none",
                                    borderRight: "none",
                                    padding: "0.6rem 0",
                                    fontSize: "0.9rem",
                                    outline: "none",
                                    background: "transparent",
                                    color: "#1a1a1a",
                                    transition: "border-color 0.2s",
                                }}
                                onFocus={e => e.target.style.borderBottomColor = "#1a1a1a"}
                                onBlur={e => e.target.style.borderBottomColor = "#E5E7EB"}
                            />
                        </div>

                        <div style={{ position: "relative" }}>
                            <input
                                type="password"
                                placeholder="Password"
                                style={{
                                    width: "100%",
                                    borderBottom: "2px solid #E5E7EB",
                                    borderTop: "none",
                                    borderLeft: "none",
                                    borderRight: "none",
                                    padding: "0.6rem 0",
                                    fontSize: "0.9rem",
                                    outline: "none",
                                    background: "transparent",
                                    color: "#1a1a1a",
                                    transition: "border-color 0.2s",
                                }}
                                onFocus={e => e.target.style.borderBottomColor = "#1a1a1a"}
                                onBlur={e => e.target.style.borderBottomColor = "#E5E7EB"}
                            />
                        </div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.5rem" }}>
                            <button
                                type="submit"
                                className="btn-primary"
                                style={{ padding: "0.75rem 2.5rem" }}
                            >
                                Log In
                            </button>
                            <Link
                                to="/"
                                style={{
                                    color: "#DB4444",
                                    fontSize: "0.85rem",
                                    fontWeight: 500,
                                    textDecoration: "none",
                                }}
                                onMouseEnter={e => e.target.style.textDecoration = "underline"}
                                onMouseLeave={e => e.target.style.textDecoration = "none"}
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </form>

                    <p style={{ marginTop: "2rem", fontSize: "0.875rem", textAlign: "center", color: "#6B7280" }}>
                        Don't have an account?{" "}
                        <Link to="/signup" style={{ color: "#DB4444", fontWeight: 600 }}>
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
