/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Details from './src/scenes/details/Details';
import Home from './src/scenes/home/Home';

export default function App() {
  return (
    <AppContainer />
  );
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);
