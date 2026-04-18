import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export default function MainLayout() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <main style={{
                flex: 1,
                maxWidth: "1200px",
                width: "100%",
                margin: "0 auto",
                padding: "2.5rem 2rem 4rem",
            }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
// MainLayout wraps all pages that share common UI
// Navbar and Footer are rendered on every route
// <Outlet /> renders the matched page component
// Only the page inside Outlet changes when route changes
