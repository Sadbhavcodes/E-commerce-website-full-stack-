import { Link } from "react-router-dom";
import { search, fav, cart } from "../assets/icons"
export default function Navbar() {
    return (
        <header className="border-b">
            <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                <h2 className="text-xl font-bold">Exclusive</h2>
                <ul className="flex gap-6 text-sm font-medium">
                    <li className="hover:text-red-500 transition"><Link to="/">Home</Link></li>
                    <li className="hover:text-red-500 transition"><Link to="/contact">Contact</Link></li>
                    <li className="hover:text-red-500 transition"><Link to="/about">About</Link></li>
                    <li className="hover:text-red-500 transition"><Link to="/signup">Sign Up</Link></li>
                </ul>
                <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-md px-3 py-2 gap-2 hover:border-black">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="outline-none text-sm w-48"
                        />
                        <button
                            type="button"
                            className="px-3 py-2 hover:bg-gray-100 transition"
                            aria-label="search">
                            <img src={search} alt="" className="w-4 h-4" />
                        </button>
                    </div>

                    <button
                        className="hover:opacity-70 transition" aria-label="wishlist">
                        <img src={fav} alt="" className="w-5 h-5" />
                    </button>
                    <button
                        className="hover:opacity-70 transition" aria-label="cart">
                        <img src={cart} alt="" className="w-5 h-5" />
                    </button>
                </div>
            </nav>
        </header>
    );
}