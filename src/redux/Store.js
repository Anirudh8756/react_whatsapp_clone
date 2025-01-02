import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const appstore = configureStore({
  reducer: rootReducer,
});

export default appstore;
