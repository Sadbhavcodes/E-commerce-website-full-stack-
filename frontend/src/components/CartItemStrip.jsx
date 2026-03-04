import { vector } from "../assets/icons";

export default function CartItemStrip({ product, onRemove }) {
    const totalPrice = product.quantity * product.price;
    
    return (
        <div className="grid grid-cols-5 items-center py-4 border-b text-sm">

            <div className="flex items-center gap-3">
                <button
                    onClick={() => onRemove(product.id)}
                    className="text-red-500 hover:scale-110 transition"
                    aria-label="remove"
                >
                    <img src={vector} alt="remove" className="w-4 h-4" />
                </button>

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-contain"
                />

                <span>{product.name}</span>
            </div>

            <div>${product.price}</div>

            <div>{product.quantity}</div>


            <div className="font-medium">${totalPrice}</div>
        </div>
    );
}