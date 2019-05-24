import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Details from "./src/scenes/details/Details";
import { Home } from "./src/scenes/home/Home";
import { NewTask } from './src/scenes/newTask/NewTask';

import { Route } from "src/helpers/Route";

export default function App() {
  return <AppContainer />;
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
