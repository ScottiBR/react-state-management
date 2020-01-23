import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { checkout } from "../Actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(({ cart }) => cart);

  const handleCheckout = () => dispatch(checkout());

  const sumTotal = cartList.reduce((sum, { value = 0 }) => (sum += value), 0);
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
