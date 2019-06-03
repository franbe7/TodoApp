import React, { Component } from "react";
import { createAppContainer } from "react-navigation";

import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "src/reducers";
import { AppNavigator } from "./AppNavigator";

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const AppContainer = createAppContainer(AppNavigator);
