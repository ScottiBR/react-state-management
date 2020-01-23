import React from "react";

const App = () => {
  return (
    <div>
      <h2>Shopping</h2>
      <hr />
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
};

const ProductList = () => {
  return (
    <div>
      <h3>Products</h3>
      <ProductRow name="Bicicleta" value={200} />
    </div>
  );
};

const ProductRow = ({ id, name, value, addToCart }) => (
  <div style={{ display: "flex" }}>
    <span>{name}:</span>
    <span>{value}</span>
    <button style={{ marginLeft: "15px" }} onClick={() => addToCart(id)}>
      Adicionar ao Carrinho
    </button>
  </div>
);
const Cart = () => {
  return <div>Cart</div>;
};

export default App;
