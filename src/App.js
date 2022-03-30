import { Component } from "react";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import logger from "redux-logger";
import Info from "./Info";
import thunk from "redux-thunk";
import UserAgent from "./UserAgent";

const store = createStore(reducer, applyMiddleware(thunk, logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <UserAgent />
          <Info />
        </div>
      </Provider>
    );
  }
}

export default App;
