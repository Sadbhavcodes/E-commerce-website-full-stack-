import { ProductCard } from "../components";
import { useEffect, useState } from "react";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localstorage";

export default function WishList() {

    const [wishlist, setWishList] = useState([]);

    // Load once
    useEffect(() => {
        setWishList(getFromLocalStorage("wishlist"));
    }, []);

    // Save whenever wishlist changes
    useEffect(() => {
        saveToLocalStorage("wishlist", wishlist);
    }, [wishlist]);
    // earlier we were writing saving code everywhere but just create a useffect that handles that code everytime wishlist changes
    const handleRemove = (id) => {
        const updatedWishList = wishlist.filter(item => item.id !== id);
        setWishList(updatedWishList);
    };

    const handleAddtoCart = (product) => {
        const storedCart = getFromLocalStorage("cart");

        const alreadyExists = storedCart.find(item => item.id === product.id);

        if (!alreadyExists) {
            const updatedCart = [...storedCart, product];
            saveToLocalStorage("cart", updatedCart);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            <div className="flex justify-between items-center mb-6">
                <p className="text-lg font-semibold">
                    Wishlist ({wishlist.length})
                </p>

                <button className="border px-4 py-2 rounded hover:bg-black hover:text-white transition">
                    Move All To Bag
                </button>
            </div>

            <div className="grid grid-cols-4 gap-6">
                {wishlist.length > 0 ? (
                    wishlist.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onRemove={handleRemove}
                            onAddToCart={handleAddtoCart}
                        />
                    ))
                ) : (
                    <p>Your wishlist is empty.</p>
                )}
            </div>

        </div>
    );
}