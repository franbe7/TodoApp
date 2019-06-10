import React from 'react'
import { Component } from 'react'
import { createAppContainer } from 'react-navigation'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from 'src/reducers'
import { AppNavigator } from './AppNavigator'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

const AppContainer = createAppContainer(AppNavigator)
