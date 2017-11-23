import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// Store
const store = createStore(reducer);

// Reducer
function reducer(state = { text: "", photos: [] }, action) {
  const count = state.count
  switch (action.type) {
    case 'update':
      return {
        text: action.text,
        photos: [...action.photos]
      }
    case 'waitting':
      return { text: 'Waitting for API response ... ', photos: []}
    default:
      return state
  }
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
