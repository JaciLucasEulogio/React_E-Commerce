import { useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoInicial);

  console.log(cart);

  const addItem = (item, quantity) => {
    const itemAgregado = { ...item, quantity };

    const nuevoCarrito = [...cart];
    const estaEnCarrito = nuevoCarrito.find(
      (prod) => prod.id === itemAgregado.id
    );

    if (estaEnCarrito) {
      estaEnCarrito.quantity += quantity;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCart(nuevoCarrito);
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = () => {
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        total,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
