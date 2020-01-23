import React from "react";

const ProductList = ({ products = [], addToCart }) => {
  return (
    <div>
      <h3>Products</h3>
      {products &&
        products.map(product => (
          <ProductRow key={product.id} addToCart={addToCart} {...product} />
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
