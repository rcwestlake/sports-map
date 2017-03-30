import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import mapStore from './store/store.js'
import AppContainer from './containers/AppContainer'
import './index.css'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(mapStore, compose(
  applyMiddleware(thunk),
  enhancer
))

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
