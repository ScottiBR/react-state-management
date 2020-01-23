import React, { useEffect, useState } from "react";

const App = () => {
  return <Ecommerce />;
};

const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    getProducts();

    async function getProducts() {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/ScottiBR/react-state-management/productList"
        );

        const products = await response.json();

        if (products) setProducts(products);
      } catch (Error) {
        console.log(Error);
      }
    }
  }, []);

  const addToCart = id => {
    const product = products.find(product => product.id === id);

    setCartList(prevState => [...prevState, product]);
  };

  const handleCheckout = () => {
    setCartList([]);
  };

  return (
    <div>
      <h2>Shopping</h2>
      <hr />
      <ProductList products={products} addToCart={addToCart} />
      <hr />
      <Cart cartList={cartList} handleCheckout={handleCheckout} />
    </div>
  );
};

const ProductList = ({ products = [], addToCart }) => {
  return (
    <div>
      <h3>Products</h3>
      {products &&
        products.map(({ id, name, value }) => (
          <ProductRow
            key={id}
            id={id}
            name={name}
            value={value}
            addToCart={addToCart}
          />
        ))}
    </div>
  );
};

const ProductRow = ({ id, name, value, addToCart }) => (
  <div style={{ display: "flex", marginBottom: "10px" }}>
    <span>{name}: </span>
    <span> R${value}</span>
    <button style={{ marginLeft: "15px" }} onClick={() => addToCart(id)}>
      Add to Cart
    </button>
  </div>
);

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

const CartRow = () => {};

export default App;
