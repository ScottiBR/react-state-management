import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../Actions";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector(({ productsList }) => productsList);

  return (
    <div>
      <h3>Products</h3>
      {products &&
        products.map(product => (
          <ProductRow
            key={product.id}
            addToCart={() => dispatch(addToCart(product.id))}
            {...product}
          />
        ))}
    </div>
  );
};

const ProductRow = ({ id, name, value, addToCart }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignContent: "center",
      maxWidth: "220px",
      marginBottom: "5px"
    }}
  >
    <p style={{ margin: 0 }}>
      {name}: R${value}
    </p>
    <button onClick={() => addToCart(id)}>Add to Cart</button>
  </div>
);

export default ProductList;
