const DisplayBottleData = ({ bottle, handlePurchaseBtn }) => {
  const { name, img, price } = bottle;
  return (
    <div>
      <div className="border-2 border-green-500 rounded-lg text-center space-y-2 pb-4">
        <h2 className="text-xl font-semibold pt-2">Bottle: {name}</h2>
        <div className="flex justify-center items-center">
          {" "}
          <img className="w-48 rounded-md" src={img} alt="" />
        </div>
        <p className="font-medium">Price: {`$${price}`}</p>
        <button onClick={() => handlePurchaseBtn(bottle)}>Purchase</button>
      </div>
    </div>
  );
};

export default DisplayBottleData;
