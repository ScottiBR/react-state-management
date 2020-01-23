import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Ecommerce from "./container/Ecommerce";
import Reducer from "./Reducer";

const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <Ecommerce />
    </Provider>
  );
};

export default App;
