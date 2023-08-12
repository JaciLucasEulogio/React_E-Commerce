import { createContext} from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
});



