import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';

const appstore = configureStore({
  reducer: rootReducer, // Your combined reducers
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default appstore;
