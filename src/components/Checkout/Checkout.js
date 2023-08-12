import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js";

const Checkout = () => {
  const [orderId, setOrderId] = React.useState("");
  const { cart, clearCart, total } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const order = {
      buyer: data,
      items: cart,
      date: new Date(),
      total: total(),
    };
    console.log(order);

    const orders = collection(db, "orders");
    addDoc(orders, order).then((docRef) => {
      setOrderId(docRef.id);
      clearCart();
    });
  };

  if (orderId) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Order ID: {orderId}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
    bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            {...register("phone", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Phone"
          />
          {errors.phone && <span>This field is required</span>}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Buy
        </button>
      </form>
    </div>
  );
};

export default Checkout;
