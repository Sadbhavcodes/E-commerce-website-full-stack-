import { beatsnoop, googleLogo } from "../assets/icons";
import { Link } from "react-router-dom";

export default function SignUp() {
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
                        alt="Sign up visual"
                        style={{ maxWidth: "420px", width: "100%", objectFit: "contain", borderRadius: "12px" }}
                    />
                </div>

                {/* Form */}
                <div style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.5rem" }}>
                            Create an account
                        </h1>
                        <p style={{ color: "#6B7280", fontSize: "0.9rem" }}>
                            Enter your details below
                        </p>
                    </div>

                    <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        {[
                            { type: "text",     placeholder: "Name" },
                            { type: "email",    placeholder: "Email or Phone Number" },
                            { type: "password", placeholder: "Password" },
                        ].map(({ type, placeholder }) => (
                            <input
                                key={placeholder}
                                type={type}
                                placeholder={placeholder}
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
                        ))}

                        <button
                            type="submit"
                            className="btn-primary"
                            style={{ width: "100%", padding: "0.85rem", marginTop: "0.5rem" }}
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Google sign up */}
                    <button
                        type="button"
                        style={{
                            marginTop: "1rem",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.75rem",
                            border: "1.5px solid #E5E7EB",
                            borderRadius: "6px",
                            padding: "0.75rem",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            background: "#fff",
                            cursor: "pointer",
                            transition: "background 0.2s, border-color 0.2s",
                            color: "#1a1a1a",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#F9FAFB"; e.currentTarget.style.borderColor = "#D1D5DB"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#E5E7EB"; }}
                    >
                        <img src={googleLogo} alt="Google" style={{ width: "20px", height: "20px" }} />
                        Sign up with Google
                    </button>

                    <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", textAlign: "center", color: "#6B7280" }}>
                        Already have an account?{" "}
                        <Link to="/login" style={{ color: "#DB4444", fontWeight: 600 }}>
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}