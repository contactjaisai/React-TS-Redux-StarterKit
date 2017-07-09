import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/Reducers';

const middleware = [ thunk ];

export default function ConfigureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(...middleware),
  );
}
