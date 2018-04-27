'use strict'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/root';


export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    applyMiddleware(thunk)
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/root').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}
