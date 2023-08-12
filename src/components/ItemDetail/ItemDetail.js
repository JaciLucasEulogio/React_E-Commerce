import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
const ItemDetail = (prod) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const id = prod.id;
    const name = prod.name;
    const price = prod.price;
    const img = prod.img;
    const item = {
      id,
      name,
      img,
      price,
    };
    addItem(item, quantity);
  };

  return (
    <article className="bg-white rounded-lg shadow-lg p-4 flex items-center">
      <div className="flex-none mr-4">
        <img
          className="w-auto h-80 object-contain"
          src={prod.img}
          alt={prod.name}
        />
      </div>
      <div className="flex-grow text-center">
        <header>
          <h2 className="text-xl font-bold">{prod.name}</h2>
        </header>
        <section className="mt-4">
          <p className="text-gray-700">Category: {prod.category}</p>
          <p className="text-gray-700">Description: {prod.description}</p>
          <p className="text-gray-700">Price: ${prod.price}</p>
        </section>
        <footer className="mt-4">
          {quantityAdded > 0 ? (
            <Link
              to="/cart"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Terminar Compra
            </Link>
          ) : (
            <ItemCount
              stock={prod.stock}
              initial={1}
              onAdd={handleOnAdd}
            />
          )}
        </footer>
      </div>
    </article>
  );
};

export default ItemDetail;
