import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="p-2 flex flex-col items-center justify-center mr-0">
            <div className="flex items-center">
                <button className="px-2 py-1 mr-2 bg-blue-500 text-white" onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className="px-2 py-1 ml-2 bg-blue-500 text-white" onClick={increment}>+</button>
            </div>
            <div>
                <button className="px-4 py-2 mt-2 bg-blue-500 text-white" onClick={() => onAdd(quantity)}disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount