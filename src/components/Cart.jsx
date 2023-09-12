const Cart = ({ cart, handleRemoveFromCart }) => {
  const items = cart.map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-2">
        <img className="w-20 my-2" src={item.img} alt="" />
        <div>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
      </div>
    );
  });

  // const handleRemove = (id) => {
  //   const result = cart.filter((l) => l.id !== id);
  //   setCart(result);
  // };

  return (
    <div className="flex justify-center flex-col items-center ">
      <h3 className="font-semibold">Cart: {cart.length}</h3>
      <div>{items}</div>
    </div>
  );
};

export default Cart;
