// check getitem local storage --> getStoredCart()
// additem ---> addToLS();
// save ---> saveCartToLS()

// last intregation --> with project
// 1. addToLS get item in project
// 2. show/set items in the project

const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  } else {
    return [];
  }
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveCartToLS(cart);
};

const removeFromLS = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLS(remaining);
};
export { addToLS, getStoredCart, removeFromLS };
