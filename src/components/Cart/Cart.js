import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total, removeItem } =
    useContext(CartContext);

  return (
    <div className="container mx-auto py-8">
      {totalQuantity === 0 ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">
            No hay productos en el carrito
          </h1>
          <Link
            to="/"
            className="text-blue-500 hover:underline"
          >
            Productos
          </Link>
        </div>
      ) : (
        <div>
          console.log(cart)
          {cart.map((p) => (
            <CartItem
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              quantity={p.quantity}
              img={p.img}
              onDelete={() => removeItem(p.id)}
            />
          ))}
          <h3 className="text-xl font-semibold mb-2">Total: ${total()}</h3>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={() => clearCart()}
          >
            Vaciar carrito
          </button>
          <Link
            to="/checkout"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
