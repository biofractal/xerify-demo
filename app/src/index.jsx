import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { stackReduxApp } from '@gp-technical/stack-redux-app'
import App from './App'
import { env, services } from './loader'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

var opts = {
  websocketUrl: env.websocketUrl,
  disableSSO: true,
  devTools: true
}

const store = createStore(services, stackReduxApp(opts))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'))
