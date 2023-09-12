import { useEffect } from "react";
import { useState } from "react";
import DisplayBottleData from "./DisplayBottleData";
import Cart from "./Cart";
import {
  addToLS,
  getStoredCart,
  removeFromLS,
} from "../utilities/localStorage";

const LoadBottleData = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("../../public/data.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage
  // 1. getcart + condition
  useEffect(() => {
    if (bottles.length > 0) {
      const getCartId = getStoredCart();
      const saveCart = [];
      for (const id of getCartId) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        saveCart.push(bottle);
      }
      setCart(saveCart);
    }
  }, [bottles]);

  const handlePurchaseBtn = (bottle) => {
    const newPurchaseBtn = [...cart, bottle];
    setCart(newPurchaseBtn);
    addToLS(bottle.id);
  };

  // handle remove from cart
  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromLS(id);
  };

  return (
    <div>
      <div className="text-center pt-4">
        <h2 className="text-3xl font-semibold">Memorable Bottle</h2>
        <h3 className="text-2xl font-medium pt-1">
          Bottle Available: {bottles.length}
        </h3>
      </div>
      <div className="text-center">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container m-auto px-10 pt-8">
        {bottles.map((bottle) => (
          <DisplayBottleData
            handlePurchaseBtn={handlePurchaseBtn}
            key={bottle.id}
            bottle={bottle}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadBottleData;
