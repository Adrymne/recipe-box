import { createStore } from 'redux';
import rootReducer from './reducers';
import { load, save } from './persistence';

const store = createStore(
  rootReducer,
  load(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => save(store.getState()));

export default store;
