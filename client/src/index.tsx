import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ErrorBoundary from "./Errors/ErrorBoundary"

ReactDOM.render(
  <ErrorBoundary>
    <App/>
  </ErrorBoundary>,
  document.getElementById('root')
)

serviceWorker.unregister()
