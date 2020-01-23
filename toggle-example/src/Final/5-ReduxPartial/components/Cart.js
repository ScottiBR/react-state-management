import React from "react";

const Cart = ({ cartList, handleCheckout }) => {
  const sumTotal = cartList.reduce((sum, { value }) => (sum += value), 0);
  return (
    <div>
      <h3>Cart</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px"
        }}
      >
        {cartList && cartList.map(product => <span>{product.name}</span>)}
      </div>
      <span>Total: {sumTotal} </span>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
