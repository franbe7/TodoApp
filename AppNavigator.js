import { createStackNavigator } from 'react-navigation';

import { Details } from "./src/scenes/details/Details";
import { Home } from "./src/scenes/home/Home";
import { NewTask } from "./src/containers/NewTask";

import { Route } from "src/helpers/Route";

export const AppNavigator = createStackNavigator(
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
