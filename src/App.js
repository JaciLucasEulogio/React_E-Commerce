import { NavBar } from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { CartProvider } from "./components/CartProvider/CartProvider.js";
import Cart from "./components/Cart/Cart.js";
import Checkout from "./components/Checkout/Checkout.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/React_E-Commerce"
              element={<ItemListContainer />}
            />
            <Route
              path="/"
              element={<ItemListContainer />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/item/:itemId"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
            <Route
              path="*"
              element={<h1>404 Not Found</h1>}
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
