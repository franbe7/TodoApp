import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import { Details } from "./src/scenes/details/Details";
import { Home } from "./src/scenes/home/Home";
import { NewTask } from "./src/containers/NewTask";

import { Route } from "src/helpers/Route";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "src/reducers";

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

const AppNavigator = createStackNavigator(
  {
    [Route.Home]: {
      screen: Home
    },
    [Route.Details]: {
      screen: Details
    },
    [Route.NewTask]: {
      screen: NewTask
    }
  },
  {
    initialRouteName: Route.Home
  }
);

const AppContainer = createAppContainer(AppNavigator);
