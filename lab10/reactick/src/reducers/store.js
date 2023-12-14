import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from '@reduxjs/toolkit';

import cartSlice from './cartSlice';

const persistConfig = {
  key: 'root', 
  storage, 
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    cart: cartSlice,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
