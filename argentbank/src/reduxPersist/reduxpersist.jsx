import { persistReducer, persistStore  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/index'; 
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
  
})

export const persistor = persistStore(store)
