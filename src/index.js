// React Stuff
import React from 'react'
import ReactDOM from 'react-dom'

// Add app styles
import './assets/css/index.css'

// Components
import App from './components/app/App'

// Service worker / workers
import registerServiceWorker from './service-workers/registerServiceWorker'

// Redux stuff
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'

// Create Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Render app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// Register service worker
registerServiceWorker()