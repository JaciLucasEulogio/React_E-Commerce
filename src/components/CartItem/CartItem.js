const CartItem = ({ id, name, price, quantity, img, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4 flex-grow">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-gray-600">Precio: ${price}</p>
        <p className="text-gray-600">Cantidad: {quantity}</p>
      </div>
      <div className="text-right">
        <button
          className="text-red-500 hover:text-red-600"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
