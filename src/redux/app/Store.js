import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from '../slices/CounterSlice';
import {fakestoreApi} from '../api/Api';
import {setupListeners} from '@reduxjs/toolkit/query';

export const Store = configureStore({
  reducer: {
    counter: CounterReducer,
    [fakestoreApi.reducerPath]: fakestoreApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(fakestoreApi.middleware),
});

setupListeners(Store.dispatch);
