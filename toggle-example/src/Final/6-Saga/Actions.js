export const ActionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  CHECKOUT: "CHECKOUT",
  REQUEST_PRODUCTS: "REQUEST_PRODUCTS"
};

export const addToCart = id => ({
  type: ActionTypes.ADD_TO_CART,
  payload: { id }
});

export const requestProducts = products => ({
  type: ActionTypes.REQUEST_PRODUCTS,
  payload: { products }
});

export const checkout = () => ({
  type: ActionTypes.CHECKOUT
});
