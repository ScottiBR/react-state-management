import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import Ecommerce from "./container/Ecommerce";
import Reducer from "./Reducer";
import Saga from "./Saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(Reducer, enhancer);
sagaMiddleware.run(Saga);

const App = () => {
  return (
    <Provider store={store}>
      <Ecommerce />
    </Provider>
  );
};

export default App;
