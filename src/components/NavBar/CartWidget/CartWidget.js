import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import cart from "../../../assets/cart.png";

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className={`flex items-center ${totalQuantity > 0 ? "block" : "hidden"}`}
    >
      <img
        src={cart}
        alt="cart-widget"
        className="w-6 h-6 mr-2"
      />
      <span className="text-sm font-medium">{totalQuantity}</span>
    </Link>
  );
};
