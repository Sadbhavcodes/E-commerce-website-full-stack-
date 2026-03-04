import { Outlet } from "react-router-dom";
import { Footer,Navbar } from "../components";
export default function MainLayout() {
    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-6">
                <Outlet />
            </main>
            <Footer/>
        </>
    );
}
// MainLayout wraps all pages that share common UI
// Navbar and Footer are rendered on every route
// <Outlet /> renders the matched page component
// Only the page inside Outlet changes when route changes
