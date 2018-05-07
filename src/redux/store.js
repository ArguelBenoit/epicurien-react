import { createStore } from 'redux';
import reducers from './reducers';
import initState from './initState';


export const store = createStore(
  reducers,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
