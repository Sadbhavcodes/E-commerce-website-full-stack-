import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <section className="min-h-[calc(100vh-140px)] flex items-center justify-center px-6">
            <div className="text-center max-w-xl">
                <p className="text-sm text-gray-400 mb-6">
                    Home / 404 Error
                </p>

                <h1 className="text-6xl md:text-7xl font-bold tracking-wide mb-6">
                    404 Not Found
                </h1>

                <p className="text-gray-500 mb-10">
                    Your visited page not found. You may go home page.
                </p>

                <Link
                    to="/"
                    aria-label="Back to home page"
                    className="inline-block bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition"
                >
                    Back to home page
                </Link>

            </div>
        </section>
    );
}