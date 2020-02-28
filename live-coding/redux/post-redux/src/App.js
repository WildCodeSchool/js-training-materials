import React, { Component } from "react";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

//store.dispatch({ type: "INCREMENT" });

export default App;
