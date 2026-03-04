import { bin, cart1 } from "../assets/icons";

export default function ProductCard({ product, onRemove, onAddToCart }) {
  return (
    <div className="border rounded-md p-4 relative hover:shadow-md transition">

      <div className="relative mb-4">
        <button
          onClick={() => onRemove(product.id)}
          className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-red-50"
        >
          <img src={bin} alt="Remove" className="w-4 h-4" />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain"
        />
      </div>
      <button
        onClick={() => onAddToCart(product)} 
        className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded hover:bg-gray-800 transition mb-3"
      >
        <img src={cart1} alt="Cart" className="w-4 h-4" />
        Add To Cart
      </button>
      <div>
        <p className="text-sm font-medium mb-1">
          {product.title}
        </p>

        <p className="text-red-500 font-semibold">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
// on remove we used only product id because we only need that id to remove the whole product
// but on add to cart we used product because we need the whole detail of product to store